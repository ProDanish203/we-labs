let count = 0;
const maxCount = 5;

const intervalId = setInterval(() => {
  count++;
  console.log(`Running... (${count}/${maxCount})`);

  if (count >= maxCount) {
    clearInterval(intervalId);
    console.log("Interval task completed after 10 seconds");
  }
}, 2000);

console.log("Interval set. Will run for 10 seconds...");
