/**
 * @description js函数反转链表单元测试
 */

const { createLinkList, reverseLinkList, reverseLinkList1 } = require('./2-09.定义一个js函数反转单向链表');

describe('反转单向链表', () => {
    it('反转设定3个指针, 1个节点', () => {
        const arr = [100];
        const list = createLinkList(arr);
        expect(reverseLinkList(list)).toEqual({
            value: 100
        })
    })
    it('反转设定3个指针, 多个个节点', () => {
        const arr = [100, 200, 300];
        const list = createLinkList(arr);
        expect(reverseLinkList(list)).toEqual({
            value: 300,
            next: {
                value: 200,
                next: {
                    value: 100
                }
            }
        })
    })

    it('反转设定2个指针, 1个节点', () => {
        const arr = [100];
        const list = createLinkList(arr);
        expect(reverseLinkList1(list)).toEqual({
            value: 100
        })
    })
    it('反转设定2个指针, 多个个节点', () => {
        const arr = [100, 200, 300];
        const list = createLinkList(arr);
        expect(reverseLinkList1(list)).toEqual({
            value: 300,
            next: {
                value: 200,
                next: {
                    value: 100
                }
            }
        })
    })
})