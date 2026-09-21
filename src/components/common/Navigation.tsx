'use client';

import { useEffect, useRef, useState } from 'react';

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    let lastY = 0;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const y = window.scrollY;
        nav.classList.toggle('stuck', y > 40);
        lastY = y;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Active section tracking with O(1) Map lookup & cached active state
    const linkMap = new Map<string, HTMLElement>();
    const trackedSections: HTMLElement[] = [];

    const navLinks = nav.querySelectorAll<HTMLElement>('[data-nav]');
    navLinks.forEach((link) => {
      const targetId = link.getAttribute('data-target');
      if (targetId && targetId.startsWith('#')) {
        const id = targetId.slice(1);
        const section = document.getElementById(id);
        if (section) {
          linkMap.set(id, link);
          trackedSections.push(section);
        }
      }
    });

    let currentActiveLink: HTMLElement | null = null;

    const setActive = (newActiveLink: HTMLElement | null) => {
      if (currentActiveLink === newActiveLink) return;
      if (currentActiveLink) currentActiveLink.classList.remove('active');
      if (newActiveLink) newActiveLink.classList.add('active');
      currentActiveLink = newActiveLink;
    };

    let io: IntersectionObserver | null = null;
    if (trackedSections.length && 'IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          const visibleEntry = entries
            .filter((en) => en.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

          if (visibleEntry) {
            const link = linkMap.get(visibleEntry.target.id);
            if (link) setActive(link);
          }
        },
        { rootMargin: '-20% 0px -40% 0px', threshold: [0.1, 0.4, 0.7] }
      );

      trackedSections.forEach((s) => io?.observe(s));
    }

    // Delegated click handler for smooth scrolling + instant active feedback
    const onNavClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>('[data-target]');
      if (!target) return;
      const targetSelector = target.getAttribute('data-target');
      if (!targetSelector || !targetSelector.startsWith('#')) return;

      e.preventDefault();
      const sectionId = targetSelector.slice(1);
      const section = sectionId === 'top' ? document.body : document.getElementById(sectionId);
      if (section) {
        if (nav.classList.contains('open')) {
          nav.classList.remove('open');
          document.body.style.overflow = '';
          setMenuOpen(false);
        }
        const navHeight = nav.offsetHeight || 60;
        const targetTop = sectionId === 'top' ? 0 : section.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: targetTop, behavior: 'smooth' });

        if (target.hasAttribute('data-nav')) {
          setActive(target);
        }
      }
    };

    nav.addEventListener('click', onNavClick);

    return () => {
      window.removeEventListener('scroll', onScroll);
      nav.removeEventListener('click', onNavClick);
      io?.disconnect();
    };
  }, []);

  // Burger toggle
  const toggleMenu = () => {
    const nav = navRef.current;
    if (!nav) return;
    const next = !menuOpen;
    setMenuOpen(next);
    nav.classList.toggle('open', next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  return (
    <header className="nav" id="nav" ref={navRef}>
      <a className="nav__brand" data-target="#top">
        <svg className="nav__mark" viewBox="0 0 48 48" aria-hidden="true">
          <g transform="translate(24 22) rotate(-24)" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
            <ellipse rx="19" ry="13" />
            <path d="M-13.4 0C-7 -5.8 7 5.8 13.4 0" />
          </g>
          <path d="M13 43h22" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" opacity="0.55" />
        </svg>
        <span className="nav__name">AKOYA<em>Coffee</em></span>
      </a>
      <nav className="nav__links" id="navlinks" aria-label="Main">
        <a data-nav data-target="#about">About</a>
        <a data-nav data-target="#terroir">Origins</a>
        <a data-nav data-target="#offer">Offerings</a>
        <a data-nav data-target="#gallery">Gallery</a>
        <a data-nav data-target="#export">Export</a>
        <a data-nav data-target="#values">Commitment</a>
        <a data-nav data-target="#team">Team</a>
        <a data-nav data-target="#clients">Clients</a>
        <a className="nav__cta" data-target="#contact">Request samples</a>
      </nav>
      <button
        className="nav__burger"
        id="burger"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={toggleMenu}
      >
        <span /><span /><span />
      </button>
    </header>
  );
}
