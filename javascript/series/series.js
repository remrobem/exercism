//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(numbers) {
    this.numbers = numbers.split('').map(Number);
  }

  get digits() {
    return this.numbers;
  }

  slices(sliceLength) {

    if (sliceLength > this.numbers.length) {
      throw new Error("Slice size is too big.");
    }
    
    const buildSeries = () => {
      let series = [];
      for (let i = 0; i <= this.numbers.length - sliceLength; i++) {
        series.push(this.numbers.slice(i, i + sliceLength))
      }
      return series;
    }

    return buildSeries();
  }
}
