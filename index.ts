#!/usr/bin/env node

import inquirer from "inquirer";

const answers: { sentence: string } = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the words: "
    }
]);

const trimmed = answers.sentence.trim();
const words = trimmed.length === 0 ? [] : trimmed.split(/\s+/);

console.log(words);
console.log(`Your sentence word count is ${words.length}`);