const reverseString = function(string) {
    let contString = "";

    do {
        contString += string.slice(-1);
        string = string.slice(0, -1);
    }
    while (string.length > 0)
    
    return contString;
};

reverseString("hello");


// Do not edit below this line
module.exports = reverseString;
