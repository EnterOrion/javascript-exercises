const removeFromArray = function(...args) {
    let array = args[0];
    for (let j=0; j<args.length; j++) {
        for (let i=0; i<array.length; i++) {
            if (array[i] === args[j]) {
                array.splice(i,1);
            }
        }
    }
    return array;
}
    

removeFromArray([1, 2, 3, 4], 3, 2);

// Do not edit below this line
module.exports = removeFromArray;
