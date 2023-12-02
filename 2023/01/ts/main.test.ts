import findFirstRepeated from './main'

describe('Challenge 01 - TS', () => {
  it('Test #0: Should return type "number"', () => {
    const input: Array<number> = []
    expect(typeof findFirstRepeated(input)).toBe('number')
  })

  const testCases = [
    {
      expected: 3,
      input: [2, 1, 3, 5, 3, 2],
    },
    {
      expected: 2,
      input: [2, 2],
    },
    {
      expected: -1,
      input: [2, 4, 3, 5, 1],
    },
    {
      expected: -1,
      input: [1],
    },
    {
      expected: -1,
      input: [],
    },
    {
      expected: -1,
      input: [10, 20, 30],
    },
    {
      expected: 2,
      input: [5, 1, 2, 3, 2, 5, 1],
    },
    {
      expected: 20,
      input: [12, 20, 30, 11, 20, 12],
    },
  ]
  testCases.forEach(({ input, expected }, idx) => {
    const testName = `Test #${idx + 1}: Should return "${expected}"`
    it(testName, () => {
      expect(findFirstRepeated(input)).toEqual(expected)
    })
  })
})
