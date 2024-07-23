/**
 * 两个栈实现一个队列
 */
class MyQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    add(value) {
        // 添加执行 1步
        this.stack1.push(value)
    }

    delete() {
        // 第一步 先将stack1中的数据放入到stack2中
        while (this.stack1.length) {
            // eg: stack1 = [1,2,3,4,5]
            const popValue = this.stack1.pop();
            // eg: stack2 = [5,4,3,2,1]
            this.stack2.push(popValue)
        }
        // 第二步:删除 stack2中的第一个元素 为1
        let res = this.stack2.pop();

        // 第三步: 将stack2中的数据再次放入到stack1中
        while (this.stack2.length) {
            // eg: stack2 = [5,4,3,2]
            const popValue = this.stack2.pop();
            // eg: stack1 = [2,3,4,5]
            this.stack1.push(popValue)
        }
        // 将 删除的值返回
        return res
    }

    get length() {
        return this.stack1.length
    }
}

module.exports = MyQueue

// 功能测试
// const queue = new MyQueue();
// queue.add(1);
// queue.add(2);
// queue.add(3);
// queue.add(4);
// queue.add(5);
// console.log('队列的长度为:', queue.length);
// console.log('当前队列删除的值为:', queue.delete());
// console.log('队列的长度为:', queue.length);