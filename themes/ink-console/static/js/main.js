/* ==========================================================================
   Ink Console — main.js
   Active-link highlighting (in-page anchors) + mobile menu toggle.
   Adapted from the "Effective Claude Code" workshop site.
   ========================================================================== */

/* --------------------------------------------------------------------------
   Active nav highlighting for in-page anchors (IntersectionObserver)
   Only affects nav links that point to #fragments on the current page.
   -------------------------------------------------------------------------- */
function initNavigation() {
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"], .nav-links a[href*="#"]');
  const anchored = Array.from(navLinks).filter(a => a.hash && document.querySelector(a.hash));
  const sections = anchored
    .map(a => document.querySelector(a.hash))
    .filter(Boolean);

  if (!nav || !sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          anchored.forEach(link => {
            link.classList.toggle('active', link.hash === `#${id}`);
          });
        }
      });
    },
    {
      rootMargin: `-${parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height') || '64')}px 0px -60% 0px`,
      threshold: 0,
    }
  );

  sections.forEach(section => observer.observe(section));
}

/* --------------------------------------------------------------------------
   Mobile nav toggle
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.getElementById('nav-links');

  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    navLinks.classList.toggle('open', !isOpen);
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('open');
    });
  });

  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
      toggle.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('open');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initMobileNav();
});
