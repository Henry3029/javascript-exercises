function pigLatin(sentence) {
  const vowels = ["a", "e", "i", "o", "u"];

  // helper function to translate a single word
  function translateWord(word) {
    if (vowels.includes(word[0].toLowerCase())) {
      return word + "ay";
    }

    let index = 0;
    while (index < word.length && !vowels.includes(word[index].toLowerCase())) {
      // special case: handle "qu" together
      if (
        word[index].toLowerCase() === "q" &&
        word[index + 1]?.toLowerCase() === "u"
      ) {
        index += 2;
      } else {
        index++;
      }
    }

    return word.slice(index) + word.slice(0, index) + "ay";
  }

  // split sentence into words, translate each, then join back
  return sentence
    .split(" ")
    .map((word) => translateWord(word))
    .join(" ");
}

// Do not edit below this line
module.exports = pigLatin;