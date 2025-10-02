// About.jsx
export default function About() {
  return (
    <section className="mt-[200px] rounded-2xl border border-white/10 bg-[#0f1622] p-6 ">
      <h3 className="mb-6 text-3xl font-bold text-white">About Me</h3>

      <div className="md:flex md:items-center md:space-x-6">
        {/* Profile Image */}
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <img
            src="https://via.placeholder.com/250x250"
            alt="Profile"
            className="w-40 h-40 rounded-xl object-cover border border-white/10 shadow"
          />
        </div>

        {/* Text Content */}
        <div>
          <p className="text-slate-300 leading-relaxed">
            I am a <span className="font-semibold text-white">Full-Stack Web Developer</span> 
            with experience in building modern, responsive, and scalable web applications. 
            Skilled in <span className="text-emerald-400">React, Node.js, PHP, and MongoDB</span>, 
            I enjoy solving problems and delivering clean, user-friendly designs.
          </p>

          <p className="mt-4 text-slate-400">
            Over the past few years, I have worked on projects ranging from government portals 
            and e-commerce platforms to energy and education systems. My goal is to create 
            software that makes a real impact in people’s daily lives.
          </p>

          {/* Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-lg bg-emerald-500 px-5 py-2 text-sm font-semibold text-slate-900 hover:bg-emerald-400 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
