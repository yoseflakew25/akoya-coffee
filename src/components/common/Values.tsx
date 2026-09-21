'use client';

import { useState } from 'react';

const VALUES = [
  { n: '01', title: 'Premium Quality', desc: 'We meticulously source the best coffee beans from Ethiopia\u2019s top regions to ensure exceptional taste and quality in every batch.' },
  { n: '02', title: 'Sustainable Practices', desc: 'Our commitment to sustainability guides our sourcing and processing methods, promoting environmental health and supporting local communities.' },
  { n: '03', title: 'Global Partnerships', desc: 'We are dedicated to building lasting global partnerships, fostering connections that benefit both our customers and our Ethiopian coffee growers.' },
];

export default function Values() {
  const [active, setActive] = useState(0);

  return (
    <section className="values" id="values" aria-label="Our commitment">
      <div className="wrap">
        <header className="shead shead--center" data-reveal>
          <p className="shead__eyebrow"><span className="tick" /> Our commitment</p>
          <h2 className="shead__title shead__title--sm"><span className="hollow">Three commitments,</span><br />and no small print.</h2>
        </header>
        <p className="vlede">Explore the value propositions that set Akoya Coffee apart from the rest of the coffee industry.</p>
        <div className="vgrid vgrid--three" id="vgrid" data-reveal>
          {VALUES.map((v, i) => (
            <button
              key={v.n}
              className={`value${active === i ? ' is-on' : ''}`}
              data-value={i}
              onClick={() => setActive(i)}
              onMouseEnter={() => {
                if (window.matchMedia('(pointer:fine)').matches) setActive(i);
              }}
            >
              <span className="value__n">{v.n}</span>
              <b>{v.title}</b>
              <i>{v.desc}</i>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
