import {
  competencies,
  education,
  experience,
  languages,
  profile,
  references,
  technicalSkills,
} from "../data/profile";

function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-emerald-500/30 px-3 py-2 text-center text-sm font-medium text-emerald-300 transition hover:border-emerald-400 hover:bg-emerald-500/10"
    >
      {children}
      <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
    </a>
  );
}

function InfoList({ title, items }) {
  return (
    <section className="rounded-lg border border-white/10 bg-[#0f1622] p-6">
      <h2 className="mb-3 text-lg font-semibold">{title}</h2>
      <ul className="space-y-2 text-sm text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ResumeComponent({ compact = false }) {
  const visibleExperience = compact ? experience.slice(0, 3) : experience;

  return (
    <section className="min-h-screen w-full bg-[#0b1118] text-slate-100">
      <div className="h-1 w-full bg-emerald-500" />

      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-8">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
              CV
            </p>
            <h1 className="mt-2 text-2xl font-extrabold tracking-tight md:text-3xl">
              Resume
            </h1>
          </div>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400 ring-1 ring-emerald-500/30 transition hover:bg-emerald-500/20"
          >
            Download PDF
          </a>
        </header>

        <div className="grid gap-6 md:grid-cols-12">
          <aside className="md:col-span-4 lg:col-span-3">
            <div className="rounded-lg border border-white/10 bg-[#0f1622] p-6 shadow-xl">
              <img
                src={profile.photo}
                alt={profile.fullName}
                className="mx-auto aspect-square w-40 rounded-2xl border border-emerald-400/30 object-cover object-top shadow-[0_25px_70px_-35px_rgba(16,185,129,0.9)]"
              />
              <h2 className="mt-6 text-center text-lg font-semibold">
                {profile.fullName}
              </h2>
              <p className="mt-1 text-center text-xs text-slate-400">
                {profile.title}
              </p>
              <div className="mt-6 space-y-4 text-sm">
                <a className="block break-words text-slate-300 hover:text-emerald-300" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
                <a
                  className="block text-slate-300 hover:text-emerald-300"
                  href={`tel:${profile.phone.replaceAll(" ", "")}`}
                >
                  {profile.phone}
                </a>
                <p className="text-slate-300">{profile.location}</p>
                <p className="text-slate-300">Nationality: {profile.nationality}</p>
              </div>
            </div>
          </aside>

          <main className="space-y-6 md:col-span-8 lg:col-span-6">
            <section className="rounded-lg border border-white/10 bg-[#0f1622] p-6">
              <h2 className="mb-3 text-2xl font-bold">Professional Profile</h2>
              <p className="leading-relaxed text-slate-300">{profile.bio}</p>
              <div className="mt-5 space-y-3">
                {profile.highlights.map((item) => (
                  <p key={item} className="border-l border-emerald-500/60 pl-3 text-sm text-slate-300">
                    {item}
                  </p>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-white/10 bg-[#0f1622] p-6">
              <h2 className="mb-3 text-2xl font-bold">Education & Certificates</h2>
              <div className="space-y-4">
                {education.map((item) => (
                  <article key={`${item.title}-${item.period}`}>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-slate-400">{item.institution}</p>
                    <p className="text-sm text-emerald-300">{item.period}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-white/10 bg-[#0f1622] p-6">
              <h2 className="mb-3 text-2xl font-bold">Professional Experience</h2>
              <div className="space-y-6">
                {visibleExperience.map((item) => (
                  <article key={`${item.role}-${item.company}`} className="break-words border-b border-white/10 pb-6 last:border-0 last:pb-0">
                    <p className="font-medium text-white">{item.role}</p>
                    <p className="text-sm text-slate-400">
                      {item.company} | {item.period}
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    {item.links && (
                      <div className="mt-4 flex flex-wrap gap-3">
                        {item.links.map((link) => (
                          <ExternalLink key={link.url} href={link.url}>
                            {link.label}
                          </ExternalLink>
                        ))}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </section>

            {/* <section className="rounded-lg border border-white/10 bg-[#0f1622] p-6">
              <h2 className="mb-6 text-2xl font-bold text-white">References</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {references.map((reference) => (
                  <article
                    key={reference.email}
                    className="break-words rounded-lg border border-white/10 bg-[#1a2232] p-5 shadow transition hover:shadow-lg"
                  >
                    <h3 className="text-lg font-semibold text-white">
                      {reference.name}
                    </h3>
                    <p className="mt-1 text-sm text-emerald-300">{reference.role}</p>
                    <p className="mt-1 text-sm text-slate-400">
                      {reference.organization}
                    </p>
                    <div className="mt-4 space-y-1 text-sm">
                      <a href={`mailto:${reference.email}`} className="block break-words text-emerald-400 hover:underline">
                        {reference.email}
                      </a>
                      <a
                        href={`tel:${reference.phone.replaceAll(" ", "")}`}
                        className="block text-emerald-400 hover:underline"
                      >
                        {reference.phone}
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section> */}
          </main>

          <aside className="space-y-6 md:col-span-12 lg:col-span-3">
            <InfoList title="Core Competencies" items={competencies} />
            <InfoList title="Technical Skills" items={technicalSkills} />
            <InfoList title="Languages" items={languages} />

            <section className="rounded-lg border border-white/10 bg-[#0f1622] p-6">
              <h2 className="mb-3 text-lg font-semibold">Profiles</h2>
              <div className="flex flex-wrap gap-3">
                {profile.socialLinks.map((link) => (
                  <ExternalLink key={link.label} href={link.url}>
                    <i className={link.icon}></i>
                    {link.label}
                  </ExternalLink>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </section>
  );
}
