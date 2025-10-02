import Projects from "../component/projects";

export default function ResumeComponent() {
  return (
    <>
    
    <section className="min-h-screen w-full bg-[#0b1118] text-slate-100">
      {/* Accent bar matching header */}
      <div className="h-1 w-full bg-emerald-500" />

      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-8">
        {/* Title */}
        <header className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl">
            Resume
          </h1>
          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400 ring-1 ring-emerald-500/30">
            My Resume
          </span>
        </header>

        {/* Grid Layout */}
        <div className="grid gap-6 md:grid-cols-12">
          {/* Left Column */}
          <aside className="md:col-span-4 lg:col-span-3">
            <div className="rounded-2xl border border-white/10 bg-[#0f1622] p-6 shadow-xl">
              <div className="mx-auto mb-6 h-36 w-36 overflow-hidden rounded-full bg-emerald-500/20 flex items-center justify-center text-4xl font-bold text-emerald-400">
                <img src="https://engmaajid.vercel.app/assets/img/maajid/pro.jpg" alt="" />
              </div>
              <h2 className="text-center text-lg font-semibold">Eng Abdi Maajid Hajji</h2>
              <p className="mt-1 text-center text-xs text-slate-400">Computer Science Engineer</p>
              <div className="mt-6 space-y-4 text-sm">
                <p className="text-slate-300">maajid23456@gmail.com</p>
                <p className="text-slate-300">+252 61 9829928</p>
                <p className="text-slate-300">Mogadishu, Somalia</p>
              </div>
            </div>
          </aside>

          {/* Main Column */}
          <main className="md:col-span-8 lg:col-span-6 space-y-6">
            <section className="rounded-2xl border border-white/10 bg-[#0f1622] p-6">
              <h3 className="mb-3 text-2xl font-bold">Profile</h3>
              <p className="leading-relaxed text-slate-300">
               I am a Computer Engineer and hold a Bachelor’s Degree in Computer Science. I have strong technical knowledge in software development, networking, and system management. With hands-on experience in web development, IT support, and problem-solving, I am passionate about designing efficient digital solutions and continuously expanding my skills to stay updated with modern technologies
              </p>
            </section>

            <section className="rounded-2xl border border-white/10 bg-[#0f1622] p-6">
              <h3 className="mb-3 text-3xl font-bold">Education</h3>
              <ul className="space-y-3 text-sm">
                 <li>
                  <p className="font-medium">Primary School</p>
                  <p className="text-slate-400">208-2016</p>
                </li>
                 <li>
                  <p className="font-medium">Secondary School</p>
                  <p className="text-slate-400">2018-2022</p>
                </li>
                 <li>
                  <p className="font-medium">Graphic Designer</p>
                  <p className="text-slate-400">2022-2023</p>
                </li>
                <li>
                  <p className="font-medium">Fullstack Webdeveloper</p>
                  <p className="text-slate-400">2023-20224</p>
                </li>
              
                 <li>
                  <p className="font-medium">Computer Science</p>
                  <p className="text-slate-400">2024 – 2025</p>
                </li>
              </ul>
            </section>

            <section className="rounded-2xl border border-white/10 bg-[#0f1622] p-6">
              <h3 className="mb-3 text-3xl font-bold">Work Experience</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <p className="font-medium">Customer Care Director and product expert in Heegan Technology</p>
                  
                  <p className="text-slate-400">2025 – 2026</p>
                  <p className="text-slate-300">Handled daily operations and supported project delivery with cross‑team collaboration.</p>
                 
                  <div className="flex space-x-4">

    
<a href="https://www.facebook.com/share/v/16f6JY7y61/" className="inline-block rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-emerald-400"><i className="fa-brands fa-facebook-f text-white"></i></a>
<a href="https://www.tiktok.com/@heegantechnology?_t=ZM-90C6Q3PdPoJ&_r=1" className="inline-block rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-emerald-400">  <i className="fa-brands fa-tiktok text-white"></i></a>
                  </div>
             
 

                </li>
                <div className="w-full h-1 bg-white" />
                <li>
                  <p className="font-medium">School Teacher on Manbac Primary and secondary School</p>
                  
                  <p className="text-slate-400">2024 – 2025</p>
                  <p className="text-slate-300">Handled daily operations and supported project delivery with cross‑team collaboration.</p>
                 
                  <div className="">

    
<a href="https://www.facebook.com/photo/?fbid=355515780779213&set=a.106283065702487" className="inline-block rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-emerald-400"><i className="fa-brands fa-facebook-f text-white"></i></a>

                  </div>
             
 

                </li>
                 <div className="w-full h-1 bg-white" />
                
              </ul>
            </section>
           <section className="rounded-2xl border border-white/10 bg-[#0f1622] p-6">
  <h3 className="mb-6 text-3xl font-bold text-white">References</h3>

  <div className="grid md:grid-cols-2 gap-6">
    {/* Reference 1 */}
    <div className="rounded-xl border border-white/10 bg-[#1a2232] p-5 shadow hover:shadow-lg transition">
      <h4 className="text-xl font-semibold text-white">CEO Of The Company</h4>
      <p className="text-slate-400">Heegan Technology (2025 – 2026)</p>
      

      {/* Contact Info */}
      <div className="mt-4 text-sm space-y-1">
        <p className="text-white font-medium">Name: Eng Shafie</p>
        <p>
          <a href="tel:+252 61 5801525" className="text-emerald-400 hover:underline">
            Phone: +252 61 5801525
          </a>
        </p>
        <p>
          <a href="mailto:heegantechnology9@gmail.com" className="text-emerald-400 hover:underline">
            Email: heegantechnology9@gmail.com
          </a>
        </p>
      </div>

      {/* Social Links */}
      <div className="flex space-x-3 mt-4">
        <a
          href="https://www.facebook.com/share/v/16f6JY7y61/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500 hover:bg-emerald-400"
        >
          <i className="fa-brands fa-facebook-f text-white"></i>
        </a>
        <a
          href="https://www.tiktok.com/@heegantechnology?_t=ZM-90C6Q3PdPoJ&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500 hover:bg-emerald-400"
        >
          <i className="fa-brands fa-tiktok text-white"></i>
        </a>
      </div>
    </div>

    {/* Reference 2 */}
    <div className="rounded-xl border border-white/10 bg-[#1a2232] p-5 shadow hover:shadow-lg transition">
      <h4 className="text-xl font-semibold text-white">Head Of School(Principal)</h4>
      <p className="text-slate-400">Manbac Primary & Secondary (2024 – 2025)</p>
    

      {/* Contact Info */}
      <div className="mt-4 text-sm space-y-1">
        <p className="text-white font-medium">Name: Ustaad Nageeye</p>
        <p>
          <a href="tel: +252 61 5214289" className="text-emerald-400 hover:underline">
            Phone: +252 61 5214289
          </a>
        </p>
        <p>
          <a href="mailto:almanbacschool@gmail.com" className="text-emerald-400 hover:underline">
            Email: almanbacschool@gmail.com
          </a>
        </p>
      </div>

      {/* Social Links */}
      <div className="flex space-x-3 mt-4">
        <a
          href="https://www.facebook.com/photo/?fbid=355515780779213&set=a.106283065702487"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500 hover:bg-emerald-400"
        >
          <i className="fa-brands fa-facebook-f text-white"></i>
        </a>
      </div>
    </div>
    {/* Reference 3 */}
    <div className="rounded-xl border border-white/10 bg-[#1a2232] p-5 shadow hover:shadow-lg transition">
      <h4 className="text-xl font-semibold text-white">Energy Director </h4>
      <p className="text-slate-400">ministry water and Energy Resource Of Jubaland</p>
    

      {/* Contact Info */}
      <div className="mt-4 text-sm space-y-1">
        <p className="text-white font-medium">Name:Abdi Salan Hajji</p>
        <p>
          <a href="tel: +252 61 5214289" className="text-emerald-400 hover:underline">
            Phone: +252 61 5726669
          </a>
        </p>
        <p>
          <a href="mailto:moewr2023@gmail.com" className="text-emerald-400 hover:underline">
            Email: moewr2023@gmail.com
          </a>
        </p>
      </div>

      {/* Social Links */}
      <div className="flex space-x-3 mt-4">
        <a
          href="https://www.facebook.com/photo/?fbid=355515780779213&set=a.106283065702487"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500 hover:bg-emerald-400"
        >
          <i className="fa-brands fa-facebook-f text-white"></i>
        </a>
      </div>
    </div>
  </div>
</section>

          </main>

          {/* Right Column */}
          <aside className="md:col-span-12 lg:col-span-3 space-y-6">
            <section className="rounded-2xl border border-white/10 bg-[#0f1622] p-6">
              <h3 className="mb-3 text-lg font-semibold">Languages</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>Somali – Native</li>
                <li>English – B2</li>
                <li>Arabic – Basic</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-white/10 bg-[#0f1622] p-6">
              <h3 className="mb-3 text-lg font-semibold">Soft Skills</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>Communication</li>
                <li>Problem Solving</li>
                <li>Attention to Detail</li>
                <li>Teamwork</li>
                <li>Adaptability</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-white/10 bg-[#0f1622] p-6">
              <h3 className="mb-3 text-lg font-semibold">Technical Skills</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-300">
                <li>HTML, CSS (Tailwind)</li>
                <li>JavaScript, React</li>
                <li>Window Installation</li>
                <li>Computer Unlock</li>
                <li>Web Design</li>
                <li>Backend Developer</li>
                <li>Frontend Developer</li>
                <li>Graphic Designer</li>
                <li>Git & GitHub</li>
              </ul>
            </section>

            <section className="rounded-2xl flex space-x-4 border border-white/10 bg-[#0f1622] p-6">
            <div> 
                <h3 className="mb-3 text-lg font-semibold">GitHub</h3>
              <a href="https://github.com/maajid34" className="inline-block rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-emerald-400">
                View Profile
              </a>

            </div>
            <div> 
                <h3 className="mb-3 text-lg font-semibold">Linkedin</h3>
              <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" className="inline-block rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-emerald-400">
                View Profile
              </a>

            </div>
             
            </section>
          </aside>
        </div>
      </div>
    </section>
<Projects/>
    </>
  );
}
