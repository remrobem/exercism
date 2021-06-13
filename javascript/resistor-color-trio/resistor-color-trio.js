const bands = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

function formatOhmsText(ohms) {
  return ohms < 1000 ? `${ohms} ohms` : `${ohms / 1000} kiloohms`;
}

export class ResistorColorTrio {
  constructor(colors) {
    this.colors = colors;
    this.label = this.label();
  }

  label() {
    // get values for the ohms and exponent
    const [firstOhm, secondOhm, exponent] = [
      bands.indexOf(this.colors[0]),
      bands.indexOf(this.colors[1]),
      bands.indexOf(this.colors[2]),
    ];

    // error if any invalid colors
    if (exponent < 0 || firstOhm < 0 || secondOhm < 0)
      throw new Error('invalid color');

    // calulcate ohms - concat the 2 ohm numbers and multiply by the exponenet
    let ohms = Number('' + firstOhm + secondOhm) * 10 ** exponent;

    return `Resistor value: ${formatOhmsText(ohms)}`;
  }
}
