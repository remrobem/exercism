export const isIsogram = (isogram) => {

// remove all non alpha characters  
const string = isogram.replace(/[^A-Za-z]/g,'').toLowerCase();
// unique values 
const uniqueString = new Set(string);

// number of unique aplpha characters must equal total number of alpha characters
// to be an isogram
return uniqueString.size == string.length
};
