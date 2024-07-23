/**
 * 两个栈实现一个队列 单元测试
 */

const MyQueue = require('./2-08.两个栈实现一个队列');

describe('两个栈实现一个队列 单元测试', () => {
    it('add and length', () => {
        const q = new MyQueue();
        expect(q.length).toBe(0);
        q.add(1);
        q.add(2);
        q.add(3);
        expect(q.length).toBe(3)
    })

    it('delete and length', () => {
        const q = new MyQueue();
        expect(q.delete()).toBeUndefined();
        q.add(1)
        q.add(2)
        q.add(3)

        expect(q.delete()).toBe(1)
        expect(q.length).toBe(2)
        expect(q.delete()).toBe(2)
        expect(q.length).toBe(1)
        expect(q.delete()).toBe(3)
        expect(q.length).toBe(0)

    })
})