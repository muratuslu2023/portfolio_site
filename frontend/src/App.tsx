import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects'; // Create this next

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-blue-500/30">
        {/* Background Decor (Stays on every page) */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -right-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Navbar (Stays on every page) */}
        <nav className="relative z-10 max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
          <Link to="/" className="text-xl font-mono font-bold text-white tracking-tight">
            <span className="text-blue-500">&lt;</span>MURAT_USLU <span className="text-blue-500">/&gt;</span>
          </Link>

          <div className="flex items-center gap-8 text-sm font-medium text-slate-400">
            <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <Link to="/projects" className="hover:text-blue-400 transition-colors">Projects</Link>
            <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
            
            <a href="https://github.com/muratuslu2023" target="_blank" rel="noreferrer"
               className="bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full border border-white/10 text-white transition-all">
              GitHub
            </a>
          </div>
        </nav>

        {/* This is where the pages swap out */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;