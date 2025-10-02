


import { Link } from "react-router-dom";

function Header() {
 
const hexClip = "polygon(25% 6.7%,75% 6.7%,100% 50%,75% 93.3%,25% 93.3%,0% 50%)";
  return (


    <section className="fixed top-0 left-0 right-0 z-50 overflow-hidden bg-[#11161d] text-white shadow-lg">
  {/* subtle glow */}
  <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-emerald-500/25 blur-3xl" />

  <div className="mx-auto max-w-7xl px-6 py-6">
    <div className="flex items-center justify-between">
      {/* Logo / Name */}
      <div className="flex items-center gap-2">
        <div className="grid h-8 w-8 place-items-center rounded-xl bg-emerald-500 text-sm font-bold text-slate-900">
          A
        </div>
        <span className="font-semibold text-slate-200">Eng Maajid</span>
      </div>

      {/* Nav */}
      <nav className="hidden items-center gap-8 md:flex">
        <button className="text-slate-300 hover:text-white">
          <Link to={"/"}>Home</Link>
        </button>
        <button className="text-slate-300 hover:text-white">
          <Link to={"/About"}>About Me</Link>
        </button>
        <button className="text-slate-300 hover:text-white">
          <Link to={"/resume"}>Resume</Link>
        </button>
      </nav>

      {/* Search */}
      <div className="hidden items-center gap-2 md:flex">
        <div className="flex items-center gap-2 rounded-xl bg-slate-800 px-3 py-2">
          {/* search icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 opacity-70"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M21.53 20.47l-4.66-4.66A7.5 7.5 0 1016 17.5l4.66 4.66a.75.75 0 101.06-1.06zM4.5 10a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0z" />
          </svg>
          <input
            placeholder="Search..."
            className="bg-transparent text-sm placeholder:text-slate-400 outline-none"
          />
        </div>
        <button className="rounded-xl bg-emerald-500 px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-emerald-400">
          Search
        </button>
      </div>
    </div>
  </div>
</section>

        
      
    
  )
}

export default Header
