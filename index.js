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
    Answer the questions with atmost ${chalk.cyan('Honesty')}🕊️
    (Don't answer IDK)
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
        message: 'Do you prefer functionality over customization ?',
        choices: ['YES', 'NO', 'IDK'],
    });

    return handleAnswer1(answers.qsn1);
}

async function handleAnswer1(answer){
    const spinner = createSpinner('Checking answer...').start();
    await sleep();

    if(answer === 'YES'){
        spinner.error({text: `💀💀💀  Okay, ${playerName}!\n`});
    } else if(answer === 'IDK'){
        spinner.error({text: `🤦🤦🤦  I got killed by ${playerName}! 🥲\n`})
        process.exit(1);
    }
    else {
        spinner.success({text: `🤩🤩🤩 Keep moving ${playerName}.\n`});
    }
}

async function qsn2(){
    const answers = await inquirer.prompt({
        name: 'qsn2',
        type: 'list',
        message: 'DO you like to be in a closed ecosystem?',
        choices: ['I\'D LOVE TO', 'NAHH', 'IDK'],
    });
    
    return handleAnswer2(answers.qsn2);
}
async function handleAnswer2(answer){
    const spinner = createSpinner('Checking answer...').start();
    await sleep();

    if(answer === 'I\'D LOVE TO'){
        spinner.error({text: `🤖🤖🤖  Really?! You are an idiot!\n`});
    }  else if(answer === 'IDK'){
        spinner.error({text: `🤦🤦🤦  I got killed by ${playerName}! 🥲\n`})
        process.exit(1);
    }else {
        spinner.success({text: `🙌🙌🙌 Good choice ${playerName}.\n`});
    }
}

async function qsn3(){
    const answers = await inquirer.prompt({
        name: 'qsn3',
        type: 'list',
        message: 'Do you give a damn about privacy?',
        choices: ['YEAH', 'NOT REALLY', 'IDK'],
    });

    return handleAnswer3(answers.qsn3);
}

async function handleAnswer3(answer){
    const spinner = createSpinner('Checking answer...').start();
    await sleep();

    if(answer === 'YEAH'){
        spinner.error({text: `😶‍🌫️😶‍🌫️😶‍🌫️  No one gives a damn about your privacy ${playerName}!\n`});
    } else if(answer === 'IDK'){
        spinner.error({text: `🤦🤦🤦  I got killed by ${playerName}! 🥲\n`})
        process.exit(1);
    } else {
        spinner.success({text: `🫡🫡🫡  A warrior aka ${playerName}.\n`});
    }
}

async function qsn4(){
    const answers = await inquirer.prompt({
        name: 'qsn4',
        type: 'list',
        message: 'Do you like mocking others?',
        choices: ['YES', 'DON\'T PREFER TO', 'IDK'],
    });

    return handleAnswer4(answers.qsn4);
}

async function handleAnswer4(answer){
    const spinner = createSpinner('Checking answer...').start();
    await sleep();

    if(answer === 'YES'){
        spinner.error({text: `💀💀💀  Just die you..*****!\n`});
    } else if(answer === 'IDK'){
        spinner.error({text: `🤦🤦🤦  I got killed by ${playerName}! 🥲\n`})
        process.exit(1);
    } else {
        spinner.success({text: `👍👍👍 It's your choice ${playerName}.\n`});
    }
}

async function qsn5(){
    const answers = await inquirer.prompt({
        name: 'qsn5',
        type: 'list',
        message: 'Do you prefer an apple over banana?',
        choices: ['YES', 'NO', 'IDK'],
    });

    return handleAnswer5(answers.qsn5);
}

async function handleAnswer5(answer){
    const spinner = createSpinner('Checking answer...').start();
    await sleep();

    if(answer === 'YES'){
        spinner.error({text: `🍎🍎🍎 You are an Apple fanboy, ${playerName}!\n`});
    }  else if(answer === 'IDK'){
        spinner.error({text: `🤦🤦🤦  I got killed by ${playerName}! 🥲\n`})
        process.exit(1);
    }else {
        spinner.success({text: `📱📱📱 You are an Android fanboy, ${playerName}.\n`});
    }
}

function winner(){
    console.clear();
    const msg = `Go and Study, you stupid !\n`;

    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data));
    });
}

await welcome(); //supports top-level await in node14+
await askName();
await qsn1();
await qsn2();
await qsn3();
await qsn4();
await qsn5();
await sleep(2000);
winner();