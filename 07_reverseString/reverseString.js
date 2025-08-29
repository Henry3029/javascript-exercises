const reverseString = function(str) {
  let chars = str.split("");
  let reversed = chars.reverse();
  console.log('About to return:', reversed.join("")); // just log the value
  return reversed.join(""); // return separately
};

// Do not edit below this line
module.exports = reverseString;
	