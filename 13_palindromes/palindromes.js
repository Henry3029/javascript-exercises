const palindromes = function (str) {
// make everything lowercase and remove punctuation and space 
const cleaned = str.toLowerCase().replace(/[^a-z0-9]/gi, "");
// reverse the cleaned string 
const reversed = cleaned.split("").reverse().join("");
// compere forward vs reversed
return cleaned === reversed; 
};

// Do not edit below this line
module.exports = palindromes;
