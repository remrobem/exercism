export const clean = (string) => {

  // check for letters
  let phoneNumber = string.replace(/[A-Za-z]/g, '');
  if (string.length != phoneNumber.length) {
    throw new Error('Letters not permitted');
  }
  // check for invalid characters
  phoneNumber = string.replace(/[^0-9+().-\s]/g, '');
  if (string.length != phoneNumber.length) {
    throw new Error('Punctuations not permitted');
  }
  // remove anything not a number from phone number
  phoneNumber = string.replace(/[^0-9]/g, '');
  // too short
  if (phoneNumber.length < 10) {
    throw new Error('Incorrect number of digits');
  }
  // too long
  if (phoneNumber.length > 11) {
    throw new Error('More than 11 digits');
  }
  // 11 digit must start with one
  if (phoneNumber.length == 11 && !phoneNumber.startsWith('1')) {
    throw new Error('11 digits must start with 1');
  }
  // remove first char from long phone number
  if (phoneNumber.length == 11) {
    phoneNumber = phoneNumber.substring(1);
  }
  // area code cannot start with 0 or 1
  if (phoneNumber.startsWith('0') || phoneNumber.startsWith('1')) {
    throw new Error(`Area code cannot start with ${phoneNumber.substring(0, 1) == '0' ? 'zero' : 'one'}`);
  }
  // exchange cannot start with 0 or 1
  if (phoneNumber.substring(3, 4) == '0' || phoneNumber.substring(3, 4) == '1' ) {
    throw new Error(`Exchange code cannot start with ${phoneNumber.substring(3, 4) == '0' ? 'zero' : 'one'}`);
  }

  return phoneNumber;
};
