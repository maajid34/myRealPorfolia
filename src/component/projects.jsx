import { projects, systems } from "../data/profile";

function ProjectVisual({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.alt}
        className="h-48 w-full object-cover"
      />
    );
  }

  return (
    <div className="flex h-48 w-full items-center justify-center bg-[#111b2a] text-4xl text-emerald-400">
      <i className="fa-solid fa-diagram-project" aria-hidden="true"></i>
    </div>
  );
}

export default function Projects({ standalone = false }) {
  return (
    <section className={`bg-[#0b1118] px-4 ${standalone ? "py-12 md:py-16" : "py-16"} text-slate-100 md:px-6`}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
            Portfolio
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Independent ICT Consulting & Digital Development Projects
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-lg border border-white/10 bg-[#0f1622] shadow-lg transition hover:-translate-y-1 hover:shadow-emerald-500/20"
            >
              <ProjectVisual project={project} />
              <div className="flex min-h-[260px] flex-col p-5">
                <h3 className="break-words text-lg font-semibold text-white sm:text-xl">{project.title}</h3>
                {project.role && (
                  <p className="mt-2 text-sm font-medium text-emerald-300">
                    {project.role}
                  </p>
                )}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">
                  {project.description}
                </p>
                {project.status && (
                  <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                    {project.status}
                  </p>
                )}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-center text-sm font-semibold text-slate-900 transition hover:bg-emerald-400"
                  >
                    View Project
                    <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <h2 className="text-2xl font-bold text-white">
            Independent Systems & Application Development
          </h2>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            {systems.map((system) => (
              <article
                key={system.title}
                className="rounded-lg border border-white/10 bg-[#0f1622] p-6 shadow-lg"
              >
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-400">
                  {system.status}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {system.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {system.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
