import React, { useState } from 'react';
import {
  ShieldCheck,
  Cog,
  Palette,
  Car,
  Leaf,
  Video,
  MapPin,
  Users,
  CheckCircle2,
  Sparkles,
  Ruler,
  Trees,
} from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="rounded-2xl bg-white/80 backdrop-blur border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center gap-3 mb-3">
      <div className="p-2 rounded-xl bg-blue-50 text-blue-700 ring-1 ring-blue-200">
        <Icon className="w-5 h-5" aria-hidden="true" />
      </div>
      <h3 className="font-semibold text-slate-900">{title}</h3>
    </div>
    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

const BeforeAfterSlider = () => {
  const [val, setVal] = useState(50);
  return (
    <section aria-label="Prima e Dopo soggiorno" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
          <div className="relative w-full aspect-[16/8] bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1505692952047-1a78307da8f3?q=80&w=1800&auto=format&fit=crop"
              alt="Prima: soggiorno prima della ristrutturazione"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${val}%` }}
              aria-hidden="true"
            >
              <img
                src="https://images.unsplash.com/photo-1505691723518-36a5ac3b2d5e?q=80&w=1800&auto=format&fit=crop"
                alt="Dopo: soggiorno dopo la personalizzazione"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 flex items-end justify-center pb-3 pointer-events-none">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 text-white text-sm px-3 py-1">
                Trascina per vedere il risultato
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={val}
              onChange={(e) => setVal(parseInt(e.target.value))}
              aria-label="Controllo prima/dopo"
              className="absolute inset-x-0 bottom-2 w-[90%] mx-auto accent-blue-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const OverviewSections = () => {
  return (
    <main>
      {/* Servizi & Vantaggi */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50" id="appartamenti">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Servizi & Vantaggi</h2>
            <p className="text-slate-600 mt-2 max-w-2xl">Comfort, efficienza e sicurezza pensati per la tua vita quotidiana.</p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard icon={ShieldCheck} title="Classe energetica A" desc="Pannelli solari, cappotto termico e impianti ad alta efficienza." />
            <FeatureCard icon={Cog} title="Domotica integrata" desc="Controllo luci, clima e sicurezza da smartphone ovunque." />
            <FeatureCard icon={Palette} title="Personalizzazione finiture" desc="Scegli materiali e palette insieme ai nostri designer." />
            <FeatureCard icon={Car} title="Posto auto garantito" desc="Parcheggio dedicato per ogni unità, con accesso sicuro." />
            <FeatureCard icon={Leaf} title="Aree verdi & relax" desc="Giardini curati, zone lettura e aree barbecue condivise." />
            <FeatureCard icon={Video} title="Videosorveglianza H24" desc="Monitoraggio continuo degli accessi e degli spazi comuni." />
            <FeatureCard icon={MapPin} title="Posizione strategica" desc="A Nola, vicino a servizi, scuole e collegamenti principali." />
            <FeatureCard icon={Users} title="Assistenza dedicata" desc="Un team a supporto dal primo contatto alla consegna." />
          </div>
        </div>
      </section>

      {/* Personalizzazione timeline + swatches */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <h2 className="text-3xl font-semibold text-slate-900 mb-4">Personalizzazione</h2>
              <p className="text-slate-600 mb-6">Segui un percorso semplice e guidato per creare la casa che ti rappresenta.</p>
              <ol className="space-y-4">
                {[
                  'Scegli il taglio',
                  'Seleziona le finiture',
                  'Opzioni di domotica',
                  'Consegna',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-semibold">
                      {i + 1}
                    </div>
                    <span className="text-slate-800 font-medium">{step}</span>
                  </li>
                ))}
              </ol>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-sm font-medium ring-1 ring-emerald-200">
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                Consulenza con designer
              </div>
            </div>
            <div className="flex-1">
              <div className="rounded-2xl p-6 bg-slate-50 border border-slate-200">
                <p className="text-sm text-slate-600 mb-3">Swatches finiture</p>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    '#e6e1da',
                    '#cbb8a9',
                    '#9aa4b2',
                    '#d3dce6',
                    '#c5a880',
                    '#9c6b4e',
                    '#f1f5f9',
                    '#0f172a',
                  ].map((c) => (
                    <button
                      key={c}
                      aria-label={`Campione colore ${c}`}
                      className="aspect-square rounded-xl border border-slate-200 shadow-sm"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <BeforeAfterSlider />

      {/* Panoramica del Parco + mini-stats + icone servizi del parco */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900 mb-4">Panoramica del Parco</h2>
              <p className="text-slate-600 mb-4">Un masterplan pensato per il benessere: percorsi pedonali, aree relax e verde diffuso.</p>
              <ul className="space-y-2 text-slate-700">
                {[
                  'Edifici residenziali moderni',
                  'Percorsi pedonali protetti',
                  'Aree giochi bimbi',
                  'Zone relax e socialità',
                  'Parcheggi dedicati',
                  'Colonnine di ricarica (se presenti)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="rounded-xl bg-white border border-slate-200 p-4 text-center">
                  <div className="text-2xl font-semibold text-slate-900">96%</div>
                  <div className="text-xs text-slate-600">clienti soddisfatti</div>
                </div>
                <div className="rounded-xl bg-white border border-slate-200 p-4 text-center">
                  <div className="text-2xl font-semibold text-slate-900">15</div>
                  <div className="text-xs text-slate-600">progetti completati</div>
                </div>
                <div className="rounded-xl bg-white border border-slate-200 p-4 text-center">
                  <div className="text-2xl font-semibold text-slate-900">Anni</div>
                  <div className="text-xs text-slate-600">di esperienza</div>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm bg-white">
                <div className="aspect-[4/3] bg-slate-100 flex items-center justify-center text-slate-500">
                  Mappa / Masterplan
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6">
                  {[
                    { icon: Car, label: 'Parcheggio gratuito' },
                    { icon: Trees, label: 'Spazi verdi' },
                    { icon: Leaf, label: 'Area relax' },
                    { icon: Cog, label: 'Domotica' },
                    { icon: ShieldCheck, label: 'Videosorveglianza' },
                    { icon: Ruler, label: 'Tagli vari' },
                    { icon: MapPin, label: 'Vicino ai servizi' },
                    { icon: Sparkles, label: 'Pannelli solari' },
                  ].map(({ icon: Ico, label }) => (
                    <div key={label} className="flex items-center gap-2 text-slate-700">
                      <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                        <Ico className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <span className="text-sm">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OverviewSections;
