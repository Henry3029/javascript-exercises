const sumAll = function(a, b) {
	//cheak for negative numbers, or non-numbers. 
	if (a < 0 || b < 0) return "ERROR"; 
	if (typeof a !== "number" || typeof b !== "number") return "ERROR"; 
	if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
const start = Math.min(a, b);
const end = Math.max(a, b);

let total = 0;
for(let i = start; i <= end; i++)  {
	total += i;
}
return total; 
};
console.log(sumAll(2, 4));
// Do not edit below this line
module.exports = sumAll;
