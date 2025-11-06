import React from 'react';
import Hero from './components/Hero';
import OverviewSections from './components/OverviewSections';
import Gallery from './components/Gallery';
import GuidedForm from './components/GuidedForm';
import TestimonialsFaqContact from './components/TestimonialsFaqContact';

function App() {
  return (
    <div className="font-sans text-slate-900 bg-white">
      <Hero />
      <OverviewSections />
      <Gallery />
      <GuidedForm />
      <TestimonialsFaqContact />
      <footer className="py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Pro House – Parco degli Oleandri. Tutti i diritti riservati.
      </footer>
    </div>
  );
}

export default App;
