"use client";

import { useState } from "react";
import { Code2, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const projects = [
    {
      id: "smart-hospital",
      title: "Smart Hospital Automation Platform",
      date: "April 2026 - June 2026",
      shortDescription: "End-to-end deployment and customization of the Bahmni healthcare framework to fully digitize a local hospital's workflow, integrating clinical, billing, and pharmacy services.",
      techStack: ["AWS", "Google Cloud", "Docker", "OpenMRS", "OpenEMR", "Odoo"],
      github: "https://github.com/aparsaran1721/Bahmni-Project",
      fullDetails: {
        overview: "A comprehensive project aimed at transforming a manual healthcare facility into a fully automated digital ecosystem. By leveraging the open-source Bahmni framework, I orchestrated the seamless interaction between multiple critical healthcare modules.",
        impactPoints: [
          "Deployed and customized the Bahmni framework across 3 platforms (OpenMRS, OpenEMR, and Odoo 16 ERP), digitizing clinical/admin workflows for a hospital serving 100+ daily OPD patients.",
          "Engineered 8+ custom Docker images, resolved 12+ networking/AtomFeed synchronization errors, and patched 4 critical bugs in scheduling and provider-mapping modules.",
          "Automated 7 hospital workflows: patient UHID registration, doctor profile, scheduling, OPD queue, clinical EMR consult, e-prescription, and Odoo billing/invoicing.",
          "Synced data between OpenMRS and Odoo via AtomFeed, ensuring real-time patient record propagation across clinical, pharmacy, and billing modules with zero data duplication."
        ],
        components: [
          "OpenMRS (Clinical & Patient Management)",
          "OpenEMR (Electronic Medical Records)",
          "Odoo (Billing & Pharmacy Inventory)",
          "Docker (Container Orchestration)",
          "AWS / Google Cloud (Infrastructure)"
        ]
      }
    },
    {
      id: "headless-ecommerce",
      title: "Headless E-Commerce Platform",
      date: "May 2026",
      shortDescription: "A decoupled, blazing-fast e-commerce platform built with Astro and PocketBase, featuring automated deployments via GitHub Actions and Cloudflare Pages.",
      techStack: ["Astro", "PocketBase", "GCP", "GitHub Actions", "Cloudflare Pages"],
      github: "https://github.com/aparsaran1721/RuhaniCreations-Website",
      fullDetails: {
        overview: "The legacy platform was slow, monolithic, and difficult to manage, significantly hindering user experience. I completely transformed it into a blazing-fast, decoupled architecture designed for extreme performance and ease of use. The new system separates content management from frontend rendering, allowing non-technical store managers to update the product catalog effortlessly while maintaining sub-second load times.",
        ndaNote: "Due to a strict Non-Disclosure Agreement (NDA), I cannot publicly share the client's name or the live website URL. The provided GitHub repository contains the sanitized core architecture.",
        impactPoints: [
          "Engineered a decoupled, high-performance E-commerce platform by integrating Astro (SSG) and PocketBase (Headless CMS) on GCP, reducing page load times to 1-3 seconds and achieving perfect Lighthouse scores.",
          "Eliminated 24/7 server hosting costs by leveraging SSG; configured the GCP Compute Engine VM to run on-demand dynamically only during product catalog modifications (add/edit/delete updates).",
          "Deployed a live, fully synchronized catalog of 20+ products using PocketBase webhooks to trigger automated frontend rebuilds and CI/CD pipelines on Cloudflare Pages via GitHub Actions.",
          "Secured database endpoints by developing server-side API proxy routes and response caching, shielding database credentials and preventing direct database exploitation."
        ],
        components: [
          "Astro (Static Site Generation)",
          "PocketBase (Headless CMS / Database)",
          "Google Cloud Platform (Compute Engine VM)",
          "GitHub Actions (CI/CD Webhook Routing)",
          "Cloudflare Pages (Global Edge Hosting)"
        ]
      }
    },
    {
      id: "restaurant-erp",
      title: "Food-Startup",
      date: "July 2026",
      shortDescription: "A comprehensive, cloud-hosted restaurant management platform featuring Dine-in, Delivery, KOT generation, and automated billing for a food startup.",
      techStack: ["ERPNext", "Frappe", "Docker", "Google Cloud"],
      fullDetails: {
        overview: "Architected and deployed an end-to-end Restaurant Point of Sale (POS) and management ecosystem tailored for a food startup. By configuring ERPNext and customizing its Hospitality module, the system handles everything from front-of-house operations to backend inventory and billing.",
        impactPoints: [
          "Customized and integrated the ERPNext Hospitality module to perfectly align with the startup's specific operational workflow.",
          "Configured built-in ERPNext features to seamlessly handle Dine-in management (table tracking) and Delivery routing.",
          "Utilized native ERPNext capabilities to automate Kitchen Order Ticket (KOT) generation and route orders directly to the kitchen.",
          "Set up standard ERPNext billing and invoicing engines to generate digital invoices featuring customer names and tax splits.",
          "Containerized the Frappe/ERPNext stack using Docker and deployed it on Google Cloud for high availability and zero-downtime scaling during peak restaurant hours."
        ],
        components: [
          "ERPNext (Hospitality & POS Modules)",
          "Frappe Framework (Custom Backend Logic)",
          "Docker (Containerization)",
        ]
      }
    },
    {
      id: "cow-rfid-tracking",
      title: "RSS Dairy Cow Monitoring System",
      date: "Sept 2025 - Feb 2026",
      shortDescription: "A portable, backpack-worn RFID system paired with a mobile app for infrastructure-free, real-time dairy farm monitoring and cattle health tracking.",
      techStack: ["Dart", "C++", "Python", "RFID Hardware", "Offline-First"],
      github: "https://github.com/aparsaran1721/RSS_COWRFID_BACKEND",
      githubFrontend: "https://github.com/aparsaran1721/RSS_COWRFID_FRONTEND",
      fullDetails: {
        overview: "Developed an innovative 'Design Engineering Theme Development (DETD)' project aimed at solving manual herd management in Indian dairy farms. We engineered a custom wearable backpack RFID system that operates completely offline. By attaching UHF (Ultra-High Frequency) passive tags to cows, the system eliminates the need for expensive fixed infrastructure while providing real-time analytics to farm workers.",
        impactPoints: [
          "Engineered a portable, wearable backpack RFID reader system paired wirelessly with a mobile application to scan UHF tags without requiring internet connectivity.",
          "Fitted cows with passive UHF RFID ear tags for highly accurate, long-range unique identification across large grazing fields and Bada enclosures.",
          "Developed an offline-first mobile app using Dart to automatically track cow entry/exit, maintain zone-based counts, and display approximate live locations.",
          "Programmed the hardware interface using C++ to ensure fast and reliable transmission of scan data from the wearable backpack reader to the mobile device.",
          "Designed a Python-based backend utility for local data processing and reconciling scan records across different worker shifts.",
          "Implemented health and safety monitoring algorithms to instantly generate alerts for potentially sick or distressed cows based on scan gap anomalies."
        ],
        components: [
          "Dart / Flutter (Offline-First Mobile App)",
          "C++ (Hardware Integration & RFID Reader Logic)",
          "Python (Backend Processing & Analytics)",
          "Wearable Backpack RFID Reader System",
          "UHF (Ultra-High Frequency) Passive Ear Tags",
          "Local Storage (Zero Cloud Dependency)"
        ]
      }
    },
    {
      id: "ml-virtual-lab",
      title: "Machine Learning Virtual Lab",
      date: "Nov 2025 - Mar 2026",
      shortDescription: "Developed interactive Machine Learning virtual lab experiments under an initiative by the Ministry of Education.",
      techStack: ["Machine Learning"],
      links: [
        { title: "Decision Trees Lab", url: "https://ml-dei.vlabs.ac.in/exp/decision-trees/" },
        { title: "Random Forest Lab", url: "https://ml-dei.vlabs.ac.in/exp/random-forest/" }
      ],
      fullDetails: {
        overview: "Contributed to the development of a Machine Learning Virtual Lab under an initiative of the Ministry of Education. Assisted in designing educational animations, instructional videos, presentations, and website interfaces to enhance the learning experience and accessibility of the virtual lab.",
        impactPoints: [
          "Developed interactive educational experiments and animations for complex Machine Learning topics like Decision Trees and Random Forests.",
          "Designed instructional videos and presentations to guide students through the virtual lab interface and learning objectives.",
          "Contributed to core code development and technical documentation, ensuring the platform was highly accessible and easy to navigate for non-technical users.",
          "Collaborated with educators and developers to structure the UI/UX of the virtual lab for maximum student engagement."
        ],
        components: [
          "Interactive Web Experiments",
          "Educational Animations & Videos",
          "UI/UX Design",
          "Code Development & Documentation"
        ]
      }
    },
    {
      id: "mnnit-research",
      title: "Smart Grid Fault Detection & Price Prediction",
      date: "May 2025 - Jun 2025",
      shortDescription: "A research project at MNNIT Allahabad focusing on PV fault detection (open/short circuits) and electricity price forecasting using ML/DL.",
      techStack: ["Machine Learning", "Deep Learning", "Image Processing", "Python"],
      links: [
        { title: "View Project Data & Code", url: "https://drive.google.com/drive/folders/1itYxU6oMHF0EH_qd8MfquU_RFtURaCMD" }
      ],
      fullDetails: {
        overview: "Conducted a research internship at Motilal Nehru National Institute of Technology (MNNIT) Allahabad, focusing on smart grid analytics. The project involved simulating photovoltaic (PV) faults and predicting electricity prices using advanced machine learning and deep learning models.",
        impactPoints: [
          "Analyzed smart-grid data and image datasets (15,000+ samples) to detect open and short circuit faults using ML and DL models.",
          "Developed and compared 5 ML/DL models trained on a 160,000+ row dataset to forecast electricity prices, improving forecasting accuracy and system performance."
        ],
        components: [
          "Deep Learning (LSTM, ANN) & ML (XGBoost)",
          "Python (Pandas, NumPy, Scikit-Learn)",
          "Data Simulation & Time-Series Forecasting",
          "Matplotlib & Seaborn (Data Visualization)"
        ]
      }
    }
  ];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="flex-1 flex flex-col py-8 md:py-12">
      <div className="flex items-center space-x-3 mb-10 border-b border-slate-800 pb-6">
        <Code2 className="w-8 h-8 text-sky-400" />
        <h1 className="text-3xl font-bold text-slate-50">Projects</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full items-stretch">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className={`bg-slate-800/40 border border-slate-700/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col ${
              expandedId && expandedId !== project.id ? "self-start" : "h-full"
            }`}
          >
            {/* Project Header / Brief */}
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <h2 className="text-2xl font-bold text-slate-100">{project.title}</h2>
                <span className="inline-block px-4 py-1.5 bg-slate-900 border border-slate-700 rounded-full text-sm font-medium text-slate-300 whitespace-nowrap">
                  {project.date}
                </span>
              </div>
              
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 rounded-md text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              <button 
                onClick={() => toggleExpand(project.id)}
                className="flex items-center text-slate-400 hover:text-sky-400 transition-colors font-medium mt-auto pt-4"
              >
                {expandedId === project.id ? (
                  <>Hide Details <ChevronUp className="w-5 h-5 ml-1" /></>
                ) : (
                  <>Read More <ChevronDown className="w-5 h-5 ml-1" /></>
                )}
              </button>
            </div>

            {/* Expanded Details */}
            {expandedId === project.id && (
              <div className="px-6 md:px-8 pb-6 md:pb-8 pt-6 border-t border-slate-700/50 bg-slate-900/30">
                
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-lg font-bold text-slate-200">Project Overview</h3>
                    {project.fullDetails.ndaNote && (
                      <span className="px-2 py-0.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold rounded uppercase tracking-wider">
                        NDA Protected
                      </span>
                    )}
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-4">{project.fullDetails.overview}</p>
                  
                  {project.fullDetails.ndaNote && (
                    <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-lg">
                      <p className="text-amber-400/90 text-sm leading-relaxed">
                        <strong className="text-amber-400">Note:</strong> {project.fullDetails.ndaNote}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-bold text-slate-200 mb-4">Key Contributions & Impact</h3>
                  <ul className="space-y-3 text-slate-300 leading-relaxed list-disc ml-5 marker:text-sky-500">
                    {project.fullDetails.impactPoints.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-8">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-200 mb-4">Deep Tech Stack & Components</h3>
                    <ul className="space-y-2 text-slate-400 list-disc ml-5 marker:text-slate-600">
                      {project.fullDetails.components.map((comp, idx) => (
                        <li key={idx}>{comp}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {(project.github || project.githubFrontend || project.links) && (
                    <div className="flex-shrink-0">
                      <h3 className="text-lg font-bold text-slate-200 mb-4">Links</h3>
                      <div className="flex flex-col gap-3">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 bg-slate-800 border border-slate-600 text-slate-200 rounded-lg hover:bg-slate-700 hover:text-sky-400 transition-colors">
                            <FaGithub className="w-5 h-5 mr-2" />
                            {project.githubFrontend ? "Backend Source" : "View Source Code"}
                          </a>
                        )}
                        {project.githubFrontend && (
                          <a href={project.githubFrontend} target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 bg-slate-800 border border-slate-600 text-slate-200 rounded-lg hover:bg-slate-700 hover:text-sky-400 transition-colors">
                            <FaGithub className="w-5 h-5 mr-2" />
                            Frontend Source
                          </a>
                        )}
                        {project.links && project.links.map((link: any, idx: number) => (
                          <a key={idx} href={link.url} target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 bg-slate-800 border border-slate-600 text-slate-200 rounded-lg hover:bg-slate-700 hover:text-sky-400 transition-colors">
                            <ExternalLink className="w-5 h-5 mr-2" />
                            {link.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
