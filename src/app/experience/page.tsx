import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <div className="flex-1 flex flex-col py-8 md:py-12">
      <div className="flex items-center space-x-3 mb-8">
        <Briefcase className="w-8 h-8 text-sky-400" />
        <h1 className="text-3xl font-bold text-slate-50">Experience</h1>
      </div>
      
      <div className="space-y-6 w-full">
        {/* Third AI Platforms */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 md:p-8 hover:bg-slate-800 transition-colors">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-700 pb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-100">Cloud & DevOps Intern</h2>
              <p className="text-lg text-sky-400 mt-1">Third AI Platforms Pvt. Ltd.</p>
              <p className="text-slate-500 text-sm mt-1">Delhi, India</p>
            </div>
            <div className="text-left md:text-right md:self-start">
              <span className="inline-block px-4 py-1.5 bg-slate-900 border border-slate-700 rounded-full text-sm font-medium text-slate-300">
                Apr 2026 - Present
              </span>
            </div>
          </div>
          
          <ul className="ml-5 space-y-4 text-slate-300 text-base leading-relaxed list-disc marker:text-sky-400">
            <li>Automated end-to-end pipelines using Jenkins and GitHub Actions, reducing manual deployment efforts by 40% and boosting release frequency by 3x.</li>
            <li>Provisioned and managed AWS infrastructure using Terraform and Docker, containerizing 12+ applications for Kubernetes (kubeadm) deployments.</li>
            <li>Integrated SonarQube, Maven, and Nexus to establish robust code quality gates and artifact management pipelines, reducing deployment errors by 30%.</li>
          </ul>
        </div>

        {/* Ministry of Education */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 md:p-8 hover:bg-slate-800 transition-colors">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-700 pb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-100">Research Intern</h2>
              <p className="text-lg text-sky-400 mt-1">Ministry of Education</p>
              <p className="text-slate-500 text-sm mt-1">Delhi, India</p>
            </div>
            <div className="text-left md:text-right md:self-start">
              <span className="inline-block px-4 py-1.5 bg-slate-900 border border-slate-700 rounded-full text-sm font-medium text-slate-300">
                Nov 2025 - Mar 2026
              </span>
            </div>
          </div>
          
          <ul className="ml-5 space-y-4 text-slate-300 text-base leading-relaxed list-disc marker:text-sky-400">
            <li>
              Contributed to the development of a Machine Learning Virtual Lab under an initiative of the Ministry of Education. Assisted in designing educational animations, instructional videos, presentations, and website interfaces, while also contributing to code development and technical documentation to enhance the learning experience and accessibility of the virtual lab.
            </li>
          </ul>
        </div>

        {/* Motilal Nehru National Institute of Technology */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 md:p-8 hover:bg-slate-800 transition-colors">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-700 pb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-100">Project Intern</h2>
              <p className="text-lg text-sky-400 mt-1">Motilal Nehru National Institute of Technology</p>
              <p className="text-slate-500 text-sm mt-1">Prayagraj, India</p>
            </div>
            <div className="text-left md:text-right md:self-start flex flex-col items-start md:items-end gap-2">
              <span className="inline-block px-4 py-1.5 bg-slate-900 border border-slate-700 rounded-full text-sm font-medium text-slate-300">
                May 2025 - Jun 2025
              </span>
              <a href="https://drive.google.com/file/d/1Tw6Wqz4BgGxYF90Vqbs9kZg9TQTVIoUY/view?usp=drive_link" target="_blank" rel="noreferrer" className="text-sky-400 hover:text-sky-300 text-sm font-medium transition-colors border border-sky-400/30 bg-sky-400/10 px-3 py-1 rounded-full">
                View Certificate ↗
              </a>
            </div>
          </div>
          
          <ul className="space-y-4 text-slate-300 text-base leading-relaxed list-disc list-inside marker:text-sky-400">
            <li>Analyzed smart-grid data and image datasets (15,000+ samples) to detect open and short circuit faults using ML and DL models.</li>
            <li>Developed and compared 5 ML/DL models trained on a 160,000+ row dataset to forecast electricity prices, improving forecasting accuracy and system performance.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
