const removeFromArray = function(arr,...args) {
  // args collects all the extra values after arr 
  return arr.filter(item => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;