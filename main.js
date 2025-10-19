
onload = () => {
  // restore animations after 1s
  const t = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(t);
  }, 1000);

  // redirect after 5 seconds (configurable via <body data-redirect="https://...">)
  const redirectAfter = 10000; // ms
  const target = document.body.dataset.redirect || "https://minhnghia-dev.github.io/happy-20-10/test";

  const r = setTimeout(() => {
    // use location.replace so the current page is not kept in history
    try {
      location.replace(target);
    } catch (e) {
      // fallback
      location.href = target;
    }
    clearTimeout(r);
  }, redirectAfter);

  // if there's a CTA button, let it navigate immediately when clicked
  const btn = document.getElementById("cta-btn");
  if (btn) {
    btn.addEventListener("click", (ev) => {
      ev.preventDefault();
      location.href = document.body.dataset.redirect || "https://minhnghia-dev.github.io/happy-20-10/test";
    });
  }
};
  