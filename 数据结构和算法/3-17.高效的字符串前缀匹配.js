/**
 * * 高效的字符串前缀匹配
 * 问题: 有一个英文单词库(数组),里面有几十万个英文单词;输入一个字符串,快速判断是否为某一个单词的前缀
 */

/**
 * * 常规思路
 * - 遍历单词库数组
 * - indexOf判断前缀
 * - 实际时间复杂度超过O(n),因为要考虑indexOf的计算量
 */

/**
 * * 优化
 * *    - 英文字母一共26个,可以提前把单词库数组拆分为26个
 * *    - 既然第一层拆分为26个,第二层/第三层还可以继续拆分
 * *    - 最后把单词库拆分为一棵树 
 * ! 性能分析
 * *    - 如遍历数组,时间复杂度至少O(n)起步(n是数组长度)
 * *    - 改为树,时间复杂度降低到O(m)(m是搜索单词的长度)
 * *    - ps:哈希表 (对象)通过key查询,时间复杂度为O(1)
 * ! 划重点
 * *    - 考虑优化原始数据结构
 * *    - 有明确范围的数据(26个英文字母,汉字的范围就太广了),考虑使用哈希表(对象)
 * *    - 以空间换时间,定义数据结构最重要
 */

const words = ['name', 'rename', 'renew', 'recall', 'alipay', 'connect', 'very']

const obj = {};

// 转化为树状结构
const toTree = (word, tree) => {
    console.log(word, tree)
    for (let i = 0; i < word.length; i++) {
        const curr = word[i];
        if (!tree[curr]) tree[curr] = {};
        toTree(word.slice(i + 1), tree[curr])
        break
    }
}

words.forEach(word => {
    toTree(word, obj)
})

console.log(JSON.stringify(obj))
/**
 * {"n":{"a":{"m":{"e":{}}}},"r":{"e":{"n":{"a":{"m":{"e":{}}},"e":{"w":{}}},"c":{"a":{"l":{"l":{}}}}}},"a":{"l":{"i":{"p":{"a":{"y":{}}}}}},"c":{"o":{"n":{"n":{"e":{"c":{"t":{}}}}}}},"v":{"e":{"r":{"y":{}}}}}
 */