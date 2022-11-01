const sumAll = function(start, end) {
    if (isNaN(start) == true || isNaN(end) == true) {
        return "ERROR"
    }
    else if (typeof start == "string" || typeof end == "string") {
        return "ERROR"
    }
    else if (start < 0 || end < 0) {
        return "ERROR"
    }

    if (start > end) {
        let x = start; 
        let y = end;
        start = y;
        end = x;
    }
    
    let sum = 0;
    let j = 0;
    let i = 0;
    while (j < end) {
        sum += start + i;
        i++;
        j++;
    }
    return sum;
};



// Do not edit below this line
module.exports = sumAll;
