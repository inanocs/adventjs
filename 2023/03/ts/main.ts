function findNaughtyStep(original: string, modified: string) {
  let short: string
  let long: string

  if (original.length >= modified.length) {
    long = original
    short = modified
  } else {
    long = modified
    short = original
  }
  let i = 0
  for (const charA of long) {
    const charB = short.charAt(i)
    if (charA !== charB) return charA
    i++
  }
  return ''
}
export default findNaughtyStep
