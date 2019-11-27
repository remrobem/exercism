const DAYS_OF_WEEK = { Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6 };

export const meetupDay = (p_year, p_month, p_day, p_qualifier) => {

  const first = () => {
    return getMeetingDate(1);
  }

  const second = () => {
    return getMeetingDate(7);
  }

  const third = () => {
    return getMeetingDate(13);
  }

  const fourth = () => {
    return getMeetingDate(20);
  }

  const fifth = () => {
    const date = getMeetingDate(27);
    if (date.getMonth()!= p_month) {
        throw new Error(`There is no fifth ${p_day} for ${p_month} ${p_year}`);
    }
    return date;
  }

  const last = () => {
    console.log('last');
    const fourth =  getMeetingDate(20);
    const fifth = getMeetingDate(27);
    console.log('fourth: ', fourth);
    console.log('fifth: ', fifth)
    return fifth.getMonth() != p_month ? fourth : fifth;


  }

  const teenth = () => {
    const date13th = new Date(p_year, p_month, 13)
    const dayOfWeek13th = date13th.getDay();
    let newDate;

    newDate = meetingDayOfWeek < dayOfWeek13th
      ? 20 + (meetingDayOfWeek - dayOfWeek13th)
      : 13 + (meetingDayOfWeek - dayOfWeek13th);

    return new Date(p_year, p_month, newDate)

  }

  const getMeetingDate = (startDate) => {

    // let newDate = '';
    let meetingDate = '';
    const startOfMonth = new Date(p_year, p_month, startDate);
    const startDayOfWeek = startOfMonth.getDay();
    const diffDayOfWeek = meetingDayOfWeek - startDayOfWeek;
    console.log('1 - startofmonth: ', startOfMonth);

    if (diffDayOfWeek >= 0) {
      startOfMonth.setDate(startOfMonth.getDate() + startDate + meetingDayOfWeek);
      // meetingDate = new Date(p_year, p_month, (startDate + meetingDayOfWeek));
    } else {
      startOfMonth.setDate(startOfMonth.getDate() + startDate + 7 + diffDayOfWeek);
      // meetingDate = new Date(p_year, p_month, (startDate + 7 + diffDayOfWeek));
    }
// console.log('meetingDate: ', meetingDate)
    // newDate = meetingDate.getDate();
    // return new Date(p_year, p_month, newDate);
    // return meetingDate;
console.log('2 - startofmonth: ', startOfMonth);

    return startOfMonth;
  }


  const QUALIFIER_FUNC = { '1st': first, '2nd': second, '3rd': third, '4th': fourth, '5th': fifth, 'last': last, 'teenth': teenth };
  const meetingDayOfWeek = DAYS_OF_WEEK[p_day];

  return QUALIFIER_FUNC[p_qualifier]();
  // throw new Error("Remove this statement and implement this function");
}
