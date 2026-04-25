import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;       
  description: string;
}

const Home = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Set the Title for this page
    //document.title = "Murat Uslu | Systems Architect";

    fetch('http://192.168.1.200/api/projects/')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
        <Helmet>
            <title>Murat Uslu | Systems Architect</title>
            <meta name="description" content="Boğaziçi CMPE student specializing in low-level systems." />
        </Helmet>

        <main className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
                <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6 tracking-widest uppercase">
                Boğaziçi University • CMPE
                </div>
                <h1 className="text-6xl md:text-7xl font-extrabold text-white tracking-tighter mb-8 leading-[1.1]">
                Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Low-Level</span> Systems.
                </h1>
                <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl">
                Second-year Computer Engineering student. 
                Passionate about kernel development, memory management, and high-performance hardware abstraction.
                </p>
                <div className="flex gap-4">
                <Link to="/projects" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-900/20">
                    Explore Projects
                </Link>
                </div>
            </div>

            {/* Terminal UI */}
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-[#0a0f1e] border border-white/10 rounded-2xl overflow-hidden shadow-2xl font-mono">
                <div className="bg-white/5 px-4 py-3 flex gap-2 border-b border-white/5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                    <span className="ml-4 text-[10px] text-slate-500 uppercase tracking-widest">murty@bogazici:~/workspace</span>
                </div>
                <div className="p-8 space-y-4 text-sm">
                    <div className="flex gap-3">
                    <span className="text-blue-400">➜</span>
                    <span className="text-white">ls -la</span>
                    </div>
                    <div className="space-y-2">
                    {projects.map(p => (
                        <div key={p.id} className="flex flex-col md:flex-row md:items-center gap-2 group/item">
                        <span className="text-slate-600 text-xs">drwxr-xr-x</span>
                        <span className="text-indigo-400 font-bold">{p.title}</span>
                        <span className="text-slate-500 text-[10px] opacity-0 group-hover/item:opacity-100 transition-opacity">
                            // {p.description}
                        </span>
                        </div>
                    ))}
                    </div>
                    <div className="pt-4 flex gap-3 border-t border-white/5">
                    <span className="text-blue-400">➜</span>
                    <span className="inline-block w-2 h-5 bg-blue-500 animate-pulse"></span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </main>


    </>

    
  );
};

export default Home;