export const steps = (num, step = 0) => {

  // input validation
  if (step === 0 && (typeof num != 'number' || num <= 0)) {
    throw new Error("Only positive numbers are allowed");
  }
  // solution found
  if (num === 1) {
    return step
  }

  step += 1;
  num = num % 2 === 0 ? num / 2 : (num * 3) + 1;

  // recursive execution using new num and step counter 
  return steps(num, step)

};

