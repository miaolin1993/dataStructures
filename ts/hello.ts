// 什么时候不需要声明类型？声明了变量但没有赋值时
let myName:string
myName = 'lx'

interface Person {
  name: string,
  age: number,
}

const lx: Person = {
  name: 'lx',
  age: 28,
}

function printName(person: Person) {
  console.log(person.name)
}

// 这个T属于泛型，可以动态指定传入的类型
interface Comparable<T> {
  compareTo(b: T):number
}

class MyObject implements Comparable<MyObject> {
  age: number
  compareTo(b: MyObject): number {
    if (this.age === b.age) return 0
  }
}

const friends:Person[] = [
  { name: 'john', age: 30 },
  { name: 'marry', age: 12 },
  { name: 'ana', age: 21 },
  { name: 'wow', age: 29 },
  { name: 'ppx', age: 7 },  
]