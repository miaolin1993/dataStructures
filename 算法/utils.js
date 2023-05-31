const arr = [6, 7, 3, 1, 9, 12, 9, 78]
// 数组中两个元素交换位置
function swap(list, a, b) {
  const temp = list[a]
  list[a] = list[b]
  list[b] = temp
}

const len = arr.length