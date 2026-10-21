const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-navigation");
const mobileScreen = window.matchMedia("(max-width: 700px)");
const navigationLinks = [...navigation.querySelectorAll("a")];

function setMenuOpen(open, restoreFocus = false) {
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  navigation.classList.toggle("is-open", open);
  if (restoreFocus) menuToggle.focus();
}

menuToggle.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

navigation.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link) return;
  setMenuOpen(false);
  // Transfere o foco para a seção, sem deixá-lo em um menu oculto.
  const target = document.querySelector(link.hash);
  if (target) {
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  }
});

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuToggle.getAttribute("aria-expanded") === "true"
  ) {
    setMenuOpen(false, true);
  }
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) setMenuOpen(false);
});

document.addEventListener("focusin", (event) => {
  if (!event.target.closest(".site-header")) setMenuOpen(false);
});

mobileScreen.addEventListener("change", () => setMenuOpen(false));

// O destaque acompanha a seção que ocupa a região central da tela.
const sections = navigationLinks
  .map((link) => document.querySelector(link.hash))
  .filter(Boolean);
const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries.find((entry) => entry.isIntersecting);
    if (!visible) return;
    navigationLinks.forEach((link) => {
      if (link.hash === `#${visible.target.id}`)
        link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  },
  { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
);
sections.forEach((section) => sectionObserver.observe(section));
