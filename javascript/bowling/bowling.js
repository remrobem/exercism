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
    this.strike = false;
    this.spare = false;
    this.extraBallsCount = 0;
    this.getExtraBalls = false;
    // this.framesBowled = 0;
    // this.isTenthFrameStrike = false;
    // this.isTenthFrameSpare = false;
    // // this.tenthFramePins = 0;
    // this.isGameComplete = false;
    // this.isFirstBallInFrame = true;
    // this.pinsInFrame = 0;
  }

  roll(pins) {
    if (pins < 0) {
      throw new Error('Negative roll is invalid');
    }

    // handle extra balls from strike or spare in 10th frame
    if (this.getExtraBalls) {
      this.extraBallsCount -= 1;
    }
    if (this.extraBallsCount < 0) {
      throw new Error('Cannot roll after game is over');
    }

    // count balls rolled and pins in the frame
    this.currentFrameBalls += 1;
    this.currentFramePins += pins;

    // too many balls rolled
    if (this.frameCount === 11 && this.extraBallsCount <= 0) {
      throw new Error('Cannot roll after game is over');
    }

    //can only get max of 10 pins in a frame
    if (this.currentFramePins > 10) {
      throw new Error('Pin count exceeds pins on the lane');
    }

    // check for strike or spare
    if (this.currentFramePins === 10) {
      if (this.currentFrameBalls === 1) {
        this.strike = true;
      } else {
        this.spare = true;
      }
    }

    // reset for next frame
    if (this.currentFrameBalls === 2 || this.strike) {
      this.currentFrameBalls = 0;
      this.currentFramePins = 0;
      this.frameCount += 1;
      this.strike = !!this.strike;
      this.spare = !!this.spare;
    }
    // allow extra balls on strike or spare in 10th frame
    if (this.frameCount > 10) {
      if (this.spare) {
        this.extraBallsCount = 1;
        this.getExtraBalls = !!this.getExtraBalls;
      }
      if (this.strike) {
        this.extraBallsCount = 2;
        this.getExtraBalls = !!this.getExtraBalls;
      }
    }
    this.rolls.push(pins);
  }

  // roll(pins) {
  //   if (this.isGameComplete) {
  //     throw new Error('Cannot roll after game is over');
  //   }

  //   if (pins < 0) {
  //     throw new Error('Negative roll is invalid');
  //   }

  //   // bowling 10th frame - determine if it is a strike or spare
  //   if (this.framesBowled == 9) {
  //     this.isTenthFrameStrike = !!(pins == 10);
  //     // this.tenthFramePins = pins;
  //   }
  //   if (this.framesBowled == 9.5) {
  //     this.isTenthFrameSpare = !!(pins + this.tenthFramePins == 10);
  //   }

  //   //bowling 11th frame only allowed if 10th was strike or spare
  //   if (
  //     this.framesBowled == 10 &&
  //     !this.isTenthFrameStrike &&
  //     !this.isTenthFrameSpare
  //   ) {
  //     throw new Error('Cannot roll after game is over');
  //   }
  //   //bowling 2nd ball in 11th only allowed if 10th was a strike
  //   if (this.framesBowled == 10.5 && !this.isTenthFrameStrike) {
  //     throw new Error('Cannot roll after game is over');
  //   }

  //   // count frames bowled and pins in frame
  //   if (this.isFirstBallInFrame) {
  //     if (pins == 10) {
  //       this.framesBowled += 1;
  //     } else {
  //       this.framesBowled += 0.5;
  //       this.isFirstBallInFrame = !this.isFirstBallInFrame;
  //     }
  //   } else {
  //     this.framesBowled += 0.5;
  //     this.isFirstBallInFrame = !this.isFirstBallInFrame;
  //   }

  //   // this.pinsInFrame += pins;
  //   // if (!this.isFirstBallInFrame && this.pinsInFrame > 10) {
  //   //   throw new Error('Pin count exceeds pins on the lane')
  //   // }

  //   // save pins to score later
  //   this.rolls.push(pins);

  //   //check if the game is complete

  //   // 10th frame without spare or strike
  //   if (
  //     this.framesBowled == 10 &&
  //     !this.isTenthFrameSpare &&
  //     !this.isTenthFrameStrike
  //   ) {
  //     this.isGameComplete = !this.isGameComplete;
  //   }
  //   // 10th frame was a spare
  //   if (this.isTenthFrameSpare && this.framesBowled >= 10.5) {
  //     this.isGameComplete = !this.isGameComplete;
  //   }
  //   // 10th frame was a strike, need to roll 2 balls
  //   if (
  //     this.isTenthFrameStrike &&
  //     this.framesBowled >= 11 &&
  //     !this.isFirstBallInFrame
  //   ) {
  //     this.isGameComplete = !this.isGameComplete;
  //   }
  // }

  score() {
    if (!this.isGameComplete) {
      throw new Error('Score cannot be taken until the end of the game');
    }

    return this.score;
    // throw new Error('Remove this statement and implement this function');
  }
}
