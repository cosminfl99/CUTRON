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
    hero: ["MASTER PRECISION METAL FORMING", "Premium sheet metal machinery specified with senior production know-how, automation logic and lifecycle technical support.", "Explore Products", "Request Technical Offer"],
    heroButtons: ["View More", "Quote Now"],
    heroSignal: ["Senior industry know-how", "Industry 4.0 ready", "Commissioning and training", "Production references"],
    expertise: ["CUTRON Expertise", "A premium industrial platform built around real fabrication discipline.", "CUTRON systems are configured with input from senior sheet-metal specialists, commissioning engineers and production consultants with decades of field experience. The focus is practical: correct machine selection, stable production parameters, clean integration and long-term service continuity."],
    stats: [["8", "System families"], ["60kW", "Laser power class"], ["4.0", "Integration ready"], ["30+", "Years field know-how"]],
    authority: ["Engineering Credibility", "Built with practical production expertise behind the brand.", "CUTRON is not positioned as a commodity catalogue. Each solution is specified around materials, part families, throughput targets, operator workflow and future automation, so the investment makes technical sense before it becomes a quotation.", [["Application first", "Bending, cutting, punching, rolling and automation layouts are matched to the user's production reality."], ["Senior expertise", "System logic is shaped with specialists who understand commissioning, tolerances, tooling and production ramp-up."], ["Premium sourcing logic", "Controls, hydraulics, drives, optics and safety architecture are selected for reliability and supportability."]]],
    technology: ["Technology Platform", "Sheet metal systems prepared for Industry 4.0 production.", "CUTRON focuses on connected machinery: CNC process control, repeatable forming, automated material handling, nesting workflows, remote diagnostics and production data visibility.", [["CNC control architecture", "Stable programs, operator guidance and repeatable machine setup."], ["Automation-ready layouts", "Loading, unloading, robotic bending and smart factory expansion planned from day one."], ["Quality and testing", "Factory acceptance logic, commissioning checklists and operator training before handover."], ["Service ecosystem", "Technical consulting, installation, spare parts planning and lifecycle support through the UZINEX network."]]],
    reach: ["Reference Applications", "Technology prepared for international production environments.", "CUTRON presents machinery for companies building export-ready production: metal furniture, electrical cabinets, HVAC, elevators, agricultural equipment, automotive suppliers and general sheet metal fabrication.", [["Romania", "Local technical support, installation planning and production ramp-up."], ["Central Europe", "Bending, laser cutting and panel processing workflows for export-oriented factories."], ["Middle East", "High-duty forming and fabrication systems for construction and infrastructure suppliers."], ["North Africa", "Robust sheet metal lines for workshops scaling from standalone machines to integrated cells."]]],
    productIntro: ["Products", "Premium machinery portfolio", "A complete sheet metal equipment structure for bending, cutting, punching, forming, rolling and automation, presented through a cleaner luxury-industrial CUTRON identity."],
    why: ["Why Choose CUTRON", "Premium equipment needs premium execution.", ["Technical configuration before quotation", "Installation, training and production ramp-up", "Automation-ready layouts from day one", "UZINEX-backed service ecosystem"]],
    contentBlocks: [["Company", "Engineering authority", "A disciplined industrial brand focused on sheet metal production systems."], ["Showcase", "Production projects", "Use cases for bending, cutting and automated factory workflows."], ["Knowledge", "Technical guidance", "Clear decision support for machine families, options and automation."], ["Careers", "Industrial talent", "A premium engineering culture for precise production outcomes."]],
    service: ["Technical Service", "From consultation to lifecycle support.", [["Expert consulting", "Machine families are selected around material, parts and output."], ["Investment clarity", "Premium positioning without cheap catalogue language."], ["Local support path", "Installation, operator training and technical service."], ["Fast response", "Structured communication from offer to commissioning."]]],
    footerTitle: "Build a premium metal fabrication system with CUTRON."
  },
  ro: {
    top: ["Sisteme premium pentru tabla", "Powered by UZINEX", "Consultanta tehnica"],
    quote: "Oferta acum",
    hero: ["MASTER PRECISION METAL FORMING", "Utilaje premium pentru sheet metal, configurate cu expertiza practica de productie, logica de automatizare si suport tehnic pe termen lung.", "Exploreaza produsele", "Solicita oferta tehnica"],
    heroButtons: ["Vezi mai mult", "Oferta acum"],
    heroSignal: ["Know-how industrial senior", "Pregatit pentru Industry 4.0", "Commissioning si training", "Aplicatii internationale"],
    expertise: ["Expertiza CUTRON", "O platforma industriala premium construita pe disciplina reala de fabricatie.", "Sistemele CUTRON sunt configurate cu input de la specialisti seniori in sheet metal, ingineri de commissioning si consultanti de productie cu experienta de decenii in piata. Accentul este practic: alegere corecta de utilaj, parametri stabili, integrare curata si continuitate de service."],
    stats: [["8", "Familii sisteme"], ["60kW", "Clasa putere laser"], ["4.0", "Integrare pregatita"], ["30+", "Ani know-how in piata"]],
    authority: ["Credibilitate inginereasca", "In spatele brandului exista expertiza practica de productie.", "CUTRON nu este pozitionat ca un catalog de utilaje standard. Fiecare solutie este configurata in functie de materiale, familii de piese, target de productie, flux operator si automatizare viitoare, astfel incat investitia sa fie corecta tehnic inainte sa devina oferta.", [["Aplicatie inainte de utilaj", "Indoirea, debitarea, stantarea, roluitul si automatizarea sunt alese dupa realitatea fabricii."], ["Expertiza senior", "Logica sistemelor este construita cu oameni care inteleg commissioning, tolerante, scule si ramp-up de productie."], ["Selectie premium", "Controlere, hidraulica, drive-uri, optica si siguranta sunt gandite pentru fiabilitate si service pe termen lung."]]],
    technology: ["Platforma tehnologica", "Sisteme sheet metal pregatite pentru productie Industry 4.0.", "CUTRON se concentreaza pe utilaje conectate: control CNC, repetabilitate, handling automatizat de tabla, nesting, diagnoza remote si vizibilitate asupra datelor de productie.", [["Arhitectura CNC", "Programe stabile, ghidaj pentru operator si setup repetabil al masinii."], ["Layout-uri automation-ready", "Incarcare, descarcare, indoire robotizata si extindere smart factory planificate din prima faza."], ["Testare si calitate", "Logica de acceptanta, checklist-uri de commissioning si training operatori inainte de predare."], ["Ecosistem service", "Consultanta tehnica, instalare, plan de piese si suport lifecycle prin reteaua UZINEX."]]],
    reach: ["Aplicatii de referinta", "Tehnologie pregatita pentru medii internationale de productie.", "CUTRON prezinta utilaje pentru companii orientate spre productie export-ready: mobilier metalic, tablouri electrice, HVAC, lifturi, utilaje agricole, furnizori automotive si fabricatie generala sheet metal.", [["Romania", "Suport tehnic local, plan de instalare si ramp-up de productie."], ["Europa Centrala", "Fluxuri de indoire, laser cutting si panel processing pentru fabrici orientate spre export."], ["Orientul Mijlociu", "Sisteme de formare si fabricatie high-duty pentru constructii si infrastructura."], ["Africa de Nord", "Linii robuste pentru ateliere care cresc de la utilaje standalone la celule integrate."]]],
    productIntro: ["Produse", "Portofoliu premium de utilaje", "O structura completa de echipamente sheet metal pentru indoire, debitare, stantare, formare, roluit si automatizare, prezentata intr-o identitate CUTRON luxury-industrial."],
    why: ["De ce CUTRON", "Echipamentele premium au nevoie de executie premium.", ["Configurare tehnica inainte de oferta", "Instalare, training si ramp-up productie", "Layout-uri pregatite pentru automatizare", "Ecosistem service sustinut de UZINEX"]],
    contentBlocks: [["Companie", "Autoritate inginereasca", "Brand industrial disciplinat, concentrat pe sisteme de productie sheet metal."], ["Showcase", "Proiecte de productie", "Use case-uri pentru indoire, debitare si workflow-uri automate."], ["Knowledge", "Ghidaj tehnic", "Suport clar pentru alegerea familiilor de masini, optiuni si automatizare."], ["Cariere", "Talent industrial", "Cultura engineering premium pentru rezultate precise de productie."]],
    service: ["Service tehnic", "De la consultanta la suport lifecycle.", [["Consultanta experta", "Familiile de masini sunt selectate dupa material, piese si output."], ["Claritate investitie", "Pozitionare premium fara limbaj de catalog ieftin."], ["Suport local", "Instalare, training operatori si service tehnic."], ["Raspuns rapid", "Comunicare structurata de la oferta la commissioning."]]],
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
