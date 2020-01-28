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
let isPrintLine = false;
let isPrintFilenameOnly = false;
let isCaseInsensitive = false;
let isInvert = false;
let isMatchLine = false;

flags.map(flag => {
    const value = flag.charAt(flag.length - 1);
    switch (value) {
        case 'n':
            isPrintLine = true;
            break;
        case 'l':
            isPrintFilenameOnly = true;
            break;
        case 'i':
            isCaseInsensitive = true;
            break;
        case 'v':
            isInvert = true;
            break;
        case 'x':
            isMatchLine = true;
            break;
        default:
            break;
    }
})

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
        // print line number
        if (line.includes(patterns[0])) {

            match = isInvert ? match :
                isPrintFilenameOnly ? match.concat(filename) :
                    isPrintLine ? match.concat((index + 1) + ':' + line + '\n') :
                        match.concat(line + '\n');

            // if (isPrintFilenameOnly) {
            //     match = match.concat(filename);
            // } else {
            //     match = match.concat(line + '\n');
            // }
        } else {
            // match = isPrintLine ? match.concat((index + 1) + ':') : match;
            // match = isInvert ? match.concat(line + '\n') : match;

            match = isInvert ? isPrintLine ? match.concat((index + 1) + ':' + line + '\n') : match.concat(line + '\n') : match

        }
    })
    console.log('match: ', match)

})







// var data= fileread("abc.txt");
// //module.exports.say =say;
// //data.say();
// console.log(data.toString());



