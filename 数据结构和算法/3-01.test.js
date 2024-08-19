/**
 * 找出二叉搜索树的第K小值
 */

const tree = {
    value: 5,
    left: {
        value: 3,
        left: {
            value: 2,
            left: null,
            right: null
        },
        right: {
            value: 4,
            left: null,
            right: null
        }
    },
    right: {
        value: 7,
        left: {
            value: 6,
            left: null,
            right: null
        },
        right: {
            value: 8,
            left: null,
            right: null
        }
    }
}


const { getKthNumber } = require('./3-01.求一个二叉搜索树的第K小值')

describe('找出二叉搜索树的第K小值', () => {
    it('正常情况', () => {
        expect(getKthNumber(tree, 3)).toBe(4)
    })

    it('边界情况', () => {
        expect(getKthNumber(tree, 0)).toBeNull();
        expect(getKthNumber(tree, 300)).toBeNull()
    })
})