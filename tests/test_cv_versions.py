"""Regression checks for targeted CVs with complete experience coverage."""

from pathlib import Path
import re
import sys
import unittest
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / 'output/pdf/source'))
import build_cvs


def normalize(text):
    return ' '.join(text.split())


def pdf_text(spec):
    reader = PdfReader(ROOT / 'output/pdf' / spec.filename)
    return normalize(' '.join(page.extract_text() for page in reader.pages))


class CVContentTests(unittest.TestCase):
    def test_every_variant_is_exactly_two_a4_pages(self):
        for name, spec in build_cvs.SPECS.items():
            reader = PdfReader(ROOT / 'output/pdf' / spec.filename)
            self.assertEqual(len(reader.pages), 2, f'{name} must have two readable pages')
            for page in reader.pages:
                self.assertAlmostEqual(float(page.mediabox.width), 595.28, places=1)
                self.assertAlmostEqual(float(page.mediabox.height), 841.89, places=1)

    def test_important_experience_areas_survive_in_every_pdf(self):
        required = ('Gemini', 'supporting source text', 'inventory', 'persistence',
                    'shared window', 'automated Windows/macOS', 'packaging', 'Godot co-op',
                    'PlayStation 5',
                    'dedicated', 'timeline', 'monetisation', 'player-created',
                    'mentoring', 'CI pipelines', 'Performance profiling & optimisation',
                    'Protobuf', 'ScriptableObjects', 'PlayFab', 'code reviews')
        for name, spec in build_cvs.SPECS.items():
            text = pdf_text(spec)
            for fact in required:
                with self.subTest(role=name, fact=fact):
                    self.assertIn(fact.casefold(), text.casefold(), f'{name} is missing: {fact}')
            self.assertNotIn('Electron (prototypes)', text)
            self.assertNotIn('CPAL', text)
            self.assertNotIn('fixed macOS audio', text)
            self.assertNotIn('capture/paste', text)
            self.assertNotIn('screen capture', text)
            self.assertNotIn('image-paste', text)
            pages = PdfReader(ROOT / 'output/pdf' / spec.filename).pages
            first = normalize(pages[0].extract_text())
            headings = [group['heading'] for group in build_cvs.PRESENTATIONS['tencent'].values()]
            self.assertNotIn('CI pipelines', first[:min(first.index(heading) for heading in headings)])
            for key in ('unreal', 'desktop'):
                heading = build_cvs.PRESENTATIONS['tencent'][key]['heading']
                start = first.index(heading)
                end = min([first.index(other) for other in headings if first.index(other) > start] + [len(first)])
                self.assertIn('configured and modified ci pipelines', first[start:end].casefold())
                if key == 'desktop':
                    desktop = first[start:end].casefold()
                    self.assertIn('implemented client-to-server ai integration, including prompt submission, '
                                  'http/sse response streaming, progressive reply rendering and persistent chat history.', desktop)
                    for fact in ('prompt submission', 'stream', 'reply', 'chat', 'persist'):
                        self.assertIn(fact, desktop)
            for tool in ('TeamCity', 'BlueKing'):
                self.assertNotIn(tool.casefold(), text.casefold())

    def test_all_history_is_retained_with_deliberate_page_break(self):
        for name, spec in build_cvs.SPECS.items():
            pages = PdfReader(ROOT / 'output/pdf' / spec.filename).pages
            self.assertEqual(len(pages), 2)
            first, second = [normalize(page.extract_text()) for page in pages]
            for fact in ('Tencent', 'Game Tech R&D Engineer', 'Nov 2023 - Present'):
                self.assertIn(fact, first)
            for fact in ('The Video Games Studio', 'June 2020 - Aug 2022',
                         'Kingston University London', 'Computer Sciences', 'Economics'):
                self.assertIn(fact, second, f'{name}: {fact}')
            self.assertNotIn('ADDITIONAL PROJECTS', second)
            self.assertIn('MISCELLANEOUS', second)
            self.assertIn('Languages: English (Native) · French (Native) · Arabic (Native)', second)
            self.assertIn('Favourite games: Clair Obscur: Expedition 33 · Celeste · Split Fiction · The Last of Us · Outer Wilds', second)
            for project in ('Knockoff', 'Sensation5', 'Elden Ring Onboarding', 'Sudoku Mobile'):
                self.assertNotIn(project, second)
                self.assertIn(project, (ROOT / 'src/data/projects.ts').read_text())

    def test_anonymous_project_headings_and_continuous_employment(self):
        for name, spec in build_cvs.SPECS.items():
            pages = PdfReader(ROOT / 'output/pdf' / spec.filename).pages
            first, second = [normalize(page.extract_text()) for page in pages]
            for heading in ('InGame Integration & Multiplayer Demo', 'Extraction Game & Applied AI',
                            'Investigative Game & Applied AI', 'Desktop AI Companion'):
                self.assertEqual(first.count(heading), 1, f'{name}: {heading}')
            self.assertIn('PROFESSIONAL EXPERIENCE (CONTINUED)', second)
            self.assertNotIn('EARLIER PROFESSIONAL EXPERIENCE', second)
            self.assertNotIn('EDUCATION', first)

    def test_presentations_cover_every_source_fact_once(self):
        self.assertTrue(hasattr(build_cvs, 'PRESENTATIONS'), 'Role-sensitive copy is required')
        for section, groups in build_cvs.PRESENTATIONS.items():
            covered = [key for group in groups.values() for key in group['covers']]
            self.assertCountEqual(covered, build_cvs.CONTENT[section].keys())
            for spec in build_cvs.SPECS.values():
                self.assertCountEqual([key for key, _ in build_cvs.presentation_items(spec, section)], groups.keys())

    def test_role_changes_detail_as_well_as_order(self):
        self.assertTrue(hasattr(build_cvs, 'presentation_items'), 'Role-sensitive copy is required')
        expected = {'software': 'desktop', 'gameplay': 'unreal', 'ui': 'investigation', 'ai': 'investigation'}
        for name, group in expected.items():
            spec = build_cvs.SPECS[name]
            selected = dict(build_cvs.presentation_items(spec, 'tencent'))
            self.assertEqual(build_cvs.presentation_items(spec, 'tencent')[0][0], group)
            detail = build_cvs.PRESENTATIONS['tencent'][group]['detail']
            self.assertIsInstance(detail, dict, 'Project detail must support audience-specific emphasis')
            self.assertEqual(selected[group], detail.get(name, detail['default']))
            other = next(other for other in build_cvs.SPECS.values() if group not in other.detail_groups)
            self.assertEqual(dict(build_cvs.presentation_items(other, 'tencent'))[group],
                             build_cvs.PRESENTATIONS['tencent'][group]['summary'])
            self.assertGreater(len(' '.join(selected[group])),
                               len(' '.join(build_cvs.PRESENTATIONS['tencent'][group]['summary'])))

    def test_project_attribution_and_ui_ai_emphasis(self):
        groups = build_cvs.PRESENTATIONS['tencent']
        self.assertIn('unreal_matches', groups['unreal']['covers'])
        self.assertIn('online_services', groups['unreal']['covers'])
        self.assertIn('platforms', groups['unreal']['covers'])
        self.assertIn('multiplayer', groups['coop']['covers'])
        self.assertIn('timeline_tools', groups['coop']['covers'])
        self.assertIn('board_ui', groups['investigation']['covers'])
        self.assertIn('reliability', groups['investigation']['covers'])
        ui = dict(build_cvs.presentation_items(build_cvs.SPECS['ui'], 'tencent'))['investigation']
        ai = dict(build_cvs.presentation_items(build_cvs.SPECS['ai'], 'tencent'))['investigation']
        self.assertIn('supporting source text', ui[0])
        self.assertIn('LLM', ' '.join(ai))
        for spec in build_cvs.SPECS.values():
            investigation = dict(build_cvs.presentation_items(spec, 'tencent'))['investigation']
            self.assertIn('AI character dialogue', ' '.join(investigation))
            for term in ('Godot', 'prototype', 'players', 'case files', 'evidence', 'witnesses'):
                self.assertIn(term, investigation[0])
            coop = ' '.join(dict(build_cvs.presentation_items(spec, 'tencent'))['coop'])
            self.assertRegex(coop, r'action library.*\bLLM\b')
            for term in ('spawn', 'grant', 'progression', 'timeline',
                         'procedural generation', 'low frame rates', "Godot's profiler", 'CPU-bound bottlenecks'):
                self.assertIn(term, coop)

    def test_requested_copy_and_public_ingame_experience_are_in_every_version(self):
        for name, spec in build_cvs.SPECS.items():
            text = pdf_text(spec)
            self.assertNotIn('Owned UI implementation across confidential', text)
            self.assertNotIn('Implemented player profiles', text)
            self.assertNotIn('Investigation UI & Applied AI', text)
            self.assertNotIn('Co-op Gameplay & Director Tools', text)
            self.assertIn("InGame, Tencent's public online-service framework", text)
            self.assertIn('InGame Integration & Multiplayer Demo', text)
            self.assertGreaterEqual(text.count('InGame'), 3, name)
            annotations = PdfReader(ROOT / 'output/pdf' / spec.filename).pages[0].get('/Annots', [])
            links = [str(a.get_object().get('/A', {}).get('/URI', '')) for a in annotations]
            self.assertIn('https://intl.ingame.tencent.com/', links)
        projects = (ROOT / 'src/data/projects.ts').read_text()
        profile = (ROOT / 'src/data/profile.ts').read_text()
        self.assertIn('Investigative Game & Applied AI', projects)
        self.assertIn('Extraction Game & Applied AI', projects)
        self.assertIn("Tencent's public online-service framework", projects)
        self.assertIn('Tencent InGame', profile)
        self.assertNotIn('owned UI implementation across confidential', profile)
        self.assertNotIn('CPAL', projects)
        self.assertNotIn('screen capture', projects)
        self.assertNotIn('screen-capture', projects)
        self.assertNotIn('image-paste', projects)

    def test_generic_profile_systems_are_not_assigned_to_godot_without_evidence(self):
        groups = build_cvs.PRESENTATIONS['tencent']
        self.assertNotIn('progression', groups['coop']['covers'])
        for spec in build_cvs.SPECS.values():
            text = pdf_text(spec)
            start = text.index(groups['coop']['heading'])
            next_headers = [text.find(group['heading'], start + 1) for group in groups.values()]
            end = min([pos for pos in next_headers if pos > start] + [text.index('1 / 2', start)])
            for unsupported in ('profiles', 'loadouts', 'persistence'):
                self.assertNotIn(unsupported, text[start:end].casefold())

    def test_selected_copy_and_skills_are_rendered_once_in_role_order(self):
        self.assertTrue(hasattr(build_cvs, 'presentation_items'), 'Role-sensitive copy is required')
        for name, spec in build_cvs.SPECS.items():
            text = pdf_text(spec)
            for section in ('tencent', 'vgs'):
                bullets = [bullet for _, group in build_cvs.presentation_items(spec, section) for bullet in group]
                positions = []
                for bullet in bullets:
                    self.assertEqual(text.count(normalize(bullet)), 1, f'{name}: {bullet}')
                    positions.append(text.index(normalize(bullet)))
                self.assertEqual(positions, sorted(positions))
            for _, (label, value) in build_cvs.skill_items(spec):
                self.assertEqual(text.count(normalize(f'{label} {value}')), 1)

    def test_experience_uses_readable_font_sizes(self):
        for spec in build_cvs.SPECS.values():
            for page in PdfReader(ROOT / 'output/pdf' / spec.filename).pages:
                def check(text, cm, tm, font, size):
                    if text.strip() and 60 < tm[5] < 730:
                        if normalize(text) in {label for label, value in build_cvs.TOOLKIT.values()}:
                            self.assertGreaterEqual(size, 9.5, f'{spec.title}: {text}')
                        else:
                            self.assertGreaterEqual(size, 10.5, f'{spec.title}: {text}')
                page.extract_text(visitor_text=check)

    def test_public_preview_contains_both_software_pages(self):
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
