/**
 * 将数字千分位格式化,输出字符串
 * eg: 如输入数字12050100,输出字符串12,050,100
 * 注意:逆序判断
 */

/**
 * 常见思路:
 * - 转换为数组,reverse,每3位拆分 
 * *    转换影响性能
 * - 使用正则表达式
 * *    性能最差
 * - 使用字符串拆分
 * *    性能较好
 */

// 使用数组
const format1 = (num) => {
    const s = num.toString();
    const arr = s.split('').reverse();
    return arr.reduce((prev, curr, index) => {
        if (index % 3 === 0) {
            return prev ? curr + ',' + prev : curr
        } else {
            return curr + prev
        }
    }, '')
}



// 使用字符串拆分
const format2 = (num) => {
    const s = num.toString();
    let res = '';
    const len = s.length;
    for (let i = len - 1; i >= 0; i--) {
        const j = len - i; // 从右往左第几个
        if (j % 3 === 0 && j !== len) {
            res = ',' + s[i] + res
        } else {
            res = s[i] + res
        }
    }

    return res
}









const format3 = (num) => {
    let str = '';
    let temp_num = num;
    while (temp_num > 0) {
        let res = temp_num % 1000;
        temp_num = Math.floor(temp_num / 1000)
        if (temp_num > 0) {
            res = res.toString().padStart(3, '0')
        }
        if (str === '') {
            str += res
        } else {
            str = res + ',' + str;
        }


    }
    return str
}

module.exports = {
    format1,
    format2,
    format3
}


// console.time('format1')
// for (let i = 0; i < 100000; i++) {
//     format1(Number.MAX_SAFE_INTEGER)
// }
// console.timeEnd('format1')

// console.time('format2')
// for (let i = 0; i < 100000; i++) {
//     format2(Number.MAX_SAFE_INTEGER)
// }
// console.timeEnd('format2')


// console.time('format3')
// for (let i = 0; i < 100000; i++) {
//     format3(Number.MAX_SAFE_INTEGER)
// }
// console.timeEnd('format3')
