import React from 'react';
import { Rocket, Twitter, Github, Linkedin, Mail } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <main className="min-h-screen font-sans text-gray-900">
      <section className="px-6 pt-24 pb-10">
        <div className="mx-auto max-w-3xl">
          {/* White card hero */}
          <div className="rounded-xl border border-gray-200 bg-white/90 p-10 shadow-sm">
            <div className="mb-6 text-center">
              <h1 className="mb-3 flex items-center justify-center gap-3 text-4xl font-extrabold tracking-tight text-gray-900">
                <Rocket className="text-gray-900" size={40} />
                <span>tiwinoh</span>
              </h1>
              <p className="text-base text-gray-600">Construire des projets utiles et apprendre en chemin.</p>
            </div>

            {/* CTA */}
            <div className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="mailto:contact@tiwinoh.com" className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-5 py-2 text-sm font-semibold text-white hover:bg-black">
                <Mail size={18} />
                <span>Me contacter</span>
              </a>
              <a href="/projects" className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50">
                <span>Voir les projets</span>
              </a>
            </div>

            {/* Connect row */}
            <div className="flex items-center justify-center gap-4">
              <span className="text-xs uppercase tracking-wide text-gray-500">Connect</span>
              <div className="h-4 w-px bg-gray-300/70" />
              <div className="flex items-center gap-3">
                <a href="https://twitter.com/tiwinoh" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-600 hover:text-gray-900">
                  <Twitter size={18} />
                </a>
                <a href="https://github.com/tiwinoh" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-600 hover:text-gray-900">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com/in/tiwinoh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-600 hover:text-gray-900">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center text-xs text-gray-500">
            <span>© 2025 tiwinoh</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
