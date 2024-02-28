#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';

import { createSpinner } from 'nanospinner';

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    'Which Mobile OS is your favourite? \n'
  ); 

  await sleep();
  rainbowTitle.stop();

  console.log(`
    ${chalk.blue('HOW TO PLAY?\n')}
    I am your game wizard sitting inside the computer.
    If you get any question wrong I will be ${chalk.bgRed('killed')}
    So get all the questions right...
  `);
}


async function askName(){
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What is your name?',
        default(){
            return 'Player';
        },
    });

    playerName = answers.player_name;
}



async function qsn1(){
    const answers = await inquirer.prompt({
        name: 'qsn1',
        type: 'list',
        message: 'Do you prefer customization over fucntionality ?',
        choices: ['YES', 'NO', 'IDK'],
    });

    return handleAnswer(answers.qsn1);
}

async function qsn2(){
    const answers = await inquirer.prompt({
        name: 'qsn2',
        type: 'list',
        message: 'Do you prefer a closed ecosystem?',
        choices: ['YES', 'NO', 'IDK'],
    });

    return handleAnswer(answers.qsn2);
}

async function handleAnswer(answer){
    const spinner = createSpinner('Checking answer...').start();
    await sleep();

    if(answer === 'NO'){
        spinner.error({text: `💀💀💀 Game Over, you lose ${playerName}!`});
        process.exit(1);
    } else {
        spinner.success({text: `Nice work ${playerName}. That's a correct answer`});
    }
}

function winner(){
    console.clear();
    const msg = `Congrats , ${playerName} !\n $ 1 , 0 0 0 , 0 0 0`;

    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data));
    });
}

await welcome(); //supports top-level await in node14+
await askName();
await qsn1();
await qsn2();
winner();