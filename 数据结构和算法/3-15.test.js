/**
 * 求1-100000之间的所有对称数(回文)
 * 0,1,2,11,22,101,232,...
 */
const { findPalindromeNumbers1, findPalindromeNumbers2, findPalindromeNumbers3 } = require('./3-15.求1-10000之间的所有对称数(回文)');

describe('回文测试', () => {
    it('正常情况', () => {
        const numbers = findPalindromeNumbers1(200);
        expect(numbers.length).toBe(28)
    })

    it('max 小于等于0', () => {
        const numbers = findPalindromeNumbers1(0);
        expect(numbers).toEqual([])
    })
})