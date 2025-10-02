export default function Services() {
  return (
    <section className="w-full bg-[#0b1118] text-slate-100 py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="text-sm text-emerald-400 font-medium">My Services</p>
          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">What Can I Do</h2>
        </div>

        {/* Services Grid */}
       <div className="grid gap-6 md:grid-cols-3">
  {/* Web Developer */}
  <div className="rounded-2xl border border-white/10 bg-[#0f1622] p-8 text-center shadow-lg hover:shadow-emerald-500/20 transition">
    <div className="mb-4 flex justify-center text-emerald-400 text-3xl">
      <i className="fa-solid fa-code" aria-hidden="true"></i>
    </div>
    <h3 className="mb-2 text-lg font-semibold">Web Developer</h3>
    <p className="text-slate-400 text-sm">
      Building responsive, modern websites and web apps with clean,
      scalable code and user-friendly interfaces.
    </p>
  </div>

  {/* System Manager */}
  <div className="rounded-2xl border border-white/10 bg-[#0f1622] p-8 text-center shadow-lg hover:shadow-emerald-500/20 transition">
    <div className="mb-4 flex justify-center text-emerald-400 text-3xl">
      <i className="fa-solid fa-server" aria-hidden="true"></i>
    </div>
    <h3 className="mb-2 text-lg font-semibold">System Manager</h3>
    <p className="text-slate-400 text-sm">
      Managing IT systems, networks, and servers to ensure smooth operations and security.
    </p>
  </div>

  {/* Graphic Designer */}
  <div className="rounded-2xl border border-white/10 bg-[#0f1622] p-8 text-center shadow-lg hover:shadow-emerald-500/20 transition">
    <div className="mb-4 flex justify-center text-emerald-400 text-3xl">
      <i className="fa-solid fa-paintbrush" aria-hidden="true"></i>
    </div>
    <h3 className="mb-2 text-lg font-semibold">Graphic Designer</h3>
    <p className="text-slate-400 text-sm">
      Designing creative visuals, logos, and branding that stand out.
    </p>
  </div>

  {/* Web Design */}
  <div className="rounded-2xl border border-white/10 bg-[#0f1622] p-8 text-center shadow-lg hover:shadow-emerald-500/20 transition">
    <div className="mb-4 flex justify-center text-emerald-400 text-3xl">
      <i className="fa-solid fa-display" aria-hidden="true"></i>
    </div>
    <h3 className="mb-2 text-lg font-semibold">Web Design</h3>
    <p className="text-slate-400 text-sm">
      Creating user-centered designs that balance aesthetics and functionality.
    </p>
  </div>

  {/* Windows & Office Installation */}
  <div className="rounded-2xl border border-white/10 bg-[#0f1622] p-8 text-center shadow-lg hover:shadow-emerald-500/20 transition">
    <div className="mb-4 flex justify-center text-emerald-400 text-3xl">
      <i className="fa-brands fa-windows" aria-hidden="true"></i>
    </div>
    <h3 className="mb-2 text-lg font-semibold">Windows & Office Installation</h3>
    <p className="text-slate-400 text-sm">
      Installing and configuring Windows OS and Microsoft Office for home and business.
    </p>
  </div>

  {/* Computer Password Unlock */}
  <div className="rounded-2xl border border-white/10 bg-[#0f1622] p-8 text-center shadow-lg hover:shadow-emerald-500/20 transition">
    <div className="mb-4 flex justify-center text-emerald-400 text-3xl">
      <i className="fa-solid fa-lock-open" aria-hidden="true"></i>
    </div>
    <h3 className="mb-2 text-lg font-semibold">Computer Password Unlock</h3>
    <p className="text-slate-400 text-sm">
      Securely resetting or unlocking computer passwords to regain access.
    </p>
  </div>
</div>

      </div>
    </section>
  );
}
