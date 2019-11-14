
// a leap year is every year that is:
//  evenly divisible by 4
//  except every year that is evenly divisible by 100
//  unless the year is also evenly divisible by 400

export const isLeap = (year) => {

  return year % 400 === 0 ? true :
    year % 100 === 0 ? false :
    year % 4 === 0 ? true : false;
};
