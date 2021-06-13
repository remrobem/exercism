'use strict';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const generateRandomLetter = () => {
  return alphabet[Math.floor(Math.random() * alphabet.length)];
};

const generateRandomNumberString = () => {
  // force to string and add trailing zeros
  let randomNumberString = Math.floor(Math.random() * 1000).toString();
  return addTrailingZeros(randomNumberString);
};

const addTrailingZeros = (number) => {
  if (number.length === 1) return number + '00';
  if (number.length === 2) return number + '0';
  return number;
};

const generateRandomRobotName = (usedNames) => {
  const firstLetter = generateRandomLetter();
  const secondtLetter = generateRandomLetter();
  const randomNumber = generateRandomNumberString();

  const name = firstLetter + secondtLetter + randomNumber;

  // get another random name if it already exists
  if (usedNames.includes(name)) {
    return generateRandomRobotName(usedNames);
  }

  usedNames.push(name);
  return [name, usedNames];
};

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
