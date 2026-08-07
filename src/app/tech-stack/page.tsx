import { Code2, Cloud, Wrench, Monitor, Layers, CheckCircle2 } from "lucide-react";

export default function TechStack() {
  const categories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-6 h-6 text-sky-400" />,
      skills: ["C++", "Python", "Shell Scripting"]
    },
    {
      title: "Cloud & Infrastructure",
      icon: <Cloud className="w-6 h-6 text-sky-400" />,
      skills: ["AWS", "Terraform", "Docker", "Kubernetes", "Ansible"]
    },
    {
      title: "CI/CD & DevOps Tools",
      icon: <Wrench className="w-6 h-6 text-sky-400" />,
      skills: ["Git", "GitHub", "GitHub Actions", "Jenkins", "Maven", "Nexus", "SonarQube"]
    },
    {
      title: "Operating Systems",
      icon: <Monitor className="w-6 h-6 text-sky-400" />,
      skills: ["Linux", "Windows"]
    }
  ];

  return (
    <div className="flex-1 flex flex-col py-8 md:py-12">
      <div className="flex items-center space-x-3 mb-10 border-b border-slate-800 pb-6">
        <Layers className="w-8 h-8 text-sky-400" />
        <h1 className="text-3xl font-bold text-slate-50">Tech Stack</h1>
      </div>
      
      <div className="space-y-12 w-full">
        {categories.map((category) => (
          <div key={category.title}>
            <div className="flex items-center space-x-3 mb-6">
              {category.icon}
              <h2 className="text-xl font-bold text-slate-200">{category.title}</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.skills.map((skill) => (
                <div 
                  key={skill} 
                  className="flex items-center space-x-3 p-4 bg-slate-800/40 border border-slate-700/50 rounded-xl hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 group"
                >
                  <CheckCircle2 className="w-5 h-5 text-slate-500 group-hover:text-sky-400 transition-colors" />
                  <span className="font-medium text-slate-300 group-hover:text-slate-100 transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
