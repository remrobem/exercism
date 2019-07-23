

export const value = (...colors) => {
  return parseInt(colors[0].reduce((duo, color) => {
    return duo + COLORS.indexOf(color.toLowerCase());
  }, '')
  );
};

export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

