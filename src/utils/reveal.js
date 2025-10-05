export function initReveal() {
  const els = Array.from(document.querySelectorAll('[data-reveal]'));
  if (!('IntersectionObserver' in window) || els.length === 0) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    })
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });

  els.forEach(el => io.observe(el));
}
