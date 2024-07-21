/**
 * 一个字符串 s 可能包含{}[]()三种括号
 * 判断字符串 s 是否是括号匹配
 */

/**
 * 判断左右括号匹配
 * @param {*} str 
 * @returns 
 */
function isMatch(left, right) {
    switch (left) {
        case '(':
            return right === ')';
        case '{':
            return right === '}';
        case '[':
            return right === ']';
        default:
            return false;
    }
}

/**
 * 时间复杂度: O(n); 有一次for循环
 * 空间复杂度: O(n); 设定了一个stack,长度随输入字符串变化
 * @param {*} str 
 * @returns 
 */
function matchBracket(str) {
    const len = str.length;
    if (len === 0) return true;
    // 设定左括号和右括号symbol
    const leftSymbols = '({[';
    const rightSymbols = ')}]';
    // 定义栈
    const stack = [];
    // 循环遍历str
    for (let i = 0; i < len; i++) {
        const cur = str[i];
        console.log(stack, str[i]);
        // 虽然indexOf时间复杂度为O(n),但是这个操作跟输入的数组长度无关,故不计算在内
        if (leftSymbols.indexOf(cur) > -1) {
            stack.push(cur)
        } else if (rightSymbols.indexOf(cur) > -1) {
            const top = stack[stack.length - 1] // 找出栈顶的元素
            // 没有匹配如果不做处理,则会当成普通字符串进行下一个匹配
            if (isMatch(top, cur)) {
                // 弹出
                stack.pop();
            } else {
                return false
            }
        }
    }
    return stack.length === 0
}

// 功能测试
// const str = '{a[b(c))d]e}';
// console.log(matchBracket(str));

module.exports = {
    matchBracket
}

/**
 * 练习:用数组表示栈
 */

// const stack = [];
// // 入栈 or 压栈
// stack.push(100);
// stack.push(200);

// // 出栈
// stack.pop();

// // 长度
// stack.length; 