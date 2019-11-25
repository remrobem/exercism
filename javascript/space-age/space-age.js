export const age = (planet, seconds) => {
  const earthSecondsPerYear = 31557600;
  const planetEarthSeconds = {
    mercury: 0.2408467 * earthSecondsPerYear,
    venus: 0.61519726 * earthSecondsPerYear,
    earth: 1.0 * earthSecondsPerYear,
    mars: 1.8808158 * earthSecondsPerYear,
    jupiter: 11.862615 * earthSecondsPerYear,
    saturn: 29.447498 * earthSecondsPerYear,
    uranus: 84.016846 * earthSecondsPerYear,
    neptune: 164.79132 * earthSecondsPerYear,
  };
  // validate planet argument
  if (!Object.hasOwnProperty.call(planetEarthSeconds, planet)) {
    throw new Error(`Invalid planet: ${planet}`)
  }
  // validate seconds argument
  if (typeof seconds != 'number') {
    throw new Error(`Invalid seconds: ${seconds}`)
  }

  return parseFloat((seconds / planetEarthSeconds[planet]).toFixed(2));
};
