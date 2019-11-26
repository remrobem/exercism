const EARTH_SECONDS_PER_YEAR = 31557600;
const ORBIT_IN_EARTH_YEARS = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

export const age = (planet, seconds) => {
  // validate planet argument
  if (!Object.hasOwnProperty.call(ORBIT_IN_EARTH_YEARS, planet)) {
    throw new Error(`Invalid planet: ${planet}`)
  }
  // validate seconds argument
  if (typeof seconds != 'number') {
    throw new Error(`Invalid seconds: ${seconds}`)
  }
  return Number((seconds / (ORBIT_IN_EARTH_YEARS[planet] * EARTH_SECONDS_PER_YEAR)).toFixed(2));
};
