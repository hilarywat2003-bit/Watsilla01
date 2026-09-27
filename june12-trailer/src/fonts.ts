import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";

// Courier Prime (SIL Open Font License), bundled in public/fonts so renders work offline.
export const fontFamily = "Courier Prime";

const faces = [
  { file: "CourierPrime-Regular.woff2", weight: "400", style: "normal" },
  { file: "CourierPrime-Bold.woff2", weight: "700", style: "normal" },
  { file: "CourierPrime-Italic.woff2", weight: "400", style: "italic" },
  { file: "CourierPrime-BoldItalic.woff2", weight: "700", style: "italic" },
];

for (const face of faces) {
  loadFont({
    family: fontFamily,
    url: staticFile(`fonts/${face.file}`),
    weight: face.weight,
    style: face.style,
  });
}
