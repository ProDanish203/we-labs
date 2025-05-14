import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const handleError = (operation, error) => {
  console.error(`Error during ${operation}:`, error);
};

const appendToFile = async () => {
  try {
    console.log("1. Appending content to output.txt");
    await fs.appendFile("output.txt", "\nAppended content");
    console.log("Successfully appended text to output.txt");
  } catch (error) {
    handleError("appending to file", error);
  }
};

const renameFile = async () => {
  try {
    console.log("2. Renaming oldname.txt to newname.txt");
    try {
      await fs.access("oldname.txt");
    } catch {
      await fs.writeFile("oldname.txt", "This file will be renamed");
      console.log("Created oldname.txt since it did not exist");
    }

    await fs.rename("oldname.txt", "newname.txt");
    console.log("Successfully renamed file from oldname.txt to newname.txt");
  } catch (error) {
    handleError("renaming file", error);
  }
};

const deleteFile = async () => {
  try {
    console.log("3. Deleting unwanted.txt");
    try {
      await fs.access("unwanted.txt");
    } catch {
      await fs.writeFile("unwanted.txt", "This file will be deleted");
      console.log("Created unwanted.txt since it did not exist");
    }

    await fs.unlink("unwanted.txt");
    console.log("Successfully deleted unwanted.txt");
  } catch (error) {
    handleError("deleting file", error);
  }
};

const createDirectory = async () => {
  try {
    console.log("4. Creating directory myFolder");
    await fs.mkdir("myFolder", { recursive: true });
    console.log("Successfully created directory myFolder");
  } catch (error) {
    handleError("creating directory", error);
  }
};

const listFiles = async () => {
  try {
    console.log("5. Listing files in myFolder");
    try {
      await fs.writeFile("myFolder/sample.txt", "This is a sample file");
    } catch {
      console.log("Could not create sample file in myFolder");
    }

    const files = await fs.readdir("myFolder");
    console.log("Files in myFolder:");
    files.forEach((file) => {
      console.log(`- ${file}`);
    });
  } catch (error) {
    handleError("listing files", error);
  }
};

const runAll = async () => {
  await appendToFile();
  await renameFile();
  await deleteFile();
  await createDirectory();
  await listFiles();
  console.log("All file operations completed");
};

runAll();
