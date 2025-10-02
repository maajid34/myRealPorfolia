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

              <a
                href="#"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-800 hover:bg-slate-700"
              >
                {/* Instagram icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A5.5 5.5 0 1111.999 18.5 5.5 5.5 0 0112 7.5zm0 2A3.5 3.5 0 1015.5 13 3.5 3.5 0 0012 9.5zM18 6.5a1 1 0 11-1 1 1 1 0 011-1z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Dribbble"
                className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-800 hover:bg-slate-700"
              >
                {/* Dribbble icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm6.92 6.62a7.94 7.94 0 01-3.87 1.09 19.3 19.3 0 00-2.1-3.68A8.01 8.01 0 0118.92 8.6zM12 4a7.94 7.94 0 014.2 1.2 17.2 17.2 0 012.33 4.07 9.7 9.7 0 01-4.53 1.25 30.6 30.6 0 00-2.55-4.29A7.94 7.94 0 0112 4zM9.5 4.48a29.6 29.6 0 012.86 4.47 8.7 8.7 0 01-6.74-.84A7.97 7.97 0 019.5 4.48zM4.13 9.41a10.6 10.6 0 006.89 1.14 28.9 28.9 0 011.14 3.28 13.2 13.2 0 00-6.86 4.79 7.98 7.98 0 01-1.17-9.21zM7 19.47a11.5 11.5 0 016.6-4.26 19.6 19.6 0 01.6 5.55A7.95 7.95 0 017 19.47zm8.73.02a17.6 17.6 0 00-.5-5.25 9.3 9.3 0 004.61-1.69A7.97 7.97 0 0115.73 19.5z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Behance"
                className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-800 hover:bg-slate-700"
              >
                {/* Behance icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4 7h5.2a3 3 0 012.8 3.2A2.8 2.8 0 019.5 13v.1A3 3 0 0112 16.5 3.3 3.3 0 018.6 20H4zm4.5 3.2c.9 0 1.7-.4 1.7-1.2S9.4 8 8.5 8H6.5v2.2zm.5 6.3c1.1 0 1.9-.6 1.9-1.5S10.1 13 9 13H6.5v3.5zM18.5 8a4.5 4.5 0 014.5 4.9h-7a2.3 2.3 0 002.4 2c1 0 1.7-.3 2.3-.7l1 .9A5.4 5.4 0 0118.4 17a4.6 4.6 0 01-4.9-4.8A4.6 4.6 0 0118.5 8zm-2.1 3.7h5A2.3 2.3 0 0019 9.9a2.3 2.3 0 00-2.6 1.8zM15 6.5h4v1.2h-4z" />
                </svg>
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
