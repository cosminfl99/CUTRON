import {
  renderContactPage,
  renderCompanyPage,
  renderCategoryDetail,
  renderDetailPage,
  renderFooter,
  renderHeader,
  renderHome,
  renderNotFound,
  renderProductsPage,
  renderShowcasePage,
  renderSupportPage
} from "./components.js";
import { setLanguage, ui, updateDocumentMeta } from "./data.js";
import { detectInitialLanguage } from "./i18n.js";

const pageKey = document.body.dataset.page || "home";
const app = document.querySelector("#app");

setLanguage(detectInitialLanguage());
updateDocumentMeta(pageKey);

const pageRenderers = {
  home: renderHome,
  company: renderCompanyPage,
  products: renderProductsPage,
  laser: () => renderCategoryDetail("laser"),
  press: () => renderCategoryDetail("press"),
  shearing: () => renderCategoryDetail("shearing"),
  hydraulic: () => renderCategoryDetail("hydraulic"),
  punching: () => renderCategoryDetail("punching"),
  rolling: () => renderCategoryDetail("rolling"),
  grooving: () => renderCategoryDetail("grooving"),
  "panel-bender": () => renderCategoryDetail("panel-bender"),
  automation: () => renderDetailPage("automation"),
  smart: () => renderDetailPage("smart"),
  support: () => renderDetailPage("support"),
  "support-hub": renderSupportPage,
  showcase: renderShowcasePage,
  about: () => renderDetailPage("about"),
  contact: renderContactPage
};

const renderPage = pageRenderers[pageKey] || renderNotFound;

app.innerHTML = `
  ${renderHeader(pageKey)}
  <main>
    ${renderPage()}
  </main>
  ${renderFooter()}
`;

document.body.classList.add("is-ready");

initHeader();
initReveals();
initTiltCards();
initContactForm();
initSmoothAnchors();
initLanguageSwitchers();

function initHeader() {
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-mobile-toggle]");
  const panel = document.querySelector("[data-mobile-panel]");

  const syncHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });

  toggle?.addEventListener("click", () => {
    const isOpen = panel.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.innerHTML = isOpen
      ? '<svg class="icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12"></path><path d="M18 6 6 18"></path></svg>'
      : '<svg class="icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"></path><path d="M4 12h16"></path><path d="M4 17h16"></path></svg>';
  });

  panel?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      panel.classList.remove("is-open");
      toggle?.setAttribute("aria-expanded", "false");
    });
  });
}

function initReveals() {
  const elements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
  );

  elements.forEach((el) => observer.observe(el));
}

function initTiltCards() {
  const cards = document.querySelectorAll(".tilt-card");

  cards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rx = (0.5 - y / rect.height) * 6;
      const ry = (x / rect.width - 0.5) * 6;
      card.style.setProperty("--rx", `${rx}deg`);
      card.style.setProperty("--ry", `${ry}deg`);
      card.style.setProperty("--mx", `${x}px`);
      card.style.setProperty("--my", `${y}px`);
    });

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
      card.style.removeProperty("--mx");
      card.style.removeProperty("--my");
    });
  });
}

function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  const status = document.querySelector("[data-form-status]");

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name") || "";
    const company = formData.get("company") || "";
    const email = formData.get("email") || "";
    const system = formData.get("system") || "";
    const message = formData.get("message") || "";
    const subject = encodeURIComponent(`${ui.contact.mailSubject} - ${system}`);
    const body = encodeURIComponent(
      `${ui.contact.fields[0]}: ${name}\n${ui.contact.fields[2]}: ${company}\n${ui.contact.fields[1]}: ${email}\n${ui.contact.fields[3]}: ${system}\n\n${ui.contact.fields[4]}:\n${message}`
    );

    status.textContent = ui.contact.status;
    window.location.href = `mailto:office@uzinex.ro?subject=${subject}&body=${body}`;
  });
}

function initLanguageSwitchers() {
  document.querySelectorAll("[data-language-switcher]").forEach((select) => {
    select.addEventListener("change", () => {
      const language = select.value;
      localStorage.setItem("cutron-language", language);
      const url = new URL(window.location.href);
      url.searchParams.set("lang", language);
      window.location.href = url.toString();
    });
  });
}

function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"], a[href*=".html#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      const [path, hash] = href.split("#");
      const samePage = !path || path === window.location.pathname.split("/").pop();

      if (samePage && hash) {
        const target = document.getElementById(hash);
        if (target) {
          event.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });
}
