import { cp, mkdir, rm } from "node:fs/promises";

const entries = [
  "about.html",
  "automation.html",
  "contact.html",
  "index.html",
  "laser-cutting.html",
  "press-brake.html",
  "products.html",
  "robots.txt",
  "service-support.html",
  "smart-factory.html",
  "src",
  "public"
];

await rm("dist", { recursive: true, force: true });
await mkdir("dist", { recursive: true });

for (const entry of entries) {
  await cp(entry, `dist/${entry}`, { recursive: true });
}
