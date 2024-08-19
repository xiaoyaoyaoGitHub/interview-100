/**
 * 找出二叉搜索树的第K小值
 */

const tree = {
    value: 5,
    left: {
        value: 3,
        left: {
            value: 2,
            left: null,
            right: null
        },
        right: {
            value: 4,
            left: null,
            right: null
        }
    },
    right: {
        value: 7,
        left: {
            value: 6,
            left: null,
            right: null
        },
        right: {
            value: 8,
            left: null,
            right: null
        }
    }
}

/**
 * 前序遍历
 * root => left => right
 */
const preOrderTravers = (root) => {
    if (root === null) return;
    console.log(root.value);
    preOrderTravers(root.left);
    preOrderTravers(root.right)
}

/**
 * 中序遍历 left => root => right
 * @param {} root 
 */
const inOrderTravers = (root, arr) => {
    if (root === null) return
    inOrderTravers(root.left, arr)
    // console.log(root.value, )
    arr.push(root.value)
    inOrderTravers(root.right, arr)
}

/**
 * 后序遍历 left => right => root
 */
const postOrderTravers = (root) => {
    if (root === null) return
    postOrderTravers(root.left)
    postOrderTravers(root.right)
    console.log(root.value)
}

// preOrderTravers(tree)
// inOrderTravers(tree)
// postOrderTravers(tree)

/**
 * 注:二叉树中序遍历后为递增 数组
 * @param {*} root 
 * @param {*} k 
 */
const getKthNumber = (root, k) => {
    const arr = [];
    inOrderTravers(root, arr);
    console.log(arr)
    return arr[k - 1] || null
}

module.exports = {
    getKthNumber
}

console.log(getKthNumber(tree, 300))