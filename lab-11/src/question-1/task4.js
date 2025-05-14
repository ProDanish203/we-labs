import { argv } from "process";

function calculator() {
  const args = argv.slice(2);

  if (args.length !== 3) {
    console.log("Usage: node index.js <number1> <operation> <number2>");
    console.log("Operations: add, subtract, multiply, divide");
    console.log("Example: node index.js 5 add 3");
    return;
  }

  const num1 = parseFloat(args[0]);
  const operation = args[1].toLowerCase();
  const num2 = parseFloat(args[2]);

  if (isNaN(num1) || isNaN(num2)) {
    console.log("Error: Both inputs must be valid numbers");
    return;
  }

  let result;
  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 === 0) {
        console.log("Error: Division by zero is not allowed");
        return;
      }
      result = num1 / num2;
      break;
    default:
      console.log(
        "Error: Invalid operation. Use add, subtract, multiply, or divide"
      );
      return;
  }

  console.log(`Result: ${num1} ${operation} ${num2} = ${result}`);
}

calculator();
