import React, { useState } from 'react';
import { Quote, ChevronDown, Phone, Mail, MapPin, Building2 } from 'lucide-react';

const TestimonialCard = ({ name, text, img }) => (
  <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm">
    <div className="flex items-center gap-4">
      <img src={img} alt={name} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <div className="font-semibold text-slate-900">{name}</div>
        <div className="text-xs text-slate-500">Cliente</div>
      </div>
      <Quote className="ml-auto text-blue-600" />
    </div>
    <p className="mt-4 text-slate-700 text-sm leading-relaxed">“{text}”</p>
  </div>
);

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-4">
      <button
        className="w-full flex items-center justify-between text-left"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="font-medium text-slate-900">{q}</span>
        <ChevronDown className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <p className="mt-2 text-slate-600 text-sm">{a}</p>}
    </div>
  );
};

const ContactCta = () => (
  <section id="contatti" className="py-16 sm:py-20 bg-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-slate-700 p-8 sm:p-12 text-white shadow-xl">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="flex-1 space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm ring-1 ring-white/20">
              <Building2 className="w-4 h-4" /> Pro House – Parco degli Oleandri
            </div>
            <h3 className="text-3xl font-semibold">Prenota una visita a Nola</h3>
            <p className="text-white/80">
              Siamo a tua disposizione per mostrarti appartamenti campione e il parco residenziale.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="inline-flex items-center gap-2"><Phone className="w-4 h-4" /> +39 081 000 000</div>
              <div className="inline-flex items-center gap-2"><Mail className="w-4 h-4" /> info@prohouse.it</div>
              <div className="inline-flex items-center gap-2"><MapPin className="w-4 h-4" /> Nola (NA)</div>
            </div>
            <div className="flex gap-3 pt-2">
              <a href="#form" className="rounded-full bg-white text-slate-900 px-5 py-3 font-medium hover:bg-slate-100">Prenota una visita</a>
              <a href="#form" className="rounded-full bg-transparent ring-1 ring-white/40 px-5 py-3 font-medium hover:bg-white/10">Scarica brochure PDF</a>
            </div>
          </div>
          <div className="flex-1 w-full rounded-2xl overflow-hidden ring-1 ring-white/20 bg-white/5" aria-label="Mappa">
            <div className="aspect-[4/3] w-full flex items-center justify-center text-white/70">Mappa</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TestimonialsFaqContact = () => {
  return (
    <>
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl font-semibold text-slate-900">Testimonianze</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <TestimonialCard
                  name="Giulia R."
                  img="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
                  text="Appartamenti luminosi e ben rifiniti. Team disponibile dalla scelta alla consegna."
                />
                <TestimonialCard
                  name="Marco D."
                  img="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop"
                  text="Ottima posizione e servizi. La domotica fa la differenza nella quotidianità."
                />
                <TestimonialCard
                  name="Serena V."
                  img="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop"
                  text="Mi è piaciuta la personalizzazione delle finiture e l'attenzione al verde."
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-slate-900">FAQ</h2>
              <div className="mt-4 bg-white rounded-2xl border border-slate-200 p-2">
                <FAQItem q="Posso personalizzare le finiture?" a="Sì, puoi scegliere materiali, palette e dettagli con il supporto dei nostri designer." />
                <FAQItem q="Quali sono i tempi di consegna?" a="Dipende dal taglio e dal livello di personalizzazione. Ti forniremo un cronoprogramma dettagliato." />
                <FAQItem q="La domotica è inclusa?" a="Sono disponibili pacchetti di domotica configurabili in base alle tue esigenze." />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
};

export default TestimonialsFaqContact;
