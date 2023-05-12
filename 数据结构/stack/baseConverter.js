import { Stack } from './utils.js'

/**
 * 进制转换函数
 * @param {number} num 12
 * @param {number} base 2
 * @returns {string} '187F9'
 */
function baseConverter(num, base) {
  const remStack = new Stack()
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let rem
  let number = num
  let binaryString = ''
  if (!(base >= 2 && base <= 36)) return ''
  // 数据除以进制获取余数， 只要大于0就持续入栈
  while (number > 0) {
    rem = Math.floor(number % base)
    remStack.push(rem)
    number = Math.floor(number / base)
  }
  // 完成全部入栈后，从栈顶开始取出元素拼接
  while (!remStack.isEmpty()) {
    binaryString += digits[remStack.pop()]
  }

  console.log(`${num}转换的${base}进制结果是${binaryString}`)
  return binaryString
}

baseConverter(50, 2)

// 50 110010
