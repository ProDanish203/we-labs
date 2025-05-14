import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

fs.readFile(path.join(__dirname, "data.txt"), "utf8")
  .then((data) => {
    console.log("Contents of data.txt:", data);
  })
  .catch((err) => {
    console.error("Error reading data.txt:", err);
    return fs
      .writeFile(
        path.join(__dirname, "data.txt"),
        "This is sample data for Task 2."
      )
      .then(() => {
        console.log(
          "Created data.txt with sample content since it did not exist."
        );
      })
      .catch((writeErr) => {
        console.error("Error creating data.txt:", writeErr);
      });
  });
