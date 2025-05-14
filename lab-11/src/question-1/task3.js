import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

fs.writeFile(
  path.join(__dirname, "output.txt"),
  "This file was created using Node.js"
)
  .then(() => {
    console.log("Successfully created output.txt");
  })
  .catch((err) => {
    console.error("Error creating output.txt:", err);
  });
