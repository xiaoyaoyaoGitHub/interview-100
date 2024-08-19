/**
 * 找出二叉搜索树的第K小值
 */

const tree = {
    value: 10,
    left: {
        value: 8,
        left: {
            value: 9,
            left: null,
            right: null
        },
        right: {
            value: 11,
            left: null,
            right: null
        }
    },
    right: {
        value: 7,
        left: {
            value: 3,
            left: null,
            right: null
        },
        right: {
            value: 4,
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
const inOrderTravers = (root) => {
    if (root === null) return
    inOrderTravers(root.left)
    console.log(root.value)
    inOrderTravers(root.right)
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
postOrderTravers(tree)