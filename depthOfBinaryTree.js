class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

const six = new TreeNode(6);
const five = new TreeNode(5);
const four = new TreeNode(4);
const three = new TreeNode(3, six);
const two = new TreeNode(2, four, five);
const one = new TreeNode(1, two, three);

const tree = [[1], [2, 3], [4, 5, 6]];

// var maxDepth = function (root) {
//     if (!root) return [];
//     // queue is last in first out and we will insert nodes into que from left to right, top down
//     const queue = [root];
//     let count = 0;
//     while (queue.length) {
//         let qLength = queue.length;
//         while (qLength--) {
//             const node = queue.shift();
//             // console.log(node);
//             node.left && queue.push(node.left);
//             node.right && queue.push(node.right);
//         }
//         count += 1;
//         // console.log(count);
//     }
//     return count;
// };

const maxDepth = (root) => {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
//     1
//   2   3
//  4 5   6
// 7

console.log(maxDepth(one));

// depth first search priritizes finding the depth first.
