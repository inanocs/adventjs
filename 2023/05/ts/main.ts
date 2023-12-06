function cyberReindeer1(road: string, time: number): Array<string> {
  const roadStateList: Array<string> = [road]
  let currentIdx = 0
  const reindeer = 'S'
  const roadChar = '.'
  const closedBarrier = '|'
  const openBarrier = '*'
  const barrierStack: Array<string> = []
  for (let timeUnit = 1; timeUnit < time; timeUnit++) {
    let lastState = roadStateList[roadStateList.length - 1]
    if (timeUnit === 5) {
      lastState = lastState.replace(/\|/gm, openBarrier)
    }
    const roadState = lastState.split('')
    let next = roadState[currentIdx + 1] ?? roadChar
    if (next === closedBarrier) {
      roadStateList.push(lastState)
      continue
    }
    if (barrierStack.length > 0) {
      next = barrierStack.pop() ?? openBarrier
    } else if (next === openBarrier) {
      barrierStack.push(next)
      next = roadChar
    }
    roadState[currentIdx + 1] = reindeer
    roadState[currentIdx] = next
    currentIdx++
    roadStateList.push(roadState.join(''))
  }
  return roadStateList
}

function cyberReindeer2(road: string, time: number) {
  const roadStateList: Array<string> = [road]
  const TIMEOUT = 5
  let currentIdx = 0
  let currentRoad = ''
  for (let timeUnit = 1; timeUnit < time; timeUnit++) {
    road = timeUnit === TIMEOUT ? road.replace(/\|/g, '*') : road
    const nextPos = currentIdx + 1
    if (road[nextPos] !== '|') {
      currentIdx++
      currentRoad = `.${road.slice(1, currentIdx)}S${road.slice(nextPos + 1)}`
    }
    roadStateList.push(currentRoad)
  }
  return roadStateList
}

export { cyberReindeer1, cyberReindeer2 }
