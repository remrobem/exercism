'use strict';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function generateRandomLetter() {
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 1000);
}

function generateRandomRobotName(usedNames) {
  // get a new random name
  const firstLetter = generateRandomLetter();
  const secondtLetter = generateRandomLetter();
  const randomNumber = generateRandomNumber();
  const name = '' + firstLetter + secondtLetter + randomNumber;
  // get another random name if it already exists
  if (usedNames.includes(name)) {
    return generateRandomRobotName(usedNames);
  }

  usedNames.push(name);
  return [name, usedNames];
}

export class Robot {
  constructor() {
    this.usedNames = [];
    [this._name, this.usedNames] = generateRandomRobotName(this.usedNames);
  }

  get name() {
    return this._name;
  }

  set name(value) {
    throw new Error('Changing name not allowed');
  }

  reset() {
    [this._name, this.usedNames] = generateRandomRobotName(this.usedNames);
  }
}

Robot.releaseNames = () => {
  Robot.usedNames = [];
};
