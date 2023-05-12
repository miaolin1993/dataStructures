// 判断一个数组是否包含另一个数组
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [3, 4, 5]
const arr3 = [14, 2, 30, 98, 112, 32, 9, 22, 31]
console.log(arr2.reduce((p, n) => {
  console.log(p, n)
  return p + n
}))

/**
 * every方法，迭代每个元素，直到返回false，与some方法正好相反
 * @param {Array} list1 父数组 
 * @param {Array} list2 子数组
 * @returns {Boolean} 结果
 */
function useEvery(list1, list2) {
  return list2.every(val => list1.includes(val))
}

// console.log(useEvery(arr1, arr2))

// for (const num of arr1) {
//   console.log(num)
// }

// 迭代器
// let iterator = arr1[Symbol.iterator]()
// console.log(iterator.next().value)

// fill 填充数组
// 第一个参数是填充内容，第二个参数是起始位置，第三个参数是结束位置
// arr1.fill(2, 1)
// console.log(arr1)

// arr3.sort((a, b) => a - b)
// console.log(arr3)

// const friends = [
//   { name: 'john', age: 30 },
//   { name: 'marry', age: 12 },
//   { name: 'ana', age: 21 },
//   { name: 'wow', age: 29 },
//   { name: 'ppx', age: 7 },  
// ]

// function sortClass(a, b) { 

//   if (a.age < b.age) return -1
//   if (a.age > b.age) return 1
//   return 0
// }
// console.log(friends.sort(sortClass))

// 搜索相关
// indexOf 找到返回索引，找不到返回-1
// console.log(arr3.indexOf(30))

// find  返回第一个满足条件的值 没有返回undefined
// console.log(arr3.find(val => val === 30))

// findIndex 返回这个值的索引 没有返回-1
// console.log(arr3.findIndex(val => val === 30))

// includes 搜索是否存在 第一个参数是值，第二个参数是起始索引
// console.log(arr3.includes(30, 2))

console.log(arr3.toString())
console.log(arr3.join('-'))

