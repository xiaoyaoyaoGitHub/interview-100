/**
 * 移动0到数组末尾(需在原数组上操作)
 */

const { moveZeroes, moveZeroes2 } = require('./3-08.将0移动到数组末尾')

describe('移动0到数组末尾 moveZeroes', () => {
    it('正常情况', () => {
        const arr = [1, 0, 0, 0, 2, 3, 0, 4, 0, 5, 0, 6];
        expect(moveZeroes(arr)).toEqual([1, 2, 3, 4, 5, 6, 0, 0, 0, 0, 0, 0])
    })

    it('没有0', () => {
        const arr = [1, 2, 3, 4, 5, 6];
        expect(moveZeroes(arr)).toEqual([1, 2, 3, 4, 5, 6])
    })

    it('全是0', () => {
        const arr = [0, 0, 0, 0, 0, 0]
        expect(moveZeroes(arr)).toEqual([0, 0, 0, 0, 0, 0])
    })
})


describe('移动0到数组末尾 moveZeroes2', () => {
    it('正常情况', () => {
        const arr = [1, 0, 0, 0, 2, 3, 0, 4, 0, 5, 0, 6];
        expect(moveZeroes(arr)).toEqual([1, 2, 3, 4, 5, 6, 0, 0, 0, 0, 0, 0])
    })

    it('没有0', () => {
        const arr = [1, 2, 3, 4, 5, 6];
        expect(moveZeroes(arr)).toEqual([1, 2, 3, 4, 5, 6])
    })

    it('全是0', () => {
        const arr = [0, 0, 0, 0, 0, 0]
        expect(moveZeroes(arr)).toEqual([0, 0, 0, 0, 0, 0])
    })
})