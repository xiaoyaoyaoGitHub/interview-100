/**
 * 输出字符串中出现连续最多的字符以及次数
 */


const { findContinueStr, findContinueStr2 } = require('./3-10.字符串中出现连续最多的字符以及次数')

describe('字符串中出现连续最多的字符以及次数', () => {
    it('正常情况', () => {
        expect(findContinueStr('aabbbccccdddd')).toEqual({
            char: 'c',
            length: 4
        })
    })

    it('字符串为空', () => {
        expect(findContinueStr('')).toEqual({
            char: '',
            length: 0
        })
    })

    it('没有连续字符', () => {
        expect(findContinueStr('abc')).toEqual({
            char: 'a',
            length: 1
        })
    })
})

describe('字符串中出现连续最多的字符以及次数', () => {
    it('正常情况', () => {
        expect(findContinueStr2('aabbbccccdddd')).toEqual({
            char: 'c',
            length: 4
        })
    })

    it('字符串为空', () => {
        expect(findContinueStr2('')).toEqual({
            char: '',
            length: 0
        })
    })

    it('没有连续字符', () => {
        expect(findContinueStr2('abc')).toEqual({
            char: 'a',
            length: 1
        })
    })
})