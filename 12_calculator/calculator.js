const add = function(a, b) {
return a + b; 
};

const subtract = function(a, b) {
	return a - b
};

// sum all numbers in an array
const sum = function(numbers) {
	let total = 0;
	for(let num of numbers) {
		total += num;
	}
	return total; 
};

const multiply = function(numbers) {
	let result = 1; // start with 1, so multiplication works correctly
	for (let num of numbers) {
		result *= num
	}
return result
};

// Raise a number to the power 
const power = function(base, exponent) {
	return base ** exponent; // or Math.power(base, exponent) 
};

const factorial = function(n) {
	if (n === 0) return 1; // special case 0! = 1
	let result = 1; // start with 1 (because multiplying by 1 changes nothing)
	for (let i = 1; i <= n; i++) {
		result *= i
	} 
	return result
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
