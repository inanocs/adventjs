import maxDistance from './main'

describe('Challenge 06 - TS', () => {
  it('Test #0: Should return type "number"', () => {
    const movements: string = ''
    expect(typeof maxDistance(movements)).toBe('number')
  })

  const testCases = [
    {
      expected: 2,
      movements: '>>*<',
    },
    {
      expected: 5,
      movements: '<<<<<',
    },
    {
      expected: 2,
      movements: '<<**>>',
    },
  ]
  testCases.forEach(({ movements, expected }, idx) => {
    const testName = `Test #${idx + 1}: Should return "${expected}"`
    it(testName, () => {
      expect(maxDistance(movements)).toEqual(expected)
    })
  })
})
