"""Build four targeted two-page CVs from a complete verified fact catalogue."""

from dataclasses import dataclass
from hashlib import sha256
from io import BytesIO
from pathlib import Path
import re
from shutil import copyfile
from xml.sax.saxutils import escape

import pypdfium2 as pdfium
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph

from cv_content import CONTENT
from cv_presentations import PRESENTATIONS, SKILLS, TOOLKIT, TOOLKIT_ORDER

ROOT = Path(__file__).resolve().parents[3]
OUTPUT = ROOT / 'output/pdf'
FONT_DIR = Path('/System/Library/Fonts/Supplemental')
for font_name, filename in (
    ('Arial', 'Arial.ttf'), ('Arial-Bold', 'Arial Bold.ttf'),
    ('Arial-Italic', 'Arial Italic.ttf'),
):
    if font_name not in pdfmetrics.getRegisteredFontNames():
        pdfmetrics.registerFont(TTFont(font_name, str(FONT_DIR / filename)))
pdfmetrics.registerFontFamily(
    'Arial', normal='Arial', bold='Arial-Bold', italic='Arial-Italic'
)

WIDTH, HEIGHT = A4
NAVY = colors.HexColor('#245C68')
CHARCOAL = colors.HexColor('#202D36')
GREY = colors.HexColor('#657078')
RULE = colors.HexColor('#D9E4E4')
PALE = colors.HexColor('#F0F5F5')


@dataclass(frozen=True)
class CVSpec:
    """Role presentation and priorities; experience always comes from CONTENT."""

    audience: str
    title: str
    intro: str
    filename: str
    detail_groups: tuple[str, ...]
    priorities: dict[str, tuple[str, ...]]


SPECS = {
    'software': CVSpec(
        audience='software',
        title='Software Engineer',
        intro='Software engineer building desktop applications, game systems and applied AI tools, with ownership of React application architecture, Rust/native integration, cross-platform delivery and automated validation.',
        detail_groups=('desktop', 'investigation', 'integration', 'collaboration', 'companion_map', 'sudoku'),
        filename='Mira_Chami_CV_Software_Engineer.pdf',
        priorities={
            'tencent': (
                'desktop_architecture', 'desktop_migration', 'desktop_native',
                'desktop_windows', 'desktop_delivery', 'reliability',
                'online_services', 'multiplayer', 'platforms',
            ),
            'vgs': ('integration', 'runner', 'puzzle', 'adventure', 'collaboration'),
            'projects': ('companion_map', 'sudoku', 'arena', 'portals'),
            'skills': ('languages', 'desktop', 'services', 'engineering'),
        },
    ),
    'gameplay': CVSpec(
        audience='gameplay',
        title='Gameplay Programmer',
        intro='Gameplay programmer building UE5 and Unity systems, with experience in multiplayer architecture, cooperative runs, progression, online services, UI and designer tools.',
        detail_groups=('unreal', 'coop', 'runner', 'adventure', 'arena', 'portals'),
        filename='Mira_Chami_CV_Gameplay_Programmer.pdf',
        priorities={
            'tencent': (
                'unreal_matches', 'multiplayer', 'run_systems',
                'online_services', 'platforms', 'timeline_tools', 'director_actions',
                'board_ui',
            ),
            'vgs': ('adventure', 'puzzle', 'runner', 'integration', 'collaboration'),
            'projects': ('arena', 'portals', 'companion_map', 'sudoku'),
            'skills': ('engines', 'gameplay', 'networking', 'languages'),
        },
    ),
    'ui': CVSpec(
        audience='ui',
        title='UI Programmer',
        intro='UI programmer owning game and desktop interfaces, spanning investigation tools, multiplayer flows, React multi-window applications, native integration and automated testing.',
        detail_groups=('investigation', 'desktop', 'integration', 'puzzle', 'companion_map', 'portals'),
        filename='Mira_Chami_CV_UI_Programmer.pdf',
        priorities={
            'tencent': (
                'board_ui', 'desktop_windows', 'desktop_native',
                'desktop_architecture', 'reliability', 'unreal_matches',
                'online_services', 'timeline_tools',
            ),
            'vgs': ('puzzle', 'integration', 'adventure', 'runner', 'collaboration'),
            'projects': ('companion_map', 'portals', 'sudoku', 'arena'),
            'skills': ('desktop', 'engines', 'services', 'gameplay', 'languages'),
        },
    ),
    'ai': CVSpec(
        audience='ai',
        title='Applied AI Engineer',
        intro='Applied AI engineer building grounded LLM workflows, contextual dialogue and interactive applications, with structured outputs, source attribution, response verification and reliable client/service integration.',
        detail_groups=('investigation', 'integration', 'collaboration', 'sudoku'),
        filename='Mira_Chami_CV_AI_Engineer.pdf',
        priorities={
            'tencent': (
                'research_pipeline', 'grounded_outputs', 'character_dialogue',
                'reliability', 'director_actions', 'desktop_architecture',
                'desktop_migration', 'board_ui',
            ),
            'vgs': ('integration', 'puzzle', 'runner', 'adventure', 'collaboration'),
            'projects': ('sudoku', 'companion_map', 'arena', 'portals'),
            'skills': ('ai', 'services', 'languages', 'desktop', 'engineering'),
        },
    ),
}


def ordered_items(spec: CVSpec, section: str) -> list:
    """Move priority entries first and automatically retain every remaining entry."""
    catalogue = CONTENT[section]
    priority = spec.priorities.get(section, ())
    if len(priority) != len(set(priority)) or set(priority) - catalogue.keys():
        raise ValueError(f'{spec.title}: invalid {section} priorities')
    keys = (*priority, *(key for key in catalogue if key not in priority))
    return [(key, catalogue[key]) for key in keys]


def presentation_items(spec: CVSpec, section: str) -> list:
    """Select role-relevant detail and order groups without dropping source facts."""
    groups = PRESENTATIONS[section]
    covered = [key for group in groups.values() for key in group['covers']]
    if len(covered) != len(set(covered)) or set(covered) != CONTENT[section].keys():
        raise ValueError(f'{section}: presentation groups must cover every fact exactly once')
    rank = {key: index for index, (key, _) in enumerate(ordered_items(spec, section))}
    ordered = sorted(groups.items(), key=lambda item: min(rank[key] for key in item[1]['covers']))
    items = []
    for key, group in ordered:
        copy = group['detail' if key in spec.detail_groups else 'summary']
        if isinstance(copy, dict):
            copy = copy.get(spec.audience, copy['default'])
        items.append((key, copy))
    return items


def skill_items(spec: CVSpec) -> list:
    """Return the six compact toolkit blocks in audience-specific order."""
    if SKILLS.keys() != CONTENT['skills'].keys():
        raise ValueError('Every source skill area must remain in the catalogue')
    priority = TOOLKIT_ORDER[spec.audience]
    if len(priority) != len(set(priority)) or set(priority) != TOOLKIT.keys():
        raise ValueError('Every visual toolkit block must appear exactly once')
    return [(key, TOOLKIT[key]) for key in priority]


def validate_copy(spec: CVSpec) -> None:
    """Validate priorities and confidentiality before writing any output."""
    if set(spec.priorities) - CONTENT.keys():
        raise ValueError(f'{spec.title}: unknown priority section')
    check_source = (ROOT / 'scripts/check-public-copy.mjs').read_text()
    forbidden = set(re.findall(r'[0-9a-f]{64}', check_source))
    valid_groups = {key for groups in PRESENTATIONS.values() for key in groups}
    if set(spec.detail_groups) - valid_groups:
        raise ValueError('Unknown detail group')
    parts = [spec.title, spec.intro]
    parts.extend(group['heading'] for group in PRESENTATIONS['tencent'].values())
    parts.extend(group['technologies'] for group in PRESENTATIONS['tencent'].values())
    for section in CONTENT:
        for _, value in ordered_items(spec, section):
            parts.append(': '.join(value) if section == 'skills' else value)
        if section in PRESENTATIONS:
            parts.extend(bullet for _, group in presentation_items(spec, section) for bullet in group)
    parts.extend(': '.join(value) for _, value in skill_items(spec))
    for token in re.findall(r'[A-Za-z][A-Za-z0-9_.-]*', ' '.join(parts)):
        if any(sha256(value.encode()).hexdigest() in forbidden for value in (token, token.lower())):
            raise ValueError('A confidential identifier was found in CV copy')


def render_cv(spec: CVSpec) -> bytes:
    """Render approved design A: project bands, skill blocks, Miscellaneous."""
    buffer = BytesIO()
    c = canvas.Canvas(buffer, pagesize=A4, invariant=1)
    c.setTitle(f'Mira Chami - {spec.title} CV')
    c.setAuthor('Mira Chami')
    c.setSubject('Professional experience and a role-focused technical toolkit')
    left, right = 32, WIDTH - 32
    width = right - left
    body = ParagraphStyle('body', fontName='Arial', fontSize=11, leading=14, textColor=CHARCOAL)
    label = ParagraphStyle('label', parent=body, fontName='Arial-Bold', fontSize=10.5, leading=14, textColor=NAVY)
    project_title = ParagraphStyle('project', parent=body, fontName='Arial-Bold', fontSize=11.5, leading=15)
    company = ParagraphStyle('company', parent=body, fontName='Arial-Bold', fontSize=13, leading=17)
    meta = ParagraphStyle('meta', parent=body, fontSize=10.5, leading=14, textColor=GREY)
    skills = ParagraphStyle('skills', parent=body, fontSize=10.5, leading=14)
    toolkit_label = ParagraphStyle('toolkit-label', parent=label, fontSize=9.5, leading=12)
    heading = ParagraphStyle('name', parent=company, fontSize=28, leading=33)
    page_number = 1

    def paragraph(text, top, style=body, x=left, available=width):
        p = Paragraph(text, style)
        _, height = p.wrap(available, HEIGHT)
        if top + height > HEIGHT - 52:
            raise ValueError(f'{spec.title} page {page_number}: overflow at {top + height:.1f}pt')
        p.drawOn(c, x, HEIGHT - top - height)
        return top + height

    def rect(x, top, w, h, colour):
        c.setFillColor(colour)
        c.rect(x, HEIGHT - top - h, w, h, fill=1, stroke=0)

    def section(text, top):
        paragraph(escape(text), top, label)
        rect(left, top + 19, width, 0.6, RULE)
        return top + 28

    def bullet(text, top):
        paragraph('•', top, x=left, available=8, style=ParagraphStyle('dot', parent=body, textColor=NAVY))
        return paragraph(escape(text), top, x=left + 12, available=width - 12) + 4

    def role(employer, location, title, dates, top):
        paragraph(escape(employer), top, company, available=width - 145)
        paragraph(escape(dates), top + 1, ParagraphStyle('dates', parent=meta, alignment=2),
                  x=right - 145, available=145)
        return paragraph(f'{escape(title)} · {escape(location)}', top + 20, meta) + 12

    def footer():
        c.setFont('Arial', 9)
        c.setFillColor(GREY)
        c.drawString(left, 25, 'Mira Chami | ' + spec.title)
        c.drawRightString(right, 25, f'{page_number} / 2')

    rect(left, 25, 30, 3, NAVY)
    paragraph('Mira Chami', 36, heading)
    paragraph(escape(spec.title), 74, ParagraphStyle('title', parent=body, fontSize=13, leading=17))
    paragraph('London, UK · +44-7495468016 · '
              '<link href="mailto:miranchami@gmail.com">miranchami@gmail.com</link> · '
              '<link href="https://mirachami.dev/">mirachami.dev</link>', 99,
              ParagraphStyle('contact', parent=meta, fontSize=10, leading=13))
    top = paragraph(escape(spec.intro), 120) + 12
    top = section('PROFESSIONAL EXPERIENCE', top)
    top = role('Tencent', 'London, UK', 'Game Tech R&D Engineer', 'Nov 2023 - Present', top)
    for key, group in presentation_items(spec, 'tencent'):
        project = PRESENTATIONS['tencent'][key]
        rect(left, top, width, 24, PALE)
        rect(left, top, 2, 24, NAVY)
        title = escape(project['heading'])
        if project.get('url'):
            title = f'<link href="{escape(project["url"])}">{title}</link>'
        tech_width = pdfmetrics.stringWidth(project['technologies'], 'Arial', 10.5)
        title_end = paragraph(title, top + 4, project_title, x=left + 10, available=width - tech_width - 30)
        if title_end > top + 24:
            raise ValueError(f'{spec.title}: project title does not fit its band')
        paragraph(escape(project['technologies']), top + 4,
                  ParagraphStyle('tech', parent=meta, alignment=2),
                  x=right - tech_width - 10, available=tech_width + 0.1)
        top += 31
        for text in group:
            top = bullet(text, top)
        top += 5
    footer()
    c.showPage()

    page_number = 2
    rect(left, 28, 30, 3, NAVY)
    paragraph('Mira Chami', 41, ParagraphStyle('continued-name', parent=company, fontSize=21, leading=25))
    paragraph(f'{escape(spec.title)} · London, UK · '
              '<link href="https://mirachami.dev/">mirachami.dev</link>', 72, meta)
    top = section('PROFESSIONAL EXPERIENCE (CONTINUED)', 108)
    top = role('The Video Games Studio (VGS)', 'Beirut, Lebanon', 'Game Programmer', 'June 2020 - Aug 2022', top)
    for _, group in presentation_items(spec, 'vgs'):
        for text in group:
            top = bullet(text, top)

    top = section('TECHNICAL TOOLKIT', top + 18)
    gap, cell_height, row_gap = 12, 60, 8
    cell_width = (width - gap) / 2
    for index, (_, (title, value)) in enumerate(skill_items(spec)):
        x = left + (index % 2) * (cell_width + gap)
        y = top + (index // 2) * (cell_height + row_gap)
        rect(x, y, cell_width, cell_height, PALE)
        rect(x, y, 2, cell_height, NAVY)
        paragraph(escape(title), y + 8, toolkit_label, x=x + 11, available=cell_width - 22)
        end = paragraph(escape(value).replace('\n', '<br/>'), y + 24, skills, x=x + 11, available=cell_width - 22)
        if end > y + cell_height - 5:
            raise ValueError(f'{spec.title}: toolkit block overflow: {title}')
    top += 3 * cell_height + 2 * row_gap

    top = section('EDUCATION', top + 18)
    for text in (
        '<b>MSc Games Development (Programming)</b> · Kingston University London · 2022 - 2023',
        '<b>BSc Computer Sciences</b> · American University of Beirut · 2017 - 2021',
        '<b>BA Economics</b> · American University of Beirut · 2016 - 2020',
    ):
        top = paragraph(text, top, skills) + 3
    top = section('MISCELLANEOUS', top + 18)
    top = paragraph('<b>Languages:</b> English (Native) · French (Native) · Arabic (Native)', top, skills) + 5
    paragraph('<b>Favourite games:</b> Clair Obscur: Expedition 33 · Celeste · Split Fiction · The Last of Us · Outer Wilds', top, skills)
    footer()
    c.showPage()
    c.save()
    return buffer.getvalue()


def build_variant(name: str) -> None:
    """Write a complete CV and all pages of its review/website preview."""
    spec = SPECS[name]
    validate_copy(spec)
    data = render_cv(spec)
    review_dir = ROOT / 'tmp/pdfs/ownership-review'
    review_dir.mkdir(parents=True, exist_ok=True)
    with pdfium.PdfDocument(data) as pdf:
        page_count = len(pdf)
        if page_count != 2:
            raise ValueError(f'{name}: expected exactly two A4 pages')
        for index in range(page_count):
            page = pdf[index]
            bitmap = page.render(scale=2)
            bitmap.to_pil().save(review_dir / f'{name}-page-{index + 1}.png')
            bitmap.close()
            page.close()
    (review_dir / f'{name}.png').unlink(missing_ok=True)
    (review_dir / f'{name}-contact-sheet.png').unlink(missing_ok=True)
    for path in review_dir.glob(f'{name}-page-*.png'):
        if int(path.stem.rsplit('-', 1)[1]) > page_count:
            path.unlink()
    OUTPUT.mkdir(parents=True, exist_ok=True)
    (OUTPUT / spec.filename).write_bytes(data)
    if name == 'software':
        public = ROOT / 'public'
        (public / 'Mira_Chami_CV.pdf').write_bytes(data)
        preview = public / 'cv-preview'
        preview.mkdir(parents=True, exist_ok=True)
        paths = []
        for number in range(1, page_count + 1):
            filename = f'cv-page-{number}.png'
            copyfile(review_dir / f'software-page-{number}.png', preview / filename)
            paths.append(f'/cv-preview/{filename}')
        for path in preview.glob('cv-page-*.png'):
            if int(path.stem.rsplit('-', 1)[1]) > page_count:
                path.unlink()
        metadata = ('// Generated by output/pdf/source/build_cvs.py.\n'
                    'export const cvPreviewPages = [\n'
                    + ''.join(f"  '{path}',\n" for path in paths)
                    + '] as const\n')
        (ROOT / 'src/data/cvPreview.ts').write_text(metadata)
    print(f'{name}: two A4 pages, 11pt experience; design A, all professional experience retained')


if __name__ == '__main__':
    for variant in SPECS:
        build_variant(variant)
