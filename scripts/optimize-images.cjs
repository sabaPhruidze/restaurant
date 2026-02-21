// scripts/optimize-images.cjs
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputDir = path.join(__dirname, "..", "src", "assets", "Img");
const outputDir = path.join(__dirname, "..", "public", "optimized");

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const allowed = [".jpg", ".jpeg", ".png"];

(async () => {
  const files = fs
    .readdirSync(inputDir)
    .filter((f) => allowed.includes(path.extname(f).toLowerCase()));

  for (const file of files) {
    const inPath = path.join(inputDir, file);
    const base = path.parse(file).name;
    const outPath = path.join(outputDir, `${base}.webp`);

    await sharp(inPath)
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 75 })
      .toFile(outPath);

    console.log(`✔ optimized: ${file} -> public/optimized/${base}.webp`);
  }

  console.log("✅ Done");
})();
