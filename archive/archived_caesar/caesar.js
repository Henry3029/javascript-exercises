const caesar = function(str, shift) {
  return str
    .split("") // split string into characters
    .map(char => {
      // get Unicode of the character
      let code = char.charCodeAt(0);

      // uppercase letters (A-Z = 65–90)
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + shift) % 26 + 26) % 26 + 65);
      }

      // lowercase letters (a-z = 97–122)
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + shift) % 26 + 26) % 26 + 97);
      }

      // if not a letter (punctuation, space, etc.), return as-is
      return char;
    })
    .join(""); // join back into string
};

// Do not edit below this line
module.exports = caesar;