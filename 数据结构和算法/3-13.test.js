/**
 * 实现快速排序,并说明时间复杂度和空间复杂度
 */

const { quickSort, quickSortBySplice } = require('./3-13.实现快速排序')

describe('快速排序(修改原数组)', () => {
    it('正常情况', () => {
        const arr = [1, 5, 8, 9, 3, 42, 7, 4, 2];
        expect(quickSortBySplice(arr)).toEqual([1, 2, 3, 4, 5, 7, 8, 9, 42])
    })
    it('空数组', () => {
        const arr = [];
        expect(quickSortBySplice(arr)).toEqual([])
    })
    it('有负数', () => {
        const arr = [1, 5, 8, 9, -10, 3, 42, 7, 4, 2];
        expect(quickSortBySplice(arr)).toEqual([-10, 1, 2, 3, 4, 5, 7, 8, 9, 42])
    })
    it('全部一样', () => {
        const arr = [1, 1, 1, 1];
        expect(quickSortBySplice(arr)).toEqual([1, 1, 1, 1])
    })
})

describe('快速排序(不修改原数组)', () => {
    it('正常情况', () => {
        const arr = [1, 5, 8, 9, 3, 42, 7, 4, 2];
        expect(quickSort(arr)).toEqual([1, 2, 3, 4, 5, 7, 8, 9, 42])
    })
    it('空数组', () => {
        const arr = [];
        expect(quickSort(arr)).toEqual([])
    })
    it('有负数', () => {
        const arr = [1, 5, 8, 9, -10, 3, 42, 7, 4, 2];
        expect(quickSort(arr)).toEqual([-10, 1, 2, 3, 4, 5, 7, 8, 9, 42])
    })
    it('全部一样', () => {
        const arr = [1, 1, 1, 1];
        expect(quickSort(arr)).toEqual([1, 1, 1, 1])
    })
})