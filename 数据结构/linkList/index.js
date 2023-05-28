class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.count = 0
    this.head = null
  }

  push(data) {
    const node = new Node(data)
    if (this.head === null) {
      this.head = node
    } else {
      // 储存当前链头
      let current = this.head
      // 一路向下查找到最后一位
      while (current.next !== null) {
        // 此时的current就是最后一个节点
        current = current.next
      }
      // 将当前节点挂载到最后一个节点的next上
      current.next = node
    }
    this.count++
  }
  // 指定位置删除
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        // 将头部元素指向原来头部的next，就相当于删掉了原来的头部
        this.head = this.head.next
      } else {
        let pre = this.getNodeAt(index - 1)
        current = pre.next
        // 保存两个值，一个是当前节点，一个是上一个节点
        // 每次循环进行，将当前节点赋值给上一个节点
        // 同时将当前节点的值变更为当前节点的next值
        // for (let i = 0; i < index; i++) {
        //   pre = current
        //   current = current.next
        // }
        // 循环结束时，将上一个节点的next指向当前节点的next，就相当于直接删除了当前节点
        pre.next = current.next
      }
      this.count--
      return current.element
    }
    return
  }
  // 根据index取出对应位置元素
  getNodeAt(index) {
    if (index >= 0 && index < this.count) {
      let node = this.head
      for (let i = 0; i < index; i++) {
        node = node.next
      }
      return node
    }
    return
  }
  // 根据传入的值获取到索引位置
  findIndex(element) {
    if (element) {
      let current = this.head
      for (let i = 0; i < this.count; i++) {
        if (JSON.stringify(current.element) === JSON.stringify(element)) return i
        current = current.next
      }
      throw new Error('传入的值在链表中不存在')
    }
  }
  // 根据值删除节点
  remove(element) {
    const index = this.findIndex(element)
    return this.removeAt(index)
  }

  // 指定位置插入
  insert(element, index) {

    if (index >= 0 && index <= this.count) {
      const node = new Node(element)
      if (index === 0) {
        const current = this.head
        node.next = current
        this.head = node
      } else {
        // 获取插入位置的上一个元素
        const pre = this.getNodeAt(index - 1)
        const current = pre.next
        // 将插入元素的next指向原来位置的元素
        node.next = current
        // 将上一位置next指向插入元素
        pre.next = node
      }
      this.count++
      return node
    }
    return null
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.size() === 0
  }

  getHead() {
    return this.head
  }

}