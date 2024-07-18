/**
 * 将一个数组旋转K步
 */

// 方法1: 将数组尾部依次pop , 放在头部unshift
function rotate1(arr, key) {
    //时间复杂度 O(n)
    if (!key || !arr.length) return arr
    const step = Math.abs(key % arr.length)
    for (let i = 0; i < step; i++) {
        arr.unshift(arr.pop())
    }
    return arr
}

// 方法2: 分割数组
function rotate2(arr, key) {
    if (!key || !arr.length) return arr;
    const step = Math.abs(key % arr.length);
    const tempArr = arr.slice(-step);
    return [...tempArr, ...arr.slice(0, -step)]
}

module.exports = {
    rotate1,
    rotate2
}

// 功能测试
// console.info(rotate1([1, 2, 3, 4, 5, 6, 7, 8], 3));
// console.info(rotate2([1, 2, 3, 4, 5, 6, 7, 8], 3));