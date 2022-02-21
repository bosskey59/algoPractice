var isValidBST = function (root, min = -Infinity, max = Infinity) {
    if (!root) return true;
    if (root.val >= max || root.val <= min) return false;
    return (
        isValidBST(root.left, min, root.val) &&
        isValidBST(root.right, root.val, max)
    );
};
