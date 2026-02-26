/* ============================================================
   KAUGE Festival — Main JavaScript
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Navbar scroll ---------- */
  const nav = document.getElementById('nav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScroll = scrollY;
  }, { passive: true });

  /* ---------- Mobile menu ---------- */
  const burger = document.getElementById('navBurger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-menu__link');

  function openMenu() {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
    burger.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
    burger.setAttribute('aria-expanded', 'false');
  }

  burger.addEventListener('click', () => {
    if (mobileMenu.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

  /* ---------- Reveal on scroll ---------- */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach(el => revealObserver.observe(el));

  /* ---------- Program tabs ---------- */
  const tabs = document.querySelectorAll('.tab');
  const schedules = document.querySelectorAll('.schedule');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');

      // Update active tab
      tabs.forEach(t => t.classList.remove('tab--active'));
      tab.classList.add('tab--active');

      // Show/hide schedules
      schedules.forEach(schedule => {
        schedule.classList.add('hidden');
      });
      const activeSchedule = document.getElementById(target);
      if (activeSchedule) {
        activeSchedule.classList.remove('hidden');
        // Re-trigger reveal for items in the new tab
        const items = activeSchedule.querySelectorAll('.reveal:not(.is-visible)');
        items.forEach((item, i) => {
          setTimeout(() => item.classList.add('is-visible'), i * 60);
        });
      }
    });
  });

  /* ---------- Smooth scroll for anchor links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navHeight = nav.offsetHeight;
        const targetY = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      }
    });
  });

  /* ---------- Initial reveal for hero ---------- */
  window.addEventListener('load', () => {
    const heroReveals = document.querySelectorAll('.hero .reveal');
    heroReveals.forEach(el => {
      setTimeout(() => el.classList.add('is-visible'), 100);
    });
  });

})();
