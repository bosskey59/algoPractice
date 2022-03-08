var coinChange = function (coins, amount) {
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i < dp.length; i++) {
        for (coin of coins) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    const minCoins = dp[amount];

    if (minCoins >= Infinity) return -1;
    return minCoins;
};

const coins = [1, 2, 5];
const amount = 11;
const coins2 = [1, 2, 5, 10];
const amount2 = 18;

const coins3 = [186, 419, 83, 408];
const amount3 = 6249;

console.log(coinChange(coins3, amount3));
