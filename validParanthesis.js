var isValid = function (s) {
  const complimentHash = {
    "{": "}",
    "(": ")",
    "[": "]",
  };
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    // console.log(arr);
    if (Object.keys(complimentHash).includes(currentChar)) {
      arr.push(currentChar);
    } else {
      let openingChar = arr.pop();
      //   console.log(complimentHash[openingChar], currentChar);
      if (complimentHash[openingChar] != currentChar) return false;
    }
    // console.log("current", currentChar, "next", nextChar);
  }
  return !arr.length;
};

s = "()[]{}";
s2 = "{[]}";

console.log(isValid(s));
