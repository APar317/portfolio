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
            <li>Automated end-to-end software delivery pipelines using Jenkins and GitHub Actions, reducing manual deployment efforts and boosting release frequency.</li>
            <li>Provisioned and managed scalable cloud infrastructure on AWS using Terraform and Docker, containerizing applications for Kubernetes (kubeadm) deployments.</li>
            <li>Integrated SonarQube, Maven, and Nexus Repository to establish robust code quality gates and artifact management.</li>
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
            <div className="text-left md:text-right md:self-start">
              <span className="inline-block px-4 py-1.5 bg-slate-900 border border-slate-700 rounded-full text-sm font-medium text-slate-300">
                May 2025 - Jun 2025
              </span>
            </div>
          </div>
          
          <ul className="space-y-4 text-slate-300 text-base leading-relaxed list-disc list-inside marker:text-sky-400">
            <li>Worked on smart-grid data and image analysis to detect open and short circuit faults using ML and DL techniques.</li>
            <li>Built and optimized ML/DL models for electricity price prediction, improving forecasting accuracy and system performance.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
