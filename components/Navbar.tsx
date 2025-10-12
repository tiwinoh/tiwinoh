import React from 'react';
import { Home, Briefcase, Code2, BookText, Info, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-5 rounded-full border border-gray-200/70 bg-white/70 backdrop-blur-md px-5 py-2 shadow-sm">
        {/* Brand */}
        <a href="/" className="text-sm font-semibold tracking-tight text-gray-900 flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-white text-[10px]">TN</span>
          <span>tiwinoh</span>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-1">
          <a href="/" className="flex items-center gap-2 rounded-full px-3 py-1 text-sm text-gray-700 hover:bg-gray-100">
            <Home size={16} />
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center gap-2 rounded-full px-3 py-1 text-sm text-gray-700 hover:bg-gray-100">
            <Briefcase size={16} />
            <span>Experience</span>
          </a>
          <a href="/projects" className="flex items-center gap-2 rounded-full px-3 py-1 text-sm text-gray-700 hover:bg-gray-100">
            <Code2 size={16} />
            <span>Projects</span>
          </a>
          <a href="#" className="flex items-center gap-2 rounded-full px-3 py-1 text-sm text-gray-700 hover:bg-gray-100">
            <BookText size={16} />
            <span>Blogs</span>
          </a>
          <a href="#" className="flex items-center gap-2 rounded-full px-3 py-1 text-sm text-gray-700 hover:bg-gray-100">
            <Info size={16} />
            <span>About</span>
          </a>
          <a href="/contact" className="flex items-center gap-2 rounded-full px-3 py-1 text-sm text-gray-700 hover:bg-gray-100">
            <Mail size={16} />
            <span>Contact</span>
          </a>
        </div>

              </div>
    </nav>
  );
};

export default Navbar;
