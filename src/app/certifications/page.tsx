import { Award, ExternalLink } from "lucide-react";

export default function Certifications() {
  return (
    <div className="flex-1 flex flex-col py-8 md:py-12">
      <div className="flex items-center space-x-3 mb-8">
        <Award className="w-8 h-8 text-sky-400" />
        <h1 className="text-3xl font-bold text-slate-50">Certifications</h1>
      </div>
      
      <div className="w-full">
        {/* Horizontal Box for DevOps Certificate */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 md:p-8 hover:bg-slate-800 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-100 mb-2">DevOps Certificate</h2>
            <p className="text-slate-400 text-base leading-relaxed max-w-3xl">
              Completed the comprehensive DevOps & Cloud Engineer training program from Code for Success.
            </p>
          </div>
          <div className="flex-shrink-0 mt-4 sm:mt-0">
            <a 
              href="https://drive.google.com/file/d/1Mv4EaaZARf0SfWpABYhdpH_QMAjBt9Zh/view?usp=drive_link" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center justify-center px-6 py-3 bg-sky-500 text-slate-950 font-semibold rounded-xl hover:bg-sky-400 transition-all duration-300 shadow-lg shadow-sky-500/20 whitespace-nowrap"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              View Certificate
            </a>
          </div>
        </div>

        {/* Horizontal Box for MNNIT Internship Certificate */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 md:p-8 hover:bg-slate-800 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-100 mb-2">MNNIT Internship Certificate</h2>
            <p className="text-slate-400 text-base leading-relaxed max-w-3xl">
              Completed a research internship at Motilal Nehru National Institute of Technology (MNNIT) Allahabad. (May 2025 - June 2025)
            </p>
          </div>
          <div className="flex-shrink-0 mt-4 sm:mt-0">
            <a 
              href="https://drive.google.com/file/d/1Tw6Wqz4BgGxYF90Vqbs9kZg9TQTVIoUY/view?usp=drive_link" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center justify-center px-6 py-3 bg-sky-500 text-slate-950 font-semibold rounded-xl hover:bg-sky-400 transition-all duration-300 shadow-lg shadow-sky-500/20 whitespace-nowrap"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
