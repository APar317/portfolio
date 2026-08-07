import { Mail, Phone, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="flex-1 flex flex-col py-12 md:py-20">
      <div className="flex items-center space-x-3 mb-8">
        <Mail className="w-8 h-8 text-sky-400" />
        <h1 className="text-3xl font-bold text-slate-50">Contact</h1>
      </div>
      
      <p className="text-slate-400 text-xl mb-12 max-w-3xl leading-relaxed">
        I'm currently looking for new opportunities in Cloud Infrastructure and DevOps engineering. Feel free to reach out via any of the platforms below!
      </p>

      <div className="space-y-6 w-full">
        {/* Email */}
        <a 
          href="mailto:aparsaran1721@gmail.com" 
          className="group flex items-center justify-between p-6 md:p-8 bg-slate-800/50 border border-slate-700 rounded-2xl hover:bg-slate-800 hover:border-slate-600 transition-all duration-300"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-sky-500/10 rounded-lg text-sky-400 group-hover:bg-sky-500/20 transition-colors">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-100">Email</h2>
              <p className="text-slate-400 text-lg mt-1">aparsaran1721@gmail.com</p>
            </div>
          </div>
          <ExternalLink className="w-6 h-6 text-slate-600 group-hover:text-sky-400 transition-colors" />
        </a>

        {/* Phone */}
        <a 
          href="tel:+919927942982" 
          className="group flex items-center justify-between p-6 md:p-8 bg-slate-800/50 border border-slate-700 rounded-2xl hover:bg-slate-800 hover:border-slate-600 transition-all duration-300"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-100">Phone</h2>
              <p className="text-slate-400 text-lg mt-1">+91 9927942982</p>
            </div>
          </div>
          <ExternalLink className="w-6 h-6 text-slate-600 group-hover:text-emerald-400 transition-colors" />
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/aparsaran1721" 
          target="_blank" 
          rel="noreferrer"
          className="group flex items-center justify-between p-6 md:p-8 bg-slate-800/50 border border-slate-700 rounded-2xl hover:bg-slate-800 hover:border-slate-600 transition-all duration-300"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-slate-100/10 rounded-lg text-slate-100 group-hover:bg-slate-100/20 transition-colors">
              <FaGithub className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-100">GitHub</h2>
              <p className="text-slate-400 text-lg mt-1">github.com/aparsaran1721</p>
            </div>
          </div>
          <ExternalLink className="w-6 h-6 text-slate-600 group-hover:text-slate-100 transition-colors" />
        </a>

        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/apar-saran-15b1b1236?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
          target="_blank" 
          rel="noreferrer"
          className="group flex items-center justify-between p-6 md:p-8 bg-slate-800/50 border border-slate-700 rounded-2xl hover:bg-slate-800 hover:border-slate-600 transition-all duration-300"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500/20 transition-colors">
              <FaLinkedin className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-100">LinkedIn</h2>
              <p className="text-slate-400 text-lg mt-1">Apar Saran</p>
            </div>
          </div>
          <ExternalLink className="w-6 h-6 text-slate-600 group-hover:text-blue-400 transition-colors" />
        </a>
      </div>
    </div>
  );
}
