(function () {
  var revealElements = document.querySelectorAll('.reveal');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reducedMotion) {
    revealElements.forEach(function (el) {
      el.classList.add('in-view');
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var delay = Number(entry.target.dataset.delay || 0);
      window.setTimeout(function () {
        entry.target.classList.add('in-view');
      }, delay);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach(function (el) {
    observer.observe(el);
  });
})();
