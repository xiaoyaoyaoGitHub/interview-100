/**
 * 输出字符串中出现连续最多的字符以及次数
 */

/**
 * 因为有跳步 所以整体时间复杂度为O(n)
 * @param {string} str 
 * @returns 
 */
const findContinueStr = (str) => {
    const length = str.length;
    if (length === 0) return {
        char: '',
        length: 0
    }
    let currMaxLength = 0;
    let currChar = '';
    let tempLength = 0;
    for (let i = 0; i < length; i++) {
        tempLength = 0 // 每次重新计数s
        for (let j = i; j < length; j++) {
            if (str[i] === str[j]) { // 相等则计数+1, 否则跳出当前循环
                tempLength++;
            } else {
                break;
            }
        }
        // 记录当前最大长度
        if (tempLength > currMaxLength) {
            currChar = str[i];
            currMaxLength = tempLength
        }
        // 更改i的位置 跳步(并没有全部循环)
        i += tempLength - 1;

    }

    return {
        char: currChar,
        length: currMaxLength
    }
}

const findContinueStr2 = (str) => {
    const length = str.length;
    if (length === 0) {
        return {
            char: '',
            length: 0
        }
    }

    // 定义快慢指针  移动j
    let i = 0, j = 0;
    // 计数变量
    let count = 0, strChar;

    while (j <= length) {
        const currentStartStr = str[i];
        // 两个不相等 或者已经循环到最后
        if (currentStartStr !== str[j] || j === length) {
            const currentCount = j - i;
            // 当前串大于已记录的
            if (currentCount > count) {
                // 记录当前最大的长度
                count = currentCount
                // 记录char
                strChar = currentStartStr
            }
            i = j
        }
        j++;
    }

    return {
        char: strChar,
        length: count
    }

}

module.exports = {
    findContinueStr,
    findContinueStr2
}

// console.log(findContinueStr2('abbdddddddddddccccccc'))
// console.log(findContinueStr('abbdddddddddddccccccc'))