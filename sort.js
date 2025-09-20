// 最简单的数组排序函数
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}

// 使用示例
const numbers = [3, 1, 4, 1, 5, 9, 2, 6];
console.log(sortArray(numbers)); // [1, 1, 2, 3, 4, 5, 6, 9]

// 如果要降序排序
function sortArrayDesc(arr) {
    return arr.sort((a, b) => b - a);
}

// 字符串数组排序
function sortStrings(arr) {
    return arr.sort();
}

// 使用示例
const fruits = ['banana', 'apple', 'cherry', 'date'];
console.log(sortStrings(fruits)); // ['apple', 'banana', 'cherry', 'date']
