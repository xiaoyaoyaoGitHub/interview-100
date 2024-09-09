/**
 * 斐波那契数列的第n个值
 * 青蛙跳台阶
 * 0 1 1 2 3 5 8 13 21 ...
 */

// 递归
// const fibonacci = (n) => {
//     if (n <= 0) return 0;
//     if (n === 1) return 1;
//     return fibonacci(n - 1) + fibonacci(n - 2)
// }

// 循环
const fibonacci = (n) => {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    let res1 = 0, res2 = 1; // 两个指针存储
    let result = 0;
    // i 不能从0开始
    for (let i = 2; i <= n; i++) {
        result = res2 + res1;
        res1 = res2;
        res2 = result
    }

    return result
}

module.exports = fibonacci

// console.log(fibonacci(10))