// var longestCommonPrefix = function (strs) {
//     const prefix = [];
//     let minLength = Infinity;
//     strs = strs.map((word) => {
//         const wordArr = word.split("");
//         if (wordArr.length < minLength) minLength = wordArr.length;
//         return wordArr;
//     });

//     // loop through first letter of all words
//     // if it's the same across all words push it into prefix arr.
//     let letter = "";
//     for (let i = 0; i < minLength; i++) {
//         for (let j = 0; j < strs.length; j++) {
//             if (j === 0) letter = strs[j][i];
//             // if at last word of arr
//             if (strs.length - 1 === j && strs[j][i] === letter)
//                 prefix.push(strs[j][i]);
//             if (strs[j][i] !== letter) {
//                 i = minLength + 1;
//                 break;
//             }
//         }
//     }
//     return prefix.join("");
// };

var longestCommonPrefix = function (strs) {
    let minLength = Infinity;
    const letters = {};
    const prefix = [];
    strs.forEach((word) => {
        const wordArr = word.split("");
        if (wordArr.length < minLength) minLength = wordArr.length;
        for (let i = 0; i < wordArr.length; i++) {
            const currentLetter = wordArr[i];
            if (!letters[i]) letters[i] = {};
            if (!letters[i][currentLetter]) {
                letters[i][currentLetter] = 1;
            } else {
                letters[i][currentLetter] = letters[i][currentLetter]++;
            }
        }
    });
    // console.log(letters, minLength);

    for (let i = 0; i < minLength; i++) {
        const keysAtIndex = Object.keys(letters[i]);
        if (keysAtIndex.length === 1) {
            prefix.push(keysAtIndex[0]);
        } else {
            break;
        }
    }
    return prefix.join("");
};

const strs = ["flower", "flow", "flight"];
const strs2 = ["dog", "racecar", "car"];

console.log(longestCommonPrefix(strs));
