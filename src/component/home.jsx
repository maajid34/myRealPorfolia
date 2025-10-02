import React from "react";
import ResumeComponent from "../pages/resume";
import Services from "./service";

export default function PortfolioHero() {
  const hexClip =
    "polygon(25% 6.7%,75% 6.7%,100% 50%,75% 93.3%,25% 93.3%,0% 50%)";

  const profileImg =
    "https://engmaajid.vercel.app/assets/img/maajid/pro.jpg";

  return (

    <>
  
    <section className="relative overflow-hidden bg-[#11161d] text-white">
      {/* subtle glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-emerald-500/25 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 py-6">
        {/* Top Nav */}
     

        {/* Hero */}
        <div className="grid items-center gap-12 pt-16 pb-24 md:grid-cols-2">
          {/* Left */}
          <div>
            <p className="mb-2 text-slate-300">
              Hello, <span className="text-emerald-400">I'm</span>
            </p>

            <h1 className="mb-2 text-4xl font-bold leading-tight md:text-5xl">
              <span className="text-emerald-400">Eng Maajid</span>
            </h1>

            <p className="mb-5 text-lg text-slate-300">
            FullStack webdeveloper
            </p>

            <p className="mb-8 max-w-xl text-slate-400">
             I am a Full-Stack Web Developer Engineer with the ability to design, develop, and deploy a wide range of websites and web applications, including static sites, dynamic platforms, e-commerce solutions, dashboards, and modern web systems
            </p>

            <div className="mb-10">
           <a
  href="https://wa.me/619829928"
  className="inline-flex items-center rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-emerald-500/20 hover:bg-emerald-400"
>
  Let’s Talk on Whatsapp
</a>
            </div>

         {/* Socials */}
<div className="flex items-center gap-4">
  <span className="text-slate-300">Check Out My</span>

  {/* TikTok */}
  <a
    href="http://tiktok.com/@hilaacconsultant"
    aria-label="TikTok"
    target="_blank"
    rel="noopener noreferrer"
    className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-800 hover:bg-slate-700"
  >
    <i className="fa-brands fa-tiktok text-white text-lg"></i>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
    aria-label="LinkedIn"
    target="_blank"
    rel="noopener noreferrer"
    className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-800 hover:bg-slate-700"
  >
    <i className="fa-brands fa-linkedin-in text-white text-lg"></i>
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/maajid34"
    aria-label="GitHub"
    target="_blank"
    rel="noopener noreferrer"
    className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-800 hover:bg-slate-700"
  >
    <i className="fa-brands fa-github text-white text-lg"></i>
  </a>
</div>

          </div>

          {/* Right: Hexagon photo */}
          <div className="relative mx-auto w-80 md:w-[420px]">
            <div
              style={{ clipPath: hexClip }}
              className="relative h-[430px] w-full bg-emerald-500/90 shadow-[0_80px_120px_-40px_rgba(16,185,129,0.45)]"
            >
              <img
                src={profileImg}
                alt="Profile"
                style={{ clipPath: hexClip }}
                className="absolute inset-3 h-[calc(100%-24px)] w-[calc(100%-24px)] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

<Services/>
<ResumeComponent/>
      </>
  );
}
