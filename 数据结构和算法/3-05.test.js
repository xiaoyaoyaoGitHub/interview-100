/**
 * 斐波那契数列的第n个值
 * 0 1 1 2 3 5 8 13 21 ...
 */
const fibonacci = require('./3-05.斐波那契数列第n个值');


describe('斐波那契数列', () => {
    it('0 和 1', () => {
        expect(fibonacci(0)).toBe(0);
        expect(fibonacci(1)).toBe(1);
    })
    it('正常情况', () => {
        expect(fibonacci(10)).toBe(55)
    })
    it('小于0', () => {
        expect(fibonacci(-1)).toBe(0)
    })
})