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

// var levelOrder = function (root) {
//     if (!root) return [];
//     const queue = [root];
//     const levels = [];
//     while (queue.length) {
//         const currentLevel = [];
//         let size = queue.length;
//         while (size > 0) {
//             const node = queue.shift();
//             currentLevel.push(node.val);
//             node.left && queue.push(node.left);
//             node.right && queue.push(node.right);
//             size--;
//         }
//         levels.push(currentLevel);
//     }
//     return levels;
// };

// console.log(levelOrder(one));

// Breadth first search is going level by level and pulling each node from left to right. in order to find a value or element.
// grab the first node

var levelOrder = function (root) {
    // queue is last in first out and we will insert nodes into que from left to right, top down
    const queue = [root];
    const levels = [];
    while (queue.length) {
        let qLength = queue.length;
        const currentLevel = [];
        while (qLength--) {
            const node = queue.shift();
            console.log(node);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
            currentLevel.push(node.val);
        }
        levels.push(currentLevel);
        console.log(currentLevel);
    }
    return levels;
};
console.log(levelOrder(one));
