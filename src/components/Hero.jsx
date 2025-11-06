import React from 'react';
import { Home, Leaf, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <header className="relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 200 200\\' fill=\\'none\\'><defs><pattern id=\\'p\\' width=\\'40\\' height=\\'40\\' patternUnits=\\'userSpaceOnUse\\'><path d=\\'M20 0c5 10 5 30 0 40m0-40c-5 10-5 30 0 40M0 20c10 5 30 5 40 0M0 20c10-5 30-5 40 0\\' stroke=\\'%23000000\\' stroke-width=\\'0.7\\' stroke-linecap=\\'round\\' opacity=\\'0.6\\'/></pattern></defs><rect width=\\'100%\\' height=\\'100%\\' fill=\\'%23ffffff\\'/><rect width=\\'100%\\' height=\\'100%\\' fill=\\'url(%23p)\\'/></svg>')",
          backgroundSize: 'auto',
        }}
      />

      <div className="bg-gradient-to-br from-blue-50 via-slate-50 to-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 bg-white/80 backdrop-blur shadow-lg rounded-2xl p-3 border border-slate-200">
              <Home className="w-8 h-8 text-blue-600" aria-hidden="true" />
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-sm font-medium ring-1 ring-blue-200">
                <Leaf className="w-4 h-4" aria-hidden="true" />
                Pro House – Parco degli Oleandri (Nola)
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
                Benvenuto a Parco degli Oleandri – Pro House
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl">
                Case in classe A, domotica, spazi verdi e massima personalizzazione.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contatti"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-6 py-3 text-base font-medium shadow-lg shadow-blue-600/20 hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  Prenota una visita
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="#appartamenti"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-6 py-3 text-base font-medium shadow ring-1 ring-slate-200 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  Scopri gli appartamenti
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
