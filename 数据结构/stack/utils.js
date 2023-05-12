export class Stack {
  constructor() {
    this.items = []
    this.count = 0
  }

  push(item) {
    this.items.push(item)
  }
  pop() {
    return this.items.pop()
  }
  // 返回栈顶
  peek() {
    return this.items[this.items.length - 1]
  }
  isEmpty() {
    return this.items.length === 0
  }
  size() {
    return this.items.length
  }
  clear() {
    this.items = []
  }
  toString() {
    return this.items.toString()
  }
}