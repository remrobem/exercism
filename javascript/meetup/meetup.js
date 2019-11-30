export const meetupDay = (p_year, p_month, p_day, p_request) => {
  // first date for the day requested
  const first = () => {
    return getFirstDateForDay(p_year, p_month);
  }

  // 7 days after the first date for the day requested
  const second = () => {
    const date = getFirstDateForDay(p_year, p_month);
    return new Date(p_year, p_month, (date.getDate() + 7));
  }

  // 14 days after the first date for the day requested
  const third = () => {
    const date = getFirstDateForDay(p_year, p_month);
    return new Date(p_year, p_month, (date.getDate() + 14));
  }

  // 21 days after the first date for the day requested
  const fourth = () => {
    const date = getFirstDateForDay(p_year, p_month);
    return new Date(p_year, p_month, (date.getDate() + 21));
  }
  
  // 28 days after the first date for the day requested
  // error returned if there are not 5 occurances of the day in the month
  const fifth = () => {
    const date = getFirstDateForDay(p_year, p_month);
    let fifthDay = new Date(p_year, p_month, (date.getDate() + 28));
    if (fifthDay.getMonth() != p_month) {
      throw new Error(`There is no fifth ${p_day} for ${p_month} ${p_year}`);
    }
    return fifthDay;
  }

  const last = () => {
    // return the 5th occurance of the day if it exists, otherwise return the 4th occurance
    let fifthDay = '';
    try {
      fifthDay = fifth();
    }
    catch {
      return fourth();
    }
    return fifthDay;
  }

  // first occurance of the day starting from the 13th
  const teenth = () => {
    return getFirstDateForDay(p_year, p_month, 13);
  }

  // first occurance of the day in the month from the p_start date of the month
  const getFirstDateForDay = (p_year, p_month, p_start = 1) => {
    const startOfMonth = new Date(p_year, p_month, p_start);
    const startDayOfWeek = startOfMonth.getDay();
    const diffDayOfWeek = meetingDayOfWeek - startDayOfWeek;

    const meetingDate = diffDayOfWeek >= 0
      ? new Date(p_year, p_month, (p_start + diffDayOfWeek))
      : new Date(p_year, p_month, (p_start + 7 + diffDayOfWeek));

    return new Date(p_year, p_month, meetingDate.getDate());
  }


  const DAYS_OF_WEEK = { Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6 };
  const meetingDayOfWeek = DAYS_OF_WEEK[p_day];
  const REQUEST_METHODS = { '1st': first, '2nd': second, '3rd': third, '4th': fourth, '5th': fifth, 'last': last, 'teenth': teenth };

  return REQUEST_METHODS[p_request]();
}
