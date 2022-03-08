// var maxProfit = function (prices) {
//   let min = prices[0];
//   let max = 0;

//   prices.forEach((price) => {
//     if (price < min) {
//       min = price;
//     }
//     let diff = price - min;
//     if (diff > max) {
//       max = diff;
//     }
//   });
//   return max;
// };

const maxProfit = (prices) => {
    let low = prices[0];
    let max = 0;

    for (price of prices) {
        if (price < low) low = price;
        let diff = price - low;
        if (diff > max) max = diff;
    }

    return max;
};

// quick solution loop once to find lowest price
// loop again to find greatest after that index.
const prices = [7, 1, 5, 3, 6, 4];
const prices2 = [7, 6, 4, 3, 1];
const prices3 = [2, 4, 1];

console.log(maxProfit(prices));
