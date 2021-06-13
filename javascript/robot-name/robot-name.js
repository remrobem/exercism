'use strict';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export class Robot {
  constructor() {
    [this._name, Robot.usedNames] = Robot.generateRandomRobotName(
      Robot.usedNames
    );
  }

  static usedNames = [];

  static generateRandomLetter = () => {
    return ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
  };

  static generateRandomNumberString = () => {
    // force to string and add trailing zeros
    const randomNumberString = Math.floor(Math.random() * 1000).toString();
    return Robot.addTrailingZeros(randomNumberString);
  };

  static addTrailingZeros = (number) => {
    if (number.length === 1) return number + '00';
    if (number.length === 2) return number + '0';
    return number;
  };

  static generateRandomRobotName = () => {
    const name =
      Robot.generateRandomLetter() +
      Robot.generateRandomLetter() +
      Robot.generateRandomNumberString();
    // get another random name if it already exists
    if (Robot.usedNames.includes(name)) {
      return Robot.generateRandomRobotName();
    }
    Robot.usedNames.push(name);
    return [name, Robot.usedNames];
  };

  get name() {
    return this._name;
  }

  set name(_) {
    throw new Error('Changing name not allowed');
  }

  reset() {
    [this._name, Robot.usedNames] = Robot.generateRandomRobotName(
      Robot.usedNames
    );
  }
}

Robot.releaseNames = () => {
  Robot.usedNames = [];
};
