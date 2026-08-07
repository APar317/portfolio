import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <div className="flex-1 flex flex-col justify-center py-8">
      <div className="flex items-center space-x-3 mb-6">
        <GraduationCap className="w-8 h-8 text-sky-400" />
        <h1 className="text-3xl font-bold text-slate-50">Education</h1>
      </div>
      
      <div className="space-y-6">
        {/* B.Tech */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-100">B.Tech in Electrical Engineering</h2>
              <p className="text-lg text-sky-400 mt-1">Specialization in Computer Science</p>
              <p className="text-slate-400 mt-3 font-medium">DEI Educational Institute (Deemed University)</p>
              <p className="text-slate-500 text-sm mt-1">Dayalbagh, Agra, India</p>
              <p className="text-slate-300 mt-4"><span className="font-semibold text-slate-200">CGPA:</span> 82.7 (till 6th sem)</p>
            </div>
            <div className="text-left md:text-right md:self-start">
              <span className="inline-block px-4 py-1.5 bg-slate-900 border border-slate-700 rounded-full text-sm font-medium text-slate-300">
                2023 - 2027
              </span>
            </div>
          </div>
        </div>

        {/* Intermediate */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-100">Intermediate (Class 12)</h2>
              <p className="text-lg text-sky-400 mt-1">REI Intermediate College</p>
              <p className="text-slate-500 text-sm mt-1">Dayalbagh, Agra, India</p>
              <p className="text-slate-300 mt-4"><span className="font-semibold text-slate-200">CGPA:</span> 93.2</p>
            </div>
            <div className="text-left md:text-right md:self-start">
              <span className="inline-block px-4 py-1.5 bg-slate-900 border border-slate-700 rounded-full text-sm font-medium text-slate-300">
                2021 - 2023
              </span>
            </div>
          </div>
        </div>

        {/* High School */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-100">High School (Class 10)</h2>
              <p className="text-lg text-sky-400 mt-1">REI Intermediate College</p>
              <p className="text-slate-500 text-sm mt-1">Dayalbagh, Agra, India</p>
              <p className="text-slate-300 mt-4"><span className="font-semibold text-slate-200">CGPA:</span> 99.8</p>
            </div>
            <div className="text-left md:text-right md:self-start">
              <span className="inline-block px-4 py-1.5 bg-slate-900 border border-slate-700 rounded-full text-sm font-medium text-slate-300">
                2019 - 2021
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
