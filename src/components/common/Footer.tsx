'use client';

import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export default function Footer() {
  const reduce = usePrefersReducedMotion();
  const [year, setYear] = useState(2026);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  // Back to top visibility + footer giant reveal
  useEffect(() => {
    const footer = document.querySelector<HTMLElement>('.foot');
    if (!footer) return;

    let atFooter = false;
    let ticking = false;

    const checkTop = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        setShowTop(window.scrollY > 300);
      });
    };

    window.addEventListener('scroll', checkTop, { passive: true });

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          atFooter = entries[0].isIntersecting;
          const giant = document.querySelector<HTMLElement>('.foot__giant');
          if (giant && atFooter) giant.classList.add('in');
          checkTop();
        },
        { rootMargin: '0px' },
      );
      io.observe(footer);
      return () => {
        window.removeEventListener('scroll', checkTop);
        io.disconnect();
      };
    }

    return () => window.removeEventListener('scroll', checkTop);
  }, []);

  return (
    <footer className="foot beanfield">
      <div className="tibeb tibeb--foot" aria-hidden="true" />

      <div className="wrap foot__grid">
        <div className="foot__cta" data-reveal>
          <p className="foot__kicker"><span className="tick" /> Taste the World</p>
          <p className="foot__say">Tell us the coffee<br />you are looking for.</p>
          <a className="btn btn--gold" data-target="#contact"><span>Request samples</span><i className="btn__ico">→</i></a>
        </div>

        <nav className="foot__nav" aria-label="Footer">
          <p className="foot__label">Pages</p>
          <a data-target="#about">About us</a><a data-target="#origin">The legend</a><a data-target="#terroir">Origins</a><a data-target="#offer">What we offer</a><a data-target="#gallery">Gallery</a><a data-target="#export">Export</a><a data-target="#values">Values</a><a data-target="#team">Our team</a><a data-target="#contact">Contact</a>
        </nav>

        <div className="foot__meta">
          <p className="foot__label">Bole, Addis Ababa, Ethiopia</p>
          <p><a href="mailto:info@akoyacoffee.com">info@akoyacoffee.com</a></p>
          <p><a href="tel:+251979221100">+251 97 922 1100</a></p>
          <p><a href="tel:+251983838385">+251 98 383 8385</a></p>
          <p className="foot__note">Green coffee from Ethiopia&apos;s highlands to the world.</p>
        </div>
      </div>

      <div className="wrap foot__bottom">
        <p>&copy; <span id="year">{year}</span> Akoya Coffee. All rights reserved.</p>
        <button
          className="foot__top"
          onClick={() => window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })}
        >
          ↑ Back to top
        </button>
        <p className="foot__made">Founded 2025 &middot; Addis Ababa, Ethiopia</p>
      </div>

      <div className="foot__giant" aria-hidden="true"><span>AKOYA</span></div>
      <button
        className={`totop${showTop ? ' on' : ''}`}
        id="totop"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })}
      >
        ↑
      </button>
    </footer>
  );
}

