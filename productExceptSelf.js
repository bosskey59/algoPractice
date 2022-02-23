var productExceptSelf = function (nums) {
    const store = [];
    for (let i = 0; i < nums.length; i++) {
        const copy = [...nums];
        copy.splice(i, 1);
        const product = copy.reduce((el, acc) => (el *= acc), 1);
        store.push(product);
    }
    return store;
};

nums = [1, 2, 3, 4];
nums2 = [-1, 1, 0, -3, 3];

console.log(productExceptSelf(nums));
console.log(productExceptSelf(nums2));
