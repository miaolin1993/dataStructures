
const compareEnum = {
  less: 0,
  big: 1,
  equal: 2,
}

class MinHeap {
  constructor() {
    this.heap = []
  }
  compare(a, b) {
    if (a === b) return compareEnum.equal
    return a < b ? compareEnum.big : compareEnum.less
  }
  // 获取index左侧节点
  getLeftIndex(index) {
    return 2 * index + 1
  }
  // 获取index右侧节点
  getRightIndex(index) {
    return 2 * index + 2
  }
  // 获取index父节点
  getParentIndex(index) {
    return Math.floor((index - 1) / 2)
  }

  insert(val) {
    if (!val) return false
    this.heap.push(val)
    this.shiftUp(this.heap.length - 1)
    return true
  }
  // 交换数组内两个元素位置
  swap(list, a, b) {
    const temp = list[a]
    list[a] = list[b]
    list[b] = temp 
  }
  // 向上找
  shiftUp(index) {
    let parent = this.getParentIndex(index)

    while(index > 0 && this.compare(this.heap[parent], this.heap[index]) === compareEnum.less) {
      // 找到小的对换位置
      this.swap(this.heap, parent, index)
      index = parent
      parent = this.getParentIndex(index)
    }
  }
  size() {
    return this.heap.length
  }
  isEmpty() {
    return this.size() === 0
  }
  findTarget() {
    return this.heap[0]
  }
  // 移除最小值
  extract() {
    if (this.isEmpty()) return
    if (this.size() === 1) return this.heap[0]
    const removed = this.heap[0]
    // 将最后一个元素提前
    this.heap[0] = this.heap.pop()
    // 然后向下找，对比值大小，值小则换位置
    this.shiftDown(0)
    return removed
  }
  // 向下找
  shiftDown(index) {
    let current = index
    let left = this.getLeftIndex(index)
    let right = this.getRightIndex(index)

    if (left < this.size() && this.compare(this.heap[current], this.heap[left]) === compareEnum.less) {
      current = left
    }
    if (right < this.size() && this.compare(this.heap[current], this.heap[right]) === compareEnum.less) {
      current = right
    }
    if (index !== current) {
      this.swap(this.heap, index, current)
      this.shiftDown(current)
    }
  }
}