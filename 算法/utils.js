const arr = [6, 7, 3, 1, 9, 12, 9, 8, 2, 5, 78]
// 数组中两个元素交换位置
function swap(list, a, b) {
  const temp = list[a]
  list[a] = list[b]
  list[b] = temp
}

const len = arr.length

function quickSort(list) {
  const lens = list.length
  if (lens < 2) return list
  const base = list[0] // 基准
  // 跳过取出的基准值，取出所有比基准值大的和比基准值小的
  const min = list.slice(1).filter(val => val <= base)
  const max = list.slice(1).filter(val => val > base)

  return quickSort(min).concat(base).concat(quickSort(max))
}