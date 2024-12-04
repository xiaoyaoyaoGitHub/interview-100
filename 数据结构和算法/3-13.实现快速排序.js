/**
 * 实现快速排序,并说明时间复杂度和空间复杂度
 * splice 与 slice没有区分出来
 * - 算法本身的时间复杂度够高O(nlogn)
 * - splice是逐步二分之后执行的,二分会快速消减数量级
 * - 如果单独比较splice 和 slice, 效果会比较明显
 */

/**
 * 快速排序 splice实现
 * * 时间复杂度 O(nlogn)
 * @param {number} arr 
 */
const quickSortBySplice = (arr) => {
    const length = arr.length;
    if (length === 0) return arr

    // 找到中间middleIndex
    const middleIndex = Math.floor(length / 2);
    // 找到数组中间的值 此处可以用slice
    const middleValue = arr.splice(middleIndex, 1)[0];
    // 声明两个数据,分别存储比middleValue 小得值 & 比middleValue 大的值
    const left = [], right = [];
    // 这里不能直接使用length, 因为splice已经修改了arr
    // * 遍历 O(n)
    for (let i = 0; i < arr.length; i++) {
        // * 二分 O(logn)
        if (arr[i] > middleValue) {
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    // 对left / right 再次进行排序
    return quickSortBySplice(left).concat(middleValue, quickSortBySplice(right))
}

/**
 * 快速排序 不修改原数组
 * @param {number} arr 
 */
const quickSort = (arr) => {
    const length = arr.length;
    if (length === 0) return arr

    // 找到中间middleIndex
    const middleIndex = Math.floor(length / 2);
    // 找到数组中间的值
    const middleValue = arr[middleIndex];
    // 声明两个数据,分别存储比middleValue 小得值 & 比middleValue 大的值
    const left = [], right = [];
    // O(n*logn)
    for (let i = 0; i < length; i++) {
        if (i === middleIndex) continue
        // O(logn) 二分
        if (arr[i] > middleValue) {
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    // 对left / right 再次进行排序
    return quickSort(left).concat(middleValue, quickSort(right))
}

// console.log(quickSortBySplice([1, 5, 8, 9, 3, 42, 7, 4, 2]))
// console.log(quickSort([1, 5, 8, 9, 3, 42, 7, 4, 2]))

module.exports = {
    quickSort,
    quickSortBySplice
}