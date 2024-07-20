/**
 * 一个字符串 s 可能包含{}[]()三种括号
 * 判断字符串 s 是否是括号匹配
 */

const { matchBracket } = require('./2-07.判断字符串是否是括号匹配')

describe('判断字符串是否括号匹配', () => {
    it('正常情况', () => {
        const str = '{a[b(c)d]e}f';
        const res = matchBracket(str);
        expect(res).toBe(true)
    })

    it('字符串括号不匹配', () => {
        const str = '{a[b(c))d]e}f';
        const res = matchBracket(str);
        expect(res).toBe(false)
    })
    it('字符串括号顺序匹配', () => {
        const str = '{a[b(c]d)e}f';
        const res = matchBracket(str);
        expect(res).toBe(false)
    })
    it('字符串为空', () => {
        const str = '';
        const res = matchBracket(str);
        expect(res).toBe(true)
    })
})