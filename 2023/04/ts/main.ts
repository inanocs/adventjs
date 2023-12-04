function decode(message: string): string {
  const stack: string[] = []
  let currentWord = ''

  for (let char of message) {
    if (char === '(') {
      stack.push(currentWord)
      currentWord = ''
    } else if (char === ')') {
      currentWord = currentWord.split('').reverse().join('')
      currentWord = stack.pop() + currentWord
    } else {
      currentWord += char
    }
  }

  return currentWord
}
export default decode
