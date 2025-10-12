import React from 'react';
import { Wrench, Home } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <main className="min-h-screen font-sans text-gray-900">
      <section className="px-6 pt-24 pb-10">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl border border-gray-200 bg-white/90 p-10 shadow-sm text-center">
            <h1 className="mb-4 flex items-center justify-center gap-3 text-4xl font-extrabold tracking-tight text-gray-900">
              <Wrench className="text-gray-900" size={40} />
              <span>En développement</span>
            </h1>
            <p className="mb-8 text-base text-gray-600">Section en cours de mise à jour. Des choses arrivent bientôt.</p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="/" className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-5 py-2 text-sm font-semibold text-white hover:bg-black">
                <Home size={18} />
                <span>Accueil</span>
              </a>
              <a href="/contact" className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50">
                <span>Contact</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
