// var isPalindrome = function (s) {
//   s = s.toLowerCase();
//   const onlyLetters = s.split("").filter((char) => char.match(/[a-z]|[0-9]/i)); // o(n)
//   const originalWord = onlyLetters.join("");
//   const reveresed = onlyLetters.reverse().join("");
//   console.log(onlyLetters);
//   return originalWord === reveresed;
// };

var isPalindrome = function (s) {
  s = s.toLowerCase();
  const onlyLetters = s.split("").filter((char) => char.match(/[a-z]|[0-9]/i)); // o(n)
  const midWay = parseInt(onlyLetters.length / 2);
  let lastTracker = 1;
  for (let i = 0; i < midWay; i++) {
    const front = onlyLetters[i];
    const last = onlyLetters[onlyLetters.length - lastTracker];
    console.log(front, "last:", last);
    console.log("half", midWay);
    if (front != last) return false;
    lastTracker++;
  }
  return true;
};

s = "A man, a plan, a canal: Panama";
t = "0P";

console.log(isPalindrome(s));
