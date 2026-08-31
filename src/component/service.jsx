const services = [
  {
    title: "Full-Stack Web Development",
    icon: "fa-solid fa-code",
    description:
      "Frontend, backend, database integration, API management, dashboards, and complete website delivery.",
  },
  {
    title: "ICT Operations & Support",
    icon: "fa-solid fa-headset",
    description:
      "Daily technical support, device setup, software installation, troubleshooting, and office ICT operations.",
  },
  {
    title: "Hardware Engineering",
    icon: "fa-solid fa-screwdriver-wrench",
    description:
      "Diagnostics, repair, maintenance, configuration, and support for laptops, desktops, printers, and peripherals.",
  },
  {
    title: "CCTV & Biometric Systems",
    icon: "fa-solid fa-video",
    description:
      "CCTV camera installation, monitoring screen setup, fingerprint attendance configuration, enrolment, and testing.",
  },
  {
    title: "Hosting & Deployment",
    icon: "fa-solid fa-cloud-arrow-up",
    description:
      "Domain configuration, hosting setup, server deployment, website administration, and ongoing technical maintenance.",
  },
  {
    title: "Digital Communication",
    icon: "fa-solid fa-camera",
    description:
      "Media coverage, visual content, graphics, presentation materials, and digital communication support.",
  },
];

export default function Services() {
  return (
    <section className="w-full bg-[#0b1118] py-16 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-medium text-emerald-400">Services</p>
          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
            What I Do
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="break-words rounded-lg border border-white/10 bg-[#0f1622] p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-emerald-500/20 sm:p-8"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500/10 text-xl text-emerald-400">
                <i className={service.icon} aria-hidden="true"></i>
              </div>
              <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
