const snakeCase = function(str) {
return str
// insert space between lowercase and uppercase (camelCase -> camel case)
.replace(/([a-z])([A-Z])/g, '$1 $2')
// replace all non-numbers/laters with space
.replace(/[^a-zA-Z0-9]/g, ' ')
// lowercase everything 
.toLowerCase()
// remove leading/trailing spaces
.trim()
// replace spaces with underscores
.replace(/\s+/g, '_');
};

// Do not edit below this line
module.exports = snakeCase;
