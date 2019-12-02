//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (strand1, strand2) => {


  if (!strand1 && strand2) {
    throw new Error("left strand must not be empty");
  }

  if (strand1 && !strand2) {
    throw new Error("right strand must not be empty");
  }

  if (strand1.length != strand2.length) {
    throw new Error("left and right strands must be of equal length");
  }

  let hammed = 0;

  for (let i = 0; i < strand1.length; i++) {
    if (strand1.charAt(i) != strand2.charAt(i)) {
      hammed += 1;
    }
  }

  return hammed;
};


