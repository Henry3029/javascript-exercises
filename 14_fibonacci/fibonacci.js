const fibonacci = function(n) {
	// convert strings to numbers
	n = Number(n);
// handle invalid input
if (n <= 0 || !Number.isInteger(n)) return "OOPS";

// the first two numbers are always 1
if (n === 1 || n === 2) return 1;

let first = 1;
let second = 1;
let next = 0;
for (let i = 3; i <= n; i++) {
	next = first + second; // sum of two previous 
	first = second; // move forward 
	second = next; 
}
return second;
};

// Do not edit below this line
module.exports = fibonacci;
