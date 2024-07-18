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
    it('rotate2 正常情况', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7];
        const k = 3;
        expect(rotate2(arr, k)).toEqual([5, 6, 7, 1, 2, 3, 4]);
    })
})