#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstnumber" },
    { message: "enter first number", type: "number", name: "secondnumber" },
    {
        message: "chosse the operation you want to perform",
        type: "list",
        name: "operators",
        choices: ["multiplication", "division", "addition", "subtraction"],
    },
]);
if (answer.operators === "addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operators === "subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operators === "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operators === "division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("enter valid operator");
}
console.log("the end");
