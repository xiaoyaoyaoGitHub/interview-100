/**
 * @description 链表实现队列
 * 时间复杂度:  add O(1) delete O(1)
 * 空间复杂度: O(n)
 */

class LinkListQueue {
    constructor() {
        // 创建3个变量,保存头部/尾部和长度
        this.head = null;
        this.tail = null;
        this.len = 0
    }
    add(value) {
        // 创建一个listNode
        const listNode = {
            value,
            next: null
        }
        if (this.head === null) {
            this.head = listNode
        }
        // 如果尾部无值
        if (this.tail === null) {
            this.tail = listNode
        } else {
            // 说明尾部有值
            const tail = this.tail;
            tail.next = listNode;
            // 移动指针
            this.tail = listNode;
        }

        this.len++

    }
    // 出栈 
    delete() {
        // 链表为空
        if (this.head === null) return null;
        if (this.len === 0) return null;

        // 出栈 找到头部的值
        const value = this.head.value;
        // 更改指针指向
        this.head = this.head.next;
        // 长度变短
        this.len--

        return value
    }

    get length() {
        return this.len
    }
}

// 创建一个链表
function createLinkList(arr) {
    const len = arr.length;
    let headNode;
    let cur; // 移动指针
    for (let i = 0; i < len; i++) {
        let listNode = {
            value: arr[i],
            next: null
        };
        if (!headNode) headNode = listNode;
        if (cur) {
            cur.next = listNode
        }
        cur = listNode;
    }
    return headNode
}

// console.log(JSON.stringify(createLinkList([1, 2, 3, 4, 5])))
// const link  = createLinkList([1, 2, 3, 4, 5]);
// const listQueue = new LinkListQueue();
// listQueue.add(100)
// listQueue.add(200)
// listQueue.add(300)
// console.log(listQueue.length)
// console.log(listQueue.delete())
// console.log(listQueue.length)
// console.log(listQueue.delete())
// console.log(listQueue.length)
// console.log(listQueue.delete())


module.exports = {
    LinkListQueue,
    createLinkList
}