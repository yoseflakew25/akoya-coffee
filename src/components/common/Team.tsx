const MEMBERS = [
  { name: 'Eyuel Takele Woldyohannes', role: 'Chief Executive Officer', note: 'Direction of the company and its grower partnerships.' },
  { name: 'Biruktawit Tefera Moges', role: 'Human Resources', note: 'The team, and the people we work with along the chain.' },
  { name: 'Mahider Tefera Moges', role: 'Accountant', note: 'Contracts, invoices and the numbers behind a shipment.' },
  { name: 'Yemisrach Getachew Mamo', role: 'Export Manager', note: 'Export documentation and shipments, start to arrival.' },
];

/** First letters of the first two names, e.g. 'Eyuel Takele Woldyohannes' -> 'ET'. */
function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

export default function Team() {
  return (
    <section className="team" id="team">
      <div className="wrap">
        <header className="shead shead--center" data-reveal>
          <p className="shead__eyebrow"><span className="tick" /> Our team</p>
          <h2 className="shead__title"><span className="hollow">Meet</span><br />Our Team.</h2>
        </header>

        <div className="tgrid">
          {MEMBERS.map((m, i) => (
            <article key={m.name} className="tcard" data-reveal>
              <div className="tcard__photo">
                {/* Avatar: initials on the site's dark/gold palette, no image files. */}
                <svg className="tcard__avatar" viewBox="0 0 104 104" aria-hidden="true" focusable="false">
                  <defs>
                    <radialGradient id={`tav-${i}`} cx="34%" cy="28%" r="80%">
                      <stop offset="0" stopColor="#2E4A38" />
                      <stop offset="1" stopColor="#111C17" />
                    </radialGradient>
                  </defs>
                  <circle cx="52" cy="52" r="52" fill={`url(#tav-${i})`} />
                  <circle cx="52" cy="52" r="46.5" fill="none" stroke="#D9A441" strokeWidth="1.3" opacity=".5" />
                  <circle cx="52" cy="52" r="40" fill="none" stroke="#D9A441" strokeWidth="1" strokeDasharray="3 6" opacity=".3" />
                </svg>
                <span className="tcard__initials" aria-hidden="true">{initials(m.name)}</span>
              </div>
              <h3>{m.name}</h3>
              <p className="tcard__role">{m.role}</p>
              <p className="tcard__note">{m.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
