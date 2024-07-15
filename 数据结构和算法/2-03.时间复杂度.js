/**
 * 时间复杂度
 */

function fn(obj = {}, key) {
    // O(1)
    return obj[key]
}
function fn(obj = {}, key) {
    // O(1)s
    return obj.a + obj.b + obj.c
}

function fn(arr = []) {
    // O(n) 输入arr数量越大,循环次数越多
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
function fn(arr = []) {
    // O(n^2) 输入arr数量越大,循环次数越多
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j])
        }
    }
}
