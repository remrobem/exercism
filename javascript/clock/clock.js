
let originalWorkDate = null;

export class Clock {
  constructor(hours, minutes) {
    this.hours = hours || 0;
    this.minutes = minutes || 0;
    this.workDate = new Date(2000, 0, 1, this.hours, this.minutes);

    if (!originalWorkDate) {
      originalWorkDate = this.workDate;
    }
  }

  toString() {
    return this.formatedTime();
  }

  plus(minutes) {
    this.workDate.setMinutes(this.workDate.getMinutes() + minutes);
    return this.formatedTime();

  }

  minus(minutes) {
    this.workDate.setMinutes(this.workDate.getMinutes() - minutes);
    return this.formatedTime();
  }
// arg format:  Clock { hours: 15, minutes: 37, workDate: 2000-01-01T20:37:00.000Z }
  equals(arg) {
    console.log('arg1 clock date: ', arg.workDate)
    // console.log('Equal Orig: ', originalWorkDate);
    console.log('Equal work: ', this.workDate)
    return arg.workDate.getTime() === this.workDate.getTime() ? true : false;
  }

  // format time for return
  formatedTime() {
    return (`${this.padZero(this.workDate.getHours())}:${this.padZero(this.workDate.getMinutes())}`)
  }

  // add leading zero when needed
  padZero(number) {
    return (number < 10 ? '0' : '') + number
  }
}
