export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__art" aria-hidden="true"><span lang="am">ቡና</span></div>
      <div className="wrap">
        <header className="shead" data-reveal>
          <p className="shead__eyebrow"><span className="tick" /> Our legacy</p>
          <h2 className="shead__title"><span className="hollow">Discover the heart</span><br />and passion behind Akoya Coffee.</h2>
        </header>

        <article className="feature feature--intro" data-reveal>
          <div className="feature__copy">
            <p className="feature__kicker">Who we are</p>
            <h3>A premier Ethiopian<br />coffee exporter.</h3>
            <p>Akoya Coffee is a premier Ethiopian coffee exporter, rooted in tradition and driven by quality. Our beans are sourced from renowned coffee regions, ensuring that every cup carries the essence of Ethiopia&apos;s rich coffee heritage. Our commitment to sustainability and ethical practices allows us to share our passion with coffee lovers worldwide.</p>
            <p>Founded as a subsidiary of the Akoya Group, we aim to enhance Ethiopia&apos;s coffee reputation globally, forging lasting partnerships while promoting quality and sustainability in every step of our process.</p>
          </div>
          <div className="feature__art" aria-hidden="true">
            <svg viewBox="0 0 160 160" fill="none">
              <g className="feature__ring">
                <circle cx="80" cy="80" r="72" stroke="#D9A441" strokeWidth="1" strokeDasharray="3 9" opacity="0.4" />
              </g>
              <circle cx="80" cy="80" r="54" stroke="#D9A441" strokeWidth="1.4" opacity="0.75" />
              <ellipse cx="80" cy="80" rx="20" ry="54" stroke="#D9A441" strokeWidth="1" opacity="0.42" />
              <ellipse cx="80" cy="80" rx="40" ry="54" stroke="#D9A441" strokeWidth="1" opacity="0.26" />
              <path d="M26 80h108" stroke="#D9A441" strokeWidth="1" opacity="0.42" />
              <path d="M34 54h92M34 106h92" stroke="#D9A441" strokeWidth="1" opacity="0.22" />
              <g transform="translate(80 80) rotate(-24)">
                <ellipse rx="27" ry="18" stroke="#8AAE4A" strokeWidth="2" fill="rgba(138,174,74,.14)" />
                <path d="M-19 0C-10-7.4 10 7.4 19 0" stroke="#8AAE4A" strokeWidth="2.2" strokeLinecap="round" />
              </g>
              <path d="M80 2v12M80 146v12M2 80h12M146 80h12" stroke="#D9A441" strokeWidth="1.6" strokeLinecap="round" opacity="0.65" />
            </svg>
          </div>
        </article>

        <div className="about__grid">
          <div className="about__copy" data-reveal>
            <p>We take pride in providing exceptional quality and flavour by sourcing our beans from Ethiopia&apos;s renowned growing regions: <b>Yirgacheffe</b>, <b>Sidama</b>, <b>Guji</b> and <b>Nekemte</b>. Every lot is selected, cupped and processed to international quality standards before it leaves Addis Ababa.</p>
            <p>The company is part of the <b>Akoya Group</b> and works out of Bole, Addis Ababa, the city where Ethiopia&apos;s coffee trade meets the road to the port. Every relationship we build, with a grower or with a buyer, is one we intend to keep.</p>
            <ul className="about__quick">
              <li><span>Company</span><b>Akoya Coffee</b></li>
              <li><span>Parent company</span><b>Akoya Group</b></li>
              <li><span>Founded</span><b>2025</b></li>
              <li><span>Headquarters</span><b>Bole, Addis Ababa, Ethiopia</b></li>
              <li><span>Origins</span><b>Yirgacheffe, Sidama, Guji and Nekemte</b></li>
              <li><span>Export volume</span><b>100+ metric tons a year</b></li>
              <li><span>Key markets</span><b>UAE, South Korea, China and Europe</b></li>
              <li><span>Business</span><b>Green coffee export, specialty and commercial</b></li>
            </ul>
          </div>

          <div className="mv">
            <article className="mv__card" data-reveal>
              <p className="mv__label"><span className="tick" /> Our mission</p>
              <p>To bring premium Ethiopian coffee to roasters, importers and cafes worldwide while nurturing sustainable practices at every step, from the farm to the port. We exist to enhance Ethiopia&apos;s reputation as the birthplace of coffee, and to build partnerships that benefit our growers as much as our buyers.</p>
            </article>
            <article className="mv__card mv__card--alt" data-reveal>
              <p className="mv__label"><span className="tick" /> Our vision</p>
              <p>To empower Ethiopian farmers, provide high quality coffee worldwide, and promote sustainable commerce that benefits communities and preserves our rich heritage.</p>
            </article>
          </div>
        </div>

        <article className="feature feature--craft" data-reveal>
          <div className="feature__art" aria-hidden="true">
            <svg viewBox="0 0 160 160" fill="none">
              <g className="feature__ring">
                <circle cx="80" cy="80" r="72" stroke="#D9A441" strokeWidth="1" strokeDasharray="3 9" opacity="0.4" />
                <circle cx="80" cy="80" r="60" stroke="#8AAE4A" strokeWidth="1" strokeDasharray="12 9" opacity="0.5" />
              </g>
              <circle cx="80" cy="80" r="48" stroke="#D9A441" strokeWidth="1.4" opacity="0.6" />
              <g transform="translate(80 80) rotate(-24)">
                <ellipse rx="31" ry="21" stroke="#D9A441" strokeWidth="2.2" fill="rgba(217,164,65,.12)" />
                <path d="M-22 0C-12-8.4 12 8.4 22 0" stroke="#D9A441" strokeWidth="2.4" strokeLinecap="round" />
              </g>
              <path d="M80 2v12M80 146v12M2 80h12M146 80h12" stroke="#D9A441" strokeWidth="1.6" strokeLinecap="round" opacity="0.65" />
              <path d="M26 26l8 8M134 26l-8 8M26 134l8-8M134 134l-8-8" stroke="#8AAE4A" strokeWidth="1.6" strokeLinecap="round" opacity="0.55" />
            </svg>
          </div>
          <div className="feature__copy">
            <p className="feature__kicker">Tradition and innovation</p>
            <h3>Rooted in tradition, driven by quality.</h3>
            <p>Akoya Coffee combines tradition and innovation, delivering premium Ethiopian coffee while nurturing sustainable practices for a better tomorrow. From the washing station to the port, every step is handled by people who know the coffee, so what you order is what arrives.</p>
          </div>
        </article>
      </div>
    </section>
  );
}
