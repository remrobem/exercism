#!/usr/bin/env node
// fs and path used to read files
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
const files = parameters.filter(file => {
    return file.endsWith('.txt');
});
let patterns = parameters.filter(pattern => {
    return (!pattern.startsWith('-') && !pattern.endsWith('.txt'));
});

// activate flag variable for the the parameters passed in
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

// remove inconsistent requests
// do not print line number if request if for print Filename only
isPrintLine = isPrintFilenameOnly ? false : isPrintLine;

// need to aways print file name if there are multiple files 
let isPrintFileName = files.length > 1 ? true : false;

// function to read file
const readFile = (filename) => {
    var contents = fs.readFileSync(filename);
    return contents;
};

// convert the patterns into regex
const regexes = patterns.map(pattern => {
    // build regex expression 
    return isCaseInsensitive ?
        // case insensitive 
        isMatchLine ? RegExp('^' + pattern + '$', 'i') : RegExp(pattern, 'i')
        // case sensitive
        : isMatchLine ? RegExp('^' + pattern + '$', 'i') : RegExp(pattern);
});

let matches = [];

files.map((filename) => {
    const filePath = path.resolve(process.cwd(), 'data', filename);
    let fileContent = readFile(filePath);
    // file content will be processed here as an array
    let content = fileContent.toString().split(/\n/);
    let match = '';

    content.map((line, index) => {
        regexes.map(regex => {
            // determine if line matches regex - 
            // when invert is requested, no match becomes match and vice versa
            line = regex.test(line) ?
                //match
                isInvert ? '' : line :
                // no match
                isInvert ? line : '';

            // format output when get a match (line has a value)
            if (line) {
                if (isPrintFilenameOnly) {
                    match = matches.includes(filename) ? match : match.concat(filename)
                } else {
                    if (isPrintFileName) {
                        match = match.concat(filename + ':')
                    }
                    if (isPrintLine) {
                        match = match.concat((index + 1) + ':')
                    }
                    match = match.concat(line);
                }
            }
        });
        // populate matches array when match found
        if (match) {
            matches.push(match.toString());
            match = '';
        }
    })
})

console.log(matches.join('\n'));
