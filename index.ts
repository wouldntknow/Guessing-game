#! /usr/bin/env node
import inquirer from "inquirer";
const randomNum =  Math.floor(Math.random()*10+1) //will generate numbers from 1-10
const result = await inquirer.prompt([
    { message: "Guess a number between 1-10", type: "number", name: "userNumber"},]);
    
if(result.userNumber === randomNum)
{
    console.log("Congratulations, you've guessed the right number!")
}
else {
    console.log("Game failed.Try again!")
}
