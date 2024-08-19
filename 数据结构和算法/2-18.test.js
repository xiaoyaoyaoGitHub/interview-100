/**
 * @description 单元测试
 * 在一个递增数组中,找出和为n的两个元素
 */

const { findTwoNumbers1, findTwoNumbers2 } = require('./2-18.找出和为n的两个元素')


describe('找出和为n的两个元素(循环)', () => {
    it('正常情况', () => {
        const arr = [1, 3, 4, 7, 8, 9];
        const n = 13;
        expect(findTwoNumbers1(arr, n)).toEqual([4, 9])
    })

    it('数组为空', () => {
        const arr = [];
        const n = 16;
        expect(findTwoNumbers1(arr, n)).toEqual([])
    })
    it('n匹配不到', () => {
        const arr = [1, 3, 4, 7, 8, 9];
        const n = 30;
        expect(findTwoNumbers1(arr, n)).toEqual([])
    })
})

describe('找出和为n的两个元素(双指针)', () => {
    it('正常情况', () => {
        const arr = [1, 3, 4, 7, 8, 9];
        const n = 13;
        expect(findTwoNumbers2(arr, n)).toEqual([4, 9])
    })

    it('数组为空', () => {
        const arr = [];
        const n = 16;
        expect(findTwoNumbers2(arr, n)).toEqual([])
    })
    it('n匹配不到', () => {
        const arr = [1, 3, 4, 7, 8, 9];
        const n = 30;
        expect(findTwoNumbers2(arr, n)).toEqual([])
    })
})