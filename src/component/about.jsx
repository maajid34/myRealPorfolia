import { competencies, profile } from "../data/profile";

export default function About() {
  return (
    <section className="min-h-screen bg-[#0b1118] px-4 py-12 text-slate-100 md:px-6 md:py-16">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.8fr_1.2fr]">
        <aside className="rounded-lg border border-white/10 bg-[#0f1622] p-6">
          <img
            src={profile.photo}
            alt={profile.fullName}
            className="aspect-[4/5] w-full rounded-lg object-cover object-top"
          />
          <div className="mt-5 space-y-3 text-sm text-slate-300">
            <a className="block break-words hover:text-emerald-300" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a
              className="block hover:text-emerald-300"
              href={`tel:${profile.phone.replaceAll(" ", "")}`}
            >
              {profile.phone}
            </a>
            <p>{profile.location}</p>
            <p>Nationality: {profile.nationality}</p>
          </div>
        </aside>

        <main className="break-words rounded-lg border border-white/10 bg-[#0f1622] p-6 md:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
            Professional Profile
          </p>
          <h1 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            {profile.fullName}
          </h1>
          <p className="mt-2 text-lg text-slate-300">{profile.title}</p>

          <p className="mt-6 leading-relaxed text-slate-300">{profile.bio}</p>
          <p className="mt-4 leading-relaxed text-slate-400">
            Formal institutional experience includes IT Specialist
            responsibilities with the Ministry of Energy & Water Resources of
            Jubaland State, Head of Communications responsibilities with the
            Office of the First Deputy President of Jubaland State, and ICT
            Assistant responsibilities with HAARAN. In parallel, I deliver
            independent ICT consulting and web-development assignments for
            government institutions, private companies, and local NGOs.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-white">Core Competencies</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {competencies.map((item) => (
              <p
                key={item}
                className="rounded-lg border border-white/10 bg-[#111b2a] px-4 py-3 text-sm text-slate-300"
              >
                {item}
              </p>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
}
