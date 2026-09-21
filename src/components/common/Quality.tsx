'use client';

import { useState } from 'react';

const TABS = [
  { key: 'products', label: 'Products' },
  { key: 'services', label: 'Services' },
  { key: 'market', label: 'Who we work with' },
  { key: 'start', label: 'How to start' },
] as const;

type TabKey = typeof TABS[number]['key'];

export default function Quality() {
  const [active, setActive] = useState<TabKey>('products');

  return (
    <section className="quality" id="offer">
      <div className="wrap">
        <header className="shead" data-reveal>
          <p className="shead__eyebrow"><span className="tick" /> Products and services</p>
          <h2 className="shead__title"><span className="hollow">Green coffee,</span><br />and the work around it.</h2>
        </header>

        <div className="specs" data-reveal>
          <div className="specs__tabs" role="tablist" aria-label="What we offer">
            {TABS.map((t) => (
              <button
                key={t.key}
                className={`stab${active === t.key ? ' is-on' : ''}`}
                data-tab={t.key}
                role="tab"
                aria-selected={active === t.key}
                onClick={() => setActive(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="specs__body">
            <div className={`spane${active === 'products' ? ' is-on' : ''}`} data-pane="products">
              <dl>
                <div><dt>Washed arabica</dt><dd>Wet processed Ethiopian arabica: the clean, bright, tea like profile the country is known for.</dd></div>
                <div><dt>Natural arabica</dt><dd>Unwashed, dried whole on the cherry, for buyers who want the fruit forward Ethiopian cup.</dd></div>
                <div><dt>Specialty grade</dt><dd>Sourced from renowned Ethiopian regions: Yirgacheffe, Sidama, Guji and Nekemte.</dd></div>
                <div><dt>Commercial grade</dt><dd>Dependable Ethiopian arabica for bulk export programmes and blends.</dd></div>
                <div><dt>Special preparation</dt><dd>Screen size, sorting and preparation to your specification. Tell us the cup and the paperwork you need and we will prepare it that way.</dd></div>
              </dl>
            </div>
            <div className={`spane${active === 'services' ? ' is-on' : ''}`} data-pane="services">
              <dl>
                <div><dt>Sourcing</dt><dd>We source only the finest Ethiopian beans from renowned regions such as Yirgacheffe, Sidama, Guji and Nekemte. Farmers are paid fairly, which in turn supports sustainable agricultural practice.</dd></div>
                <div><dt>Processing</dt><dd>Each batch is processed to preserve its flavours and aromas, using traditional methods alongside modern technology. Our facility in Addis Ababa works to international quality standards.</dd></div>
                <div><dt>Exporting</dt><dd>As a trusted Ethiopian coffee exporter we handle logistics and documentation, keeping every shipment compliant with international regulations and getting Ethiopian coffee to global markets reliably.</dd></div>
                <div><dt>Sustainability</dt><dd>Sustainability runs through the whole supply chain, from farming to exporting, so that Ethiopia&apos;s rich coffee heritage is preserved for the generations after us.</dd></div>
              </dl>
            </div>
            <div className={`spane${active === 'market' ? ' is-on' : ''}`} data-pane="market">
              <dl>
                <div><dt>Roasters and importers</dt><dd>International coffee roasters and importers looking for Ethiopian coffee with a name and a place attached to it.</dd></div>
                <div><dt>Specialty cafes</dt><dd>Cafes that want a single origin they can talk about honestly across the counter.</dd></div>
                <div><dt>Premium retail brands</dt><dd>Brands that need consistency, full traceability and ethical sourcing they can put on a pack.</dd></div>
                <div><dt>What they get</dt><dd>Green beans, private labelling and export logistics support, for buyers who value authenticity, consistency and direct relationships with producers.</dd></div>
              </dl>
            </div>
            <div className={`spane${active === 'start' ? ' is-on' : ''}`} data-pane="start">
              <dl>
                <div><dt>1. Tell us the cup</dt><dd>Origin, process, grade and roughly what volume you are planning. If you are not sure, describe the cup you want and we will suggest options.</dd></div>
                <div><dt>2. Samples</dt><dd>We send samples of what we can source against your brief, so you cup before you commit.</dd></div>
                <div><dt>3. Agree the lot</dt><dd>You choose, we confirm preparation, packaging and paperwork.</dd></div>
                <div><dt>4. We export</dt><dd>Quality control, documentation and logistics out of Addis Ababa, with the file kept so you can order the same thing again.</dd></div>
              </dl>
            </div>
          </div>
        </div>

        <div className="badges" data-reveal>
          <span className="badge">Washed</span><span className="badge">Natural</span>
          <span className="badge">Specialty grade</span><span className="badge">Commercial grade</span>
          <span className="badge">Private labelling</span><span className="badge">Export logistics</span>
          <span className="badge">Traceability</span>
        </div>
      </div>
    </section>
  );
}
