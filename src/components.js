import { assets, caseStudies, megaMenu, nav, pages, performance, products, why } from "./data.js";

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
      <a href="${product.href}" aria-label="Explore ${product.title}">
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
      <div class="nav-shell">
        <a class="brand" href="index.html" aria-label="CUTRON Home">
          <img src="${assets.logoDark}" alt="CUTRON Driven by Precision" />
        </a>
        <nav class="desktop-nav" aria-label="Primary navigation">
          ${links}
        </nav>
        <a class="nav-cta" href="contact.html">Request Offer</a>
        <button class="mobile-toggle" type="button" aria-label="Open menu" aria-expanded="false" data-mobile-toggle>
          ${icon("menu")}
        </button>
      </div>
      <div class="mobile-panel" data-mobile-panel>
        ${nav.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
        <a class="mobile-panel__cta" href="contact.html">Request Technical Offer</a>
      </div>
    </header>
  `;
}

function renderMegaMenu() {
  return `
    <div class="mega-panel">
      <div class="mega-panel__inner">
        ${megaMenu
          .map(
            (group) => `
              <div class="mega-group">
                <span>${group.title}</span>
                ${group.items
                  .map(
                    ([title, text, href]) => `
                      <a href="${href}">
                        <strong>${title}</strong>
                        <small>${text}</small>
                      </a>
                    `
                  )
                  .join("")}
              </div>
            `
          )
          .join("")}
        <div class="mega-feature">
          <img src="${assets.mark}" alt="" />
          <strong>Driven by Precision</strong>
          <small>Premium sheet metal technology powered by UZINEX.</small>
        </div>
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
          <p>Premium sheet metal systems for modern manufacturing. Powered by UZINEX.</p>
        </div>
        <div class="footer-links">
          <a href="products.html">Products</a>
          <a href="laser-cutting.html">Laser Cutting</a>
          <a href="press-brake.html">Press Brake</a>
          <a href="automation.html">Automation</a>
          <a href="service-support.html">Service & Support</a>
          <a href="contact.html">Contact</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>CUTRON - Driven by Precision</span>
        <span>Luxury industrial technology by UZINEX</span>
      </div>
    </footer>
  `;
}

export function renderHome() {
  return `
    ${renderHero()}
    ${renderBrandSection()}
    ${renderProductEcosystem()}
    ${renderSmartFactory()}
    ${renderPerformance()}
    ${renderWhy()}
    ${renderCaseStudies()}
    ${renderFinalCta()}
  `;
}

function renderHero() {
  return `
    <section class="hero" id="top">
      <img class="hero__image" src="${assets.hero}" alt="Premium industrial automation cell with laser cutting and robotic systems" />
      <div class="hero__shade"></div>
      <div class="hero__metal-line"></div>
      <div class="hero__content reveal">
        <img class="hero__logo" src="${assets.logoDark}" alt="CUTRON Driven by Precision" />
        <span class="hero__kicker">Premium industrial division powered by UZINEX</span>
        <h1>ENGINEERED FOR PRECISION</h1>
        <p>Premium sheet metal systems for modern manufacturing.</p>
        <div class="hero__actions">
          ${button("contact.html", "Request Technical Offer", "primary", "arrow")}
          ${button("products.html", "Explore Systems", "secondary", "factory")}
        </div>
      </div>
      <div class="hero__signal reveal">
        <span>Fiber laser</span>
        <span>Press brake</span>
        <span>Robotic cells</span>
        <span>Smart factory</span>
      </div>
    </section>
  `;
}

function renderBrandSection() {
  return `
    <section class="section section--titanium" id="brand">
      <div class="section-grid section-grid--brand">
        <div class="brand-copy reveal">
          <span class="section-label">CUTRON by UZINEX</span>
          <h2>Industrial performance refined.</h2>
          <p>CUTRON is the premium industrial automation and sheet metal processing division powered by the UZINEX ecosystem. The brand is built around precise configuration, accountable support and modern production architecture.</p>
          <div class="brand-claims">
            <span>Polished steel discipline</span>
            <span>Restrained gold precision</span>
            <span>Enterprise manufacturing logic</span>
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
        "Product ecosystem",
        "Premium sheet metal technology.",
        "From standalone machines to complete production ecosystems, CUTRON systems are configured around output, material flow and long-term service."
      )}
      <div class="product-grid">
        ${products.map(productCard).join("")}
      </div>
    </section>
  `;
}

function renderSmartFactory() {
  const flow = ["CAD/CAM", "Storage", "Laser cutting", "Bending", "Welding", "Inspection", "Dispatch"];
  return `
    <section class="section section--split" id="smart-factory">
      <div class="split-media reveal">
        <img src="${assets.smartFactory}" alt="Connected smart factory sheet metal automation system" loading="lazy" />
      </div>
      <div class="split-copy reveal">
        <span class="section-label">Smart factory integration</span>
        <h2>Automation that respects the whole factory.</h2>
        <p>CUTRON connects machines, robotic cells, storage towers and digital routing into a single production logic. The goal is not more equipment. The goal is a cleaner, faster, measurable workflow.</p>
        <div class="flow-line">
          ${flow.map((item) => `<span>${item}</span>`).join("")}
        </div>
        ${button("smart-factory.html", "Explore Smart Factory", "secondary", "network")}
      </div>
    </section>
  `;
}

function renderPerformance() {
  return `
    <section class="section section--metrics">
      ${sectionIntro(
        "Performance",
        "Built for serious production environments.",
        "CUTRON communicates through measurable capability: power, automation, support, training and configured industrial efficiency."
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
        "Why CUTRON",
        "Engineering authority with service continuity.",
        "Premium machinery only matters when it is correctly configured, installed, trained and supported."
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
        "Industrial projects",
        "Cinematic systems. Practical outcomes.",
        "CUTRON case studies are presented as production architectures: cutting, bending, welding and automation working together."
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
        <span class="section-label">Driven by Precision</span>
        <h2>Build your next production system with CUTRON.</h2>
        <p>Request a technical configuration for laser CNC, press brake, robotic automation or a complete sheet metal ecosystem.</p>
        ${button("contact.html", "Request Technical Offer", "primary", "arrow")}
      </div>
    </section>
  `;
}

export function renderProductsPage() {
  const page = pages.products;
  return `
    ${renderPageHero(page)}
    <section class="section section--black">
      ${sectionIntro("Systems", "One premium portfolio, multiple production paths.", "Select a standalone machine, a connected cell or a complete factory architecture. CUTRON keeps the visual discipline premium and the technical logic practical.")}
      <div class="product-grid">
        ${products.map(productCard).join("")}
      </div>
    </section>
    ${renderSystemArchitecture()}
    ${renderFinalCta()}
  `;
}

function renderSystemArchitecture() {
  const steps = ["Need analysis", "System configuration", "Layout planning", "Installation", "Training", "Lifecycle support"];
  return `
    <section class="section section--titanium">
      <div class="architecture">
        <div class="architecture__copy reveal">
          <span class="section-label">Configuration logic</span>
          <h2>Production ecosystems, not isolated machines.</h2>
          <p>CUTRON is built for manufacturers who need precise recommendations, clean integration and technical support after the offer is signed.</p>
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
  return `
    ${renderPageHero(page)}
    ${renderPillars(page)}
    ${renderTechMatrix(page)}
    ${renderProcessSection(page)}
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
          ${button("contact.html", "Request Technical Offer", "primary", "arrow")}
          ${button("products.html", "View Systems", "secondary", "factory")}
        </div>
      </div>
    </section>
  `;
}

function renderPillars(page) {
  return `
    <section class="section section--black">
      ${sectionIntro("Capability", "Precision-built around the production target.", "Every CUTRON configuration is evaluated through output, material, workflow and long-term service expectations.")}
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
          <span class="section-label">Technical view</span>
          <h2>Configured for real factory conditions.</h2>
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
  const processes = ["Discovery", "Technical offer", "Factory layout", "Commissioning", "Training", "Support"];
  return `
    <section class="section section--process">
      <div class="process-copy reveal">
        <span class="section-label">Method</span>
        <h2>From technical offer to production ramp-up.</h2>
        <p>${page.title} projects are handled as engineering conversations: short, precise and grounded in the production result.</p>
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
      <img class="page-hero__image" src="${assets.hero}" alt="CUTRON contact and technical offer" />
      <div class="page-hero__shade"></div>
      <div class="page-hero__content reveal">
        <span class="section-label">Technical offer</span>
        <h1>Request a CUTRON configuration.</h1>
        <p>Tell us what you manufacture, what material you process and what production system you want to build next.</p>
      </div>
    </section>
    <section class="section section--contact">
      <div class="contact-shell">
        <form class="contact-form reveal" data-contact-form>
          <label>
            <span>Name</span>
            <input name="name" type="text" autocomplete="name" required />
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" autocomplete="email" required />
          </label>
          <label>
            <span>Company</span>
            <input name="company" type="text" autocomplete="organization" />
          </label>
          <label>
            <span>System interest</span>
            <select name="system">
              <option>Fiber Laser Systems</option>
              <option>Press Brake Systems</option>
              <option>Automation & Robotic Cells</option>
              <option>Smart Factory Integration</option>
              <option>Complete production ecosystem</option>
            </select>
          </label>
          <label class="contact-form__wide">
            <span>Project details</span>
            <textarea name="message" rows="6" placeholder="Material, thickness range, production volume, automation goals"></textarea>
          </label>
          <button class="button button--primary contact-form__wide" type="submit">
            <span>Prepare Technical Request</span>${icon("arrow")}
          </button>
          <p class="form-status" data-form-status></p>
        </form>
        <aside class="contact-aside reveal">
          <img src="${assets.mark}" alt="" />
          <h2>What helps us configure precisely</h2>
          <ul>
            <li>${icon("check")} Material type and thickness range</li>
            <li>${icon("check")} Part examples or production families</li>
            <li>${icon("check")} Required throughput and shifts</li>
            <li>${icon("check")} Available floor space</li>
            <li>${icon("check")} Automation targets</li>
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
        <h1>Page not found.</h1>
        <p>The requested section is not available.</p>
        ${button("index.html", "Return Home", "primary", "arrow")}
      </div>
    </section>
  `;
}
