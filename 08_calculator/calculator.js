const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
	let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  let multiFinal = 1;
  if (array.length == 0) {
    return 0
  }
  for (let i = 0; i < array.length; i++) {
    multiFinal = multiFinal * array[i];
  }
  return multiFinal;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
  if (a == 0 || a == 1) {
    return 1;
  }
  else {
    return a * factorial(a -1);
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
