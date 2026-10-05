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
OUTPUT = ROOT / 'output/pdf/Mira_Chami_CV_Revised.pdf'
FONT_DIR = Path('/System/Library/Fonts/Supplemental')
for name, filename in [('Arial', 'Arial.ttf'), ('Arial-Bold', 'Arial Bold.ttf'), ('Arial-Italic', 'Arial Italic.ttf')]:
    pdfmetrics.registerFont(TTFont(name, str(FONT_DIR / filename)))
pdfmetrics.registerFontFamily('Arial', normal='Arial', bold='Arial-Bold', italic='Arial-Italic')

WIDTH, HEIGHT = A4
LEFT, BODY, RIGHT = 34, 125, WIDTH - 34
BODY_WIDTH = RIGHT - BODY
STYLE = ParagraphStyle('body', fontName='Arial', fontSize=10, leading=12, textColor=colors.black)
LABEL_STYLE = ParagraphStyle('label', parent=STYLE, fontName='Arial-Bold', fontSize=9, leading=12)
TITLE_STYLE = ParagraphStyle('title', parent=STYLE, fontName='Arial-Bold')
COMPANY_STYLE = ParagraphStyle('company', parent=TITLE_STYLE, fontSize=11.5, leading=14)
SECONDARY_STYLE = ParagraphStyle('secondary', parent=STYLE, fontSize=9.5, textColor=colors.HexColor('#505050'), alignment=2)

TENCENT = [
    'Designed and implemented server-authoritative multiplayer architecture with dedicated and listen servers, gameplay replication, session management, and multi-client testing.',
    'Built player progression and persistence systems, including profiles, inventory, in-game economy, and loadouts.',
    'Developed reusable gameplay systems, user interfaces, and Godot editor tools for designers to configure and test gameplay events.',
    'Owned technical evaluation and architecture for a cross-platform AI companion using Tauri, Rust, React, and TypeScript, including desktop integration and automated Windows/macOS builds and packaging.',
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
    ('CODING', 'C/C++, C#, Python, Java, Rust, TypeScript/JavaScript, GDScript'),
    ('ENGINES &amp;<br/>FRAMEWORKS', 'Unreal Engine, Unity, Godot, React, Tauri, Three.js, PixiJS'),
    ('SYSTEMS', 'Gameplay Systems, Server-Authoritative Multiplayer, Online-Service Integration, Designer Tooling, Event-Driven Architecture, Generative AI Integration'),
    ('PLATFORM &amp;<br/>SERVICES', 'Steamworks, PlayFab, gRPC, Desktop Integration, Build &amp; Release Tooling'),
    ('PRODUCTION', 'Git, Perforce, Code Review, Technical Documentation, Agile Development'),
]

OUTPUT.parent.mkdir(parents=True, exist_ok=True)
c = canvas.Canvas(str(OUTPUT), pagesize=A4)
c.setTitle('Mira Chami - Gameplay & Systems Engineer CV')
c.setAuthor('Mira Chami')


def paragraph(text, x, top, width, style=STYLE):
    p = Paragraph(text, style)
    _, height = p.wrap(width, HEIGHT)
    p.drawOn(c, x, HEIGHT - top - height)
    return height


def separator(top):
    c.setStrokeColor(colors.black)
    c.setLineWidth(0.65)
    c.line(BODY - 12, HEIGHT - top, RIGHT, HEIGHT - top)


def bullet(text, top):
    c.setFillColor(colors.black)
    c.setFont('Arial', 10)
    c.drawString(BODY + 3, HEIGHT - top - 9.5, '\u2022')
    return paragraph(escape(text), BODY + 14, top, BODY_WIDTH - 14) + 3


def role(title, employer, top):
    company, location = employer.split(' | ', 1)
    name, dates = title.split(' | ', 1)
    paragraph(escape(location), RIGHT - 90, top + 2, 90, SECONDARY_STYLE)
    top += paragraph(escape(company), BODY, top, BODY_WIDTH - 100, COMPANY_STYLE) + 3
    paragraph(escape(dates), RIGHT - 132, top, 132, SECONDARY_STYLE)
    top += paragraph(escape(name), BODY, top, BODY_WIDTH - 142) + 6
    return top


def institution(name, dates, top):
    paragraph(escape(dates), RIGHT - 85, top, 85, SECONDARY_STYLE)
    return paragraph(escape(name), BODY, top, BODY_WIDTH - 95, TITLE_STYLE)


# Keep the original CV's monochrome layout, section labels, and contact details.
c.setFont('Arial-Bold', 23)
c.drawString(LEFT, HEIGHT - 49, 'Mira Chami')
c.setFont('Arial', 15)
c.drawRightString(RIGHT, HEIGHT - 48, 'Gameplay & Systems Engineer')
paragraph('CONTACT', LEFT, 65, 86, LABEL_STYLE)
paragraph('<b>Phone:</b> +44-7495468016', BODY, 65, 220)
paragraph('<b>Email:</b> <link href="mailto:miranchami@gmail.com">miranchami@gmail.com</link>', BODY, 80, 240)
right_contact = ParagraphStyle('right-contact', parent=STYLE, alignment=2)
paragraph('<b>Location:</b> London, UK.', BODY, 65, BODY_WIDTH, right_contact)
paragraph('<b>Portfolio:</b> <link href="https://mirachami.dev/"><u>https://mirachami.dev/</u></link>', BODY, 80, BODY_WIDTH, right_contact)
separator(107)

top = 118
paragraph('PROFESSIONAL<br/>EXPERIENCE', LEFT, top, 87, LABEL_STYLE)
top = role('Game Tech R&D Engineer | Nov 2023 - Present', 'Tencent | London, UK', top)
top += paragraph('Developed gameplay and multiplayer systems, integrated online services and generative AI, and built development tools and cross-platform applications across confidential R&amp;D projects.', BODY, top, BODY_WIDTH) + 7
for text in TENCENT:
    top += bullet(text, top)
top += 12
top = role('Game Programmer | June 2020 - Aug 2022', 'The Video Games Studio (VGS) | Beirut, Lebanon', top)
top += paragraph('Developed and released Unity games, including gameplay systems, UI, and backend integration, while supporting new recruits and coordinating development tasks in a startup team.', BODY, top, BODY_WIDTH) + 7
for text in VGS:
    top += bullet(text, top)

top += 7
separator(top)
top += 9
paragraph('EDUCATION', LEFT, top, 86, LABEL_STYLE)
top += institution('Kingston University London', '2022 - 2023', top) + 1
top += paragraph('Master of Science in Games Development (Programming)', BODY, top, BODY_WIDTH) + 4
top += institution('American University of Beirut (AUB)', '2017 - 2021', top) + 1
top += paragraph('Bachelor of Science in Computer Science &amp; Economics', BODY, top, BODY_WIDTH)

top += 7
separator(top)
top += 7
for label, text in SKILLS:
    label_height = paragraph(label, LEFT, top, 86, LABEL_STYLE)
    body_height = paragraph(text, BODY, top, BODY_WIDTH)
    top += max(label_height, body_height) + 5

separator(top + 1)
top += 8
paragraph('LANGUAGES', LEFT, top, 86, LABEL_STYLE)
top += paragraph('ENGLISH | FRENCH | ARABIC', BODY, top, BODY_WIDTH) + 5
label_height = paragraph('FAVOURITE<br/>GAMES', LEFT, top, 86, LABEL_STYLE)
body_height = paragraph('CLAIR OBSCUR: E33 | CELESTE | SPLIT FICTION | LAST OF US', BODY, top, BODY_WIDTH)
top += max(label_height, body_height)
if top > HEIGHT - 30:
    raise ValueError(f'Content ends at {top:.1f}; exceeds bottom margin {HEIGHT - 30:.1f}')
c.showPage()
c.save()
print(f'Saved {OUTPUT}; content ends at {top:.1f}pt with {HEIGHT - top:.1f}pt bottom margin.')
