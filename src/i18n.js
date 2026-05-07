export const DEFAULT_LANGUAGE = "en";

export const supportedLanguages = [
  { code: "ro", label: "RO", name: "Romana" },
  { code: "en", label: "EN", name: "English" },
  { code: "de", label: "DE", name: "Deutsch" },
  { code: "pl", label: "PL", name: "Polski" },
  { code: "bg", label: "BG", name: "Bulgarian" }
];

export const countryLanguageMap = {
  RO: "ro",
  MD: "ro",
  DE: "de",
  AT: "de",
  CH: "de",
  LI: "de",
  PL: "pl",
  BG: "bg"
};

const timezoneLanguageMap = {
  "Europe/Bucharest": "ro",
  "Europe/Chisinau": "ro",
  "Europe/Berlin": "de",
  "Europe/Vienna": "de",
  "Europe/Zurich": "de",
  "Europe/Warsaw": "pl",
  "Europe/Sofia": "bg"
};

const supportedCodes = supportedLanguages.map((language) => language.code);

export function normalizeLanguage(value) {
  if (!value) return null;
  const code = String(value).toLowerCase().split("-")[0];
  return supportedCodes.includes(code) ? code : null;
}

export function detectInitialLanguage() {
  const params = new URLSearchParams(window.location.search);
  const fromUrl = normalizeLanguage(params.get("lang"));
  if (fromUrl) {
    localStorage.setItem("cutron-language", fromUrl);
    return fromUrl;
  }

  const saved = normalizeLanguage(localStorage.getItem("cutron-language"));
  if (saved) return saved;

  const browserLocales = navigator.languages?.length ? navigator.languages : [navigator.language];

  for (const locale of browserLocales) {
    const region = String(locale).split("-")[1]?.toUpperCase();
    if (region && countryLanguageMap[region]) return countryLanguageMap[region];
  }

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (timezoneLanguageMap[timezone]) return timezoneLanguageMap[timezone];

  for (const locale of browserLocales) {
    const language = normalizeLanguage(locale);
    if (language) return language;
  }

  return DEFAULT_LANGUAGE;
}

export const translations = {
  en: {
    meta: {
      home: ["CUTRON | Engineered for Precision", "Premium sheet metal systems for modern manufacturing."],
      products: ["Products | CUTRON", "Explore CUTRON premium sheet metal systems."],
      laser: ["Fiber Laser Cutting | CUTRON", "CUTRON fiber laser systems for high-power precision cutting."],
      press: ["Press Brake Systems | CUTRON", "CUTRON press brake systems with precision bending and automation."],
      automation: ["Automation | CUTRON", "CUTRON robotic cells and production automation."],
      smart: ["Smart Factory | CUTRON", "CUTRON smart factory integration for connected production."],
      support: ["Service & Support | CUTRON", "CUTRON consulting, installation, training and support."],
      about: ["About | CUTRON", "CUTRON is the premium industrial division powered by UZINEX."],
      contact: ["Contact | CUTRON", "Request a technical offer from CUTRON."]
    },
    nav: ["Home", "Products", "Laser Cutting", "Press Brake", "Automation", "Smart Factory", "Service", "About", "Contact"],
    navCta: "Request Offer",
    mobileCta: "Request Technical Offer",
    languageLabel: "Language",
    megaMenu: [
      {
        title: "Systems",
        items: [
          ["Fiber Laser Systems", "High-power cutting platforms", "laser-cutting.html"],
          ["Press Brake Systems", "Precision bending cells", "press-brake.html"],
          ["CNC Panel Bending", "Flexible automated forming", "products.html#panel-bending"]
        ]
      },
      {
        title: "Automation",
        items: [
          ["Robotic Cells", "Handling, bending and welding", "automation.html"],
          ["Smart Factory", "Connected production ecosystems", "smart-factory.html"],
          ["Service & Support", "Install, train and maintain", "service-support.html"]
        ]
      }
    ],
    hero: {
      kicker: "Premium industrial division powered by UZINEX",
      h1: "ENGINEERED FOR PRECISION",
      text: "Premium sheet metal systems for modern manufacturing.",
      primary: "Request Technical Offer",
      secondary: "Explore Systems",
      signals: ["Fiber laser", "Press brake", "Robotic cells", "Smart factory"]
    },
    brand: {
      label: "CUTRON by UZINEX",
      title: "Industrial performance refined.",
      text: "CUTRON is the premium industrial automation and sheet metal processing division powered by the UZINEX ecosystem. The brand is built around precise configuration, accountable support and modern production architecture.",
      claims: ["Polished steel discipline", "Restrained gold precision", "Enterprise manufacturing logic"]
    },
    sectionProduct: {
      label: "Product ecosystem",
      title: "Premium sheet metal technology.",
      text: "From standalone machines to complete production ecosystems, CUTRON systems are configured around output, material flow and long-term service."
    },
    smartFactory: {
      label: "Smart factory integration",
      title: "Automation that respects the whole factory.",
      text: "CUTRON connects machines, robotic cells, storage towers and digital routing into a single production logic. The goal is not more equipment. The goal is a cleaner, faster, measurable workflow.",
      flow: ["CAD/CAM", "Storage", "Laser cutting", "Bending", "Welding", "Inspection", "Dispatch"],
      cta: "Explore Smart Factory"
    },
    performanceSection: {
      label: "Performance",
      title: "Built for serious production environments.",
      text: "CUTRON communicates through measurable capability: power, automation, support, training and configured industrial efficiency."
    },
    whySection: {
      label: "Why CUTRON",
      title: "Engineering authority with service continuity.",
      text: "Premium machinery only matters when it is correctly configured, installed, trained and supported."
    },
    caseSection: {
      label: "Industrial projects",
      title: "Cinematic systems. Practical outcomes.",
      text: "CUTRON case studies are presented as production architectures: cutting, bending, welding and automation working together."
    },
    finalCta: {
      label: "Driven by Precision",
      title: "Build your next production system with CUTRON.",
      text: "Request a technical configuration for laser CNC, press brake, robotic automation or a complete sheet metal ecosystem."
    },
    productsPage: {
      label: "Systems",
      title: "One premium portfolio, multiple production paths.",
      text: "Select a standalone machine, a connected cell or a complete factory architecture. CUTRON keeps the visual discipline premium and the technical logic practical."
    },
    architecture: {
      label: "Configuration logic",
      title: "Production ecosystems, not isolated machines.",
      text: "CUTRON is built for manufacturers who need precise recommendations, clean integration and technical support after the offer is signed.",
      steps: ["Need analysis", "System configuration", "Layout planning", "Installation", "Training", "Lifecycle support"]
    },
    detail: {
      capabilityLabel: "Capability",
      capabilityTitle: "Precision-built around the production target.",
      capabilityText: "Every CUTRON configuration is evaluated through output, material, workflow and long-term service expectations.",
      technicalLabel: "Technical view",
      technicalTitle: "Configured for real factory conditions.",
      methodLabel: "Method",
      methodTitle: "From technical offer to production ramp-up.",
      methodText: (title) => `${title} projects are handled as engineering conversations: short, precise and grounded in the production result.`,
      processes: ["Discovery", "Technical offer", "Factory layout", "Commissioning", "Training", "Support"],
      request: "Request Technical Offer",
      view: "View Systems"
    },
    contact: {
      label: "Technical offer",
      title: "Request a CUTRON configuration.",
      text: "Tell us what you manufacture, what material you process and what production system you want to build next.",
      fields: ["Name", "Email", "Company", "System interest", "Project details"],
      placeholder: "Material, thickness range, production volume, automation goals",
      submit: "Prepare Technical Request",
      status: "Your technical request has been prepared in your email client.",
      asideTitle: "What helps us configure precisely",
      checklist: ["Material type and thickness range", "Part examples or production families", "Required throughput and shifts", "Available floor space", "Automation targets"],
      options: ["Fiber Laser Systems", "Press Brake Systems", "Automation & Robotic Cells", "Smart Factory Integration", "Complete production ecosystem"],
      mailSubject: "CUTRON technical request"
    },
    footer: {
      text: "Premium sheet metal systems for modern manufacturing. Powered by UZINEX.",
      links: ["Products", "Laser Cutting", "Press Brake", "Automation", "Service & Support", "Contact"],
      bottom: ["CUTRON - Driven by Precision", "Luxury industrial technology by UZINEX"]
    },
    notFound: ["Page not found.", "The requested section is not available.", "Return Home"],
    products: [
      ["Fiber Laser Systems", "High-power laser platforms engineered for precision sheet metal production, clean nesting workflows and automation-ready throughput.", ["Up to 60 kW", "Linear drive options", "Tower integration"]],
      ["Press Brake Systems", "Precision bending systems with refined control, tooling strategy, angle consistency and scalable robotic loading options.", ["CNC crowning", "Angle control", "Robotic ready"]],
      ["CNC Panel Bending", "Automated panel bending for repeatable production, reduced handling and clean part flow from flat sheet to finished profile.", ["Flexible tooling", "Low handling", "Series production"]],
      ["Robotic Cells", "Integrated robotic cells for bending, welding, sorting and machine tending, configured around real production constraints.", ["Cell design", "Safety systems", "Line integration"]],
      ["Laser Welding", "Laser welding solutions for refined seams, repeatable energy control and flexible metal assemblies.", ["Clean seams", "Process control", "Fixture design"]],
      ["Factory Automation", "From standalone machines to complete production ecosystems with loading, unloading, storage and digital workflow.", ["Storage towers", "Material flow", "Digital routing"]]
    ],
    performance: [
      ["Up to 60kW", "Laser power platforms for high-performance cutting environments."],
      ["Smart Automation", "Robotic handling, storage, loading and unloading systems."],
      ["Local Technical Support", "UZINEX-backed consulting, installation and service ecosystem."],
      ["Installation & Training", "Commissioning, operator handover and production ramp-up."],
      ["Configurable Systems", "Technology configured around material, thickness, parts and workflow."],
      ["Production Efficiency", "End-to-end process thinking, not isolated machine selling."]
    ],
    why: [
      ["Premium engineering", "Industrial systems selected and configured for precision, output and long-term credibility."],
      ["Industrial integration", "Machines, automation and workflow designed as one production architecture."],
      ["European-style support", "Consulting, commissioning, training and service carried through the UZINEX ecosystem."],
      ["Automation expertise", "Robotic cells, sheet handling and digital routing adapted to real factory operations."],
      ["Technical consulting", "Short, precise recommendations based on parts, materials, thickness and production targets."],
      ["Service ecosystem", "Support beyond delivery: installation, training, maintenance and future expansion."]
    ],
    caseStudies: [
      ["Laser Fabrication Plant", "High-throughput cutting", "A complete laser fabrication workflow with automated loading, material routing and finished part handling."],
      ["Robotic Bending Cell", "Repeatable forming", "Robotic press brake architecture for consistent bending cycles and reduced manual handling."],
      ["Automated Sheet Metal Workflow", "Smart factory integration", "Connected storage, cutting, forming and welding cells configured as one production ecosystem."]
    ],
    pages: {
      products: ["Premium Sheet Metal Systems", "Product ecosystem", "CUTRON brings laser cutting, bending, welding and automation into one refined industrial portfolio."],
      laser: ["Fiber Laser Cutting Systems", "Laser cutting", "Premium fiber laser platforms for modern metal fabrication, high-power cutting and automation-ready production."],
      press: ["Press Brake Systems", "Precision bending", "Bending systems engineered for control, repeatability, tooling strategy and scalable robotic integration."],
      automation: ["Automation & Robotic Cells", "Industrial automation", "Precision-built automation systems for handling, bending, welding, sorting and complete machine tending."],
      smart: ["Smart Factory Integration", "Connected production", "From standalone machines to complete production ecosystems with automation, storage and digital workflow."],
      support: ["Service & Support", "UZINEX ecosystem", "Technical consulting, installation, training and support designed for industrial continuity."],
      about: ["CUTRON, Powered by UZINEX", "Industrial division", "CUTRON is positioned as a premium industrial automation and sheet metal processing division within the UZINEX ecosystem."]
    },
    pageDetails: {
      laser: {
        pillars: [["Power range", "Configured up to 60 kW for productivity, thickness range and plant-level output targets."], ["Cutting quality", "Clean edges, controlled piercing, refined gas strategy and stable high-speed processing."], ["Automation path", "Loading, unloading, storage towers and finished part handling can be added as capacity grows."]],
        matrix: [["Applications", "Steel, stainless steel, aluminum, galvanized sheet, structural panels"], ["Workflow", "Nesting, cutting, sorting, storage and digital job routing"], ["Options", "Linear drives, bevel cutting, pipe modules, sheet towers"], ["Support", "Installation, parameter handover, operator training, preventive maintenance"]]
      },
      press: {
        pillars: [["Bending accuracy", "CNC crowning, refined control architecture and consistent part geometry."], ["Operator flow", "Intuitive control, tooling organization and safer handling for daily production."], ["Robotic ready", "Cells can be configured for bending automation, gripper design and repeatable part loading."]],
        matrix: [["Applications", "Cabinets, enclosures, HVAC, construction parts, custom fabrication"], ["Workflow", "Offline preparation, tooling setup, bending, inspection"], ["Options", "Angle measurement, tool cabinets, robotic cells, sheet followers"], ["Support", "Tooling consultation, installation, training and maintenance planning"]]
      },
      automation: {
        pillars: [["Robotic bending", "Cells engineered around part family, cycle time, gripper design and safety concept."], ["Laser welding", "Repeatable process control for clean assemblies and flexible metal fabrication."], ["Material handling", "Loading, unloading, sorting and routing systems that remove production friction."]],
        matrix: [["Cell types", "Bending, welding, cutting support, machine tending, palletizing"], ["Integration", "Machine interface, safety, fixtures, conveyors, storage"], ["Scalability", "Standalone cells or connected factory-level automation"], ["Support", "Simulation, installation, operator training and process refinement"]]
      },
      smart: {
        pillars: [["Digital workflow", "Jobs, materials and production status can move through connected machine logic."], ["Automated storage", "Sheet towers, buffers and loading systems reduce manual movement and waiting time."], ["Factory architecture", "CUTRON designs around the plant, not only the machine footprint."]],
        matrix: [["Core systems", "Laser, press brake, panel bending, welding, robotic handling"], ["Factory flow", "Storage, loading, cutting, forming, welding, inspection"], ["Signals", "Production data, control logic, machine readiness, route planning"], ["Support", "Consulting, phased deployment, training and continuous optimization"]]
      },
      support: {
        pillars: [["Consulting", "A technical offer begins with parts, material mix, throughput and production strategy."], ["Installation", "Commissioning, alignment, safety checks and operator handover."], ["Lifecycle", "Training, preventive maintenance, service planning and future system expansion."]],
        matrix: [["Before purchase", "Needs analysis, configuration, layout and investment logic"], ["During delivery", "Installation, commissioning, safety and acceptance process"], ["After startup", "Training, service, maintenance and technical support"], ["Expansion", "Automation upgrades, capacity planning and workflow refinement"]]
      },
      about: {
        pillars: [["Brand discipline", "Matte black, polished steel and restrained gold define a precise industrial identity."], ["Engineering authority", "The focus is technical clarity, production logic and confident system architecture."], ["Enterprise credibility", "CUTRON is built for manufacturers who need capable systems and accountable support."]],
        matrix: [["Positioning", "Premium European-style sheet metal technology"], ["Focus", "Laser CNC, press brake, robotic automation, welding and smart factory integration"], ["Signature", "Driven by Precision"], ["Ecosystem", "Powered by UZINEX technical and service capability"]]
      }
    }
  },
  ro: {
    meta: {
      home: ["CUTRON | Proiectat pentru precizie", "Sisteme premium pentru prelucrarea tablei in productia moderna."],
      products: ["Produse | CUTRON", "Exploreaza sistemele premium CUTRON pentru prelucrarea tablei."],
      laser: ["Debitare laser fibra | CUTRON", "Sisteme CUTRON de debitare laser fibra pentru taiere de inalta putere."],
      press: ["Sisteme abkant | CUTRON", "Sisteme CUTRON press brake pentru indoire precisa si automatizare."],
      automation: ["Automatizare | CUTRON", "Celule robotizate si automatizare de productie CUTRON."],
      smart: ["Smart Factory | CUTRON", "Integrare smart factory CUTRON pentru productie conectata."],
      support: ["Service si suport | CUTRON", "Consultanta, instalare, training si suport CUTRON."],
      about: ["Despre | CUTRON", "CUTRON este divizia industriala premium powered by UZINEX."],
      contact: ["Contact | CUTRON", "Solicita o oferta tehnica CUTRON."]
    },
    nav: ["Acasa", "Produse", "Debitare Laser", "Abkant", "Automatizare", "Smart Factory", "Service", "Despre", "Contact"],
    navCta: "Solicita oferta",
    mobileCta: "Solicita oferta tehnica",
    languageLabel: "Limba",
    megaMenu: [
      { title: "Sisteme", items: [["Sisteme laser fibra", "Platforme de debitare de mare putere", "laser-cutting.html"], ["Sisteme abkant", "Celule de indoire precisa", "press-brake.html"], ["Indoire CNC panouri", "Formare flexibila automatizata", "products.html#panel-bending"]] },
      { title: "Automatizare", items: [["Celule robotizate", "Manipulare, indoire si sudare", "automation.html"], ["Smart Factory", "Ecosisteme de productie conectate", "smart-factory.html"], ["Service si suport", "Instalare, training si mentenanta", "service-support.html"]] }
    ],
    hero: {
      kicker: "Divizie industriala premium powered by UZINEX",
      h1: "PROIECTAT PENTRU PRECIZIE",
      text: "Sisteme premium pentru prelucrarea tablei in productia moderna.",
      primary: "Solicita oferta tehnica",
      secondary: "Exploreaza sistemele",
      signals: ["Laser fibra", "Abkant", "Celule robotizate", "Smart factory"]
    },
    brand: {
      label: "CUTRON by UZINEX",
      title: "Performanta industriala rafinata.",
      text: "CUTRON este divizia premium de automatizare industriala si prelucrare tabla din ecosistemul UZINEX. Brandul este construit pe configurare precisa, suport responsabil si arhitectura moderna de productie.",
      claims: ["Disciplina otelului polisat", "Precizie gold retinuta", "Logica enterprise de productie"]
    },
    sectionProduct: { label: "Ecosistem produse", title: "Tehnologie premium pentru tabla.", text: "De la masini independente la ecosisteme complete de productie, sistemele CUTRON sunt configurate in jurul randamentului, fluxului de material si suportului pe termen lung." },
    smartFactory: { label: "Integrare smart factory", title: "Automatizare care respecta intreaga fabrica.", text: "CUTRON conecteaza masini, celule robotizate, turnuri de stocare si flux digital intr-o singura logica de productie. Scopul nu este mai mult echipament, ci un flux mai curat, mai rapid si masurabil.", flow: ["CAD/CAM", "Stocare", "Debitare laser", "Indoire", "Sudare", "Inspectie", "Expediere"], cta: "Exploreaza Smart Factory" },
    performanceSection: { label: "Performanta", title: "Construit pentru medii serioase de productie.", text: "CUTRON comunica prin capabilitati masurabile: putere, automatizare, suport, training si eficienta industriala configurata." },
    whySection: { label: "De ce CUTRON", title: "Autoritate inginereasca si continuitate in service.", text: "Utilajele premium conteaza doar cand sunt configurate, instalate, explicate si sustinute corect." },
    caseSection: { label: "Proiecte industriale", title: "Sisteme cinematice. Rezultate practice.", text: "Studiile CUTRON sunt prezentate ca arhitecturi de productie: debitare, indoire, sudare si automatizare lucrand impreuna." },
    finalCta: { label: "Driven by Precision", title: "Construieste urmatorul sistem de productie cu CUTRON.", text: "Solicita o configuratie tehnica pentru laser CNC, abkant, automatizare robotizata sau un ecosistem complet de prelucrare tabla." },
    productsPage: { label: "Sisteme", title: "Un portofoliu premium, mai multe directii de productie.", text: "Alege o masina independenta, o celula conectata sau o arhitectura completa de fabrica. CUTRON pastreaza disciplina vizuala premium si logica tehnica practica." },
    architecture: { label: "Logica de configurare", title: "Ecosisteme de productie, nu masini izolate.", text: "CUTRON este construit pentru producatori care au nevoie de recomandari precise, integrare curata si suport tehnic dupa semnarea ofertei.", steps: ["Analiza nevoi", "Configurare sistem", "Plan layout", "Instalare", "Training", "Suport lifecycle"] },
    detail: {
      capabilityLabel: "Capabilitate",
      capabilityTitle: "Construit cu precizie in jurul obiectivului de productie.",
      capabilityText: "Fiecare configuratie CUTRON este evaluata prin output, material, workflow si asteptari de service pe termen lung.",
      technicalLabel: "Vedere tehnica",
      technicalTitle: "Configurat pentru conditii reale de fabrica.",
      methodLabel: "Metoda",
      methodTitle: "De la oferta tehnica la ramp-up productie.",
      methodText: (title) => `Proiectele ${title} sunt tratate ca discutii de engineering: scurte, precise si ancorate in rezultatul de productie.`,
      processes: ["Descoperire", "Oferta tehnica", "Layout fabrica", "Punere in functiune", "Training", "Suport"],
      request: "Solicita oferta tehnica",
      view: "Vezi sistemele"
    },
    contact: {
      label: "Oferta tehnica",
      title: "Solicita o configuratie CUTRON.",
      text: "Spune-ne ce produci, ce material prelucrezi si ce sistem de productie vrei sa construiesti.",
      fields: ["Nume", "Email", "Companie", "Sistem de interes", "Detalii proiect"],
      placeholder: "Material, grosimi, volum de productie, obiective de automatizare",
      submit: "Pregateste cererea tehnica",
      status: "Cererea tehnica a fost pregatita in clientul tau de email.",
      asideTitle: "Ce ne ajuta sa configuram precis",
      checklist: ["Tip material si interval de grosimi", "Exemple de piese sau familii de produse", "Randament si numar de schimburi", "Spatiu disponibil in hala", "Obiective de automatizare"],
      options: ["Sisteme laser fibra", "Sisteme abkant", "Automatizare si celule robotizate", "Integrare Smart Factory", "Ecosistem complet de productie"],
      mailSubject: "Cerere tehnica CUTRON"
    },
    footer: { text: "Sisteme premium pentru prelucrarea tablei in productia moderna. Powered by UZINEX.", links: ["Produse", "Debitare Laser", "Abkant", "Automatizare", "Service si suport", "Contact"], bottom: ["CUTRON - Driven by Precision", "Tehnologie industriala luxury by UZINEX"] },
    notFound: ["Pagina nu a fost gasita.", "Sectiunea solicitata nu este disponibila.", "Inapoi acasa"],
    products: [
      ["Sisteme laser fibra", "Platforme laser de mare putere, proiectate pentru productie precisa de tabla, nesting curat si randament pregatit pentru automatizare.", ["Pana la 60 kW", "Optiuni drive liniar", "Integrare turn"]],
      ["Sisteme abkant", "Sisteme de indoire precisa cu control rafinat, strategie de scule, consistenta a unghiului si optiuni robotizate scalabile.", ["Crowning CNC", "Control unghi", "Pregatit pentru robot"]],
      ["Indoire CNC panouri", "Indoire automatizata de panouri pentru productie repetabila, manipulare redusa si flux curat de la tabla plana la profil final.", ["Scule flexibile", "Manipulare redusa", "Productie de serie"]],
      ["Celule robotizate", "Celule robotizate integrate pentru indoire, sudare, sortare si alimentare utilaje, configurate in jurul constrangerilor reale de productie.", ["Design celula", "Sisteme de siguranta", "Integrare linie"]],
      ["Sudare laser", "Solutii de sudare laser pentru imbinari rafinate, control repetabil al energiei si ansambluri metalice flexibile.", ["Imbinari curate", "Control proces", "Design dispozitive"]],
      ["Automatizare fabrica", "De la masini standalone la ecosisteme complete cu incarcare, descarcare, stocare si workflow digital.", ["Turnuri stocare", "Flux material", "Rutare digitala"]]
    ],
    performance: [["Pana la 60kW", "Platforme laser pentru medii de debitare de inalta performanta."], ["Smart Automation", "Manipulare robotizata, stocare, incarcare si descarcare."], ["Suport tehnic local", "Consultanta, instalare si service sustinute de UZINEX."], ["Instalare si training", "Punere in functiune, predare operatori si ramp-up productie."], ["Sisteme configurabile", "Tehnologie configurata dupa material, grosimi, piese si workflow."], ["Eficienta productie", "Gandire end-to-end, nu vanzare de masini izolate."]],
    why: [["Engineering premium", "Sisteme industriale selectate si configurate pentru precizie, output si credibilitate pe termen lung."], ["Integrare industriala", "Masini, automatizare si workflow gandite ca o singura arhitectura de productie."], ["Suport in stil european", "Consultanta, commissioning, training si service prin ecosistemul UZINEX."], ["Expertiza automatizare", "Celule robotizate, manipulare tabla si rutare digitala adaptate operatiunilor reale."], ["Consultanta tehnica", "Recomandari scurte si precise bazate pe piese, materiale, grosimi si targeturi de productie."], ["Ecosistem service", "Suport dupa livrare: instalare, training, mentenanta si extindere viitoare."]],
    caseStudies: [["Fabrica de debitare laser", "Debitare cu randament ridicat", "Workflow complet de debitare laser cu incarcare automata, rutare material si manipulare piese finite."], ["Celula robotizata de indoire", "Formare repetabila", "Arhitectura robotizata press brake pentru cicluri constante si manipulare manuala redusa."], ["Workflow automatizat pentru tabla", "Integrare smart factory", "Stocare, debitare, formare si sudare conectate intr-un singur ecosistem de productie."]],
    pages: {
      products: ["Sisteme premium pentru prelucrarea tablei", "Ecosistem produse", "CUTRON aduce debitarea laser, indoirea, sudarea si automatizarea intr-un portofoliu industrial rafinat."],
      laser: ["Sisteme de debitare laser fibra", "Debitare laser", "Platforme laser fibra premium pentru fabricatie metalica moderna, debitare de mare putere si productie pregatita pentru automatizare."],
      press: ["Sisteme abkant", "Indoire precisa", "Sisteme de indoire proiectate pentru control, repetabilitate, strategie de scule si integrare robotizata scalabila."],
      automation: ["Automatizare si celule robotizate", "Automatizare industriala", "Sisteme de automatizare construite cu precizie pentru manipulare, indoire, sudare, sortare si machine tending complet."],
      smart: ["Integrare Smart Factory", "Productie conectata", "De la masini standalone la ecosisteme complete cu automatizare, stocare si workflow digital."],
      support: ["Service si suport", "Ecosistem UZINEX", "Consultanta tehnica, instalare, training si suport gandite pentru continuitate industriala."],
      about: ["CUTRON, Powered by UZINEX", "Divizie industriala", "CUTRON este pozitionat ca divizie premium de automatizare industriala si prelucrare tabla in ecosistemul UZINEX."]
    },
    pageDetails: null
  }
};

const roDetails = translations.en.pageDetails;
translations.ro.pageDetails = {
  laser: {
    pillars: [["Plaja de putere", "Configurat pana la 60 kW pentru productivitate, interval de grosimi si targeturi de output la nivel de fabrica."], ["Calitate taiere", "Muchii curate, piercing controlat, strategie de gaz rafinata si procesare stabila la viteza mare."], ["Traseu de automatizare", "Incarcarea, descarcarea, turnurile de stocare si manipularea pieselor finite pot fi adaugate pe masura ce capacitatea creste."]],
    matrix: [["Aplicatii", "Otel, inox, aluminiu, tabla zincata, panouri structurale"], ["Workflow", "Nesting, debitare, sortare, stocare si rutare digitala joburi"], ["Optiuni", "Drive liniar, bevel cutting, module teava, turnuri tabla"], ["Suport", "Instalare, predare parametri, training operatori, mentenanta preventiva"]]
  },
  press: {
    pillars: [["Precizie indoire", "Crowning CNC, arhitectura de control rafinata si geometrie consistenta a pieselor."], ["Flux operator", "Control intuitiv, organizare scule si manipulare mai sigura pentru productia zilnica."], ["Pregatit pentru robot", "Celulele pot fi configurate pentru automatizare bending, design gripper si incarcare repetabila."]],
    matrix: [["Aplicatii", "Dulapuri, carcase, HVAC, piese constructii, fabricatie custom"], ["Workflow", "Pregatire offline, setup scule, indoire, inspectie"], ["Optiuni", "Masurare unghi, dulapuri scule, celule robotizate, sheet followers"], ["Suport", "Consultanta scule, instalare, training si plan mentenanta"]]
  },
  automation: {
    pillars: [["Indoire robotizata", "Celule proiectate in jurul familiei de piese, timpului de ciclu, designului gripper si conceptului de siguranta."], ["Sudare laser", "Control repetabil al procesului pentru ansambluri curate si fabricatie metalica flexibila."], ["Manipulare material", "Sisteme de incarcare, descarcare, sortare si rutare care elimina frictiunea din productie."]],
    matrix: [["Tipuri celule", "Indoire, sudare, suport debitare, machine tending, paletizare"], ["Integrare", "Interfata masina, siguranta, dispozitive, transportoare, stocare"], ["Scalabilitate", "Celule standalone sau automatizare conectata la nivel de fabrica"], ["Suport", "Simulare, instalare, training operatori si rafinare proces"]]
  },
  smart: {
    pillars: [["Workflow digital", "Joburile, materialele si statusul productiei se pot misca prin logica masinilor conectate."], ["Stocare automatizata", "Turnurile de tabla, bufferele si sistemele de incarcare reduc miscarea manuala si timpii de asteptare."], ["Arhitectura fabrica", "CUTRON proiecteaza in jurul fabricii, nu doar al amprentei utilajului."]],
    matrix: [["Sisteme core", "Laser, abkant, panel bending, sudare, manipulare robotizata"], ["Flux fabrica", "Stocare, incarcare, debitare, formare, sudare, inspectie"], ["Semnale", "Date productie, logica de control, disponibilitate masina, planificare ruta"], ["Suport", "Consultanta, deployment etapizat, training si optimizare continua"]]
  },
  support: {
    pillars: [["Consultanta", "Oferta tehnica porneste de la piese, mix de materiale, randament si strategie de productie."], ["Instalare", "Commissioning, aliniere, verificari de siguranta si predare operatori."], ["Lifecycle", "Training, mentenanta preventiva, planificare service si extindere viitoare."]],
    matrix: [["Inainte de achizitie", "Analiza nevoi, configurare, layout si logica investitiei"], ["In timpul livrarii", "Instalare, commissioning, siguranta si proces de acceptanta"], ["Dupa startup", "Training, service, mentenanta si suport tehnic"], ["Extindere", "Upgrade-uri automatizare, planificare capacitate si rafinare workflow"]]
  },
  about: roDetails.about
};

translations.de = {
  ...translations.en,
  meta: {
    home: ["CUTRON | Entwickelt fur Prazision", "Premium-Systeme fur die moderne Blechbearbeitung."],
    products: ["Produkte | CUTRON", "Premium-Blechbearbeitungssysteme von CUTRON."],
    laser: ["Faserlaserschneiden | CUTRON", "CUTRON Faserlasersysteme fur Hochleistungs-Prazisionsschnitt."],
    press: ["Abkantpressen | CUTRON", "CUTRON Abkantpressen fur prazises Biegen und Automation."],
    automation: ["Automation | CUTRON", "Robotische Zellen und Produktionsautomation von CUTRON."],
    smart: ["Smart Factory | CUTRON", "CUTRON Smart-Factory-Integration fur vernetzte Produktion."],
    support: ["Service & Support | CUTRON", "Beratung, Installation, Training und Support von CUTRON."],
    about: ["Uber CUTRON | CUTRON", "CUTRON ist die Premium-Industriesparte powered by UZINEX."],
    contact: ["Kontakt | CUTRON", "Fordern Sie ein technisches Angebot von CUTRON an."]
  },
  nav: ["Home", "Produkte", "Laserschneiden", "Abkantpresse", "Automation", "Smart Factory", "Service", "Uber uns", "Kontakt"],
  navCta: "Angebot anfragen",
  mobileCta: "Technisches Angebot anfragen",
  languageLabel: "Sprache",
  megaMenu: [
    { title: "Systeme", items: [["Faserlasersysteme", "Hochleistungs-Schneidplattformen", "laser-cutting.html"], ["Abkantpressen", "Prazisions-Biegezellen", "press-brake.html"], ["CNC Panel Bending", "Flexible automatisierte Umformung", "products.html#panel-bending"]] },
    { title: "Automation", items: [["Robotische Zellen", "Handling, Biegen und Schweissen", "automation.html"], ["Smart Factory", "Vernetzte Produktionsokosysteme", "smart-factory.html"], ["Service & Support", "Installieren, schulen und warten", "service-support.html"]] }
  ],
  hero: { kicker: "Premium-Industriesparte powered by UZINEX", h1: "ENTWICKELT FUR PRAZISION", text: "Premium-Systeme fur die moderne Blechbearbeitung.", primary: "Technisches Angebot anfragen", secondary: "Systeme entdecken", signals: ["Faserlaser", "Abkantpresse", "Robotische Zellen", "Smart Factory"] },
  brand: { label: "CUTRON by UZINEX", title: "Industrielle Leistung, veredelt.", text: "CUTRON ist die Premium-Sparte fur industrielle Automation und Blechbearbeitung im UZINEX-Okosystem. Die Marke steht fur prazise Konfiguration, verantwortlichen Support und moderne Produktionsarchitektur.", claims: ["Disziplin aus poliertem Stahl", "Zuruckhaltende Gold-Prazision", "Enterprise-Logik fur Fertigung"] },
  sectionProduct: { label: "Produktokosystem", title: "Premium-Technologie fur Blech.", text: "Von Einzelmaschinen bis zu kompletten Produktionsokosystemen werden CUTRON-Systeme um Output, Materialfluss und langfristigen Support konfiguriert." },
  smartFactory: { label: "Smart-Factory-Integration", title: "Automation, die die gesamte Fabrik respektiert.", text: "CUTRON verbindet Maschinen, Roboterzellen, Lagersysteme und digitale Routen in einer Produktionslogik. Ziel ist nicht mehr Equipment, sondern ein sauberer, schneller und messbarer Workflow.", flow: ["CAD/CAM", "Lagerung", "Laserschneiden", "Biegen", "Schweissen", "Inspektion", "Versand"], cta: "Smart Factory entdecken" },
  performanceSection: { label: "Performance", title: "Gebaut fur anspruchsvolle Produktionsumgebungen.", text: "CUTRON kommuniziert uber messbare Leistung: Power, Automation, Support, Training und konfigurierte industrielle Effizienz." },
  whySection: { label: "Warum CUTRON", title: "Engineering-Autoritat mit Service-Kontinuitat.", text: "Premium-Maschinen zahlen erst, wenn sie korrekt konfiguriert, installiert, geschult und unterstutzt werden." },
  caseSection: { label: "Industrieprojekte", title: "Kinematische Systeme. Praktische Ergebnisse.", text: "CUTRON Case Studies zeigen Produktionsarchitekturen: Schneiden, Biegen, Schweissen und Automation im Zusammenspiel." },
  finalCta: { label: "Driven by Precision", title: "Bauen Sie Ihr nachstes Produktionssystem mit CUTRON.", text: "Fordern Sie eine technische Konfiguration fur CNC-Laser, Abkantpresse, Roboterautomation oder ein komplettes Blechbearbeitungsokosystem an." },
  productsPage: { label: "Systeme", title: "Ein Premium-Portfolio, mehrere Produktionswege.", text: "Wahlen Sie eine Einzelmaschine, eine vernetzte Zelle oder eine komplette Fabrikarchitektur. CUTRON bewahrt premium Design-Disziplin und praktische technische Logik." },
  architecture: { label: "Konfigurationslogik", title: "Produktionsokosysteme, keine isolierten Maschinen.", text: "CUTRON ist fur Hersteller gebaut, die prazise Empfehlungen, saubere Integration und technischen Support nach dem Angebot brauchen.", steps: ["Bedarfsanalyse", "Systemkonfiguration", "Layout-Planung", "Installation", "Training", "Lifecycle-Support"] },
  detail: { capabilityLabel: "Fahigkeit", capabilityTitle: "Prazise um das Produktionsziel gebaut.", capabilityText: "Jede CUTRON-Konfiguration wird nach Output, Material, Workflow und langfristigen Serviceerwartungen bewertet.", technicalLabel: "Technische Sicht", technicalTitle: "Konfiguriert fur reale Fabrikbedingungen.", methodLabel: "Methode", methodTitle: "Vom technischen Angebot bis zum Produktionsanlauf.", methodText: (title) => `${title}-Projekte werden als Engineering-Gesprache gefuhrt: kurz, prazise und am Produktionsergebnis orientiert.`, processes: ["Analyse", "Technisches Angebot", "Fabriklayout", "Inbetriebnahme", "Training", "Support"], request: "Technisches Angebot anfragen", view: "Systeme ansehen" },
  contact: { label: "Technisches Angebot", title: "CUTRON-Konfiguration anfragen.", text: "Sagen Sie uns, was Sie fertigen, welches Material Sie bearbeiten und welches Produktionssystem Sie als nachstes bauen wollen.", fields: ["Name", "E-Mail", "Unternehmen", "Systeminteresse", "Projektdetails"], placeholder: "Material, Dickenbereich, Produktionsvolumen, Automationsziele", submit: "Technische Anfrage vorbereiten", status: "Ihre technische Anfrage wurde im E-Mail-Client vorbereitet.", asideTitle: "Was uns bei der prazisen Konfiguration hilft", checklist: ["Materialtyp und Dickenbereich", "Teilebeispiele oder Produktfamilien", "Erforderlicher Durchsatz und Schichten", "Verfugbare Hallenflache", "Automationsziele"], options: ["Faserlasersysteme", "Abkantpressen", "Automation & Roboterzellen", "Smart-Factory-Integration", "Komplettes Produktionsokosystem"], mailSubject: "CUTRON technische Anfrage" },
  footer: { text: "Premium-Systeme fur die moderne Blechbearbeitung. Powered by UZINEX.", links: ["Produkte", "Laserschneiden", "Abkantpresse", "Automation", "Service & Support", "Kontakt"], bottom: ["CUTRON - Driven by Precision", "Luxury Industrial Technology by UZINEX"] },
  notFound: ["Seite nicht gefunden.", "Der angeforderte Bereich ist nicht verfugbar.", "Zur Startseite"],
  products: [["Faserlasersysteme", "Hochleistungs-Laserplattformen fur prazise Blechproduktion, saubere Nesting-Workflows und automatisierungsbereiten Durchsatz.", ["Bis 60 kW", "Linear-drive Optionen", "Turmintegration"]], ["Abkantpressen", "Prazisions-Biegesysteme mit verfeinerter Steuerung, Werkzeugstrategie, Winkelkonstanz und skalierbaren Roboteroptionen.", ["CNC-Bombierung", "Winkelkontrolle", "Robot ready"]], ["CNC Panel Bending", "Automatisiertes Panel Bending fur wiederholbare Produktion, weniger Handling und sauberen Teilefluss.", ["Flexible Werkzeuge", "Wenig Handling", "Serienproduktion"]], ["Robotische Zellen", "Integrierte Roboterzellen fur Biegen, Schweissen, Sortieren und Maschinenbeschickung.", ["Zellendesign", "Sicherheitssysteme", "Linienintegration"]], ["Laserschweissen", "Laserschweisslosungen fur veredelte Nahte, wiederholbare Energiekontrolle und flexible Metallbaugruppen.", ["Saubere Nahte", "Prozesskontrolle", "Vorrichtungsdesign"]], ["Fabrikautomation", "Von Standalone-Maschinen zu kompletten Produktionsokosystemen mit Be- und Entladung, Lagerung und digitalem Workflow.", ["Lagerturme", "Materialfluss", "Digitale Routen"]]],
  performance: [["Bis 60kW", "Laserplattformen fur Hochleistungs-Schneidumgebungen."], ["Smart Automation", "Roboterhandling, Lagerung, Be- und Entladesysteme."], ["Lokaler technischer Support", "UZINEX-gestutzte Beratung, Installation und Service."], ["Installation & Training", "Inbetriebnahme, Bedienerubergabe und Produktionsanlauf."], ["Konfigurierbare Systeme", "Technologie rund um Material, Dicke, Teile und Workflow."], ["Produktionseffizienz", "End-to-End-Prozessdenken, kein isolierter Maschinenverkauf."]],
  why: [["Premium Engineering", "Industriesysteme ausgewahlt und konfiguriert fur Prazision, Output und langfristige Glaubwurdigkeit."], ["Industrielle Integration", "Maschinen, Automation und Workflow als eine Produktionsarchitektur."], ["Support im europaischen Stil", "Beratung, Inbetriebnahme, Training und Service im UZINEX-Okosystem."], ["Automationsexpertise", "Roboterzellen, Blechhandling und digitale Routen fur reale Fabrikprozesse."], ["Technische Beratung", "Kurze, prazise Empfehlungen auf Basis von Teilen, Material, Dicken und Produktionszielen."], ["Service-Okosystem", "Support uber die Lieferung hinaus: Installation, Training, Wartung und Erweiterung."]],
  caseStudies: [["Laserfertigungsanlage", "Schneiden mit hohem Durchsatz", "Kompletter Laser-Workflow mit automatischer Beladung, Materialrouting und Fertigteilhandling."], ["Robotische Biegezelle", "Wiederholbare Umformung", "Robotische Abkantarchitektur fur konstante Zyklen und reduziertes manuelles Handling."], ["Automatisierter Blech-Workflow", "Smart-Factory-Integration", "Vernetzte Lagerung, Schneiden, Umformen und Schweissen als ein Produktionsokosystem."]],
  pages: {
    products: ["Premium-Systeme fur Blechbearbeitung", "Produktokosystem", "CUTRON verbindet Laserschneiden, Biegen, Schweissen und Automation in einem veredelten Industrieportfolio."],
    laser: ["Faserlaserschneidsysteme", "Laserschneiden", "Premium-Faserlaserplattformen fur moderne Metallfertigung, Hochleistungsschnitt und automatisierungsbereite Produktion."],
    press: ["Abkantpressen", "Prazisionsbiegen", "Biegesysteme fur Kontrolle, Wiederholbarkeit, Werkzeugstrategie und skalierbare Roboterintegration."],
    automation: ["Automation & Roboterzellen", "Industrielle Automation", "Prazisionsgebaute Automationssysteme fur Handling, Biegen, Schweissen, Sortieren und Maschinenbedienung."],
    smart: ["Smart-Factory-Integration", "Vernetzte Produktion", "Von Einzelmaschinen zu kompletten Produktionsokosystemen mit Automation, Lagerung und digitalem Workflow."],
    support: ["Service & Support", "UZINEX-Okosystem", "Technische Beratung, Installation, Training und Support fur industrielle Kontinuitat."],
    about: ["CUTRON, Powered by UZINEX", "Industriesparte", "CUTRON ist als Premium-Sparte fur industrielle Automation und Blechbearbeitung im UZINEX-Okosystem positioniert."]
  },
  pageDetails: {
    laser: { pillars: [["Leistungsbereich", "Bis 60 kW konfiguriert fur Produktivitat, Dickenbereich und Fabrik-Output."], ["Schnittqualitat", "Saubere Kanten, kontrolliertes Einstechen, verfeinerte Gasstrategie und stabile Hochgeschwindigkeit."], ["Automationspfad", "Be-/Entladung, Lagerturme und Fertigteilhandling wachsen mit der Kapazitat."]], matrix: [["Anwendungen", "Stahl, Edelstahl, Aluminium, verzinktes Blech, Strukturpaneele"], ["Workflow", "Nesting, Schneiden, Sortieren, Lagerung und digitales Jobrouting"], ["Optionen", "Lineartriebe, Bevel Cutting, Rohrmodule, Blechlager"], ["Support", "Installation, Parameterubergabe, Bedienertraining, vorbeugende Wartung"]] },
    press: { pillars: [["Biegegenauigkeit", "CNC-Bombierung, verfeinerte Steuerung und konsistente Teilegeometrie."], ["Bedienerfluss", "Intuitive Steuerung, Werkzeugorganisation und sichereres Handling."], ["Robot-ready", "Zellen fur Biegeautomation, Greiferdesign und wiederholbare Beladung."]], matrix: [["Anwendungen", "Schranke, Gehause, HVAC, Bauteile, Sonderfertigung"], ["Workflow", "Offline-Vorbereitung, Werkzeugsetup, Biegen, Prufung"], ["Optionen", "Winkelmessung, Werkzeugschranke, Roboterzellen, Blechfolger"], ["Support", "Werkzeugberatung, Installation, Training und Wartungsplanung"]] },
    automation: { pillars: [["Robotisches Biegen", "Zellen um Teilefamilie, Zykluszeit, Greiferdesign und Sicherheitskonzept."], ["Laserschweissen", "Wiederholbare Prozesskontrolle fur saubere Baugruppen."], ["Materialhandling", "Be-, Entlade-, Sortier- und Routingsysteme, die Reibung aus der Produktion nehmen."]], matrix: [["Zelltypen", "Biegen, Schweissen, Schneidsupport, Machine Tending, Palettieren"], ["Integration", "Maschinenschnittstelle, Sicherheit, Vorrichtungen, Forderer, Lagerung"], ["Skalierbarkeit", "Standalone-Zellen oder verbundene Fabrikautomation"], ["Support", "Simulation, Installation, Bedienertraining und Prozessverfeinerung"]] },
    smart: { pillars: [["Digitaler Workflow", "Jobs, Materialien und Produktionsstatus bewegen sich durch vernetzte Maschinenlogik."], ["Automatisierte Lagerung", "Blechturme, Buffer und Ladesysteme reduzieren manuelle Wege und Wartezeit."], ["Fabrikarchitektur", "CUTRON plant um die Anlage, nicht nur um die Maschinenflache."]], matrix: [["Kernsysteme", "Laser, Abkantpresse, Panel Bending, Schweissen, Roboterhandling"], ["Fabrikfluss", "Lagerung, Beladung, Schneiden, Formen, Schweissen, Prufung"], ["Signale", "Produktionsdaten, Steuerlogik, Maschinenbereitschaft, Routenplanung"], ["Support", "Beratung, phasenweiser Rollout, Training und kontinuierliche Optimierung"]] },
    support: { pillars: [["Beratung", "Ein technisches Angebot beginnt mit Teilen, Materialmix, Durchsatz und Produktionsstrategie."], ["Installation", "Inbetriebnahme, Ausrichtung, Sicherheitschecks und Bedienerubergabe."], ["Lifecycle", "Training, vorbeugende Wartung, Serviceplanung und zukunftige Erweiterung."]], matrix: [["Vor dem Kauf", "Bedarfsanalyse, Konfiguration, Layout und Investitionslogik"], ["Bei Lieferung", "Installation, Inbetriebnahme, Sicherheit und Abnahme"], ["Nach dem Start", "Training, Service, Wartung und technischer Support"], ["Erweiterung", "Automationsupgrades, Kapazitatsplanung und Workflow-Optimierung"]] },
    about: { pillars: [["Markendisziplin", "Mattschwarz, polierter Stahl und zuruckhaltendes Gold definieren eine prazise Industrieidentitat."], ["Engineering-Autoritat", "Im Fokus stehen technische Klarheit, Produktionslogik und sichere Systemarchitektur."], ["Enterprise-Glaubwurdigkeit", "CUTRON ist fur Hersteller gebaut, die fahige Systeme und verantwortlichen Support brauchen."]], matrix: [["Positionierung", "Premium-Technologie im europaischen Stil fur Blechbearbeitung"], ["Fokus", "Laser CNC, Abkantpresse, Roboterautomation, Schweissen und Smart Factory"], ["Signatur", "Driven by Precision"], ["Okosystem", "Powered by UZINEX technical and service capability"]] }
  }
};

translations.pl = {
  ...translations.en,
  meta: {
    home: ["CUTRON | Zaprojektowane dla precyzji", "Premium systemy do nowoczesnej obrobki blach."],
    products: ["Produkty | CUTRON", "Premium systemy CUTRON do obrobki blach."],
    laser: ["Ciecie laserem fiber | CUTRON", "Systemy laserowe CUTRON do precyzyjnego ciecia wysokiej mocy."],
    press: ["Prasy krawedziowe | CUTRON", "Prasy krawedziowe CUTRON do precyzyjnego giecia i automatyzacji."],
    automation: ["Automatyzacja | CUTRON", "Cele robotyczne i automatyzacja produkcji CUTRON."],
    smart: ["Smart Factory | CUTRON", "Integracja Smart Factory CUTRON dla produkcji polaczonej."],
    support: ["Serwis i wsparcie | CUTRON", "Doradztwo, instalacja, szkolenie i wsparcie CUTRON."],
    about: ["O CUTRON | CUTRON", "CUTRON to premium dzial przemyslowy powered by UZINEX."],
    contact: ["Kontakt | CUTRON", "Popros o oferte techniczna CUTRON."]
  },
  nav: ["Start", "Produkty", "Ciecie laserowe", "Prasa krawedziowa", "Automatyzacja", "Smart Factory", "Serwis", "O nas", "Kontakt"],
  navCta: "Zapytaj o oferte",
  mobileCta: "Zapytaj o oferte techniczna",
  languageLabel: "Jezyk",
  megaMenu: [
    { title: "Systemy", items: [["Systemy laser fiber", "Platformy ciecia wysokiej mocy", "laser-cutting.html"], ["Prasy krawedziowe", "Precyzyjne cele giec", "press-brake.html"], ["CNC Panel Bending", "Elastyczne formowanie automatyczne", "products.html#panel-bending"]] },
    { title: "Automatyzacja", items: [["Cele robotyczne", "Obsluga, giecie i spawanie", "automation.html"], ["Smart Factory", "Polaczone ekosystemy produkcji", "smart-factory.html"], ["Serwis i wsparcie", "Instalacja, szkolenie i utrzymanie", "service-support.html"]] }
  ],
  hero: { kicker: "Premium dzial przemyslowy powered by UZINEX", h1: "ZAPROJEKTOWANE DLA PRECYZJI", text: "Premium systemy do nowoczesnej obrobki blach.", primary: "Zapytaj o oferte techniczna", secondary: "Poznaj systemy", signals: ["Laser fiber", "Prasa krawedziowa", "Cele robotyczne", "Smart factory"] },
  brand: { label: "CUTRON by UZINEX", title: "Dopracowana wydajnosc przemyslowa.", text: "CUTRON to premium dzial automatyzacji przemyslowej i obrobki blach w ekosystemie UZINEX. Marka opiera sie na precyzyjnej konfiguracji, odpowiedzialnym wsparciu i nowoczesnej architekturze produkcji.", claims: ["Dyscyplina polerowanej stali", "Powściągliwa zlota precyzja", "Logika produkcji enterprise"] },
  sectionProduct: { label: "Ekosystem produktow", title: "Premium technologia do blach.", text: "Od samodzielnych maszyn po kompletne ekosystemy produkcyjne, systemy CUTRON sa konfigurowane wokol wydajnosci, przeplywu materialu i dlugoterminowego wsparcia." },
  smartFactory: { label: "Integracja smart factory", title: "Automatyzacja, ktora respektuje cala fabryke.", text: "CUTRON laczy maszyny, cele robotyczne, magazyny wiezowe i cyfrowe trasowanie w jedna logike produkcji. Celem nie jest wiecej sprzetu, lecz czystszy, szybszy i mierzalny przeplyw.", flow: ["CAD/CAM", "Magazyn", "Ciecie laserowe", "Giecie", "Spawanie", "Kontrola", "Wysylka"], cta: "Poznaj Smart Factory" },
  performanceSection: { label: "Wydajnosc", title: "Zbudowane dla powaznych srodowisk produkcyjnych.", text: "CUTRON komunikuje sie przez mierzalne mozliwosci: moc, automatyzacje, wsparcie, szkolenie i skonfigurowana efektywnosc przemyslowa." },
  whySection: { label: "Dlaczego CUTRON", title: "Autorytet inzynierski z ciagloscia serwisu.", text: "Maszyny premium maja znaczenie tylko wtedy, gdy sa poprawnie skonfigurowane, zainstalowane, wyszkolone i wspierane." },
  caseSection: { label: "Projekty przemyslowe", title: "Kinetyczne systemy. Praktyczne wyniki.", text: "Studia CUTRON pokazuja architektury produkcji: ciecie, giecie, spawanie i automatyzacje pracujace razem." },
  finalCta: { label: "Driven by Precision", title: "Zbuduj nastepny system produkcyjny z CUTRON.", text: "Popros o konfiguracje techniczna dla lasera CNC, prasy krawedziowej, automatyzacji robotycznej lub kompletnego ekosystemu obrobki blach." },
  productsPage: { label: "Systemy", title: "Jedno portfolio premium, wiele sciezek produkcji.", text: "Wybierz samodzielna maszyne, polaczona cele lub kompletna architekture fabryki. CUTRON utrzymuje premium dyscypline wizualna i praktyczna logike techniczna." },
  architecture: { label: "Logika konfiguracji", title: "Ekosystemy produkcyjne, nie izolowane maszyny.", text: "CUTRON jest dla producentow, ktorzy potrzebuja precyzyjnych rekomendacji, czystej integracji i wsparcia technicznego po podpisaniu oferty.", steps: ["Analiza potrzeb", "Konfiguracja systemu", "Plan layoutu", "Instalacja", "Szkolenie", "Wsparcie lifecycle"] },
  detail: { capabilityLabel: "Mozliwosci", capabilityTitle: "Precyzyjnie zbudowane wokol celu produkcyjnego.", capabilityText: "Kazda konfiguracja CUTRON jest oceniana przez output, material, workflow i oczekiwania dlugoterminowego serwisu.", technicalLabel: "Widok techniczny", technicalTitle: "Skonfigurowane dla realnych warunkow fabryki.", methodLabel: "Metoda", methodTitle: "Od oferty technicznej do ramp-up produkcji.", methodText: (title) => `Projekty ${title} sa prowadzone jako rozmowy inzynierskie: krotkie, precyzyjne i oparte na wyniku produkcyjnym.`, processes: ["Analiza", "Oferta techniczna", "Layout fabryki", "Uruchomienie", "Szkolenie", "Wsparcie"], request: "Zapytaj o oferte techniczna", view: "Zobacz systemy" },
  contact: { label: "Oferta techniczna", title: "Popros o konfiguracje CUTRON.", text: "Powiedz nam, co produkujesz, jaki material obrabiasz i jaki system produkcji chcesz zbudowac.", fields: ["Imie i nazwisko", "Email", "Firma", "Interesujacy system", "Szczegoly projektu"], placeholder: "Material, zakres grubosci, wolumen produkcji, cele automatyzacji", submit: "Przygotuj zapytanie techniczne", status: "Zapytanie techniczne zostalo przygotowane w kliencie email.", asideTitle: "Co pomaga nam precyzyjnie skonfigurowac", checklist: ["Typ materialu i zakres grubosci", "Przyklady czesci lub rodzin produktow", "Wymagana wydajnosc i zmiany", "Dostepna powierzchnia hali", "Cele automatyzacji"], options: ["Systemy laser fiber", "Prasy krawedziowe", "Automatyzacja i cele robotyczne", "Integracja Smart Factory", "Kompletny ekosystem produkcyjny"], mailSubject: "Zapytanie techniczne CUTRON" },
  footer: { text: "Premium systemy do nowoczesnej obrobki blach. Powered by UZINEX.", links: ["Produkty", "Ciecie laserowe", "Prasa krawedziowa", "Automatyzacja", "Serwis i wsparcie", "Kontakt"], bottom: ["CUTRON - Driven by Precision", "Luxury industrial technology by UZINEX"] },
  notFound: ["Nie znaleziono strony.", "Wybrana sekcja nie jest dostepna.", "Powrot do strony glownej"],
  products: [["Systemy laser fiber", "Platformy laserowe wysokiej mocy do precyzyjnej produkcji blach, czystego nestingu i wydajnosci gotowej na automatyzacje.", ["Do 60 kW", "Opcje napedu liniowego", "Integracja wiezy"]], ["Prasy krawedziowe", "Precyzyjne systemy giecia z dopracowanym sterowaniem, strategia narzedzi, stabilnoscia kata i opcjami robotycznymi.", ["CNC crowning", "Kontrola kata", "Robot ready"]], ["CNC Panel Bending", "Automatyczne giecie paneli dla powtarzalnej produkcji, mniejszej obslugi i czystego przeplywu czesci.", ["Elastyczne narzedzia", "Mniej obslugi", "Produkcja seryjna"]], ["Cele robotyczne", "Zintegrowane cele robotyczne do giecia, spawania, sortowania i obslugi maszyn.", ["Projekt celi", "Systemy bezpieczenstwa", "Integracja linii"]], ["Spawanie laserowe", "Rozwiazania spawania laserowego dla czystych spoin, powtarzalnej kontroli energii i elastycznych zespolow metalowych.", ["Czyste spoiny", "Kontrola procesu", "Projekt oprzyrzadowania"]], ["Automatyzacja fabryki", "Od maszyn standalone po kompletne ekosystemy z zaladunkiem, rozladunkiem, magazynowaniem i cyfrowym workflow.", ["Wieze magazynowe", "Przeplyw materialu", "Cyfrowe trasowanie"]]],
  performance: [["Do 60kW", "Platformy laserowe dla srodowisk ciecia wysokiej wydajnosci."], ["Smart Automation", "Robotyczna obsluga, magazynowanie, systemy zaladunku i rozladunku."], ["Lokalne wsparcie techniczne", "Doradztwo, instalacja i serwis wspierane przez UZINEX."], ["Instalacja i szkolenie", "Uruchomienie, przekazanie operatorom i ramp-up produkcji."], ["Systemy konfigurowalne", "Technologia wokol materialu, grubosci, czesci i workflow."], ["Efektywnosc produkcji", "Myslenie end-to-end, nie sprzedaz izolowanych maszyn."]],
  why: [["Premium engineering", "Systemy przemyslowe wybrane i skonfigurowane dla precyzji, outputu i wiarygodnosci dlugoterminowej."], ["Integracja przemyslowa", "Maszyny, automatyzacja i workflow jako jedna architektura produkcji."], ["Wsparcie w stylu europejskim", "Doradztwo, uruchomienie, szkolenie i serwis przez ekosystem UZINEX."], ["Ekspertyza automatyzacji", "Cele robotyczne, obsluga blach i cyfrowe trasowanie dla realnych operacji fabryki."], ["Doradztwo techniczne", "Krotkie, precyzyjne rekomendacje na podstawie czesci, materialow, grubosci i celow produkcji."], ["Ekosystem serwisu", "Wsparcie po dostawie: instalacja, szkolenie, utrzymanie i przyszla rozbudowa."]],
  caseStudies: [["Zaklad ciecia laserowego", "Ciecie o wysokiej wydajnosci", "Kompletny workflow ciecia laserowego z automatycznym zaladunkiem, trasowaniem materialu i obsluga gotowych czesci."], ["Robotyczna cela giecia", "Powtarzalne formowanie", "Robotyczna architektura prasy krawedziowej dla stabilnych cykli i mniejszej pracy recznej."], ["Automatyczny workflow blach", "Integracja smart factory", "Polaczone magazynowanie, ciecie, formowanie i spawanie jako jeden ekosystem produkcyjny."]],
  pages: { products: ["Premium systemy do obrobki blach", "Ekosystem produktow", "CUTRON laczy ciecie laserowe, giecie, spawanie i automatyzacje w jednym dopracowanym portfolio przemyslowym."], laser: ["Systemy ciecia laserem fiber", "Ciecie laserowe", "Premium platformy fiber laser dla nowoczesnej produkcji metalowej, ciecia wysokiej mocy i automatyzacji."], press: ["Prasy krawedziowe", "Precyzyjne giecie", "Systemy giecia zaprojektowane dla kontroli, powtarzalnosci, strategii narzedzi i skalowalnej integracji robotycznej."], automation: ["Automatyzacja i cele robotyczne", "Automatyzacja przemyslowa", "Precyzyjne systemy automatyzacji do obslugi, giecia, spawania, sortowania i machine tending."], smart: ["Integracja Smart Factory", "Produkcja polaczona", "Od maszyn standalone po kompletne ekosystemy z automatyzacja, magazynowaniem i cyfrowym workflow."], support: ["Serwis i wsparcie", "Ekosystem UZINEX", "Doradztwo techniczne, instalacja, szkolenie i wsparcie dla ciaglosci przemyslowej."], about: ["CUTRON, Powered by UZINEX", "Dzial przemyslowy", "CUTRON jest pozycjonowany jako premium dzial automatyzacji przemyslowej i obrobki blach w ekosystemie UZINEX."] },
  pageDetails: translations.en.pageDetails
};

translations.bg = {
  ...translations.en,
  meta: {
    home: ["CUTRON | Проектирано за прецизност", "Премиум системи за модерна обработка на листов метал."],
    products: ["Продукти | CUTRON", "Премиум системи CUTRON за обработка на листов метал."],
    laser: ["Фибър лазерно рязане | CUTRON", "Фибър лазерни системи CUTRON за високопроизводително прецизно рязане."],
    press: ["Абкант системи | CUTRON", "Абкант системи CUTRON за прецизно огъване и автоматизация."],
    automation: ["Автоматизация | CUTRON", "Роботизирани клетки и производствена автоматизация CUTRON."],
    smart: ["Smart Factory | CUTRON", "CUTRON Smart Factory интеграция за свързано производство."],
    support: ["Сервиз и поддръжка | CUTRON", "Консултация, инсталация, обучение и поддръжка CUTRON."],
    about: ["За CUTRON | CUTRON", "CUTRON е премиум индустриална дивизия powered by UZINEX."],
    contact: ["Контакт | CUTRON", "Заявете техническа оферта от CUTRON."]
  },
  nav: ["Начало", "Продукти", "Лазерно рязане", "Абкант", "Автоматизация", "Smart Factory", "Сервиз", "За нас", "Контакт"],
  navCta: "Заяви оферта",
  mobileCta: "Заяви техническа оферта",
  languageLabel: "Език",
  megaMenu: [
    { title: "Системи", items: [["Фибър лазерни системи", "Платформи за рязане с висока мощност", "laser-cutting.html"], ["Абкант системи", "Прецизни клетки за огъване", "press-brake.html"], ["CNC Panel Bending", "Гъвкаво автоматизирано формоване", "products.html#panel-bending"]] },
    { title: "Автоматизация", items: [["Роботизирани клетки", "Манипулиране, огъване и заваряване", "automation.html"], ["Smart Factory", "Свързани производствени екосистеми", "smart-factory.html"], ["Сервиз и поддръжка", "Инсталация, обучение и поддръжка", "service-support.html"]] }
  ],
  hero: { kicker: "Премиум индустриална дивизия powered by UZINEX", h1: "ПРОЕКТИРАНО ЗА ПРЕЦИЗНОСТ", text: "Премиум системи за модерна обработка на листов метал.", primary: "Заяви техническа оферта", secondary: "Разгледай системите", signals: ["Фибър лазер", "Абкант", "Роботизирани клетки", "Smart factory"] },
  brand: { label: "CUTRON by UZINEX", title: "Индустриална производителност, рафинирана.", text: "CUTRON е премиум дивизия за индустриална автоматизация и обработка на листов метал в екосистемата UZINEX. Марката е изградена около точна конфигурация, отговорна поддръжка и модерна производствена архитектура.", claims: ["Дисциплина на полираната стомана", "Сдържана златна прецизност", "Enterprise логика за производство"] },
  sectionProduct: { label: "Продуктова екосистема", title: "Премиум технология за листов метал.", text: "От самостоятелни машини до пълни производствени екосистеми, системите CUTRON се конфигурират около производителност, материален поток и дългосрочна поддръжка." },
  smartFactory: { label: "Smart factory интеграция", title: "Автоматизация, която уважава цялата фабрика.", text: "CUTRON свързва машини, роботизирани клетки, складови кули и дигитално маршрутизиране в една производствена логика. Целта не е повече оборудване, а по-чист, по-бърз и измерим workflow.", flow: ["CAD/CAM", "Складиране", "Лазерно рязане", "Огъване", "Заваряване", "Инспекция", "Експедиция"], cta: "Разгледай Smart Factory" },
  performanceSection: { label: "Производителност", title: "Създадено за сериозни производствени среди.", text: "CUTRON комуникира чрез измерими възможности: мощност, автоматизация, поддръжка, обучение и конфигурирана индустриална ефективност." },
  whySection: { label: "Защо CUTRON", title: "Инженерен авторитет с постоянна сервизна поддръжка.", text: "Премиум машините имат значение само когато са правилно конфигурирани, инсталирани, обучени и поддържани." },
  caseSection: { label: "Индустриални проекти", title: "Кинематични системи. Практични резултати.", text: "Проектите CUTRON се представят като производствени архитектури: рязане, огъване, заваряване и автоматизация, работещи заедно." },
  finalCta: { label: "Driven by Precision", title: "Изградете следващата си производствена система с CUTRON.", text: "Заявете техническа конфигурация за CNC лазер, абкант, роботизирана автоматизация или пълна екосистема за обработка на листов метал." },
  productsPage: { label: "Системи", title: "Едно премиум портфолио, множество производствени пътища.", text: "Изберете самостоятелна машина, свързана клетка или пълна фабрична архитектура. CUTRON пази премиум визуална дисциплина и практична техническа логика." },
  architecture: { label: "Логика на конфигурация", title: "Производствени екосистеми, не изолирани машини.", text: "CUTRON е създаден за производители, които се нуждаят от точни препоръки, чиста интеграция и техническа поддръжка след подписване на офертата.", steps: ["Анализ на нужди", "Конфигурация", "Планиране layout", "Инсталация", "Обучение", "Lifecycle поддръжка"] },
  detail: { capabilityLabel: "Възможности", capabilityTitle: "Прецизно изградено около производствената цел.", capabilityText: "Всяка конфигурация CUTRON се оценява чрез output, материал, workflow и дългосрочни сервизни очаквания.", technicalLabel: "Технически изглед", technicalTitle: "Конфигурирано за реални фабрични условия.", methodLabel: "Метод", methodTitle: "От техническа оферта до производствен ramp-up.", methodText: (title) => `Проектите ${title} се водят като инженерни разговори: кратки, точни и фокусирани върху производствения резултат.`, processes: ["Анализ", "Техническа оферта", "Фабричен layout", "Пускане", "Обучение", "Поддръжка"], request: "Заяви техническа оферта", view: "Виж системите" },
  contact: { label: "Техническа оферта", title: "Заявете CUTRON конфигурация.", text: "Кажете ни какво произвеждате, какъв материал обработвате и каква производствена система искате да изградите.", fields: ["Име", "Email", "Компания", "Интерес към система", "Детайли за проекта"], placeholder: "Материал, диапазон дебелини, производствен обем, цели за автоматизация", submit: "Подготви техническа заявка", status: "Техническата заявка е подготвена във вашия email клиент.", asideTitle: "Какво ни помага да конфигурираме точно", checklist: ["Тип материал и диапазон дебелини", "Примери за детайли или продуктови семейства", "Необходим капацитет и смени", "Налично пространство", "Цели за автоматизация"], options: ["Фибър лазерни системи", "Абкант системи", "Автоматизация и роботизирани клетки", "Smart Factory интеграция", "Пълна производствена екосистема"], mailSubject: "CUTRON техническа заявка" },
  footer: { text: "Премиум системи за модерна обработка на листов метал. Powered by UZINEX.", links: ["Продукти", "Лазерно рязане", "Абкант", "Автоматизация", "Сервиз и поддръжка", "Контакт"], bottom: ["CUTRON - Driven by Precision", "Luxury industrial technology by UZINEX"] },
  notFound: ["Страницата не е намерена.", "Търсената секция не е налична.", "Обратно към начало"],
  products: [["Фибър лазерни системи", "Лазерни платформи с висока мощност за прецизно производство на листов метал, чист nesting и капацитет готов за автоматизация.", ["До 60 kW", "Linear drive опции", "Интеграция с кула"]], ["Абкант системи", "Прецизни системи за огъване с рафинирано управление, стратегия за инструменти, постоянен ъгъл и роботизирани опции.", ["CNC crowning", "Контрол на ъгъл", "Robot ready"]], ["CNC Panel Bending", "Автоматизирано огъване на панели за повторяемо производство, по-малко манипулиране и чист поток на детайли.", ["Гъвкави инструменти", "По-малко handling", "Серийно производство"]], ["Роботизирани клетки", "Интегрирани роботизирани клетки за огъване, заваряване, сортиране и обслужване на машини.", ["Дизайн на клетка", "Системи за безопасност", "Интеграция на линия"]], ["Лазерно заваряване", "Решения за лазерно заваряване за чисти шевове, повторяем контрол на енергията и гъвкави метални възли.", ["Чисти шевове", "Контрол на процес", "Дизайн фикстури"]], ["Фабрична автоматизация", "От standalone машини до пълни екосистеми с товарене, разтоварване, складиране и дигитален workflow.", ["Складови кули", "Материален поток", "Дигитално маршрутизиране"]]],
  performance: [["До 60kW", "Лазерни платформи за високопроизводителни среди за рязане."], ["Smart Automation", "Роботизирано манипулиране, складиране, товарене и разтоварване."], ["Локална техническа поддръжка", "Консултация, инсталация и сервиз чрез UZINEX."], ["Инсталация и обучение", "Пускане, предаване към оператори и производствен ramp-up."], ["Конфигурируеми системи", "Технология около материал, дебелини, детайли и workflow."], ["Производствена ефективност", "End-to-end мислене, не продажба на изолирани машини."]],
  why: [["Premium engineering", "Индустриални системи, избрани и конфигурирани за прецизност, output и дългосрочна надеждност."], ["Индустриална интеграция", "Машини, автоматизация и workflow като една производствена архитектура."], ["Европейски стил поддръжка", "Консултация, commissioning, обучение и сервиз чрез UZINEX."], ["Експертиза в автоматизацията", "Роботизирани клетки, обработка на листов метал и дигитално маршрутизиране за реални фабрични операции."], ["Техническа консултация", "Кратки и точни препоръки според детайли, материали, дебелини и производствени цели."], ["Сервизна екосистема", "Поддръжка след доставка: инсталация, обучение, поддръжка и бъдещо разширение."]],
  caseStudies: [["Завод за лазерна обработка", "Рязане с висок капацитет", "Пълен workflow за лазерно рязане с автоматично товарене, маршрутизиране на материал и handling на готови детайли."], ["Роботизирана клетка за огъване", "Повторяемо формоване", "Роботизирана press brake архитектура за постоянни цикли и по-малко ръчна работа."], ["Автоматизиран workflow за листов метал", "Smart factory интеграция", "Свързано складиране, рязане, формоване и заваряване като една производствена екосистема."]],
  pages: { products: ["Премиум системи за обработка на листов метал", "Продуктова екосистема", "CUTRON обединява лазерно рязане, огъване, заваряване и автоматизация в едно рафинирано индустриално портфолио."], laser: ["Фибър лазерни системи", "Лазерно рязане", "Премиум фибър лазерни платформи за модерна метална обработка, високомощно рязане и автоматизирано производство."], press: ["Абкант системи", "Прецизно огъване", "Системи за огъване, проектирани за контрол, повторяемост, стратегия за инструменти и роботизирана интеграция."], automation: ["Автоматизация и роботизирани клетки", "Индустриална автоматизация", "Прецизно изградени автоматизирани системи за handling, огъване, заваряване, сортиране и machine tending."], smart: ["Smart Factory интеграция", "Свързано производство", "От standalone машини до пълни екосистеми с автоматизация, складиране и дигитален workflow."], support: ["Сервиз и поддръжка", "UZINEX екосистема", "Техническа консултация, инсталация, обучение и поддръжка за индустриална непрекъснатост."], about: ["CUTRON, Powered by UZINEX", "Индустриална дивизия", "CUTRON е позициониран като премиум дивизия за индустриална автоматизация и обработка на листов метал в UZINEX екосистемата."] },
  pageDetails: translations.en.pageDetails
};

translations.pl.pageDetails = {
  laser: { pillars: [["Zakres mocy", "Konfiguracja do 60 kW dla produktywnosci, zakresu grubosci i celow outputu zakladu."], ["Jakosc ciecia", "Czyste krawedzie, kontrolowane przebicie, dopracowana strategia gazu i stabilna szybka obrobka."], ["Sciezka automatyzacji", "Zaladunek, rozladunek, wieze magazynowe i obsluga czesci moga rosnac razem z moca produkcji."]], matrix: [["Zastosowania", "Stal, stal nierdzewna, aluminium, blacha ocynkowana, panele konstrukcyjne"], ["Workflow", "Nesting, ciecie, sortowanie, magazynowanie i cyfrowe trasowanie zlecen"], ["Opcje", "Napedy liniowe, bevel cutting, moduly rur, wieze blach"], ["Wsparcie", "Instalacja, przekazanie parametrow, szkolenie operatorow, utrzymanie prewencyjne"]] },
  press: { pillars: [["Dokladnosc giecia", "CNC crowning, dopracowana architektura sterowania i stabilna geometria czesci."], ["Przeplyw operatora", "Intuicyjne sterowanie, organizacja narzedzi i bezpieczniejsza obsluga produkcji dziennej."], ["Gotowe na robota", "Cele moga byc konfigurowane do automatyzacji giecia, projektu chwytaka i powtarzalnego zaladunku."]], matrix: [["Zastosowania", "Szafy, obudowy, HVAC, elementy budowlane, produkcja custom"], ["Workflow", "Przygotowanie offline, setup narzedzi, giecie, kontrola"], ["Opcje", "Pomiar kata, szafy narzedziowe, cele robotyczne, podtrzymki blach"], ["Wsparcie", "Doradztwo narzedziowe, instalacja, szkolenie i plan utrzymania"]] },
  automation: { pillars: [["Giecie robotyczne", "Cele projektowane wokol rodzin czesci, czasu cyklu, chwytaka i koncepcji bezpieczenstwa."], ["Spawanie laserowe", "Powtarzalna kontrola procesu dla czystych zespolow i elastycznej produkcji metalowej."], ["Obsluga materialu", "Systemy zaladunku, rozladunku, sortowania i trasowania, ktore usuwaja tarcie z produkcji."]], matrix: [["Typy cel", "Giecie, spawanie, wsparcie ciecia, machine tending, paletyzacja"], ["Integracja", "Interfejs maszyny, bezpieczenstwo, oprzyrzadowanie, przenosniki, magazyn"], ["Skalowalnosc", "Cele standalone lub automatyzacja polaczona na poziomie fabryki"], ["Wsparcie", "Symulacja, instalacja, szkolenie operatorow i dopracowanie procesu"]] },
  smart: { pillars: [["Cyfrowy workflow", "Zlecenia, materialy i status produkcji moga przeplywac przez logike polaczonych maszyn."], ["Automatyczny magazyn", "Wieze blach, bufory i systemy zaladunku redukuja ruch reczny i oczekiwanie."], ["Architektura fabryki", "CUTRON projektuje wokol zakladu, nie tylko wokol miejsca maszyny."]], matrix: [["Systemy core", "Laser, prasa krawedziowa, panel bending, spawanie, robotyczna obsluga"], ["Przeplyw fabryki", "Magazyn, zaladunek, ciecie, formowanie, spawanie, kontrola"], ["Sygnaly", "Dane produkcyjne, logika sterowania, gotowosc maszyn, planowanie tras"], ["Wsparcie", "Doradztwo, wdrozenie etapowe, szkolenie i ciagla optymalizacja"]] },
  support: { pillars: [["Doradztwo", "Oferta techniczna zaczyna sie od czesci, miksu materialow, wydajnosci i strategii produkcji."], ["Instalacja", "Uruchomienie, osiowanie, kontrole bezpieczenstwa i przekazanie operatorom."], ["Lifecycle", "Szkolenie, utrzymanie prewencyjne, plan serwisu i przyszla rozbudowa."]], matrix: [["Przed zakupem", "Analiza potrzeb, konfiguracja, layout i logika inwestycji"], ["Podczas dostawy", "Instalacja, uruchomienie, bezpieczenstwo i akceptacja"], ["Po starcie", "Szkolenie, serwis, utrzymanie i wsparcie techniczne"], ["Rozbudowa", "Upgrade automatyzacji, planowanie mocy i dopracowanie workflow"]] },
  about: { pillars: [["Dyscyplina marki", "Matowa czern, polerowana stal i powściągliwe zloto definiuja precyzyjna tozsamosc przemyslowa."], ["Autorytet inzynierski", "Liczy sie techniczna jasnosc, logika produkcji i pewna architektura systemu."], ["Wiarygodnosc enterprise", "CUTRON jest dla producentow, ktorzy potrzebuja mocnych systemow i odpowiedzialnego wsparcia."]], matrix: [["Pozycjonowanie", "Premium europejska technologia do obrobki blach"], ["Fokus", "Laser CNC, prasa krawedziowa, automatyzacja robotyczna, spawanie i Smart Factory"], ["Sygnatura", "Driven by Precision"], ["Ekosystem", "Powered by UZINEX technical and service capability"]] }
};

translations.bg.pageDetails = {
  laser: { pillars: [["Диапазон на мощност", "Конфигурация до 60 kW за продуктивност, диапазон дебелини и цели за output на фабриката."], ["Качество на рязане", "Чисти ръбове, контролирано пробиване, рафинирана газова стратегия и стабилна високоскоростна обработка."], ["Път към автоматизация", "Товарене, разтоварване, складови кули и handling на готови детайли могат да растат с капацитета."]], matrix: [["Приложения", "Стомана, неръждаема стомана, алуминий, поцинкована ламарина, структурни панели"], ["Workflow", "Nesting, рязане, сортиране, складиране и дигитално маршрутизиране"], ["Опции", "Линейни задвижвания, bevel cutting, тръбни модули, кули за листов метал"], ["Поддръжка", "Инсталация, предаване на параметри, обучение оператори, превантивна поддръжка"]] },
  press: { pillars: [["Точност на огъване", "CNC crowning, рафинирана управляваща архитектура и постоянна геометрия на детайла."], ["Операторски поток", "Интуитивно управление, организация на инструментите и по-безопасно handling за ежедневна продукция."], ["Готово за робот", "Клетките могат да се конфигурират за автоматизация на огъване, gripper design и повторяемо товарене."]], matrix: [["Приложения", "Шкафове, корпуси, HVAC, строителни детайли, custom производство"], ["Workflow", "Offline подготовка, setup инструменти, огъване, инспекция"], ["Опции", "Измерване на ъгъл, шкафове за инструменти, роботизирани клетки, sheet followers"], ["Поддръжка", "Консултация за инструменти, инсталация, обучение и план за поддръжка"]] },
  automation: { pillars: [["Роботизирано огъване", "Клетки около семейство детайли, цикъл, gripper design и концепция за безопасност."], ["Лазерно заваряване", "Повторяем контрол на процеса за чисти възли и гъвкава метална обработка."], ["Материален handling", "Системи за товарене, разтоварване, сортиране и маршрутизиране, които премахват friction от производството."]], matrix: [["Типове клетки", "Огъване, заваряване, support за рязане, machine tending, палетизиране"], ["Интеграция", "Интерфейс машина, безопасност, фикстури, конвейери, складиране"], ["Скалируемост", "Standalone клетки или свързана фабрична автоматизация"], ["Поддръжка", "Симулация, инсталация, обучение и оптимизация на процеса"]] },
  smart: { pillars: [["Дигитален workflow", "Поръчки, материали и производствен статус се движат през логиката на свързани машини."], ["Автоматизирано складиране", "Кули за листов метал, буфери и системи за товарене намаляват ръчния труд и чакането."], ["Фабрична архитектура", "CUTRON проектира около фабриката, не само около отпечатъка на машината."]], matrix: [["Core системи", "Лазер, абкант, panel bending, заваряване, роботизиран handling"], ["Фабричен поток", "Складиране, товарене, рязане, формоване, заваряване, инспекция"], ["Сигнали", "Производствени данни, control logic, готовност на машини, планиране на маршрути"], ["Поддръжка", "Консултация, phased deployment, обучение и постоянна оптимизация"]] },
  support: { pillars: [["Консултация", "Техническата оферта започва с детайли, материален микс, капацитет и производствена стратегия."], ["Инсталация", "Commissioning, подравняване, safety checks и предаване към оператори."], ["Lifecycle", "Обучение, превантивна поддръжка, сервизен план и бъдещо разширение."]], matrix: [["Преди покупка", "Анализ нужди, конфигурация, layout и логика на инвестицията"], ["По време на доставка", "Инсталация, commissioning, безопасност и приемане"], ["След старт", "Обучение, сервиз, поддръжка и техническа помощ"], ["Разширение", "Automation upgrades, планиране капацитет и workflow оптимизация"]] },
  about: { pillars: [["Дисциплина на марката", "Матово черно, полирана стомана и сдържано злато дефинират прецизна индустриална идентичност."], ["Инженерен авторитет", "Фокусът е техническа яснота, производствена логика и уверена системна архитектура."], ["Enterprise доверие", "CUTRON е за производители, които се нуждаят от силни системи и отговорна поддръжка."]], matrix: [["Позициониране", "Премиум европейски стил технология за обработка на листов метал"], ["Фокус", "Laser CNC, абкант, роботизирана автоматизация, заваряване и Smart Factory"], ["Подпис", "Driven by Precision"], ["Екосистема", "Powered by UZINEX technical and service capability"]] }
};
