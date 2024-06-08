#! /usr/bin/env node
import inquirer from "inquirer";

//  const randomNumber = Math.random();        //will generate random numbers between 0 and 1
const randomNumber=Math.floor(Math.random() *10)    //will give least rounding value (0.9876 = 0)  (*10 shows that it will show random numbers till 9 (0-9)) (if we want number to start from 1 we will add 1 after 10 (10+1))
// // const randomNumber=Math.floor(Math.random()*6 +1)     //it will work like a dice
// console.log(randomNumber)
const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "please guess a number between 1 and 10: ",
  },
]);

if (answers.userGuessedNumber === randomNumber) {
  console.log("Congratulations!!You guessed right number");
} else {
  console.log("Wrong Guess!!Try Again");
}
