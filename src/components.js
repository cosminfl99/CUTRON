import {
  assets,
  caseStudies,
  currentLanguage,
  nav,
  pages,
  performance,
  products,
  supportedLanguages,
  ui,
  why
} from "./data.js";
import { getStructure } from "./structure.js";

const iconPaths = {
  arrow: '<path d="M5 12h14"></path><path d="m13 6 6 6-6 6"></path>',
  laser: '<path d="M4 18h16"></path><path d="M7 15h10l2-8H5l2 8Z"></path><path d="M12 7v8"></path><path d="M9 11h6"></path>',
  bend: '<path d="M4 7h16"></path><path d="M7 7v10h10"></path><path d="m13 11 4 6"></path>',
  panel: '<path d="M4 5h16v14H4z"></path><path d="M8 5v14"></path><path d="M16 5v14"></path>',
  robot: '<path d="M7 12h10v7H7z"></path><path d="M9 12V7h6v5"></path><path d="M12 7V4"></path><path d="M5 15H3"></path><path d="M21 15h-2"></path>',
  weld: '<path d="M4 17 17 4"></path><path d="m14 4 6 6"></path><path d="M7 14l3 3"></path><path d="M18 14l2 2"></path>',
  network: '<path d="M12 4v6"></path><path d="M12 14v6"></path><path d="M5 8l5 3"></path><path d="m14 13 5 3"></path><path d="M19 8l-5 3"></path><path d="m10 13-5 3"></path><circle cx="12" cy="12" r="2"></circle><circle cx="12" cy="4" r="2"></circle><circle cx="12" cy="20" r="2"></circle><circle cx="5" cy="8" r="2"></circle><circle cx="19" cy="8" r="2"></circle><circle cx="5" cy="16" r="2"></circle><circle cx="19" cy="16" r="2"></circle>',
  support: '<path d="M12 2a7 7 0 0 0-7 7v3"></path><path d="M19 12V9a7 7 0 0 0-7-7"></path><path d="M5 12h3v5H5z"></path><path d="M16 12h3v5h-3z"></path><path d="M14 20h-4"></path>',
  shield: '<path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z"></path><path d="m9 12 2 2 4-5"></path>',
  factory: '<path d="M3 21h18"></path><path d="M5 21V9l5 3V9l5 3V5h4v16"></path><path d="M8 17h2"></path><path d="M13 17h2"></path>',
  gauge: '<path d="M4 14a8 8 0 1 1 16 0"></path><path d="M12 14l4-4"></path><path d="M8 20h8"></path>',
  check: '<path d="m5 12 4 4L19 6"></path>',
  menu: '<path d="M4 7h16"></path><path d="M4 12h16"></path><path d="M4 17h16"></path>',
  close: '<path d="M6 6l12 12"></path><path d="M18 6 6 18"></path>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.2 19.2 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8 9.7a16 16 0 0 0 6.3 6.3l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z"></path>',
  mail: '<path d="M4 4h16v16H4z"></path><path d="m4 7 8 6 8-6"></path>'
};

export function icon(name, className = "icon") {
  const path = iconPaths[name] || iconPaths.arrow;
  return `<svg class="${className}" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
}

function button(href, label, variant = "primary", iconName = "arrow") {
  return `<a class="button button--${variant}" href="${href}"><span>${label}</span>${icon(iconName)}</a>`;
}

function sectionIntro(label, title, text) {
  return `
    <div class="section-intro reveal">
      <span class="section-label">${label}</span>
      <h2>${title}</h2>
      <p>${text}</p>
    </div>
  `;
}

function machineVisual(type) {
  return `
    <div class="machine machine--${type}" aria-hidden="true">
      <div class="machine__rail"></div>
      <div class="machine__body"></div>
      <div class="machine__gantry"></div>
      <div class="machine__beam"></div>
      <div class="machine__spark"></div>
      <div class="machine__plate"></div>
    </div>
  `;
}

function productCard(product) {
  return `
    <article id="${product.id}" class="product-card reveal tilt-card">
      <a href="${product.href}" aria-label="${ui.detail.view}: ${product.title}">
        <div class="product-card__top">
          <span class="product-card__icon">${icon(product.icon)}</span>
          <span class="product-card__code">CUTRON</span>
        </div>
        ${machineVisual(product.visual)}
        <div class="product-card__content">
          <h3>${product.title}</h3>
          <p>${product.text}</p>
          <div class="product-card__specs">
            ${product.specs.map((spec) => `<span>${spec}</span>`).join("")}
          </div>
        </div>
      </a>
    </article>
  `;
}

export function renderHeader(currentPage) {
  const s = getStructure();
  const links = nav
    .map((item) => {
      const active = isActive(item.href, currentPage);
      const mega = item.mega ? renderMegaMenu() : "";
      return `
        <div class="nav-item ${item.mega ? "nav-item--mega" : ""}">
          <a class="${active ? "is-active" : ""}" href="${item.href}">${item.label}</a>
          ${mega}
        </div>
      `;
    })
    .join("");

  return `
    <header class="site-header" data-header>
      <div class="top-strip">
        <div>
          ${s.top.map((item) => `<span>${item}</span>`).join("")}
        </div>
        <a href="contact.html">${s.quote}</a>
      </div>
      <div class="nav-shell">
        <a class="brand" href="index.html" aria-label="CUTRON Home">
          <img src="${assets.logoDark}" alt="CUTRON Driven by Precision" />
        </a>
        <nav class="desktop-nav" aria-label="Primary navigation">
          ${links}
        </nav>
        <a class="nav-cta" href="contact.html">${s.quote}</a>
        ${renderLanguageSwitcher()}
        <button class="mobile-toggle" type="button" aria-label="Open menu" aria-expanded="false" data-mobile-toggle>
          ${icon("menu")}
        </button>
      </div>
      <div class="mobile-panel" data-mobile-panel>
        ${nav.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
        ${renderLanguageSwitcher("language-switcher--mobile")}
        <a class="mobile-panel__cta" href="contact.html">${ui.mobileCta}</a>
      </div>
    </header>
  `;
}

function renderLanguageSwitcher(extraClass = "") {
  return `
    <label class="language-switcher ${extraClass}" aria-label="${ui.languageLabel}">
      <span>${ui.languageLabel}</span>
      <select data-language-switcher>
        ${supportedLanguages
          .map(
            (language) =>
              `<option value="${language.code}" ${language.code === currentLanguage ? "selected" : ""}>${language.label}</option>`
          )
          .join("")}
      </select>
    </label>
  `;
}

function renderMegaMenu() {
  const s = getStructure();
  return `
    <div class="mega-panel" aria-label="CUTRON product categories">
      <div class="mega-panel__inner">
        ${s.products
          .map(
            (product) => `
              <a class="mega-product mega-product--${product.id}" href="${product.href}">
                <div class="mega-product__visual">
                  ${machineVisual(product.visual)}
                </div>
                <strong>${product.title}</strong>
              </a>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function isActive(href, currentPage) {
  const map = {
    home: "index.html",
    products: "products.html",
    laser: "laser-cutting.html",
    press: "press-brake.html",
    automation: "automation.html",
    smart: "smart-factory.html",
    support: "service-support.html",
    about: "about.html",
    contact: "contact.html"
  };
  return href === map[currentPage];
}

export function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="footer-main">
        <div>
          <img class="footer-logo" src="${assets.logoDark}" alt="CUTRON" />
          <p>${ui.footer.text}</p>
        </div>
        <div class="footer-links">
          <a href="products.html">${ui.footer.links[0]}</a>
          <a href="laser-cutting.html">${ui.footer.links[1]}</a>
          <a href="press-brake.html">${ui.footer.links[2]}</a>
          <a href="automation.html">${ui.footer.links[3]}</a>
          <a href="service-support.html">${ui.footer.links[4]}</a>
          <a href="contact.html">${ui.footer.links[5]}</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>${ui.footer.bottom[0]}</span>
        <span>${ui.footer.bottom[1]}</span>
      </div>
    </footer>
  `;
}

export function renderHome() {
  return `
    ${renderHero()}
    ${renderEngineeringAuthority()}
    ${renderExpertiseSection()}
    ${renderTechnologyPlatform()}
    ${renderCatalogProducts()}
    ${renderWhyCutron()}
    ${renderGlobalReach()}
    ${renderContentBlocks()}
    ${renderTechnicalService()}
    ${renderCaseStudies()}
    ${renderFinalCta()}
  `;
}

function renderHero() {
  const s = getStructure();
  return `
    <section class="hero" id="top">
      <img class="hero__image hero__image--home" src="${assets.homeHero}" alt="CUTRON premium sheet metal systems" />
      <div class="hero__shade"></div>
      <div class="hero__center reveal">
        <img class="hero__wordmark" src="${assets.heroWordmark}" alt="CUTRON" />
        <h1>DRIVEN BY PRECISION</h1>
      </div>
      <div class="hero__actions hero__actions--center">
        <a class="hero-button hero-button--light" href="products.html">${s.heroButtons?.[0] || s.hero[2]}</a>
        <a class="hero-button hero-button--outline" href="contact.html">${s.heroButtons?.[1] || s.hero[3]}</a>
      </div>
    </section>
  `;
}

function renderEngineeringAuthority() {
  const s = getStructure();
  return `
    <section class="section authority-section" id="engineering">
      <div class="authority-layout">
        <div class="authority-copy reveal">
          <span class="section-label">${s.authority[0]}</span>
          <h2>${s.authority[1]}</h2>
          <p>${s.authority[2]}</p>
        </div>
        <div class="authority-proof-grid">
          ${s.authority[3]
            .map(
              ([title, text], index) => `
                <article class="authority-proof reveal">
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <h3>${title}</h3>
                  <p>${text}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderExpertiseSection() {
  const s = getStructure();
  return `
    <section class="section expertise-band" id="company">
      <div class="expertise-layout">
        <div class="brand-copy reveal">
          <span class="section-label">${s.expertise[0]}</span>
          <h2>${s.expertise[1]}</h2>
          <p>${s.expertise[2]}</p>
          <div class="brand-claims">
            <span>Luxury industrial identity</span>
            <span>European-style technical support</span>
            <span>Premium manufacturing authority</span>
          </div>
        </div>
        <div class="expertise-stats reveal">
          ${s.stats
            .map(([value, label]) => `<article><strong>${value}</strong><span>${label}</span></article>`)
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderCatalogProducts() {
  const s = getStructure();
  return `
    <section class="section section--black" id="products">
      ${sectionIntro(s.productIntro[0], s.productIntro[1], s.productIntro[2])}
      <div class="category-tabs reveal">
        ${s.products.map((product) => `<a href="#${product.id}">${product.title}</a>`).join("")}
      </div>
      <div class="product-grid product-grid--catalog">
        ${s.products.map(productCard).join("")}
      </div>
    </section>
  `;
}

function renderTechnologyPlatform() {
  const s = getStructure();
  return `
    <section class="section section--titanium technology-section" id="technology">
      <div class="technology-layout">
        <div class="technology-map reveal">
          <div class="technology-map__core">
            <span>CUTRON</span>
            <strong>4.0</strong>
          </div>
          <span class="technology-map__node technology-map__node--one">CNC</span>
          <span class="technology-map__node technology-map__node--two">Automation</span>
          <span class="technology-map__node technology-map__node--three">Nesting</span>
          <span class="technology-map__node technology-map__node--four">Service</span>
        </div>
        <div class="technology-copy reveal">
          <span class="section-label">${s.technology[0]}</span>
          <h2>${s.technology[1]}</h2>
          <p>${s.technology[2]}</p>
          <div class="technology-list">
            ${s.technology[3]
              .map(
                ([title, text]) => `
                  <article>
                    <h3>${title}</h3>
                    <p>${text}</p>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderWhyCutron() {
  const s = getStructure();
  return `
    <section class="section section--split cutron-why">
      <div class="split-media reveal">
        <img src="${assets.smartFactory}" alt="CUTRON premium factory automation" loading="lazy" />
      </div>
      <div class="split-copy reveal">
        <span class="section-label">${s.why[0]}</span>
        <h2>${s.why[1]}</h2>
        <div class="why-accordion">
          ${s.why[2].map((item, index) => `<details ${index === 0 ? "open" : ""}><summary>${item}</summary><p>${ui.detail.capabilityText}</p></details>`).join("")}
        </div>
        ${button("support.html", nav[3]?.label || "Support", "secondary", "support")}
      </div>
    </section>
  `;
}

function renderGlobalReach() {
  const s = getStructure();
  return `
    <section class="section reach-section">
      <div class="reach-layout">
        <div class="reach-copy reveal">
          <span class="section-label">${s.reach[0]}</span>
          <h2>${s.reach[1]}</h2>
          <p>${s.reach[2]}</p>
        </div>
        <div class="reach-grid">
          ${s.reach[3]
            .map(
              ([country, text]) => `
                <article class="reach-card reveal">
                  <strong>${country}</strong>
                  <p>${text}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderContentBlocks() {
  const s = getStructure();
  const hrefs = ["company.html", "showcase.html", "support.html", "company.html"];
  return `
    <section class="section section--titanium">
      <div class="content-block-grid">
        ${s.contentBlocks
          .map(
            ([label, title, text], index) => `
              <a class="content-block reveal" href="${hrefs[index]}">
                <span>${label}</span>
                <h3>${title}</h3>
                <p>${text}</p>
                ${icon("arrow")}
              </a>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderTechnicalService() {
  const s = getStructure();
  return `
    <section class="section section--metrics">
      ${sectionIntro(s.service[0], s.service[1], s.expertise[2])}
      <div class="service-grid">
        ${s.service[2]
          .map(
            ([title, text]) => `
              <article class="service-card reveal">
                <span>${icon("check")}</span>
                <h3>${title}</h3>
                <p>${text}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderBrandSection() {
  return `
    <section class="section section--titanium" id="brand">
      <div class="section-grid section-grid--brand">
        <div class="brand-copy reveal">
          <span class="section-label">${ui.brand.label}</span>
          <h2>${ui.brand.title}</h2>
          <p>${ui.brand.text}</p>
          <div class="brand-claims">
            ${ui.brand.claims.map((claim) => `<span>${claim}</span>`).join("")}
          </div>
        </div>
        <div class="brand-visual reveal">
          <img src="${assets.ecosystem}" alt="CUTRON automated sheet metal production ecosystem" loading="lazy" />
          <div class="brand-visual__mark">
            <img src="${assets.mark}" alt="" />
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderProductEcosystem() {
  return `
    <section class="section section--black" id="systems">
      ${sectionIntro(
        ui.sectionProduct.label,
        ui.sectionProduct.title,
        ui.sectionProduct.text
      )}
      <div class="product-grid">
        ${products.map(productCard).join("")}
      </div>
    </section>
  `;
}

function renderSmartFactory() {
  const flow = ui.smartFactory.flow;
  return `
    <section class="section section--split" id="smart-factory">
      <div class="split-media reveal">
        <img src="${assets.smartFactory}" alt="Connected smart factory sheet metal automation system" loading="lazy" />
      </div>
      <div class="split-copy reveal">
        <span class="section-label">${ui.smartFactory.label}</span>
        <h2>${ui.smartFactory.title}</h2>
        <p>${ui.smartFactory.text}</p>
        <div class="flow-line">
          ${flow.map((item) => `<span>${item}</span>`).join("")}
        </div>
        ${button("smart-factory.html", ui.smartFactory.cta, "secondary", "network")}
      </div>
    </section>
  `;
}

function renderPerformance() {
  return `
    <section class="section section--metrics">
      ${sectionIntro(
        ui.performanceSection.label,
        ui.performanceSection.title,
        ui.performanceSection.text
      )}
      <div class="metric-grid">
        ${performance
          .map(
            ([value, text]) => `
              <article class="metric reveal">
                <strong>${value}</strong>
                <p>${text}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderWhy() {
  return `
    <section class="section section--why">
      ${sectionIntro(
        ui.whySection.label,
        ui.whySection.title,
        ui.whySection.text
      )}
      <div class="why-list">
        ${why
          .map(
            ([title, text], index) => `
              <article class="why-item reveal">
                <span>${String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>${title}</h3>
                  <p>${text}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderCaseStudies() {
  return `
    <section class="section section--black" id="case-studies">
      ${sectionIntro(
        ui.caseSection.label,
        ui.caseSection.title,
        ui.caseSection.text
      )}
      <div class="case-grid">
        ${caseStudies
          .map(
            (study) => `
              <article class="case-card reveal">
                <img src="${study.image}" alt="${study.title}" loading="lazy" />
                <div class="case-card__body">
                  <span>${study.tag}</span>
                  <h3>${study.title}</h3>
                  <p>${study.text}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderFinalCta() {
  return `
    <section class="final-cta">
      <img src="${assets.mark}" alt="" />
      <div class="reveal">
        <span class="section-label">${ui.finalCta.label}</span>
        <h2>${ui.finalCta.title}</h2>
        <p>${ui.finalCta.text}</p>
        ${button("contact.html", ui.hero.primary, "primary", "arrow")}
      </div>
    </section>
  `;
}

export function renderProductsPage() {
  const s = getStructure();
  return `
    ${renderCatalogHero(s.productIntro[1], s.productIntro[2], assets.ecosystem)}
    <section class="section section--black">
      ${sectionIntro(s.productIntro[0], s.productIntro[1], s.productIntro[2])}
      <div class="product-grid">
        ${s.products.map(productCard).join("")}
      </div>
    </section>
    ${renderSystemArchitecture()}
    ${renderFinalCta()}
  `;
}

function renderCatalogHero(title, intro, image) {
  return `
    <section class="page-hero">
      <img class="page-hero__image" src="${image}" alt="${title}" />
      <div class="page-hero__shade"></div>
      <div class="page-hero__content reveal">
        <span class="section-label">CUTRON</span>
        <h1>${title}</h1>
        <p>${intro}</p>
        <div class="page-hero__actions">
          ${button("contact.html", getStructure().quote, "primary", "arrow")}
          ${button("support.html", nav[3]?.label || "Support", "secondary", "support")}
        </div>
      </div>
    </section>
  `;
}

function renderSystemArchitecture() {
  const steps = ui.architecture.steps;
  return `
    <section class="section section--titanium">
      <div class="architecture">
        <div class="architecture__copy reveal">
          <span class="section-label">${ui.architecture.label}</span>
          <h2>${ui.architecture.title}</h2>
          <p>${ui.architecture.text}</p>
        </div>
        <div class="architecture__flow reveal">
          ${steps.map((step, index) => `<span><strong>${index + 1}</strong>${step}</span>`).join("")}
        </div>
      </div>
    </section>
  `;
}

export function renderDetailPage(pageKey) {
  const page = pages[pageKey];
  if (!page) return renderCategoryDetail(pageKey);
  return `
    ${renderPageHero(page)}
    ${renderPillars(page)}
    ${renderTechMatrix(page)}
    ${renderProcessSection(page)}
    ${renderFinalCta()}
  `;
}

export function renderCompanyPage() {
  const s = getStructure();
  return `
    ${renderCatalogHero(s.expertise[1], s.expertise[2], assets.hero)}
    ${renderExpertiseSection()}
    ${renderWhyCutron()}
    ${renderFinalCta()}
  `;
}

export function renderSupportPage() {
  const s = getStructure();
  return `
    ${renderCatalogHero(s.service[1], s.expertise[2], assets.smartFactory)}
    ${renderTechnicalService()}
    ${renderSystemArchitecture()}
    ${renderFinalCta()}
  `;
}

export function renderShowcasePage() {
  const s = getStructure();
  return `
    ${renderCatalogHero(s.contentBlocks[1][1], s.contentBlocks[1][2], assets.ecosystem)}
    ${renderCaseStudies()}
    ${renderCatalogProducts()}
    ${renderFinalCta()}
  `;
}

export function renderCategoryDetail(pageKey) {
  const s = getStructure();
  const product = s.products.find((item) => item.id === pageKey) || s.products.find((item) => item.href.includes(pageKey));
  if (!product) return renderNotFound();
  const page = {
    title: product.title,
    label: s.productIntro[0],
    intro: product.text,
    image: pageKey === "laser" ? assets.hero : assets.ecosystem,
    icon: product.icon,
    pillars: [
      ["Premium configuration", "A technical recommendation built around material, part families, throughput and future automation."],
      ["Production discipline", "Clean workflow logic from preparation to finished parts, without cheap catalogue positioning."],
      ["Service continuity", "Installation, training and support planned as part of the production system."]
    ],
    matrix: [
      ["System family", product.title],
      ["Positioning", "Premium industrial manufacturing technology"],
      ["Configuration", product.specs.join(", ")],
      ["Support", "Consulting, installation, training and lifecycle service"]
    ]
  };
  return `
    ${renderPageHero(page)}
    ${renderPillars(page)}
    ${renderTechMatrix(page)}
    ${renderTechnicalService()}
    ${renderFinalCta()}
  `;
}

function renderPageHero(page) {
  return `
    <section class="page-hero">
      <img class="page-hero__image" src="${page.image}" alt="${page.title}" />
      <div class="page-hero__shade"></div>
      <div class="page-hero__content reveal">
        <span class="section-label">${page.label}</span>
        <h1>${page.title}</h1>
        <p>${page.intro}</p>
        <div class="page-hero__actions">
          ${button("contact.html", ui.detail.request, "primary", "arrow")}
          ${button("products.html", ui.detail.view, "secondary", "factory")}
        </div>
      </div>
    </section>
  `;
}

function renderPillars(page) {
  return `
    <section class="section section--black">
      ${sectionIntro(ui.detail.capabilityLabel, ui.detail.capabilityTitle, ui.detail.capabilityText)}
      <div class="pillar-grid">
        ${page.pillars
          .map(
            ([title, text]) => `
              <article class="pillar reveal">
                <span>${icon(page.icon || "gauge")}</span>
                <h3>${title}</h3>
                <p>${text}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderTechMatrix(page) {
  return `
    <section class="section section--titanium">
      <div class="matrix-shell reveal">
        <div>
          <span class="section-label">${ui.detail.technicalLabel}</span>
          <h2>${ui.detail.technicalTitle}</h2>
        </div>
        <div class="tech-matrix">
          ${page.matrix
            .map(
              ([label, value]) => `
                <div class="tech-row">
                  <span>${label}</span>
                  <p>${value}</p>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderProcessSection(page) {
  const processes = ui.detail.processes;
  return `
    <section class="section section--process">
      <div class="process-copy reveal">
        <span class="section-label">${ui.detail.methodLabel}</span>
        <h2>${ui.detail.methodTitle}</h2>
        <p>${ui.detail.methodText(page.title)}</p>
      </div>
      <div class="process-track reveal">
        ${processes.map((item) => `<span>${item}</span>`).join("")}
      </div>
    </section>
  `;
}

export function renderContactPage() {
  return `
    <section class="page-hero page-hero--contact">
      <img class="page-hero__image" src="${assets.hero}" alt="CUTRON" />
      <div class="page-hero__shade"></div>
      <div class="page-hero__content reveal">
        <span class="section-label">${ui.contact.label}</span>
        <h1>${ui.contact.title}</h1>
        <p>${ui.contact.text}</p>
      </div>
    </section>
    <section class="section section--contact">
      <div class="contact-shell">
        <form class="contact-form reveal" data-contact-form>
          <label>
            <span>${ui.contact.fields[0]}</span>
            <input name="name" type="text" autocomplete="name" required />
          </label>
          <label>
            <span>${ui.contact.fields[1]}</span>
            <input name="email" type="email" autocomplete="email" required />
          </label>
          <label>
            <span>${ui.contact.fields[2]}</span>
            <input name="company" type="text" autocomplete="organization" />
          </label>
          <label>
            <span>${ui.contact.fields[3]}</span>
            <select name="system">
              ${ui.contact.options.map((option) => `<option>${option}</option>`).join("")}
            </select>
          </label>
          <label class="contact-form__wide">
            <span>${ui.contact.fields[4]}</span>
            <textarea name="message" rows="6" placeholder="${ui.contact.placeholder}"></textarea>
          </label>
          <button class="button button--primary contact-form__wide" type="submit">
            <span>${ui.contact.submit}</span>${icon("arrow")}
          </button>
          <p class="form-status" data-form-status></p>
        </form>
        <aside class="contact-aside reveal">
          <img src="${assets.mark}" alt="" />
          <h2>${ui.contact.asideTitle}</h2>
          <ul>
            ${ui.contact.checklist.map((item) => `<li>${icon("check")} ${item}</li>`).join("")}
          </ul>
          <div class="contact-lines">
            <a href="mailto:office@uzinex.ro">${icon("mail")} office@uzinex.ro</a>
            <a href="tel:+40000000000">${icon("phone")} +40 000 000 000</a>
          </div>
        </aside>
      </div>
    </section>
  `;
}

export function renderNotFound() {
  return `
    <section class="page-hero">
      <img class="page-hero__image" src="${assets.hero}" alt="CUTRON" />
      <div class="page-hero__shade"></div>
      <div class="page-hero__content reveal">
        <span class="section-label">CUTRON</span>
        <h1>${ui.notFound[0]}</h1>
        <p>${ui.notFound[1]}</p>
        ${button("index.html", ui.notFound[2], "primary", "arrow")}
      </div>
    </section>
  `;
}
