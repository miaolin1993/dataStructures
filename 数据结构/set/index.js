class MySet {
  constructor() {
    this.items = {}
  }

  has(item) {
    return item in this.items
  }

  add(item) {
    if (this.has(item)) return false
    return this.items[item] = item
  }

  remove(item) {
    if (this.has(item)) {
      return delete this.items[item]
    }
    return false
  }

  size() {
    return Object.keys(this.items).length
  }

  keys() {
    return Object.keys(this.items)
  }

  values() {
    return Object.values(this.items)
  }
}