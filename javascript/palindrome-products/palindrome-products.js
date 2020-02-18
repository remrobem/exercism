export class Palindromes {
  static generate({ maxFactor, minFactor }) {
    if (minFactor > maxFactor) {
      throw new Error('min must be <= max');
    }
    // this object is modified and returned to the caller
    let palindromes = {
      largest: { value: 0, factors: [] },
      smallest: { value: Infinity, factors: [] }
    };

    for (let current = minFactor; current <= maxFactor; current++) {
      for (let multiplyBy = current; multiplyBy <= maxFactor; multiplyBy++) {
        let product = current * multiplyBy;
        if (isPalidrome(product)) {
          // populate largest values as needed
          if (product >= palindromes.largest.value) {
            if (product > palindromes.largest.value) {
              palindromes.largest.factors = [];
            }
            palindromes.largest.value = product;
            palindromes.largest.factors.push([current, multiplyBy])
          }
          // populate smallest values as needed
          if (product <= palindromes.smallest.value) {
            if (product < palindromes.smallest.value) {
              palindromes.smallest.factors = [];
            }
            palindromes.smallest.value = product;
            palindromes.smallest.factors.push([current, multiplyBy])
          }
        }
      }
    }
    // if no palidrome found, set the initial values to null per specs. factor arrays will still be empty
    palindromes.smallest.value = palindromes.smallest.value == Infinity ? null : palindromes.smallest.value;
    palindromes.largest.value = palindromes.largest.value == 0 ? null : palindromes.largest.value;

    return palindromes;

    // compare number to the number reversed number:
    function isPalidrome(p_number) {
      return p_number.toString().split('').toString() == p_number.toString().split('').reverse().toString() ? true : false;
    }
  }
}