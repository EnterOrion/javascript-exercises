const repeatString = function(string, numRepeats) {
    if (numRepeats < 0) {
        return "ERROR"
    }
    else if (numRepeats == 0) {
        return ""
    }
    let newString = string;
    
    for (let i = 1; i < numRepeats; i++) {
        newString += string;
    }
    return newString;
};


// Do not edit below this line
module.exports = repeatString;

