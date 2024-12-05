/**
 * 求1-100000之间的所有对称数(回文)
 * 0,1,2,11,22,101,232,...
 * ! 重点: 
 *     * 尽量不要转换数据结构,尤其是数组这种有序结构
 *     * 尽量不要用内置API,如reverse,不好识别复杂度
 *     * 数字操作最快,其次是字符串
 */


/**
 * findPalindromeNumbers1: 561.708ms
 * findPalindromeNumbers2: 64.512ms
 * findPalindromeNumbers3: 53.547ms
 * 思路1: 看似是O(n),但是数组转换/操作都需要时间,所以慢
 * 思路2 vs 思路3:操作数字更快(电脑原型就是计算器)
 * 思路2 要用栈, 不合适, 因为栈也是操作数组,会慢
 */

/**
 * * 思路1: 使用数组 反转 比较
 * - 数组转化为字符串,再转换为数组
 * - 数组reverse, 再join为字符串
 * - 前后字符串进行对比
 */

const findPalindromeNumbers1 = (max) => {
    const res = [];
    if (max <= 0) return res;

    for (let i = 1; i <= max; i++) {
        // 转化为字符串
        const s = i.toString();
        // 比较
        if (s === s.split('').reverse().join('')) {
            res.push(i)
        }
    }

    return res
}

// console.info(findPalindromeNumbers1(200))
console.time('findPalindromeNumbers1')
findPalindromeNumbers1(100 * 10000)
console.timeEnd('findPalindromeNumbers1')

/**
 * * 思路2: 字符串首尾比较
 * - 数字转换为字符串
 * - 字符串头尾字符比较
 * - 也可以用栈,像括号匹配,但是要注意奇偶数
 */
const findPalindromeNumbers2 = (max) => {
    const res = [];
    if (max <= 0) return res;
    for (let i = 1; i <= max; i++) {
        const s = i.toString();
        let startIndex = 0;
        let endIndex = s.length - 1;
        let flag = true;
        while (startIndex < endIndex) {
            if (s[startIndex] === s[endIndex]) {
                startIndex++;
                endIndex--;
            } else {
                // 不符合,直接结束
                flag = false
                break;
            }
        }
        if (flag) {
            res.push(i)
        }
    }

    return res
}

// console.info(findPalindromeNumbers2(200))
console.time('findPalindromeNumbers2')
findPalindromeNumbers2(100 * 10000)
console.timeEnd('findPalindromeNumbers2')

/**
 * * 思路3: 生成翻转数
 * - 使用% 和 Math.floor生成反转数
 * - 前后数字进行对比
 * - 全程操作数字,没有字符串类型
 */

const findPalindromeNumbers3 = (max) => {
    const res = [];
    if (max <= 0) return res;
    for (let i = 1; i <= max; i++) {
        let n = i;
        let rev = 0 //  存储反转数
        // 生成反转数
        // eg:i = 121
        while (n > 0) {
            // 1   12  121
            rev = rev * 10 + n % 10;
            // 12  1   0 end
            n = Math.floor(n / 10)
        }
        if (i === rev) res.push(i)
    }

    return res
}

console.time('findPalindromeNumbers3')
findPalindromeNumbers3(100 * 10000)
console.timeEnd('findPalindromeNumbers3')





module.exports = {
    findPalindromeNumbers1,
    findPalindromeNumbers2,
    findPalindromeNumbers3
}