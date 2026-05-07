import { assets, currentLanguage } from "./data.js";

const catalog = [
  ["press", "Press Brake", "press-brake.html", "bend", "Precision bending platforms for high-duty sheet metal production.", "CNC crowning / robotic ready / premium tooling"],
  ["shearing", "Shearing Machine", "shearing-machine.html", "panel", "Clean cutting systems for plate and sheet preparation before forming.", "Servo backgauge / hardened blades / controlled workflow"],
  ["hydraulic", "Hydraulic Press", "hydraulic-press.html", "gauge", "Industrial forming and pressing systems for demanding production programs.", "Deep forming / rigid frames / safety architecture"],
  ["punching", "Punching Machine", "punching-machine.html", "network", "High-speed punching systems for perforation, forming and repetitive sheet processing.", "Tool libraries / sheet handling / nested output"],
  ["laser", "Fiber Laser Cutting Machine", "laser-cutting.html", "laser", "Premium fiber laser systems for precision cutting and automation-ready throughput.", "Up to 60 kW / towers / smart nesting"],
  ["rolling", "Rolling Machine", "rolling-machine.html", "factory", "Rolling systems for cylindrical, conical and curved sheet metal components.", "3-roll and 4-roll / controlled pressure / repeatability"],
  ["grooving", "V Grooving Machine", "v-grooving-machine.html", "weld", "V grooving systems for refined architectural bends and clean visual edges.", "High accuracy / clean grooves / premium finish"],
  ["panel-bender", "Panel Bender", "panel-bender.html", "robot", "Automated panel bending for flexible production with reduced manual handling.", "Flexible forming / robotic path / low handling"]
];

const localized = {
  en: {
    top: ["Premium sheet metal systems", "Powered by UZINEX", "Technical consulting"],
    quote: "Quote Now",
    hero: ["MASTER PRECISION METAL FORMING", "Premium European-style machinery for bending, cutting, punching, rolling and smart sheet metal production.", "Explore Products", "Request Technical Offer"],
    expertise: ["CUTRON Expertise", "A premium industrial platform for modern metal fabrication.", "CUTRON is positioned as a high-end sheet metal technology brand: clean system selection, serious engineering support and production architecture built for long-term credibility."],
    stats: [["8", "System families"], ["60kW", "Laser power class"], ["EU-style", "Support model"], ["Smart", "Automation path"]],
    productIntro: ["Products", "Premium machinery portfolio", "A HARSLE-style product architecture rebuilt for CUTRON: broader equipment coverage, cleaner hierarchy, darker luxury-industrial presentation."],
    why: ["Why Choose CUTRON", "Premium equipment needs premium execution.", ["Technical configuration before quotation", "Installation, training and production ramp-up", "Automation-ready layouts from day one", "UZINEX-backed service ecosystem"]],
    contentBlocks: [["Company", "Engineering authority", "A disciplined industrial brand focused on sheet metal production systems."], ["Showcase", "Production projects", "Cinematic use cases for bending, cutting and automated factory workflows."], ["Knowledge", "Technical guidance", "Clear decision support for machine families, options and automation."], ["Careers", "Industrial talent", "A premium engineering culture for precise production outcomes."]],
    service: ["Best Service", "From consultation to lifecycle support.", [["Expert consulting", "Machine families are selected around material, parts and output."], ["Investment clarity", "Premium positioning without cheap catalogue language."], ["Local support path", "Installation, operator training and technical service."], ["Fast response", "Structured communication from offer to commissioning."]]],
    footerTitle: "Build a premium metal fabrication system with CUTRON."
  },
  ro: {
    top: ["Sisteme premium pentru tabla", "Powered by UZINEX", "Consultanta tehnica"],
    quote: "Oferta acum",
    hero: ["MASTER PRECISION METAL FORMING", "Utilaje premium in stil european pentru indoire, debitare, stantare, roluit si productie smart sheet metal.", "Exploreaza produsele", "Solicita oferta tehnica"],
    expertise: ["Expertiza CUTRON", "O platforma industriala premium pentru fabricatie metalica moderna.", "CUTRON este pozitionat ca brand high-end de tehnologie sheet metal: selectie curata de sisteme, suport ingineresc serios si arhitectura de productie credibila pe termen lung."],
    stats: [["8", "Familii sisteme"], ["60kW", "Clasa putere laser"], ["Stil EU", "Model suport"], ["Smart", "Traseu automatizare"]],
    productIntro: ["Produse", "Portofoliu premium de utilaje", "Arhitectura de produse in stil HARSLE, reconstruita pentru CUTRON: acoperire mai larga, ierarhie clara si prezentare luxury-industrial."],
    why: ["De ce CUTRON", "Echipamentele premium au nevoie de executie premium.", ["Configurare tehnica inainte de oferta", "Instalare, training si ramp-up productie", "Layout-uri pregatite pentru automatizare", "Ecosistem service sustinut de UZINEX"]],
    contentBlocks: [["Companie", "Autoritate inginereasca", "Brand industrial disciplinat, concentrat pe sisteme de productie sheet metal."], ["Showcase", "Proiecte de productie", "Use case-uri cinematice pentru indoire, debitare si workflow-uri automate."], ["Knowledge", "Ghidaj tehnic", "Suport clar pentru alegerea familiilor de masini, optiuni si automatizare."], ["Cariere", "Talent industrial", "Cultura engineering premium pentru rezultate precise de productie."]],
    service: ["Best Service", "De la consultanta la suport lifecycle.", [["Consultanta experta", "Familiile de masini sunt selectate dupa material, piese si output."], ["Claritate investitie", "Pozitionare premium fara limbaj de catalog ieftin."], ["Suport local", "Instalare, training operatori si service tehnic."], ["Raspuns rapid", "Comunicare structurata de la oferta la commissioning."]]],
    footerTitle: "Construieste un sistem premium de fabricatie metalica cu CUTRON."
  }
};

export function getStructure() {
  const text = localized[currentLanguage] || localized.en;
  const visuals = {
    press: "brake",
    shearing: "panel",
    hydraulic: "factory",
    punching: "laser",
    laser: "laser",
    rolling: "panel",
    grooving: "weld",
    "panel-bender": "robot"
  };
  return {
    ...text,
    products: catalog.map(([id, title, href, icon, text, specs]) => ({ id, title, href, icon, text, specs: specs.split(" / "), visual: visuals[id] })),
    projects: [
      ["Precision Bending Cell", assets.hero, "Robotic-ready press brake workflow for premium production."],
      ["Laser Fabrication Line", assets.ecosystem, "Automated cutting, loading and part handling in one clean flow."],
      ["Smart Factory Program", assets.smartFactory, "Connected storage, routing, bending and welding architecture."]
    ]
  };
}
