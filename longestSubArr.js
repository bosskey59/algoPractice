var lengthOfLongestSubstring = function (s, current = [], max = 0) {
    if (s.length === 0) return max;
    const char = s[0];
    s = s.substring(1);
    if (!current.includes(char)) {
        current.push(char);
    } else {
        // remove elemnts up to first orrcurence and push
        const index = current.indexOf(char);
        current = current.splice(index + 1);
        current.push(char);
    }
    if (current.length > max) max = current.length;
    console.log(s, current, max);
    return lengthOfLongestSubstring(s, current, max);
};

s = "abcabcbb";
s2 = "aab";
console.log(lengthOfLongestSubstring(s));
