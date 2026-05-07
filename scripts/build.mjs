import { cp, mkdir, rm } from "node:fs/promises";

const entries = [
  "about.html",
  "automation.html",
  "company.html",
  "contact.html",
  "hydraulic-press.html",
  "index.html",
  "laser-cutting.html",
  "panel-bender.html",
  "press-brake.html",
  "products.html",
  "punching-machine.html",
  "robots.txt",
  "rolling-machine.html",
  "service-support.html",
  "shearing-machine.html",
  "showcase.html",
  "smart-factory.html",
  "support.html",
  "v-grooving-machine.html",
  "src",
  "public"
];

await rm("dist", { recursive: true, force: true });
await mkdir("dist", { recursive: true });

for (const entry of entries) {
  await cp(entry, `dist/${entry}`, { recursive: true });
}
