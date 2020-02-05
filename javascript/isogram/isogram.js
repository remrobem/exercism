export const isIsogram = (isogram) => {

// remove all non alpha characters  
const string = isogram.replace(/[^A-Za-z]/g,'').toLowerCase();

// number of unique aplpha characters must equal total number of alpha characters
// to be an isogram
return new Set(string).size == string.length
};
