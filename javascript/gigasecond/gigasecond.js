

export const gigasecond = (date) => {
  return new Date(date.setUTCSeconds(date.getUTCSeconds() + 1000000000));
};
