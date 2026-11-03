"""Integration checks for the four revised application PDFs and website preview."""

from pathlib import Path
import json
import re
import sys
import unittest

import pdfplumber
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / 'output/pdf/source'))
import build_cvs


def normalize(text):
    return ' '.join(text.replace('**', '').split())


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
            'gameplay': ('coop', 'unreal', 'investigation', 'desktop'),
            'ai': ('investigation', 'coop', 'desktop', 'unreal'),
            'ui': ('investigation', 'desktop', 'unreal', 'coop'),
            'software': ('desktop', 'investigation', 'unreal', 'coop'),
        }
        for name, order in expected.items():
            text = normalize(pages_for(build_cvs.SPECS[name])[0].extract_text())
            positions = []
            for key in order:
                heading = build_cvs.ROLE_COPY[name]['headings'][key]
                self.assertEqual(text.count(heading), 1, name)
                positions.append(text.index(heading))
            self.assertEqual(positions, sorted(positions), name)

    def test_role_specific_phrasing_survives_export(self):
        required = {
            'gameplay': ('server-authoritative co-op multiplayer',
                         'author, preview and validate behaviours without code',
                         'Free-for-All and Teams match flows', 'Developed and shipped a mobile runner'),
            'ai': ('Google Search grounding', 'JSON Schemas',
                   'AI witnesses with explicit knowledge boundaries',
                   'one revision for rejected replies',
                   'automated testing without live model calls',
                   'HTTP/SSE', 'mocked responses'),
            'ui': ('turn source passages into connected evidence',
                   'keyboard, mouse and trackpad',
                   'review the exact question before sending',
                   'selection gestures', 'Three.js and PixiJS', 'PlayFab backend data'),
            'software': ('comparing performance, bundle size, multi-window behaviour and desktop APIs',
                         'React/Rust client architecture',
                         'Automated Windows/macOS setup, builds, installers and packaging',
                         'structured logging and diagnostic panels', 'cross-reference checks',
                         'dedicated-server debugging', 'retrieve winner data'),
        }
        for name, phrases in required.items():
            text = pdf_text(build_cvs.SPECS[name])
            for phrase in phrases:
                self.assertIn(phrase, text, f'{name}: {phrase}')

    def test_latest_draft_bullet_counts(self):
        expected_counts = {
            'gameplay': {'coop': 5, 'unreal': 3, 'investigation': 3, 'desktop': 2},
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

    def test_substantive_experience_is_not_lost_when_tightening_copy(self):
        """Keep the specific evidence removed in the over-compressed drafts."""
        required = {
            'gameplay': ('CPU-bound bottlenecks', 'run competition cycles', 'retrieve winners',
                         'Unity Input System', 'Jira and Trello', 'Gemini/Search-grounded case generation',
                         'same typed actions', 'quests', 'achievements', 'CI pipelines'),
            'ai': ('versioned case packages', 'comparison viewer', 'one revision', 'exact quotes',
                   'source-attributed clues', 'structured logging', 'CI pipelines',
                   'third-party backend services', 'gameplay and software architecture documentation'),
            'ui': ('Node.js services', 'Gemini-grounded case data', 'ScriptableObjects',
                   'Unity Input System', 'text-selection gestures', 'technical documentation',
                   'server-authoritative multiplayer', 'enemy spawning and item rewards'),
            'software': ('Steam isolated behind feature flags', 'React UI invokes Rust commands through Tauri',
                         'CPU-bound bottlenecks', 'manage competition cycles', 'Jira and Trello',
                         'software architecture documentation', 'setup, builds, installers and packaging'),
        }
        for name, phrases in required.items():
            experience = pdf_text(build_cvs.SPECS[name]).split('TECHNICAL TOOLKIT', 1)[0]
            for phrase in phrases:
                self.assertIn(phrase, experience, f'{name}: missing experience evidence: {phrase}')
            self.assertIn('designers used', experience.lower(), name)
            self.assertIn('create behaviour timelines for the AI director', experience, name)

    def test_each_original_contribution_and_technology_is_retained(self):
        baseline = json.loads((ROOT / 'tests/fixtures/cv_original_coverage.json').read_text())
        checked = 0
        for name, original in baseline['roles'].items():
            current = build_cvs.ROLE_COPY[name]
            text = pdf_text(build_cvs.SPECS[name])
            self.assertEqual([list(item) for item in current['toolkit']], original['toolkit'], name)
            self.assertEqual(current['technologies'], original['technologies'], name)
            self.assertEqual(current['contact'], original['contact'], name)
            self.assertEqual(list(current['education']), original['education'], name)
            for item in original['experience']:
                bullets = current['vgs'] if item['group'] == 'vgs' else current['tencent'][item['group']]
                bullet = normalize(bullets[item['current_bullet']])
                for evidence in item['evidence']:
                    self.assertIn(normalize(evidence), bullet, f"{item['id']}: {evidence}")
                    self.assertIn(normalize(evidence), text, f"{item['id']}: omitted from PDF")
                checked += 1
        self.assertEqual(checked, 65)

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

    def test_latest_draft_education_languages_and_contact_details(self):
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
                'MISCELLANEOUS', 'Languages: English, French and Arabic - native',
            ):
                self.assertIn(value, second, name)
            self.assertNotIn('EDUCATION', first)
            self.assertNotIn('ADDITIONAL PROJECTS', second)
            if name in ('gameplay', 'ui'):
                self.assertIn('Favourite games: Clair Obscur: Expedition 33 · Celeste · Split Fiction · The Last of Us · Outer Wilds', second)
            else:
                self.assertNotIn('Favourite games', second)

    def test_reviewed_wording_and_placeholder_cleanup(self):
        for name, spec in build_cvs.SPECS.items():
            text = pdf_text(spec)
            self.assertNotRegex(text, r'\[[^\]]+\]', name)
            self.assertNotIn('\ufffd', text, name)
            self.assertIn(normalize(build_cvs.ROLE_COPY[name]['contact']), text, name)
            for removed in ('Free for All and Teams', 'independently enabled', 'Independently enabled', ' — '):
                self.assertNotIn(removed, text, name)
            self.assertIn('InGame, Tencent’s public online services framework', text, name)
            self.assertNotIn('**', text, name)
            self.assertNotIn('Optimisation', text, name)
        gameplay = pdf_text(build_cvs.SPECS['gameplay'])
        for value in ('spawning enemies, granting item rewards and changing progression',
                      'designer-configurable co-op runs and UI', 'InGame, Tencent’s public online services framework',
                      'Implemented PlayStation 5 support'):
            self.assertIn(value, gameplay)
        self.assertIn('data-integrity and UI testing without live model calls', pdf_text(build_cvs.SPECS['software']))

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
            for keyword in ('Python', 'Java', 'Protobuf', 'Photon PUN 2', 'InGame'):
                self.assertIn(keyword, toolkit, f'{name}: missing toolkit evidence: {keyword}')

    def test_complete_latest_draft_matches_export(self):
        """Check the saved review copy, including headings and every approved bullet."""
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
                if heading in set(build_cvs.ROLE_COPY[name]['headings'].values()):
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
