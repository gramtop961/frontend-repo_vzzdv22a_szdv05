import React, { useState } from 'react';

const steps = [
  { key: 'name', label: 'Buongiorno! Come ti chiami?', type: 'text', required: true, placeholder: 'Es. Maria Rossi' },
  { key: 'tipo', label: 'Quale tipologia di appartamento cerchi?', type: 'select', options: ['Monolocale', 'Bilocale', 'Trilocale', 'Quadrilocale', 'Attico'], required: true },
  { key: 'metratura', label: 'Metratura indicativa? (mq)', type: 'range', min: 25, max: 180, step: 5, required: true },
  { key: 'spazi_esterni', label: 'Ti interessa il giardino privato o terrazzo?', type: 'checkbox', options: ['Giardino privato', 'Terrazzo'], required: false },
  { key: 'posto_auto', label: 'Posto auto?', type: 'select', options: ['Assicurato', 'Secondo posto su richiesta', 'Nessuno'], required: true, defaultValue: 'Assicurato' },
  { key: 'budget', label: 'Budget indicativo? (€)', type: 'range', min: 80000, max: 600000, step: 5000, required: true },
  { key: 'contatto', label: 'Quando possiamo sentirci?', type: 'text', placeholder: 'Es. domani pomeriggio, dopo le 17', required: true },
];

const GuidedForm = () => {
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState({ posto_auto: 'Assicurato' });
  const [consenso, setConsenso] = useState(false);

  const step = steps[current];
  const total = steps.length;

  const canNext = () => {
    if (step.required) {
      const value = data[step.key];
      if (step.type === 'checkbox') return Array.isArray(value) && value.length > 0;
      return value !== undefined && value !== '';
    }
    return true;
  };

  const handleChange = (key, value) => setData((d) => ({ ...d, [key]: value }));

  const next = () => { if (current < total - 1 && canNext()) setCurrent((c) => c + 1); };
  const prev = () => { if (current > 0) setCurrent((c) => c - 1); };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!consenso) return;
    alert('Richiesta inviata! Ti contatteremo a breve.');
  };

  return (
    <section id="form" className="py-16 sm:py-20 bg-slate-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 px-6 py-4">
            <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(((current + 1) / total) * 100)}>
              <div className="h-full bg-blue-600" style={{ width: `${((current + 1) / total) * 100}%` }} />
            </div>
          </div>

          <form className="p-6 space-y-6" onSubmit={handleSubmit} aria-labelledby="form-title">
            <h2 id="form-title" className="text-2xl font-semibold text-slate-900">Dicci cosa cerchi</h2>

            {/* Step content */}
            <div className="space-y-2" aria-live="polite">
              <label htmlFor={`fld-${step.key}`} className="block text-slate-800 font-medium">
                {current + 1}. {step.label}
              </label>

              {step.type === 'text' && (
                <input
                  id={`fld-${step.key}`}
                  type="text"
                  required={step.required}
                  placeholder={step.placeholder}
                  value={data[step.key] || ''}
                  onChange={(e) => handleChange(step.key, e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}

              {step.type === 'select' && (
                <select
                  id={`fld-${step.key}`}
                  required={step.required}
                  value={data[step.key] || step.defaultValue || ''}
                  onChange={(e) => handleChange(step.key, e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled>Seleziona…</option>
                  {step.options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              )}

              {step.type === 'range' && (
                <div>
                  <input
                    id={`fld-${step.key}`}
                    type="range"
                    min={step.min}
                    max={step.max}
                    step={step.step}
                    value={data[step.key] || step.min}
                    onChange={(e) => handleChange(step.key, parseInt(e.target.value))}
                    className="w-full accent-blue-600"
                  />
                  <div className="text-sm text-slate-600 mt-1">{data[step.key] || step.min}</div>
                </div>
              )}

              {step.type === 'checkbox' && (
                <fieldset>
                  <legend className="sr-only">{step.label}</legend>
                  <div className="flex flex-wrap gap-3">
                    {step.options.map((opt) => {
                      const selected = Array.isArray(data[step.key]) && data[step.key].includes(opt);
                      return (
                        <label key={opt} className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border cursor-pointer ${selected ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-white text-slate-700 border-slate-300'}`}>
                          <input
                            type="checkbox"
                            className="sr-only"
                            checked={selected}
                            onChange={(e) => {
                              const prev = Array.isArray(data[step.key]) ? data[step.key] : [];
                              if (e.target.checked) handleChange(step.key, [...prev, opt]);
                              else handleChange(step.key, prev.filter((v) => v !== opt));
                            }}
                          />
                          <span>{opt}</span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>
              )}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-2">
              <button type="button" onClick={prev} disabled={current === 0} className="px-5 py-2.5 rounded-full border border-slate-300 text-slate-700 disabled:opacity-50">
                Indietro
              </button>
              {current < total - 1 ? (
                <button type="button" onClick={next} disabled={!canNext()} className="px-5 py-2.5 rounded-full bg-blue-600 text-white disabled:opacity-50">
                  Avanti
                </button>
              ) : (
                <div className="w-full">
                  <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 mb-4">
                    <div className="font-medium text-slate-900 mb-2">Riepilogo</div>
                    <pre className="text-xs text-slate-700 whitespace-pre-wrap">{JSON.stringify(data, null, 2)}</pre>
                  </div>
                  <div className="flex items-start gap-2 mb-4">
                    <input id="gdpr" type="checkbox" checked={consenso} onChange={(e) => setConsenso(e.target.checked)} className="mt-1" />
                    <label htmlFor="gdpr" className="text-sm text-slate-700">
                      Acconsento al trattamento dei dati ai sensi del GDPR.
                    </label>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button type="submit" disabled={!consenso} className="px-5 py-2.5 rounded-full bg-blue-600 text-white disabled:opacity-50">Invia richieste</button>
                    <a href="#" className="px-5 py-2.5 rounded-full border border-slate-300 text-slate-700">Scarica brochure PDF</a>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GuidedForm;
