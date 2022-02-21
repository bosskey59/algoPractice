// const fib = (n, memo = {}) => {
//     if (memo[n]) return memo[n];
//     if (n <= 2) return 1;
//     memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
//     return memo[n];
// };
// const fib = (n) => {
//     if (n <= 2) return 1;
//     return fib(n - 1) + fib(n - 2);
// };

// o(n-2) still simplifies to n linear time because at worst we need to loop as large as our input might be 6 => we need to loop 4 times.
const fib = (n) => {
    if (n <= 2) return 1;
    const baseArr = [1, 1];
    for (let i = 0; i < n - 2; i++) {
        baseArr.push(baseArr[i] + baseArr[i + 1]);
    }
    return baseArr[baseArr.length - 1];
};

console.log(fib(6));
console.log(fib(7));
// console.log(fib(60));
