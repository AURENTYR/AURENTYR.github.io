import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { Resvg } from "@resvg/resvg-js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const svg = readFileSync(resolve(root, "public/og-image.svg"), "utf8");
const resvg = new Resvg(svg, {
  fitTo: { mode: "width", value: 1200 },
  font: { loadSystemFonts: false },
});
const pngData = resvg.render();
const pngBuffer = pngData.asPng();

writeFileSync(resolve(root, "public/og-image.png"), pngBuffer);
console.log(`og-image.png written (${pngBuffer.byteLength} bytes)`);
