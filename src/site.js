import {
  renderContactPage,
  renderDetailPage,
  renderFooter,
  renderHeader,
  renderHome,
  renderNotFound,
  renderProductsPage
} from "./components.js";

const pageKey = document.body.dataset.page || "home";
const app = document.querySelector("#app");

const pageRenderers = {
  home: renderHome,
  products: renderProductsPage,
  laser: () => renderDetailPage("laser"),
  press: () => renderDetailPage("press"),
  automation: () => renderDetailPage("automation"),
  smart: () => renderDetailPage("smart"),
  support: () => renderDetailPage("support"),
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
    const subject = encodeURIComponent(`CUTRON technical request - ${system}`);
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nSystem: ${system}\n\nProject details:\n${message}`
    );

    status.textContent = "Your technical request has been prepared in your email client.";
    window.location.href = `mailto:office@uzinex.ro?subject=${subject}&body=${body}`;
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
