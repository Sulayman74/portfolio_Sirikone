/* ═══════════════════════════════════════════════════════════════
   Sirikone K. — Portfolio JS
   ═══════════════════════════════════════════════════════════════ */

(() => {
    'use strict';

    /* ─── NAV: scroll blur + active link ─── */
    const nav       = document.getElementById('nav');
    const navLinks  = document.querySelectorAll('.nav__link:not(.nav__link--cta)');
    const sections  = document.querySelectorAll('section[id]');

    const onScroll = () => {
        // Frosted glass on scroll
        if (window.scrollY > 20) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        // Active nav link
        let current = '';
        sections.forEach(sec => {
            if (window.scrollY >= sec.offsetTop - 120) {
                current = sec.id;
            }
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // init

    /* ─── NAV: mobile toggle ─── */
    const navToggle = document.getElementById('navToggle');
    const navMenu   = document.getElementById('navLinks');

    navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        navToggle.classList.toggle('open', isOpen);
        navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu on link click (mobile)
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            navToggle.classList.remove('open');
            navToggle.setAttribute('aria-expanded', false);
        });
    });

    /* ─── SMOOTH SCROLL for anchor links ─── */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            const offset = nav.offsetHeight + 16;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });

    /* ─── REVEAL on scroll (IntersectionObserver) ─── */
    const revealEls = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (!entry.isIntersecting) return;
            // Stagger siblings within the same parent grid/flex
            const siblings = [...entry.target.parentElement.querySelectorAll('.reveal:not(.visible)')];
            const idx = siblings.indexOf(entry.target);
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, Math.min(idx * 80, 320));
            revealObserver.unobserve(entry.target);
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    revealEls.forEach(el => revealObserver.observe(el));

    /* ─── Hero: staggered entrance is handled by CSS animation-delay ─── */
    /* Nothing extra needed — CSS @keyframes fadeInDown handles it */

})();
