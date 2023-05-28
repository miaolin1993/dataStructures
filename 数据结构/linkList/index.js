class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}
// 单向链表
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

// 双向链表
class DoubleNode extends Node {
  constructor(element) {
    super(element)
    this.prev = null
  }
}

class DoubleLinkList extends LinkedList {
  constructor() {
    super()
    this.tail = null
  }

  getHead() {
    return this.head
  }

  getTail() {
    return this.tail
  }

  push(element) {
    const node = new DoubleNode(element)
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      // 将最后一个元素的next指向新插入节点
      this.tail.next = node
      // 新插入节点的上一个是原来的最后节点
      node.prev = this.tail
      // 将现在的最后节点替换为新插入节点
      this.tail = node
    }
    this.count++
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoubleNode(element)
      let current = this.head

      // 链表头部位置插入
      if (index === 0) {
        // 如果是个空链表
        if (this.head === null) {
          this.head = node
          this.tail = node
        } else {
          // 头部插入，原头部元素上一元素指向新插入元素
          this.head.prev = node
          // 新插入元素的下一位置指向原head
          node.next = this.head
          // 更改头部元素
          this.head = node
        }

      } else if (index === this.count) {
        // 链表尾部位置插入
        // 原尾部位置下一级指向新元素
        this.tail.next = node
        // 新元素上一级指向原尾部元素
        node.prev = this.tail
        // 更改尾部元素
        this.tail = node

      } else {
        // 链表其他位置插入
        // 获取插入位置上一个元素
        const pre = this.getNodeAt(index - 1)
        // 获取插入位置当前的元素
        current = pre.next

        // 有原上级节点建立联系
        pre.next = node
        node.prev = pre
        // 与原当前节点建立联系
        node.next = current
        current.prev = node
      }

      this.count++
      return node
    }
    return null
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      // 删除头部
      if (index === 0) {
        // 将头部元素指向原来头部元素的next
        this.head = this.head.next
        if (this.count === 1) {
          // 链表只有一个元素
          this.tail = null
        } else {
          this.head.prev = null
        }
      } else if (index === this.count - 1) {
        const pre = this.tail.prev
        pre.next = null
        this.tail = pre
      } else {
        const pre = this.getNodeAt(index - 1)
        current = pre.next
        pre.next = current.next
        current.next.prev = pre
      }
      this.count--
    }
  }
}
// 循环链表
class CyclicLinkList extends LinkedList {
  constructor() {
    super()
  }

  push(element) {
    const node = new Node(element)
    if (this.head === null) {
      this.head = node
      this.head.next = this.head
    } else {
      const last = this.getNodeAt(this.size() - 1)
      last.next = node
      node.next = this.head
    }
    this.count++
    return node
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)
      const last = this.getNodeAt(this.size() - 1)
      let current = this.head
      // 头部插入
      if (index === 0) {
        if (this.head === null) {
          this.head = node
          this.head.next = this.head
        } else {
          this.head = node
          this.head.next = current
          last.next = this.head
        }
      } else if (index === this.count) {
        // 尾部插入
        last.next = node
        node.next = this.head
      } else {
        // 中间插入
        const pre = this.getNodeAt(index - 1)
        current = pre.next
        pre.next = node
        node.next = current
      }
      this.count++
      return node
    }
    return null
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      const last = this.getNodeAt(this.size() - 1)
      let current = this.head

      if (index === 0) {
        // 只有一个元素时
        if (this.count === 1) {
          this.head.next = null
          this.head = null
        } else {
          this.head = current.next
          last.next = this.head
        }
      } else if (index === this.count - 1) {
        // 尾部删除
        const pre = this.getNodeAt(index - 1)
        pre.next = this.head
      } else {
        // 中间删除
        const pre = this.getNodeAt(index - 1)
        current = pre.next
        pre.next = current.next
      }
      this.count--
      return true
    }
    return null
  }
}