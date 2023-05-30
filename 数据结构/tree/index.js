class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

const compareEnum = {
  less: 0,
  big: 1,
  equal: 2,
}

class BST {
  constructor() {
    this.root = null
  }
  // 用来对比两个值大小
  compare(a, b) {
    if (a === b) return compareEnum.equal
    return a < b ? compareEnum.big : compareEnum.less
  }

  insertTo(node, key) {
    if (this.compare(node.key, key) === compareEnum.less) {
      if (node.left === null) {
        node.left = new Node(key)
      } else {
        this.insertTo(node.left, key)
      }
    }

    if (this.compare(node.key, key) === compareEnum.big) {
      if (node.right === null) {
        node.right = new Node(key)
      } else {
        this.insertTo(node.right, key)
      }
    }
  }

  insert(key) {
    if (!this.root) return this.root = new Node(key)
    // 非空二叉树
    this.insertTo(this.root, key)
  }
  // 中序遍历
  inOrder(callback) {
    this.inOrderTo(this.root, callback)
  }

  inOrderTo(node, callback) {
    if (node) {
      this.inOrderTo(node.left, callback)
      callback(node)
      this.inOrderTo(node.right, callback)
    }
  }
  // 先序遍历
  preOrder(callback) {
    this.preOrderTo(this.root, callback)
  }

  preOrderTo(node, callback) {
    if (node) {
      callback(node)
      this.preOrderTo(node.left, callback)
      this.preOrderTo(node.right, callback)
    }
  }
  // 后序遍历
  lastOrder(callback) {
    this.lastOrderTo(this.root, callback)
  }

  lastOrderTo(node, callback) {
    if (node) {
      this.lastOrderTo(node.left, callback)
      this.lastOrderTo(node.right, callback)
      callback(node)
    }
  }

  min() {
    return this.minNode(this.root)
  }

  minNode(node) {
    let current = node
    while(current && current.left) {
      current = current.left
    }
    return current
  }

  max() {
    let current = this.root
    while(current && current.right) {
      current = current.right
    }
    return current
  }

  search(key) {
    return this.searchNode(this.root, key)
  }

  searchNode(root, key) {
    if (!root) return false
    if (this.compare(root.key, key) === compareEnum.less) {
      return this.searchNode(root.left, key)
    } else if (this.compare(root.key, key) === compareEnum.big) {
      return this.searchNode(root.right, key)
    } else {
      return true
    }
  }

  remove(key) {
    this.root = this.removeNode(this.root, key)
  }

  removeNode(root, key) {
    if (!root) return null
    if (this.compare(root.key, key) === compareEnum.less) {
      root.left = this.removeNode(root.left, key)
      return root
    } else if (this.compare(root.key, key) === compareEnum.big) {
      root.right = this.removeNode(root.right, key)
      return root
    } else {
      if (!root.left && !root.right) {
        root = null
        return root
      }

      if (!root.left) {
        root = root.right
        return root
      } else if (!root.right) {
        root = root.left
        return root
      }

      const target = this.minNode(root.right)
      root.key = target.key
      root.right = this.removeNode(root.right, target.key)
      return root
    }
  }
}