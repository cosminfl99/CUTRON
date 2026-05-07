export const assets = {
  logoDark: "public/assets/cutron-logo-dark.webp",
  logoLight: "public/assets/cutron-logo-light.webp",
  mark: "public/assets/cutron-mark.webp",
  hero: "public/assets/hero-industrial.webp",
  ecosystem: "public/assets/ecosystem-line.webp",
  smartFactory: "public/assets/smart-factory.webp"
};

export const nav = [
  { label: "Home", href: "index.html" },
  { label: "Products", href: "products.html", mega: true },
  { label: "Laser Cutting", href: "laser-cutting.html" },
  { label: "Press Brake", href: "press-brake.html" },
  { label: "Automation", href: "automation.html" },
  { label: "Smart Factory", href: "smart-factory.html" },
  { label: "Service", href: "service-support.html" },
  { label: "About", href: "about.html" },
  { label: "Contact", href: "contact.html" }
];

export const megaMenu = [
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
];

export const products = [
  {
    id: "fiber-laser",
    title: "Fiber Laser Systems",
    href: "laser-cutting.html",
    icon: "laser",
    visual: "laser",
    text: "High-power laser platforms engineered for precision sheet metal production, clean nesting workflows and automation-ready throughput.",
    specs: ["Up to 60 kW", "Linear drive options", "Tower integration"]
  },
  {
    id: "press-brake",
    title: "Press Brake Systems",
    href: "press-brake.html",
    icon: "bend",
    visual: "brake",
    text: "Precision bending systems with refined control, tooling strategy, angle consistency and scalable robotic loading options.",
    specs: ["CNC crowning", "Angle control", "Robotic ready"]
  },
  {
    id: "panel-bending",
    title: "CNC Panel Bending",
    href: "products.html#panel-bending",
    icon: "panel",
    visual: "panel",
    text: "Automated panel bending for repeatable production, reduced handling and clean part flow from flat sheet to finished profile.",
    specs: ["Flexible tooling", "Low handling", "Series production"]
  },
  {
    id: "robotic-cells",
    title: "Robotic Cells",
    href: "automation.html",
    icon: "robot",
    visual: "robot",
    text: "Integrated robotic cells for bending, welding, sorting and machine tending, configured around real production constraints.",
    specs: ["Cell design", "Safety systems", "Line integration"]
  },
  {
    id: "laser-welding",
    title: "Laser Welding",
    href: "automation.html#welding",
    icon: "weld",
    visual: "weld",
    text: "Laser welding solutions for refined seams, repeatable energy control and flexible metal assemblies.",
    specs: ["Clean seams", "Process control", "Fixture design"]
  },
  {
    id: "factory-automation",
    title: "Factory Automation",
    href: "smart-factory.html",
    icon: "network",
    visual: "factory",
    text: "From standalone machines to complete production ecosystems with loading, unloading, storage and digital workflow.",
    specs: ["Storage towers", "Material flow", "Digital routing"]
  }
];

export const performance = [
  ["Up to 60kW", "Laser power platforms for high-performance cutting environments."],
  ["Smart Automation", "Robotic handling, storage, loading and unloading systems."],
  ["Local Technical Support", "UZINEX-backed consulting, installation and service ecosystem."],
  ["Installation & Training", "Commissioning, operator handover and production ramp-up."],
  ["Configurable Systems", "Technology configured around material, thickness, parts and workflow."],
  ["Production Efficiency", "End-to-end process thinking, not isolated machine selling."]
];

export const why = [
  ["Premium engineering", "Industrial systems selected and configured for precision, output and long-term credibility."],
  ["Industrial integration", "Machines, automation and workflow designed as one production architecture."],
  ["European-style support", "Consulting, commissioning, training and service carried through the UZINEX ecosystem."],
  ["Automation expertise", "Robotic cells, sheet handling and digital routing adapted to real factory operations."],
  ["Technical consulting", "Short, precise recommendations based on parts, materials, thickness and production targets."],
  ["Service ecosystem", "Support beyond delivery: installation, training, maintenance and future expansion."]
];

export const caseStudies = [
  {
    title: "Laser Fabrication Plant",
    image: assets.ecosystem,
    tag: "High-throughput cutting",
    text: "A complete laser fabrication workflow with automated loading, material routing and finished part handling."
  },
  {
    title: "Robotic Bending Cell",
    image: assets.hero,
    tag: "Repeatable forming",
    text: "Robotic press brake architecture for consistent bending cycles and reduced manual handling."
  },
  {
    title: "Automated Sheet Metal Workflow",
    image: assets.smartFactory,
    tag: "Smart factory integration",
    text: "Connected storage, cutting, forming and welding cells configured as one production ecosystem."
  }
];

export const pages = {
  products: {
    title: "Premium Sheet Metal Systems",
    label: "Product ecosystem",
    intro: "CUTRON brings laser cutting, bending, welding and automation into one refined industrial portfolio.",
    image: assets.ecosystem,
    sections: [
      ["Configured production", "Every system starts with materials, part geometry, throughput and operator reality."],
      ["Integrated architecture", "Machines can operate standalone or connect into a complete production ecosystem."],
      ["Technical continuity", "Consulting, installation, training and support stay connected through UZINEX."]
    ]
  },
  laser: {
    title: "Fiber Laser Cutting Systems",
    label: "Laser cutting",
    intro: "Premium fiber laser platforms for modern metal fabrication, high-power cutting and automation-ready production.",
    image: assets.hero,
    icon: "laser",
    pillars: [
      ["Power range", "Configured up to 60 kW for productivity, thickness range and plant-level output targets."],
      ["Cutting quality", "Clean edges, controlled piercing, refined gas strategy and stable high-speed processing."],
      ["Automation path", "Loading, unloading, storage towers and finished part handling can be added as capacity grows."]
    ],
    matrix: [
      ["Applications", "Steel, stainless steel, aluminum, galvanized sheet, structural panels"],
      ["Workflow", "Nesting, cutting, sorting, storage and digital job routing"],
      ["Options", "Linear drives, bevel cutting, pipe modules, sheet towers"],
      ["Support", "Installation, parameter handover, operator training, preventive maintenance"]
    ]
  },
  press: {
    title: "Press Brake Systems",
    label: "Precision bending",
    intro: "Bending systems engineered for control, repeatability, tooling strategy and scalable robotic integration.",
    image: assets.ecosystem,
    icon: "bend",
    pillars: [
      ["Bending accuracy", "CNC crowning, refined control architecture and consistent part geometry."],
      ["Operator flow", "Intuitive control, tooling organization and safer handling for daily production."],
      ["Robotic ready", "Cells can be configured for bending automation, gripper design and repeatable part loading."]
    ],
    matrix: [
      ["Applications", "Cabinets, enclosures, HVAC, construction parts, custom fabrication"],
      ["Workflow", "Offline preparation, tooling setup, bending, inspection"],
      ["Options", "Angle measurement, tool cabinets, robotic cells, sheet followers"],
      ["Support", "Tooling consultation, installation, training and maintenance planning"]
    ]
  },
  automation: {
    title: "Automation & Robotic Cells",
    label: "Industrial automation",
    intro: "Precision-built automation systems for handling, bending, welding, sorting and complete machine tending.",
    image: assets.smartFactory,
    icon: "robot",
    pillars: [
      ["Robotic bending", "Cells engineered around part family, cycle time, gripper design and safety concept."],
      ["Laser welding", "Repeatable process control for clean assemblies and flexible metal fabrication."],
      ["Material handling", "Loading, unloading, sorting and routing systems that remove production friction."]
    ],
    matrix: [
      ["Cell types", "Bending, welding, cutting support, machine tending, palletizing"],
      ["Integration", "Machine interface, safety, fixtures, conveyors, storage"],
      ["Scalability", "Standalone cells or connected factory-level automation"],
      ["Support", "Simulation, installation, operator training and process refinement"]
    ]
  },
  smart: {
    title: "Smart Factory Integration",
    label: "Connected production",
    intro: "From standalone machines to complete production ecosystems with automation, storage and digital workflow.",
    image: assets.smartFactory,
    icon: "network",
    pillars: [
      ["Digital workflow", "Jobs, materials and production status can move through connected machine logic."],
      ["Automated storage", "Sheet towers, buffers and loading systems reduce manual movement and waiting time."],
      ["Factory architecture", "CUTRON designs around the plant, not only the machine footprint."]
    ],
    matrix: [
      ["Core systems", "Laser, press brake, panel bending, welding, robotic handling"],
      ["Factory flow", "Storage, loading, cutting, forming, welding, inspection"],
      ["Signals", "Production data, control logic, machine readiness, route planning"],
      ["Support", "Consulting, phased deployment, training and continuous optimization"]
    ]
  },
  support: {
    title: "Service & Support",
    label: "UZINEX ecosystem",
    intro: "Technical consulting, installation, training and support designed for industrial continuity.",
    image: assets.ecosystem,
    icon: "support",
    pillars: [
      ["Consulting", "A technical offer begins with parts, material mix, throughput and production strategy."],
      ["Installation", "Commissioning, alignment, safety checks and operator handover."],
      ["Lifecycle", "Training, preventive maintenance, service planning and future system expansion."]
    ],
    matrix: [
      ["Before purchase", "Needs analysis, configuration, layout and investment logic"],
      ["During delivery", "Installation, commissioning, safety and acceptance process"],
      ["After startup", "Training, service, maintenance and technical support"],
      ["Expansion", "Automation upgrades, capacity planning and workflow refinement"]
    ]
  },
  about: {
    title: "CUTRON, Powered by UZINEX",
    label: "Industrial division",
    intro: "CUTRON is positioned as a premium industrial automation and sheet metal processing division within the UZINEX ecosystem.",
    image: assets.hero,
    icon: "shield",
    pillars: [
      ["Brand discipline", "Matte black, polished steel and restrained gold define a precise industrial identity."],
      ["Engineering authority", "The focus is technical clarity, production logic and confident system architecture."],
      ["Enterprise credibility", "CUTRON is built for manufacturers who need capable systems and accountable support."]
    ],
    matrix: [
      ["Positioning", "Premium European-style sheet metal technology"],
      ["Focus", "Laser CNC, press brake, robotic automation, welding and smart factory integration"],
      ["Signature", "Driven by Precision"],
      ["Ecosystem", "Powered by UZINEX technical and service capability"]
    ]
  }
};
