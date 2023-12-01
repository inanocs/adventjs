function findFirstRepeated(gifts: number[]) {
  const watchedNums: Set<number> = new Set()
  for (const num of gifts) {
    if (watchedNums.has(num)) return num
    watchedNums.add(num)
  }
  return -1
}

export default findFirstRepeated
