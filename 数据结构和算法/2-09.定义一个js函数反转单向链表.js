/**
 * @description 反转单向链表
 */

/**
 * 链表反转
 */

function reverseLinkList(head) {
    // 创建3个指针保存
    let prev, curr, next = head;
    while (next) {
        // 如果是第一个,则删除当前节点的引用
        if (curr && !prev) {
            delete curr.next
        }
        // 更改指向
        if (curr && prev) {
            curr.next = prev
        }
        // 挪动指针
        prev = curr;
        curr = next;
        next = next.next
    }
    // 手动删除最后一个节点指针
    curr.next = prev;

    return curr
}

function reverseLinkList1(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        // 保存下一个引用
        const next = curr.next;
        if (prev) {
            curr.next = prev;
        } else {
            delete curr.next // 第一个,不引用
        }
        prev = curr;
        curr = next;
    }



    return prev;
}

// 创建一个链表
function createLinkList(arr) {
    const len = arr.length;
    if (len === 0) throw new Error('数组不能为空');
    // 定义最后一个节点node
    let listNode = {
        value: arr[len - 1]
    }
    if (len === 1) return listNode;
    for (let i = len - 2; i >= 0; i--) {
        listNode = {
            value: arr[i],
            next: listNode
        }
    }

    return listNode
}
module.exports = {
    createLinkList,
    reverseLinkList,
    reverseLinkList1
}

// const arr = [1, 2, 3, 4, 5];
// console.log(JSON.stringify(createLinkList(arr)));
// console.log(JSON.stringify(reverseLinkList1(createLinkList(arr))));

/**
 * 单向链表示例 next指向下一个节点
const n = {
    value: 1,
    next: n2
}
const n2 = {
    value: 2,
    next: n3
}
const n3 = {
    value: 3,
}
 */

/**
 * 双向链表 示例 next指向下一个节点 prev指向上一个节点
 const n = {
    value: 1,
    next: n2,
}
const n2 = {
    value: 2,
    next: n3,
    prev: n1
}
const n3 = {
    value: 3,
    prev: n2
}
 */
