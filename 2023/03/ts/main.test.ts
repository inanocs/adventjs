import findNaughtyStep from './main'

describe('Challenge 03 - TS', () => {
  it('Test #0: Should return type "string"', () => {
    const original: string = ''
    const modified: string = ''
    expect(typeof findNaughtyStep(original, modified)).toBe('string')
  })

  const testCases = [
    {
      expected: 'e',
      original: 'abcd',
      modified: 'abcde',
    },
    {
      expected: 'e',
      original: 'abcde',
      modified: 'abcd',
    },
    {
      expected: 'o',
      original: 'xxxx',
      modified: 'xxoxx',
    },
    {
      expected: 'f',
      original: 'stepfor',
      modified: 'stepor',
    },
    {
      expected: '',
      original: 'iiiii',
      modified: 'iiiii',
    },
  ]
  testCases.forEach(({ original, modified, expected }, idx) => {
    const testName = `Test #${idx + 1}: Should return "${expected}"`
    it(testName, () => {
      expect(findNaughtyStep(original, modified)).toEqual(expected)
    })
  })
})
