
export class HighScores {
  constructor(scoreList) {
    this.scoreList = scoreList;
  }

  get scores() {
    return this.scoreList
  }

  get latest() {
    return this.scoreList[this.scoreList.length - 1]
  }

  get personalBest() {
    return this.scoreList.reduce((max, score) => score > max ? score : max );
  }

  get personalTopThree() {
    return this.scoreList
      .sort((a, b) => b - a)
      .slice(0, 3)
  }
}
