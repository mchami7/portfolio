const projects = [
  {
    title: 'Ascension',
    status: 'Coming soon',
    role: 'Game programming',
    tech: 'Unreal Engine, C++, multiplayer systems',
    summary:
      'A polished project slot reserved for deeper gameplay and systems detail as public material becomes available.',
    challenge:
      'Launch-ready presentation without over-stating unpublished scope.',
  },
  {
    title: 'Pegasus',
    status: 'Featured',
    role: 'Gameplay and systems programmer',
    tech: 'Unreal Engine, C++, replication, tooling',
    summary:
      'Multiplayer-focused work spanning moment-to-moment gameplay, network-aware systems, and practical iteration support.',
    challenge:
      'Keeping interaction feel responsive while respecting replicated state and production constraints.',
  },
  {
    title: 'AI Gaming Assistant',
    status: 'Research',
    role: 'AI gameplay researcher',
    tech: 'Python, LLM workflows, gameplay analysis',
    summary:
      'Exploration of assistant patterns that can understand game context, support players, and surface useful tactical guidance.',
    challenge:
      'Balancing useful recommendations with latency, ambiguity, and player agency.',
  },
  {
    title: 'VGS Projects',
    status: 'Applications',
    role: 'Cross-platform developer',
    tech: 'React, TypeScript, mobile and web delivery',
    summary:
      'Application projects focused on reliable user flows, maintainable interfaces, and shipping across more than one platform.',
    challenge:
      'Designing technical foundations that stay clear as product needs evolve.',
  },
]

const skills = [
  'Unreal Engine',
  'C++',
  'Multiplayer gameplay',
  'AI gameplay research',
  'React',
  'TypeScript',
  'Cross-platform apps',
  'Technical debugging',
]

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0c0e12] text-slate-100">
      <section
        id="home"
        className="relative border-b border-white/10 bg-[radial-gradient(circle_at_20%_0%,rgba(93,214,196,0.18),transparent_28%),radial-gradient(circle_at_86%_12%,rgba(245,166,35,0.14),transparent_24%),linear-gradient(135deg,#0c0e12_0%,#141720_54%,#101218_100%)]"
      >
        <div className="mx-auto grid min-h-[92svh] w-full max-w-7xl items-center gap-10 px-5 py-8 sm:px-8 lg:grid-cols-[minmax(0,1fr)_460px] lg:px-10">
          <div className="max-w-3xl pt-14 lg:pt-0">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-teal-200">
              mirachami.dev / gameplay systems
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              Mira Chami builds sharp, playable systems.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Game programmer with experience spanning Unreal Engine multiplayer systems,
              AI gameplay research, and cross-platform applications.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-teal-300 px-5 font-semibold text-slate-950 transition hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-slate-950"
                href="#projects"
              >
                View Projects
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/20 px-5 font-semibold text-white transition hover:border-amber-200/70 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-slate-950"
                href="/Mira_Chami_CV.pdf"
                download
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[460px] pb-10 lg:pb-0" aria-hidden="true">
            <div className="systems-panel rounded-lg border border-white/14 bg-slate-950/55 p-4 shadow-2xl shadow-black/40 backdrop-blur">
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-400">
                <span>Runtime</span>
                <span className="text-teal-200">Stable</span>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-md border border-white/10 bg-[#121722]">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:36px_36px]" />
                <div className="absolute left-[13%] top-[18%] h-20 w-20 rounded-md border border-teal-200/70 bg-teal-300/10 shadow-[0_0_36px_rgba(94,234,212,0.22)]" />
                <div className="absolute right-[16%] top-[24%] h-14 w-24 rounded-full border border-amber-200/70 bg-amber-300/10" />
                <div className="absolute bottom-[18%] left-[20%] h-24 w-32 rounded-md border border-sky-200/60 bg-sky-300/10" />
                <div className="absolute bottom-[25%] right-[15%] h-16 w-16 rotate-45 border border-rose-200/70 bg-rose-300/10" />
                <div className="scanline absolute left-0 top-0 h-16 w-full bg-gradient-to-b from-transparent via-teal-200/20 to-transparent" />
                <div className="absolute inset-x-5 bottom-5 grid grid-cols-3 gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-300">
                  <span className="rounded border border-white/10 bg-black/30 px-2 py-2">Net</span>
                  <span className="rounded border border-white/10 bg-black/30 px-2 py-2">AI</span>
                  <span className="rounded border border-white/10 bg-black/30 px-2 py-2">UX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-[#f7f5f0] px-5 py-20 text-slate-950 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-teal-700">
              Selected work
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
              Projects built around systems, feel, and useful constraints.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
                key={project.title}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <span className="rounded-full border border-slate-200 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-600">
                    {project.status}
                  </span>
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-amber-700">
                  {project.role}
                </p>
                <p className="mt-2 text-sm text-slate-600">{project.tech}</p>
                <p className="mt-5 leading-7 text-slate-700">{project.summary}</p>
                <p className="mt-4 border-l-2 border-teal-500 pl-4 text-sm leading-6 text-slate-600">
                  {project.challenge}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-[#151820] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-amber-200">
              About
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Practical engineering for interactive worlds.
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              Mira brings a programmer's attention to responsiveness, reliability, and
              the small details that make play feel intentional. Her work connects game
              systems, research prototypes, and application interfaces.
            </p>
            <p className="mt-5 leading-8 text-slate-300">
              Education details can be updated here for the live CV. Outside the editor,
              the page leaves room for a tasteful personal note: games, systems design,
              and the craft of making complex experiences understandable.
            </p>
          </div>
          <div className="grid content-start gap-4 sm:grid-cols-2">
            {skills.map((skill) => (
              <div className="rounded-md border border-white/10 bg-white/[0.04] p-4" key={skill}>
                <p className="font-mono text-sm text-slate-200">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="resume" className="bg-[#eef5f3] px-5 py-16 text-slate-950 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-lg border border-teal-900/10 bg-white p-6 shadow-sm sm:p-8 lg:flex-row lg:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-teal-700">
              Resume
            </p>
            <h2 className="mt-3 text-3xl font-semibold">CV download</h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              The launch version points to the expected PDF path. Replace the file in
              public assets when the final CV is ready.
            </p>
          </div>
          <a
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-md bg-slate-950 px-5 font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
            href="/Mira_Chami_CV.pdf"
            download
          >
            Download Mira_Chami_CV.pdf
          </a>
        </div>
      </section>

      <section id="contact" className="bg-[#0c0e12] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-rose-200">
            Contact
          </p>
          <div className="mt-3 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Open to gameplay, tools, AI, and application work.
            </h2>
            <div className="grid gap-3 sm:grid-cols-3">
              <a className="contact-link" href="mailto:hello@mirachami.dev">
                Email
                <span>hello@mirachami.dev</span>
              </a>
              <a className="contact-link" href="https://github.com/" target="_blank">
                GitHub
                <span>Update profile URL</span>
              </a>
              <a className="contact-link" href="https://www.linkedin.com/" target="_blank">
                LinkedIn
                <span>Update profile URL</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
