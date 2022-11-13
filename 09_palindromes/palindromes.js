const palindromes = function (string) {
    let punctuation = '!?.,'
    let cleanString = string;
    cleanString = 
    cleanString
    .split('')
    .filter(function(letter) {
      return punctuation.indexOf(letter) === -1;
    })
    .join('');
    cleanString = cleanString.split(' ').join('');
    cleanString = cleanString.toLowerCase();
    
    let reverseString = cleanString.split('');
    reverseString = reverseString.reverse();
    reverseString = reverseString.join('');

    if (reverseString == cleanString) {
        return true;
    }
    return false;
};


// Do not edit below this line
module.exports = palindromes;
