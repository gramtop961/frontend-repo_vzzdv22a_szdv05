import React from 'react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop',
    alt: 'Soggiorno luminoso con grandi finestre e arredi moderni',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop',
    alt: 'Cucina contemporanea con finiture premium',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop',
    alt: 'Camera da letto con luce naturale e tessuti chiari',
  },
  {
    src: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop',
    alt: 'Dettaglio di design: legno e pietra in armonia',
  },
  {
    src: 'https://images.unsplash.com/photo-1693948568372-42246fa764c2?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEZXR0YWdsaW8lMjBkaSUyMGRlc2lnbiUzQSUyMGxlZ25vfGVufDB8MHx8fDE3NjI0MTg5MDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Bagno elegante con rivestimenti chiari',
  },
  {
    src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1600&auto=format&fit=crop',
    alt: 'Spazio esterno curato nel verde del parco',
  },
];

export default function Gallery() {
  return (
    <section aria-labelledby="galleria-title" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white pointer-events-none" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 id="galleria-title" className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Galleria</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">Uno sguardo agli ambienti e ai dettagli che rendono unico il Parco degli Oleandri.</p>
          </div>
          <div className="hidden md:block text-sm text-slate-500">
            Suggerimento: per usare le tue foto, caricale nella cartella public e usa src="/nome-file.jpg"
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, idx) => (
            <figure key={idx} className="group relative overflow-hidden rounded-2xl bg-slate-100 shadow-sm">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-44 md:h-64 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <figcaption className="sr-only">{img.alt}</figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#contatti"
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-white shadow-sm hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            Prenota una visita fotografica
          </a>
        </div>
      </div>
    </section>
  );
}
