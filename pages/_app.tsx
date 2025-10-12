import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import React from 'react';

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Pastel gradient background similar to target site */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-50 via-indigo-50 to-pink-50" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-purple-200/40 blur-3xl" />
      </div>
      <div className="relative z-10">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default App;
