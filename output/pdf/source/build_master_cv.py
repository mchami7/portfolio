from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph


ROOT = Path('/Users/tencent_go/Projects/Mira-Portfolio-Website')
OUTPUT = ROOT / 'output/pdf/Mira_Chami_CV_Master.pdf'
FONT_DIR = Path('/System/Library/Fonts/Supplemental')
for name, filename in [('Arial', 'Arial.ttf'), ('Arial-Bold', 'Arial Bold.ttf'), ('Arial-Italic', 'Arial Italic.ttf')]:
    pdfmetrics.registerFont(TTFont(name, str(FONT_DIR / filename)))
pdfmetrics.registerFontFamily('Arial', normal='Arial', bold='Arial-Bold', italic='Arial-Italic')

WIDTH, HEIGHT = A4
LEFT, BODY, RIGHT = 44, 44, WIDTH - 44
BODY_WIDTH = RIGHT - BODY
NAVY = colors.HexColor('#213D55')
CHARCOAL = colors.HexColor('#24282C')
GREY = colors.HexColor('#626970')
STYLE = ParagraphStyle('body', fontName='Arial', fontSize=10, leading=12.5, textColor=CHARCOAL)
LABEL_STYLE = ParagraphStyle('label', parent=STYLE, fontName='Arial-Bold', fontSize=9.5, leading=12, textColor=NAVY)
TITLE_STYLE = ParagraphStyle('title', parent=STYLE, fontName='Arial-Bold')
COMPANY_STYLE = ParagraphStyle('company', parent=TITLE_STYLE, fontSize=12.5, leading=15)
SECONDARY_STYLE = ParagraphStyle('secondary', parent=STYLE, fontSize=9, textColor=GREY, alignment=2)
CONTACT_STYLE = ParagraphStyle('contact', parent=STYLE, fontSize=9.25, leading=12, textColor=GREY)
FOOTER_STYLE = ParagraphStyle('footer', parent=STYLE, fontSize=8.5, leading=11, textColor=GREY)

TENCENT = [
    'Designed and implemented server-authoritative multiplayer architecture with dedicated and listen servers, gameplay replication, session management, and multi-client testing.',
    'Built player progression and persistence systems, including profiles, inventory, in-game economy, and loadouts.',
    'Developed reusable gameplay systems, user interfaces, and Godot editor tools for designers to configure and test gameplay events.',
    'Owned technical evaluation and architecture for a cross-platform AI gaming companion using Tauri, Rust, React, and TypeScript, including desktop integration and automated Windows/macOS builds and packaging.',
    'Integrated online-service SDKs into Unreal Engine 5, including authentication, matchmaking, lobbies, achievements, and inventory; supported PC/PlayStation testing and partner integration.',
    'Prototyped and evaluated generative AI features for content generation and interactive character dialogue, including model integration, response validation, and automated testing.',
]
VGS = [
    'Implemented gameplay systems and user interfaces in Unity using C#, supporting game prototyping and release.',
    'Integrated PlayFab, third-party plugins, and backend services into game projects.',
    'Supported recruitment and onboarding through technical interviews, code reviews, and task guidance for new recruits.',
    'Helped plan and track development tasks using Jira and Trello within Agile workflows.',
    'Contributed to game design documents and maintained technical documentation for game systems and software architecture.',
]
SKILLS = [
    ('Coding', 'C/C++, C#, Python, Java, Rust, TypeScript/JavaScript, GDScript'),
    ('Engines &amp; Frameworks', 'Unreal Engine (C++/Blueprints), Unity, Godot, React, Tauri, Node.js, Express, Three.js, PixiJS'),
    ('Systems', 'Gameplay Systems, Server-Authoritative Multiplayer, Online-Service Integration, Designer Tooling, Event-Driven Architecture, Generative AI / LLM Integration'),
    ('Platforms &amp; Services', 'Steamworks, PlayFab, gRPC/Protobuf, PlayStation Development, Desktop Integration'),
    ('Engineering', 'Git, Perforce, Automated Testing, Build &amp; Release Tooling, Code Review, Technical Documentation, Agile Development'),
]

OUTPUT.parent.mkdir(parents=True, exist_ok=True)
c = canvas.Canvas(str(OUTPUT), pagesize=A4)
c.setTitle('Mira Chami - Software Engineer CV')
c.setAuthor('Mira Chami')


def paragraph(text, x, top, width, style=STYLE):
    p = Paragraph(text, style)
    _, height = p.wrap(width, HEIGHT)
    p.drawOn(c, x, HEIGHT - top - height)
    return height


def separator(top):
    c.setStrokeColor(colors.HexColor('#CDD5DD'))
    c.setLineWidth(0.55)
    c.line(LEFT, HEIGHT - top, RIGHT, HEIGHT - top)


def section(label, top):
    height = paragraph(label, BODY, top, BODY_WIDTH, LABEL_STYLE)
    label_width = pdfmetrics.stringWidth(label, 'Arial-Bold', LABEL_STYLE.fontSize)
    c.setStrokeColor(colors.HexColor('#CDD5DD'))
    c.setLineWidth(0.55)
    c.line(BODY + label_width + 13, HEIGHT - top - 6, RIGHT, HEIGHT - top - 6)
    return top + height + 6


def bullet(text, top):
    c.setFillColor(NAVY)
    c.setFont('Arial', 10)
    c.drawString(BODY + 3, HEIGHT - top - 9.5, '\u2022')
    return paragraph(escape(text), BODY + 13, top, BODY_WIDTH - 13) + 3


def role(title, employer, top):
    company, location = employer.split(' | ', 1)
    name, dates = title.split(' | ', 1)
    paragraph(escape(location), RIGHT - 90, top + 3, 90, SECONDARY_STYLE)
    top += paragraph(escape(company), BODY, top, BODY_WIDTH - 100, COMPANY_STYLE) + 2
    paragraph(escape(dates), RIGHT - 132, top, 132, SECONDARY_STYLE)
    top += paragraph(escape(name), BODY, top, BODY_WIDTH - 142) + 5
    return top


def institution(name, dates, top):
    paragraph(escape(dates), RIGHT - 85, top, 85, SECONDARY_STYLE)
    return paragraph(escape(name), BODY, top, BODY_WIDTH - 95, TITLE_STYLE)


# Full-width editorial layout; approved experience text remains unchanged.
name_style = ParagraphStyle('name', parent=STYLE, fontName='Arial-Bold', fontSize=29, leading=33, textColor=NAVY)
tagline_style = ParagraphStyle('tagline', parent=STYLE, fontSize=12.5, leading=16)
portfolio_style = ParagraphStyle('portfolio', parent=CONTACT_STYLE, alignment=2, textColor=NAVY, fontName='Arial-Bold', fontSize=10)
paragraph('Mira Chami', LEFT, 26, BODY_WIDTH, name_style)
paragraph('Software Engineer', LEFT, 60, BODY_WIDTH, tagline_style)
paragraph('London, UK. &nbsp; | &nbsp; +44-7495468016 &nbsp; | &nbsp; <link href="mailto:miranchami@gmail.com">miranchami@gmail.com</link>', LEFT, 80, BODY_WIDTH, CONTACT_STYLE)
paragraph('<link href="https://mirachami.dev/">https://mirachami.dev/</link>', RIGHT - 150, 63, 150, portfolio_style)
separator(96)

top = section('PROFESSIONAL EXPERIENCE', 107)
top = role('Game Tech R&D Engineer | Nov 2023 - Present', 'Tencent | London, UK', top)
top += paragraph('Developed gameplay and multiplayer systems, integrated online services and generative AI, and built development tools and cross-platform applications across confidential R&amp;D projects.', BODY, top, BODY_WIDTH) + 5
for text in TENCENT:
    top += bullet(text, top)
top += 11
top = role('Game Programmer | June 2020 - Aug 2022', 'The Video Games Studio (VGS) | Beirut, Lebanon', top)
top += paragraph('Developed and released Unity games, including gameplay systems, UI, and backend integration, while supporting new recruits and coordinating development tasks in a startup team.', BODY, top, BODY_WIDTH) + 5
for text in VGS:
    top += bullet(text, top)

top = section('EDUCATION', top + 11)
top += institution('Kingston University London', '2022 - 2023', top) + 1
top += paragraph('Master of Science in Games Development (Programming)', BODY, top, BODY_WIDTH) + 4
top += institution('American University of Beirut (AUB)', '', top) + 1
paragraph('2017 - 2021', RIGHT - 85, top, 85, SECONDARY_STYLE)
top += paragraph('Bachelor of Science in Computer Sciences', BODY, top, BODY_WIDTH - 95)
paragraph('2016 - 2020', RIGHT - 85, top, 85, SECONDARY_STYLE)
top += paragraph('Bachelor of Arts in Economics', BODY, top, BODY_WIDTH - 95)

top = section('TECHNICAL SKILLS', top + 9)
for label, text in SKILLS:
    top += paragraph(f'<b>{label}:</b> {text}', BODY, top, BODY_WIDTH) + 2

top += 6
separator(top)
top += 8
top += paragraph('<b>Languages:</b> English (Native) &nbsp;·&nbsp; French (Native) &nbsp;·&nbsp; Arabic (Native)', BODY, top, BODY_WIDTH, FOOTER_STYLE) + 3
top += paragraph('<b>Favourite games:</b> Clair Obscur: Expedition 33 &nbsp;·&nbsp; Celeste &nbsp;·&nbsp; Split Fiction &nbsp;·&nbsp; The Last of Us', BODY, top, BODY_WIDTH, FOOTER_STYLE)
if top > HEIGHT - 30:
    raise ValueError(f'Content ends at {top:.1f}; exceeds bottom margin {HEIGHT - 30:.1f}')
c.showPage()
c.save()
print(f'Saved {OUTPUT}; content ends at {top:.1f}pt with {HEIGHT - top:.1f}pt bottom margin.')
