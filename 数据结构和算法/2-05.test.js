/**
 * 将一个数组旋转K步
 */

const { rotate1, rotate2 } = require('./2-05.将一个数组旋转K步.js')

describe('将一个数组旋转K步', () => {
    it('rotate1 正常情况', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7];
        const k = 3;
        expect(rotate1(arr, k)).toEqual([5, 6, 7, 1, 2, 3, 4]);
    })

    it('数组为空', () => {
        const arr = [];
        const k = 3;
        expect(rotate1(arr, k)).toEqual([])
    })

    it('key 为负数', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7];
        const k = -3;
        expect(rotate1(arr, k)).toEqual([5, 6, 7, 1, 2, 3, 4])
    })

    it('key 超过数组长度', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7];
        const k = 9;
        expect(rotate1(arr, k)).toEqual([6, 7, 1, 2, 3, 4, 5])
    })

    it('rotate2 正常情况', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7];
        const k = 3;
        expect(rotate2(arr, k)).toEqual([5, 6, 7, 1, 2, 3, 4]);
    })
})