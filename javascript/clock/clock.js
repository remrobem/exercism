export class Clock {
  constructor(hours, minutes) {
    this.hours = hours || 0;
    this.minutes = minutes || 0;
    this.workDate = new Date(2000, 0, 1, this.hours, this.minutes);
  }

  toString() {
    return this.formatedTime(this.workDate);
  }

  plus(minutes) {
    this.workDate.setMinutes(this.workDate.getMinutes() + minutes);
    return this.formatedTime(this.workDate);

  }

  minus(minutes) {
    this.workDate.setMinutes(this.workDate.getMinutes() - minutes);
    return this.formatedTime(this.workDate);
  }

// arg format:  Clock { hours: 15, minutes: 37, workDate: 2000-01-01T20:37:00.000Z }
  equals(arg) {
    return this.formatedTime(arg.workDate) === this.formatedTime(this.workDate);
  }

  // format time for return
  formatedTime(date) {
    return (`${this.padZero(date.getHours())}:${this.padZero(date.getMinutes())}`)
  }

  // add leading zero when needed
  padZero(number) {
    return (number < 10 ? '0' : '') + number
  }
}
