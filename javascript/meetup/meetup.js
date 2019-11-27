import { forInStatement } from "@babel/types";

//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const DAYS_OF_WEEK = { Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6 };


export const meetupDay = (p_year, p_month, p_day, p_qualifier) => {

  const first = () => {
    console.log('first');
  }

  const second = () => {
    console.log('second');

  }
  const third = () => {
    console.log('third');

  }
  const fourth = () => {
    console.log('fourth');

  }
  const fifth = () => {
    console.log('fifth');

  }
  const last = () => {
    console.log('last');

  }
  const teenth = () => {
    console.log('teenth');
    const date13th = new Date(p_year, p_month, 13)
    const dayOfWeek13th = date13th.getDay();
    let newDay;

    newDay = day < dayOfWeek13th
      ? 20 + (day - dayOfWeek13th)
      : 13 + (day - dayOfWeek13th);

    console.log(p_year, p_month, newDay);

    return new Date(p_year, p_month, newDay)

  }

  const QUALIFIER_FUNC = { '1st': first, '2nd': second, '3rd': third, '4th': fourth, '5th': fifth, 'last': last, 'teenth': teenth };
  const day = DAYS_OF_WEEK[p_day];

  // if (p_qualifier === 'teenth') {
  //   const date13th = new Date(p_year, p_month, 13)
  //   const dayOfWeek13th = date13th.getDay();
  //   let newDay;

  //   newDay = day < dayOfWeek13th
  //   ? 20 + (day - dayOfWeek13th)
  //   : 13 + (day - dayOfWeek13th);

  //   return new Date(p_year, p_month, newDay)
  // }

  const func = { '1st': 'first' }
  let test = () => console.log('test ran');
  let testData = { first: test }
  // testData.first();
  // console.log(func[p_qualifier]);
  // testData[func[p_qualifier]]();


  return QUALIFIER_FUNC[p_qualifier]();


  // throw new Error("Remove this statement and implement this function");
}
