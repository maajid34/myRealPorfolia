import { profile } from "../data/profile";
import Projects from "./projects";
import Services from "./service";
import ResumeComponent from "../pages/resume";

export default function PortfolioHero() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#11161d] text-white">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-emerald-500" />

        <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-10 px-4 py-10 md:grid-cols-[1.05fr_0.95fr] md:gap-12 md:px-6 md:py-14">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-emerald-400 sm:text-sm sm:tracking-[0.2em]">
              {profile.shortTitle}
            </p>

            <h1 className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl md:text-6xl">
              {profile.fullName}
            </h1>

            <p className="mt-4 text-lg text-slate-200 sm:text-xl">{profile.title}</p>

            <p className="mt-6 max-w-2xl leading-relaxed text-slate-400">
              {profile.bio}
            </p>

            <div className="mt-7 grid gap-3 text-sm text-slate-300 sm:grid-cols-2 lg:grid-cols-3">
              {profile.highlights.map((highlight) => (
                <p key={highlight} className="border-l border-emerald-500/60 pl-3">
                  {highlight}
                </p>
              ))}
            </div>

            <div className="mt-9 grid gap-3 sm:flex sm:flex-wrap">
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-center font-semibold text-slate-900 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
              >
                <i className="fa-brands fa-whatsapp"></i>
                Let's Talk on WhatsApp
              </a>
              {/* <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-6 py-3 text-center font-semibold text-slate-100 transition hover:border-emerald-400 hover:text-emerald-300"
              >
                <i className="fa-solid fa-file-arrow-down"></i>
                Download CV
              </a> */}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="text-slate-300">Find me on</span>
              {profile.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-lg bg-slate-800 transition hover:bg-slate-700"
                >
                  <i className={`${link.icon} text-lg text-white`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-[380px] sm:max-w-[430px]">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 p-3 shadow-[0_30px_100px_-35px_rgba(16,185,129,0.85)]">
              <div className="absolute inset-x-8 top-0 h-1 bg-emerald-400" />
              <img
                src={profile.photo}
                alt={profile.fullName}
                className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <Services />
      <ResumeComponent compact />
      <Projects />
    </>
  );
}
