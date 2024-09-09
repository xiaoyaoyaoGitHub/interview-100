/**
 * 移动0到数组末尾(需在原数组上操作)
 */

/**
 * 循环
 * @param {*} arr 
 * @returns 
 */
const moveZeroes = (arr) => {
    const length = arr.length;
    if (length === 0) return arr;
    let zeroLength = 0; // 记录0的个数
    // 整体的时间复杂度为O(n^2)
    for (let i = 0; i < length - zeroLength; i++) {
        if (arr[i] === 0) {
            arr.push(0);
            // 时间复杂度O(n)
            arr.splice(i, 1); // 分割出0,当前索引有变化,索引值不能增加
            zeroLength++;
            i--;
        }
    }
    return arr
}


/**
 * 双指针 快慢指针
 */
const moveZeroes2 = (arr) => {
    const length = arr.length;
    if (length === 0) return arr
    // 慢指针
    let j = -1;
    for (let i = 0; i < length; i++) {
        if (arr[i] === 0) {
            if (j < 0) j = i // j指向第一个0
        }
        if (arr[i] !== 0 && j >= 0) {
            arr[j] = arr[i]
            arr[i] = 0
            j++
        }
    }
    return arr
}




console.log(moveZeroes2([1, 0, 0, 0, 2, 3, 0, 4, 0, 5, 0, 6]))

module.exports = { moveZeroes, moveZeroes2 }