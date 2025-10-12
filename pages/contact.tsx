import React from 'react';
import { Mail, Github, Twitter, Youtube } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <main className="min-h-screen font-sans text-gray-900">
      <section className="px-6 pt-24 pb-10">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl border border-gray-200 bg-white/90 p-10 shadow-sm">
            <div className="mb-6 text-center">
              <h1 className="mb-3 flex items-center justify-center gap-3 text-4xl font-extrabold tracking-tight text-gray-900">
                <Mail className="text-gray-900" size={40} />
                <span>Contact</span>
              </h1>
              <p className="text-base text-gray-600">Discutons idées, projets et collaborations.</p>
            </div>

            <div className="space-y-8">
              <div className="text-center">
                <div className="rounded-md bg-gray-100 p-6">
                  <Mail size={36} className="mx-auto mb-4 text-gray-700" />
                  <h2 className="mb-2 text-xl font-bold text-gray-900">Email principal</h2>
                  <a href="mailto:contact@tiwinoh.com" className="text-base text-blue-600 hover:text-blue-800">
                    contact@tiwinoh.com
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <a href="https://github.com/tiwinoh" target="_blank" rel="noopener noreferrer" className="rounded-md bg-gray-100 p-6 text-center transition-colors hover:bg-gray-200">
                  <Github size={28} className="mx-auto mb-3 text-gray-700" />
                  <h3 className="mb-1 font-bold text-gray-900">GitHub</h3>
                  <p className="text-sm text-gray-600">Projets et contributions</p>
                </a>
                <a href="https://twitter.com/tiwinoh" target="_blank" rel="noopener noreferrer" className="rounded-md bg-gray-100 p-6 text-center transition-colors hover:bg-gray-200">
                  <Twitter size={28} className="mx-auto mb-3 text-gray-700" />
                  <h3 className="mb-1 font-bold text-gray-900">Twitter</h3>
                  <p className="text-sm text-gray-600">Actus et pensées</p>
                </a>
                <a href="https://youtube.com/@tiwinoh" target="_blank" rel="noopener noreferrer" className="rounded-md bg-gray-100 p-6 text-center transition-colors hover:bg-gray-200">
                  <Youtube size={28} className="mx-auto mb-3 text-gray-700" />
                  <h3 className="mb-1 font-bold text-gray-900">YouTube</h3>
                  <p className="text-sm text-gray-600">Vidéos et tutoriels</p>
                </a>
              </div>

              <div className="border-t border-gray-200 pt-6 text-center">
                <p className="mb-6 text-base text-gray-600">Ouverts à des projets cools et expérimentations.</p>
                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a href="mailto:contact@tiwinoh.com" className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-5 py-2 text-sm font-semibold text-white hover:bg-black">
                    <Mail size={18} />
                    <span>Envoyer un email</span>
                  </a>
                  <a href="/" className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50">
                    <span>Accueil</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
