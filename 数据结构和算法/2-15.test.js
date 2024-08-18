/**
 * @description 二分查找 单元测试
 */
const { binarySearch, recursiveBinarySearch } = require('./2-15.二分查找')

describe('二分查找循环', () => {
    it('正常情况', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const target = 4;
        const index = binarySearch(arr, target);
        expect(index).toBe(3);
    })
    it('数组为空', () => {
        const arr = [];
        const target = 4;
        const index = binarySearch(arr, target);
        expect(index).toBe(-1);
    })
    it('目标值找不到', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const target = 40;
        const index = binarySearch(arr, target);
        expect(index).toBe(-1);
    })

})

describe('二分查找递归', () => {
    it('正常情况', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const target = 4;
        const index = recursiveBinarySearch(arr, target);
        expect(index).toBe(3);
    })
    it('数组为空', () => {
        const arr = [];
        const target = 4;
        const index = recursiveBinarySearch(arr, target);
        expect(index).toBe(-1);
    })
    it('目标值找不到', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const target = 40;
        const index = recursiveBinarySearch(arr, target);
        expect(index).toBe(-1);
    })
})