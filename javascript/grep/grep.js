#!/usr/bin/env node

// The above line is a shebang. On Unix-like operating systems, or environments, this will allow the script to be
// run by node, and thus turn this JavaScript file into an executable. If you don't have a Unix-like operating
// system or environment, for example Windows without WSL, you can use 
//
// node grep.js args
//
// Instead of "./grep.js args".
// 
// Read more about shebangs here: https://en.wikipedia.org/wiki/Shebang_(Unix)
// 
// This is only a SKELETON file for the 'Grep' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// For example, running `grep -l -v "hello" file1.txt file2.txt` should
// print the names of files that do not contain the string "hello".

// - `-n` Print the line numbers of each matching line.
// - `-l` Print only the names of files that contain at least one matching line.
// - `-i` Match line using a case-insensitive comparison.
// - `-v` Invert the program -- collect all lines that fail to match the pattern.
// - `-x` Only match entire lines, instead of lines that contain a match.
const fs = require('fs');
const path = require('path');

// get relevant parameters
const parameters = process.argv.filter((_, index) => {
    return index > 1
});

// build array for each parameter type
const flags = parameters.filter(flag => {
    return flag.startsWith('-');
});
const files = parameters.filter(flag => {
    return flag.endsWith('.txt');
});
const patterns = parameters.filter(flag => {
    return (!flag.startsWith('-') && !flag.endsWith('.txt'));
});


// - `-n` Print the line numbers of each matching line.
// - `-l` Print only the names of files that contain at least one matching line.
// - `-i` Match line using a case-insensitive comparison.
// - `-v` Invert the program -- collect all lines that fail to match the pattern.
// - `-x` Only match entire lines, instead of lines that contain a match.
let doPrintLine = true;
let doPrintFilenameOnly = true;
let doCaseInsensitive = false;
let doInvert = false;
let doMatchLine = false;

// function to read file
const readFile = (filename) => {
    var contents = fs.readFileSync(filename);
    return contents;
};

files.map((filename) => {
    const filePath = path.resolve(process.cwd(), 'data', filename);
    let fileContent = readFile(filePath);
    let content = fileContent.toString().split(/\n/);
    let match = '';
    content.map((line, index) => {
        if (line.includes(patterns[0])) {
            if (doPrintFilenameOnly) {
                match = match.concat(filename);
            } else {
                if (doPrintLine) {
                    match = match + (index + 1) + ':';
                }
                match = match.concat(line);
            match = match.concat('\n')
            }
        }
    })
    console.log('match: ', match)

})







// var data= fileread("abc.txt");
// //module.exports.say =say;
// //data.say();
// console.log(data.toString());



