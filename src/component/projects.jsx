// Projects.jsx
import grenvolt from '../assets/greenviolt.png'
import minstry from '../assets/minstry.jpg'
import keystone from '../assets/keystone.jpg'
import hayaat from '../assets/hayaat.jpg'
import sundus from '../assets/sundus.jpg'
export default function Projects() {
  return (
    <section className="rounded-2xl border border-white/10 bg-[#0f1622] p-6 mt-10">
      <h3 className="mb-6 text-3xl font-bold text-white">Projects</h3>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Project 1 */}
        <div className="rounded-xl border border-white/10 bg-[#1a2232] overflow-hidden shadow-lg">
          <img
            src={grenvolt}
            alt="Solar Energy Project"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h4 className="text-xl font-semibold text-white">Greenvolt Company</h4>
            <p className="mt-2 text-sm text-slate-300">
is company that working Solar Energy.
            </p>
            <a
              href="https://greenvolt-energy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block w-full rounded-lg bg-emerald-500 px-4 py-2 text-center text-sm font-semibold text-slate-900 hover:bg-emerald-400"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="rounded-xl border border-white/10 bg-[#1a2232] overflow-hidden shadow-lg">
          <img
            src={minstry}
            alt="Water Supply Initiative"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h4 className="text-xl font-semibold text-white">Ministry Energy And Water Resource Of Jubaland</h4>
            <p className="mt-2 text-sm text-slate-300">
              is a website of ministry of That show that worlds their works
              </p>
            <a
              href="https://moewr-jubalandstate.so/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block w-full rounded-lg bg-emerald-500 px-4 py-2 text-center text-sm font-semibold text-slate-900 hover:bg-emerald-400"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="rounded-xl border border-white/10 bg-[#1a2232] overflow-hidden shadow-lg">
          <img
            src={hayaat}
            alt="Digital Education Platform"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h4 className="text-xl font-semibold text-white">Hayaat Logistic Company</h4>
            <p className="mt-2 text-sm text-slate-300">
              is Logistic Company
            </p>
            <a
              href="https://hayaat-logistic.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block w-full rounded-lg bg-emerald-500 px-4 py-2 text-center text-sm font-semibold text-slate-900 hover:bg-emerald-400"
            >
              View Project
            </a>
          </div>
        </div>
        {/* Project 4 */}
        <div className="rounded-xl border border-white/10 bg-[#1a2232] overflow-hidden shadow-lg">
          <img
            src={keystone}
            alt="Digital Education Platform"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h4 className="text-xl font-semibold text-white">Keystone Consultant</h4>
            <p className="mt-2 text-sm text-slate-300">
              is Consultant Company
            </p>
            <a
              href="https://keystone-consultant.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block w-full rounded-lg bg-emerald-500 px-4 py-2 text-center text-sm font-semibold text-slate-900 hover:bg-emerald-400"
            >
              View Project
            </a>
          </div>
        </div>
        {/* Project 5 */}
        <div className="rounded-xl border border-white/10 bg-[#1a2232] overflow-hidden shadow-lg">
          <img
            src={sundus}
            alt="Digital Education Platform"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h4 className="text-xl font-semibold text-white">Sundus Logistic Company</h4>
            <p className="mt-2 text-sm text-slate-300">
              is Logistic Company
            </p>
            <a
              href="sundus.ltd"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block w-full rounded-lg bg-emerald-500 px-4 py-2 text-center text-sm font-semibold text-slate-900 hover:bg-emerald-400"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
