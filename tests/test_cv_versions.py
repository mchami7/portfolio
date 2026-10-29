"""Integration checks for the four revised application PDFs and website preview."""

from pathlib import Path
import re
import sys
import unittest

import pdfplumber
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / 'output/pdf/source'))
import build_cvs


def normalize(text):
    return ' '.join(text.split())


def pages_for(spec):
    return PdfReader(ROOT / 'output/pdf' / spec.filename).pages


def pdf_text(spec):
    return normalize(' '.join(page.extract_text() for page in pages_for(spec)))


class CVContentTests(unittest.TestCase):
    def test_every_variant_is_exactly_two_a4_pages(self):
        for name, spec in build_cvs.SPECS.items():
            pages = pages_for(spec)
            self.assertEqual(len(pages), 2, name)
            for index, page in enumerate(pages, 1):
                self.assertAlmostEqual(float(page.mediabox.width), 595.28, places=1)
                self.assertAlmostEqual(float(page.mediabox.height), 841.89, places=1)
                self.assertIn(f'{index} / 2', normalize(page.extract_text()))

    def test_role_specific_project_order(self):
        expected = {
            'gameplay': ('coop', 'investigation', 'unreal', 'desktop'),
            'ai': ('investigation', 'coop', 'desktop', 'unreal'),
            'ui': ('investigation', 'desktop', 'unreal', 'coop'),
            'software': ('desktop', 'investigation', 'unreal', 'coop'),
        }
        for name, order in expected.items():
            text = normalize(pages_for(build_cvs.SPECS[name])[0].extract_text())
            positions = []
            for key in order:
                heading = build_cvs.PRESENTATIONS['tencent'][key]['heading']
                self.assertEqual(text.count(heading), 1, name)
                positions.append(text.index(heading))
            self.assertEqual(positions, sorted(positions), name)

    def test_role_specific_phrasing_survives_export(self):
        required = {
            'gameplay': ('AI-native games', 'AI Dungeon Master',
                         'so model decisions never touch networked state directly',
                         'replicated multiplayer gameplay', 'Developed and shipped a mobile runner'),
            'ai': ('Google Search grounding', 'JSON Schemas',
                   'what a character knows, what they believe and what the player suggests',
                   'gives rejected replies one revision', 'source-attributed clues',
                   'versioned case packages', 'HTTP/SSE', 'mocked model responses'),
            'ui': ('draw connections and marker annotations',
                   'keyboard, mouse and trackpad',
                   'review the exact question before sending',
                   'text-selection gestures', 'Three.js and PixiJS', 'ScriptableObjects'),
            'software': ('comparing performance, bundle size, multi-window behaviour and desktop APIs',
                         'React UI invoking Rust commands through Tauri',
                         'Steam isolated behind feature flags',
                         'structured logging and diagnostic panels', 'cross-reference checks',
                         'dedicated-server debugging', 'retrieve winner data'),
        }
        for name, phrases in required.items():
            text = pdf_text(build_cvs.SPECS[name])
            for phrase in phrases:
                self.assertIn(phrase, text, f'{name}: {phrase}')

    def test_latest_draft_bullet_counts(self):
        expected_counts = {
            'gameplay': {'coop': 5, 'investigation': 3, 'unreal': 3, 'desktop': 2},
            'ai': {'investigation': 4, 'coop': 3, 'desktop': 2, 'unreal': 2},
            'ui': {'investigation': 4, 'desktop': 3, 'unreal': 2, 'coop': 2},
            'software': {'desktop': 4, 'investigation': 2, 'unreal': 2, 'coop': 2},
        }
        for name, spec in build_cvs.SPECS.items():
            self.assertEqual({key: len(bullets) for key, bullets in
                              build_cvs.presentation_items(spec, 'tencent')}, expected_counts[name])
            self.assertEqual(sum(len(bullets) for _, bullets in
                                 build_cvs.presentation_items(spec, 'vgs')), 5)
            self.assertEqual(len(build_cvs.skill_items(spec)), 7 if name == 'ui' else 6)

    def test_selected_bullets_and_toolkits_render_once_in_order(self):
        for name, spec in build_cvs.SPECS.items():
            text = pdf_text(spec)
            self.assertIn(normalize(spec.intro), text)
            positions = []
            for section in ('tencent', 'vgs'):
                for _, group in build_cvs.presentation_items(spec, section):
                    for bullet in group:
                        self.assertEqual(text.count(normalize(bullet)), 1, f'{name}: {bullet}')
                        positions.append(text.index(normalize(bullet)))
            self.assertEqual(positions, sorted(positions), name)
            for _, (label, value) in build_cvs.skill_items(spec):
                self.assertEqual(text.count(normalize(f'{label}: {value}')), 1, name)

    def test_latest_draft_education_miscellaneous_and_contact_details(self):
        for name, spec in build_cvs.SPECS.items():
            first, second = [normalize(page.extract_text()) for page in pages_for(spec)]
            for value in ('Tencent', 'Game Tech R&D Engineer', 'Nov 2023 – Present',
                          'London, UK', '+44 7495 468016', 'miranchami@gmail.com', 'mirachami.dev',
                          build_cvs.ROLE_COPY[name]['tencent_role']):
                self.assertIn(value, first, name)
            for value in (
                'PROFESSIONAL EXPERIENCE (CONTINUED)', 'The Video Games Studio (VGS)',
                'Jun 2020 – Aug 2022', 'Game Programmer', 'Beirut, Lebanon',
                'MSc Games Development (Programming) · Kingston University London · 2022 – 2023',
                'BSc Computer Science · American University of Beirut · 2017 – 2021',
                'BA Economics · American University of Beirut · 2016 – 2020',
                'Languages: English, French, Arabic (all native)',
                'Favourite games: Clair Obscur: Expedition 33 · Celeste · Split Fiction · The Last of Us · Outer Wilds',
            ):
                self.assertIn(value, second, name)
            self.assertNotIn('EDUCATION', first)
            self.assertNotIn('ADDITIONAL PROJECTS', second)

    def test_reviewed_wording_and_placeholder_cleanup(self):
        for name, spec in build_cvs.SPECS.items():
            text = pdf_text(spec)
            self.assertNotRegex(text, r'\[[^\]]+\]', name)
            self.assertNotIn('\ufffd', text, name)
            self.assertIn(normalize(build_cvs.ROLE_COPY[name]['contact']), text, name)
            for removed in ('Free for All and Teams', 'independently enabled', 'Independently enabled', ' — '):
                self.assertNotIn(removed, text, name)
            self.assertIn('Tencent’s public online services framework', text, name)
            self.assertNotIn('Optimisation', text, name)
        gameplay = pdf_text(build_cvs.SPECS['gameplay'])
        for value in ('spawning enemies, rewarding players with items',
                      'Profiled procedural generation and frame-rate issues',
                      'InGame, Tencent’s public online services framework',
                      'Implemented PlayStation 5 support'):
            self.assertIn(value, gameplay)
        self.assertIn('Profiled procedural generation to identify CPU-bound bottlenecks', pdf_text(build_cvs.SPECS['software']))

    def test_latest_toolkit_and_technology_labels(self):
        additions = {
            'gameplay': ('Blueprints', 'Server-Authoritative Multiplayer', 'Data-Driven Gameplay', 'ScriptableObjects'),
            'ui': ('Blueprints', 'Multi-Window UI', 'UI Animation', 'Input Handling'),
            'software': ('Blueprints', 'Asynchronous Programming', 'Caching', 'Cross-Platform Desktop Development'),
            'ai': ('Blueprints', 'Context Management', 'LLM Response Streaming', 'Source Attribution'),
        }
        for name, spec in build_cvs.SPECS.items():
            items = build_cvs.skill_items(spec)
            self.assertEqual(tuple(value for _, value in items), build_cvs.ROLE_COPY[name]['toolkit'])
            text = pdf_text(spec)
            for technologies in build_cvs.ROLE_COPY[name]['technologies'].values():
                self.assertIn(technologies, text)
            toolkit = text.split('TECHNICAL TOOLKIT',1)[1].split('EDUCATION',1)[0]
            for keyword in additions[name]:
                self.assertIn(keyword, toolkit, f'{name}: {keyword}')
            self.assertIn('Unreal Engine 5', toolkit)
            self.assertLess(toolkit.index('Unreal Engine 5'), toolkit.index('Godot'))

    def test_complete_latest_draft_matches_export(self):
        """Check the independent supplied Markdown, including every unedited bullet."""
        source = (ROOT / 'output/cv_drafts.md').read_text(encoding='utf-8')
        roles = ('gameplay', 'ai', 'ui', 'software')
        blocks = re.split(r'^VERSION \d+ — .+$', source, flags=re.M)[1:]
        self.assertEqual(len(blocks), 4)
        for name, block in zip(roles, blocks):
            text = pdf_text(build_cvs.SPECS[name])
            for line in block.splitlines():
                if not line.strip():
                    continue
                if line.startswith(('Tencent — ', 'The Video Games Studio (VGS) — ')):
                    employer, details = line.split(' — ', 1)
                    self.assertIn(employer, text)
                    for part in details.split(' · '):
                        self.assertIn(part, text)
                    continue
                heading = line.split(' · ', 1)[0]
                if heading in {group['heading'] for group in build_cvs.PRESENTATIONS['tencent'].values()}:
                    for part in line.split(' · ', 1):
                        self.assertIn(part, text)
                    continue
                self.assertIn(normalize(line), text, f'{name}: {line}')

    def test_links_and_text_geometry(self):
        for name, spec in build_cvs.SPECS.items():
            annotations = pages_for(spec)[0].get('/Annots', [])
            links = [str(a.get_object().get('/A', {}).get('/URI', '')) for a in annotations]
            for url in ('https://mirachami.dev/', 'mailto:miranchami@gmail.com', 'https://intl.ingame.tencent.com/'):
                self.assertIn(url, links, name)
            with pdfplumber.open(ROOT / 'output/pdf' / spec.filename) as doc:
                for page in doc.pages:
                    for char in page.chars:
                        if char['text'].strip():
                            self.assertGreaterEqual(char['x0'], 30, name)
                            self.assertLessEqual(char['x1'], page.width - 30, name)
                            self.assertGreaterEqual(char['top'], 20, name)
                            self.assertLessEqual(char['bottom'], page.height - 20, name)
                            self.assertGreaterEqual(char['size'], 9, name)

    def test_public_preview_matches_both_software_pages(self):
        software = ROOT / 'output/pdf' / build_cvs.SPECS['software'].filename
        self.assertEqual(software.read_bytes(), (ROOT / 'public/Mira_Chami_CV.pdf').read_bytes())
        metadata = (ROOT / 'src/data/cvPreview.ts').read_text()
        paths = re.findall(r'/cv-preview/cv-page-\d+\.png', metadata)
        self.assertEqual(paths, ['/cv-preview/cv-page-1.png', '/cv-preview/cv-page-2.png'])
        self.assertEqual(len(list((ROOT / 'public/cv-preview').glob('cv-page-*.png'))), 2)
        for path in paths:
            self.assertTrue((ROOT / 'public' / path.lstrip('/')).is_file())

    def test_only_four_canonical_application_files_exist(self):
        paths = list((ROOT / 'output/pdf').rglob('*.pdf'))
        self.assertEqual(len(paths), 4)
        self.assertEqual({path.name for path in paths}, {spec.filename for spec in build_cvs.SPECS.values()})


if __name__ == '__main__':
    unittest.main()
