const { format1, format2, format3 } = require('./3-18.数字千分位格式化');

describe('数字千分位格式化', () => {
    it('format1 正常情况', () => {
        const result = format1(4100200300);
        expect(result).toBe('4,100,200,300')
    })
    it('format1 小于1000', () => {
        const result = format1(100);
        expect(result).toBe('100')
    })

    it('format2 正常情况', () => {
        const result = format2(4100200300);
        expect(result).toBe('4,100,200,300')
    })
    it('format2 小于1000', () => {
        const result = format2(100);
        expect(result).toBe('100')
    })

    it('format3 正常情况', () => {
        const result = format3(4100200300);
        expect(result).toBe('4,100,200,300')
    })
    it('format3 小于1000', () => {
        const result = format3(100);
        expect(result).toBe('100')
    })
})