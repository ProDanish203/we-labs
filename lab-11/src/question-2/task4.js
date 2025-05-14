import { add, subtract, multiply, divide } from "./math.js";

const num1 = 10;
const num2 = 5;

console.log(`Addition: ${num1} + ${num2} = ${add(num1, num2)}`);
console.log(`Subtraction: ${num1} - ${num2} = ${subtract(num1, num2)}`);
console.log(`Multiplication: ${num1} × ${num2} = ${multiply(num1, num2)}`);
console.log(`Division: ${num1} ÷ ${num2} = ${divide(num1, num2)}`);

const num3 = 7;
const num4 = 3;
console.log(`\nUsing different numbers: ${num3} and ${num4}`);
console.log(`Addition: ${num3} + ${num4} = ${add(num3, num4)}`);
console.log(`Subtraction: ${num3} - ${num4} = ${subtract(num3, num4)}`);
console.log(`Multiplication: ${num3} × ${num4} = ${multiply(num3, num4)}`);
console.log(`Division: ${num3} ÷ ${num4} = ${divide(num3, num4)}`);

try {
  console.log("\nTrying division by zero:");
  const result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.error(`Error caught: ${error.message}`);
}
