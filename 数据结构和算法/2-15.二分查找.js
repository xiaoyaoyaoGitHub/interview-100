/**
 * @description 二分查找
 */

// 方式一:循环
function binarySearch(arr, target) {
    // 定义开始位置和结尾位置
    let startIndex = 0, endIndex = arr.length - 1;
    while (startIndex <= endIndex) {
        const middleIndex = Math.floor((startIndex + endIndex) / 2);
        const value = arr[middleIndex];
        if (target < value) { // 继续向左查找
            endIndex = middleIndex - 1;
        } else if (target > value) { // 继续向右查找
            startIndex = middleIndex + 1;
        } else {
            return middleIndex
        }
    }
    return -1
}

// 方式二:递归
function recursiveBinarySearch(arr, target, startIndex = 0, endIndex = arr.length - 1) {
    if (arr.length === 0) return -1;
    // 获取查找范围的中间索引
    if (startIndex > endIndex) return -1
    const middleIndex = Math.floor((startIndex + endIndex) / 2);
    // 获取到中间索引对应的值
    const middleValue = arr[middleIndex];
    if (target < middleValue) {
        // 目标值小于中间值
        return recursiveBinarySearch(arr, target, startIndex, middleIndex - 1);
    } else if (target > middleValue) {
        // 目标值大于中间值
        return recursiveBinarySearch(arr, target, middleIndex + 1, endIndex)
    } else {
        // 相等 返回middleIndex
        return middleIndex
    }

}

module.exports = {
    binarySearch,
    recursiveBinarySearch
}
// function recursiveBinarySearch(arr, target, startIndex = 0, endIndex = arr.length - 1) {
//     if (startIndex > endIndex) {
//         return -1
//     }
//     const middleIndex = Math.floor((startIndex + endIndex) / 2);
//     const value = arr[middleIndex];
//     if (target < value) { // 继续向左查找
//         return recursiveBinarySearch(arr, target, startIndex,middleIndex - 1);
//     }
// }

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
// console.log(binarySearch([5], 5));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
// console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
console.log(recursiveBinarySearch([4, 6], 5));


// function binarySearch(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
// }