import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "firstNumber" },
  { message: "Enter Second Number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operator to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// Conditional Statements
if (answer.operator === "Addition") {
  console.log("Your Value Is =");
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
  console.log("Your Value Is =");
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Multiplication") {
  console.log("Your Value Is =");
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
  console.log("Your Value Is =");
  console.log(answer.firstNumber / answer.secondNumber);
}
