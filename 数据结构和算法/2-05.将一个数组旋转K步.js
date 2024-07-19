/**
 * 将一个数组旋转K步
 * js数组API的时间复杂度大全
 * https://blog.csdn.net/weixin_49035434/article/details/130193844
 */

// 方法1: 将数组尾部依次pop , 放在头部unshift
function rotate1(arr, key) {
    // 时间复杂度 O(n^2)
    // 空间复杂度O(1)
    if (!key || !arr.length) return arr
    const step = Math.abs(key % arr.length)
    for (let i = 0; i < step; i++) {
        arr.unshift(arr.pop()) //  数组是一个有序数组,unshift操作非常慢 unshift时间复杂度为O(n)
    }
    return arr
}

// 方法2: 分割数组
function rotate2(arr, key) {
    // 时间复杂度 O(1)
    // 空间复杂度 O(n)
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