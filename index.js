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
    'How much do you know about mobiles? \n'
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

await welcome(); //supports top-level await in node14+



