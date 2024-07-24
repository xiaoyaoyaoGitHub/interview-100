/**
 * @description 链表实现队列单元测试
 */

const { LinkListQueue } = require('./2-12.链表实现队列')

describe('链表实现队列单元测试', () => {
    it('add and length', () => {
        const q = new LinkListQueue();
        expect(q.length).toBe(0);
        q.add(100);
        q.add(200);
        q.add(300);
        expect(q.length).toBe(3)
    })

    it('delete and length', () => {
        const q = new LinkListQueue();
        expect(q.delete()).toBeNull();
        q.add(100);
        q.add(200);
        q.add(300);
        expect(q.length).toBe(3);
        expect(q.delete()).toBe(100);
        expect(q.length).toBe(2);
        expect(q.delete()).toBe(200);
        expect(q.length).toBe(1);
        expect(q.delete()).toBe(300);
        expect(q.length).toBe(0);
    })
})