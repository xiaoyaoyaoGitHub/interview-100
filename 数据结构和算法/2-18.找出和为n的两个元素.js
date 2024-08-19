/**
 * 在一个递增数组中,找出和为n的两个元素
 */

const findTwoNumbers1 = (arr = [], n) => {
    const result = [];
    const len = arr.length;
    // 空数组直接返回
    if (len === 0) return result;
    // 循环嵌套 O(n^2)
    for (let i = 0; i <= len - 1; i++) {
        const item = arr[i];
        let flag = false;
        // i+ 1 直接比对i后面的值,前面的在之前的循环中已经遍历过
        for (let j = i + 1; j <= len - 1; j++) {
            if (item + arr[j] === n) {
                result.push(item, arr[j]);
                flag = true;
                break;
            }
        }

        if (flag) break;
    }

    return result
}

// 双指针
const findTwoNumbers2 = (arr, n) => {
    const result = [];
    const len = arr.length;
    if (len === 0) return result;
    let i = 0, j = len - 1;
    while (i < j) {
        const sum = arr[i] + arr[j]
        if (sum > n) { // 总和超过n,则j往左移动
            j = j - 1;
        } else if (sum < n) { // 总和小于n,则i往右移动
            i = i + 1
        } else {
            result.push(arr[i], arr[j]);
            break;
        }
    }

    return result
}

module.exports = {
    findTwoNumbers1,
    findTwoNumbers2
}


// 功能测试
// console.log(findTwoNumbers1([1, 3, 4, 5, 6, 7], 5))
// console.log(findTwoNumbers2([1, 3, 4, 5, 6, 7], 5))