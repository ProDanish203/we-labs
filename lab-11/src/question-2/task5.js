import os from "os";
import readline from "readline";

console.log("System Information:");
console.log(`Platform: ${os.platform()}`);
console.log(`Architecture: ${os.arch()}`);
console.log(
  `Total Memory: ${(os.totalmem() / (1024 * 1024 * 1024)).toFixed(2)} GB`
);
console.log(
  `Free Memory: ${(os.freemem() / (1024 * 1024 * 1024)).toFixed(2)} GB`
);
console.log(`CPU Cores: ${os.cpus().length}`);
console.log(`Hostname: ${os.hostname()}`);
console.log(`Home Directory: ${os.homedir()}`);
console.log(`OS Type: ${os.type()}`);
console.log(`OS Release: ${os.release()}`);
console.log(`OS Uptime: ${(os.uptime() / 3600).toFixed(2)} hours`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) => {
  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      resolve(answer);
    });
  });
};

const main = async () => {
  console.log("\n--- User Interaction ---");

  try {
    const name = await askQuestion("What is your name? ");
    console.log(`Hello, ${name}! Nice to meet you.`);
  } catch (error) {
    console.error("Error during user interaction:", error);
  } finally {
    rl.close();
  }
};

main();

rl.on("close", () => {
  console.log("\nUser interaction completed. Goodbye!");
});
