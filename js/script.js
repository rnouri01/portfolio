// ==========================================================================
// Grundgerüst – bewusst schlank gehalten, hier kommen später Animationen rein
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Platzhalter: Mobile-Navigation
  // Sobald ein Hamburger-Button im Markup existiert, hier den Toggle ergänzen.

  // Platzhalter: Scroll-Reveal für spätere Animationen
  // Beispiel-Ansatz für später (IntersectionObserver, kein Framework nötig):
  //
  // const revealEls = document.querySelectorAll("[data-reveal]");
  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add("is-visible");
  //       observer.unobserve(entry.target);
  //     }
  //   });
  // }, { threshold: 0.15 });
  // revealEls.forEach((el) => observer.observe(el));

  // Zurück-nach-oben-Button
const backToTop = document.querySelector(".back-to-top");
if (backToTop) {
  const toggleButton = () => {
    backToTop.classList.toggle("is-visible", window.scrollY > 400);
  };
  toggleButton();
  window.addEventListener("scroll", toggleButton, { passive: true });

  backToTop.addEventListener("click", () => {
    // Ohne "behavior" gilt dein CSS (smooth bzw. sofort bei reduzierter Bewegung)
    window.scrollTo({ top: 0 });
    // Fokus zurück an den Seitenanfang, damit Tastaturnutzer nicht "verloren gehen"
    document.querySelector(".nav__logo")?.focus({ preventScroll: true });
  });
}
});
