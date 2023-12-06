function maxDistance(movements: string) {
  let opMoves = 0
  let leftMoves = 0
  let rightMoves = 0
  let maxDistance = 0
  for (const movement of movements) {
    if (movement === '>') leftMoves++
    else if (movement === '<') rightMoves++
    else opMoves++
  }
  if (leftMoves >= rightMoves) {
    maxDistance = leftMoves + opMoves - rightMoves
  } else {
    maxDistance = rightMoves + opMoves - leftMoves
  }
  return Math.abs(maxDistance)
}
export default maxDistance
