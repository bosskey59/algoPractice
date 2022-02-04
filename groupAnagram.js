var groupAnagrams = function (strs) {
  const hashTable = {};

  // time complexity =  o(n)  space complexity = o(n)
  // actually it might be o(n^2) because we need to sort each letter of a word but word have limit.

  for (const word of strs) {
    const sortedWord = word.split("").sort().join("");
    if (hashTable[sortedWord]) {
      hashTable[sortedWord].push(word);
    } else {
      hashTable[sortedWord] = [word];
    }
  }

  return Object.values(hashTable);
};
