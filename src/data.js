import { DEFAULT_LANGUAGE, normalizeLanguage, supportedLanguages, translations } from "./i18n.js";

export const assets = {
  logoDark: "public/assets/cutron-logo-dark.webp",
  logoLight: "public/assets/cutron-logo-light.webp",
  heroWordmark: "public/assets/cutron-hero-wordmark.webp",
  mark: "public/assets/cutron-mark.webp",
  goldMark: "public/assets/cutron-gold-mark.webp",
  homeHero: "public/assets/cutron-home-hero.webp",
  hero: "public/assets/hero-industrial.webp",
  ecosystem: "public/assets/ecosystem-line.webp",
  smartFactory: "public/assets/smart-factory.webp"
};

export { supportedLanguages };

export let currentLanguage = DEFAULT_LANGUAGE;
export let ui = translations[DEFAULT_LANGUAGE];
export let nav = [];
export let megaMenu = [];
export let products = [];
export let performance = [];
export let why = [];
export let caseStudies = [];
export let pages = {};

const layoutNav = {
  en: ["Home", "Company", "Products", "Support", "Showcase", "Contact"],
  ro: ["Acasa", "Companie", "Produse", "Suport", "Showcase", "Contact"],
  de: ["Home", "Unternehmen", "Produkte", "Support", "Showcase", "Kontakt"],
  pl: ["Start", "Firma", "Produkty", "Wsparcie", "Showcase", "Kontakt"],
  bg: ["Начало", "Компания", "Продукти", "Поддръжка", "Showcase", "Контакт"]
};

const navHrefs = ["index.html", "company.html", "products.html", "support.html", "showcase.html", "contact.html"];

const productMeta = [
  { id: "fiber-laser", href: "laser-cutting.html", icon: "laser", visual: "laser" },
  { id: "press-brake", href: "press-brake.html", icon: "bend", visual: "brake" },
  { id: "panel-bending", href: "products.html#panel-bending", icon: "panel", visual: "panel" },
  { id: "robotic-cells", href: "automation.html", icon: "robot", visual: "robot" },
  { id: "laser-welding", href: "automation.html#welding", icon: "weld", visual: "weld" },
  { id: "factory-automation", href: "smart-factory.html", icon: "network", visual: "factory" }
];

const pageMeta = {
  products: { image: assets.ecosystem },
  laser: { image: assets.hero, icon: "laser" },
  press: { image: assets.ecosystem, icon: "bend" },
  automation: { image: assets.smartFactory, icon: "robot" },
  smart: { image: assets.smartFactory, icon: "network" },
  support: { image: assets.ecosystem, icon: "support" },
  about: { image: assets.hero, icon: "shield" }
};

const caseImages = [assets.ecosystem, assets.hero, assets.smartFactory];

export function setLanguage(language) {
  const code = normalizeLanguage(language) || DEFAULT_LANGUAGE;
  currentLanguage = code;
  ui = translations[code] || translations[DEFAULT_LANGUAGE];

  nav = (layoutNav[code] || layoutNav.en).map((label, index) => ({
    label,
    href: navHrefs[index],
    mega: index === 2
  }));

  megaMenu = ui.megaMenu;

  products = ui.products.map(([title, text, specs], index) => ({
    ...productMeta[index],
    title,
    text,
    specs
  }));

  performance = ui.performance;
  why = ui.why;

  caseStudies = ui.caseStudies.map(([title, tag, text], index) => ({
    title,
    tag,
    text,
    image: caseImages[index]
  }));

  pages = Object.fromEntries(
    Object.entries(ui.pages).map(([key, [title, label, intro]]) => {
      const details = ui.pageDetails?.[key] || {};
      return [
        key,
        {
          title,
          label,
          intro,
          ...pageMeta[key],
          pillars: details.pillars || [],
          matrix: details.matrix || []
        }
      ];
    })
  );
}

export function updateDocumentMeta(pageKey) {
  const [title, description] = ui.meta[pageKey] || ui.meta.home;
  document.documentElement.lang = currentLanguage;
  document.title = title;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute("content", description);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", title);

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.setAttribute("content", description);
}

setLanguage(DEFAULT_LANGUAGE);
