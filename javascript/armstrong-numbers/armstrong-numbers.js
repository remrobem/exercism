
export const isArmstrongNumber = (number = 0) => {

// function for reduce used to sum each digit to power of the length of the number   
const sum = (sum,value,_,array) => {
  return sum += value ** array.length
}  

// returns true if sum is equal to number argument
return [...String(number)].reduce(sum,0) == number
};
