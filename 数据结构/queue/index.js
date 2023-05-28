class Queue {
  #item = {}
  #frontCount = 0
  #count = 0

  enqueue(item) {
    this.#item[this.#count] = item
    this.#count++
  }
  dequeue() {
    if (this.isEmpty()) return
    const res = this.#item[this.#frontCount] // 取出头部元素
    delete this.#item[this.#frontCount] // 删除头部元素
    this.#frontCount++ // 向后错一位保证下次取到的是最新的头部元素
    return res
  }
  // 返回队列头
  front() {
    return this.#item[this.#frontCount]
  }
  isEmpty() {
    return this.size() === 0
  }
  size() {
    return this.#count - this.#frontCount
  }
  clear() {
    this.#item = {}
    this.#frontCount = 0
    this.#count = 0
  }
  toString() {
    let str = ''
    for (let i = this.#frontCount;i < this.#count; i++) {
      str += (this.#item[i] + ' ')
    }
    return str.trimEnd()
  }
}