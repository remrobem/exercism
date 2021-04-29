//
// This is only a SKELETON file for the 'Bowling' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Bowling {
  constructor() {
    this.rolls = [];
    this.currentFrameBalls = 0;
    this.currentFramePins = 0;
    this.frameCount = 1;
    this.countExtraRolls = 0;
    this.getExtraRolls = false;
    this.isGameComplete = false;
  }

  roll(pins) {
    if (pins < 0) {
      throw new Error('Negative roll is invalid');
    }

    if (this.isGameComplete) {
      throw new Error('Cannot roll after game is over');
    }

    // count extra balls from strike or spare in 10th frame
    if (this.getExtraRolls) {
      this.countExtraRolls -= 1;
    }
    if (this.countExtraRolls < 0) {
      throw new Error('Cannot roll after game is over');
    }

    // count balls rolled and pins in the frame
    this.currentFrameBalls += 1;
    this.currentFramePins += pins;

    //can only get max of 10 pins in a frame
    if (this.currentFramePins > 10) {
      throw new Error('Pin count exceeds pins on the lane');
    }

    // allow extra rolls on strike(2) or spare(1) in 10th frame
    if (this.frameCount === 10 && this.currentFramePins === 10) {
      this.getExtraRolls = true;
      this.countExtraRolls = this.currentFrameBalls === 1 ? 2 : 1;
    }

    // check to see if this frame is a strike
    this.strike = this.currentFrameBalls === 1 && this.currentFramePins === 10;

    // reset for next frame
    if (this.currentFrameBalls === 2 || this.strike) {
      this.currentFrameBalls = 0;
      this.currentFramePins = 0;
      this.frameCount += 1;
    }

    // game over afer 10 frames and extra rolls complete
    if (this.frameCount > 10 && this.countExtraRolls === 0) {
      this.isGameComplete = true;
    }

    this.rolls.push(pins);
  }

  score() {
    if (!this.isGameComplete) {
      throw new Error('Score cannot be taken until the end of the game');
    }

    let rollsInFrame = 0;
    let sumFramePins = 0;
    let framesCompleted = 0;

    const calculateScore = (score, pins, index = 0) => {
      

      const initialize = () => {
        rollsInFrame = 0;
        sumFramePins = 0;
        framesCompleted += 1;
      }

      rollsInFrame += 1;
      sumFramePins += pins;

      // extra rolls counted in 10th frame and must not be counted again
      if (framesCompleted === 10) {
        return score
      }

      // strike
      if (rollsInFrame === 1 && pins === 10) {
        initialize();
        return (score + pins + this.rolls[index + 1] + this.rolls[index + 2]);
      }

      // spare
      if (rollsInFrame === 2 && sumFramePins === 10) {
        initialize();
        return (score + pins + this.rolls[index + 1]);
      }

      // reset rolls in frame when frame complete
      if (rollsInFrame === 2) {
        initialize();
      }

      // add pins when not a strike or spare
      return (score += pins);

    };

    const score = this.rolls.reduce(calculateScore,0);
    console.log(score);

    return score;
    // throw new Error('Remove this statement and implement this function');
  }
}
