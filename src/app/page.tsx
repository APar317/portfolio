import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Terminal, Download } from "lucide-react";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24 py-12 md:py-24">
      <div className="flex-1 space-y-8 max-w-3xl">
        {/* Main Heading */}
        <div className="space-y-2 mb-6">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase drop-shadow-sm">
            APAR SARAN
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-300 mt-2">
            Cloud & DevOps <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">Engineer</span>
          </h2>
        </div>

        {/* Description */}
        <div className="space-y-4 text-lg md:text-xl text-slate-400 font-light leading-relaxed">
          <p>
            DevOps Engineer with hands-on experience in <strong className="text-slate-200 font-medium">CI/CD pipeline automation, containerization, AWS, and infrastructure management</strong>. Passionate about building reliable, scalable, and automated deployment workflows that accelerate software delivery and reduce manual effort.
          </p>
          <p>
            Currently pursuing a B.Tech in Electrical Engineering (CS Specialization) at DEI, I have successfully architected cloud infrastructures and optimized software delivery pipelines during my tenure at Third AI Platforms. I also bring a strong background in Machine Learning research from my time at the Ministry of Education and MNNIT, allowing me to seamlessly bridge the gap between AI development and robust DevOps practices. 
          </p>
          <p>
            My core expertise lies in leveraging tools like <strong className="text-slate-200 font-medium">Kubernetes, Terraform, Docker, and Jenkins</strong> to engineer highly available and resilient systems.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link 
            href="/contact" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-sky-500 text-slate-950 font-semibold rounded-xl hover:bg-sky-400 transition-all duration-300 shadow-lg shadow-sky-500/20"
          >
            Get in Touch
          </Link>
          <a 
            href="/Apar_Saran_Resume.pdf" 
            download="Apar_Saran_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-slate-800 border border-sky-500/30 text-sky-400 font-medium rounded-xl hover:bg-slate-800/80 hover:border-sky-400 transition-all duration-300 group"
          >
            <Download className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
            Download Resume
          </a>
          <Link 
            href="/projects" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-slate-800/50 border border-slate-700 text-slate-200 font-medium rounded-xl hover:bg-slate-800 hover:border-slate-500 transition-all duration-300"
          >
            View Projects
          </Link>
          <Link 
            href="/experience" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-slate-800/50 border border-slate-700 text-slate-200 font-medium rounded-xl hover:bg-slate-800 hover:border-slate-500 transition-all duration-300 group"
          >
            View Experience
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-shrink-0 relative mt-12 md:mt-0 w-full max-w-xs md:max-w-sm lg:max-w-md">
        <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden border-4 border-slate-800/50 shadow-2xl z-10">
          <Image 
            src="/profile.jpg" 
            alt="Apar Saran" 
            fill 
            className="object-cover hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-sky-500/20 to-blue-600/20 blur-3xl rounded-3xl -z-10 animate-pulse" />
      </div>
    </div>
  );
}
