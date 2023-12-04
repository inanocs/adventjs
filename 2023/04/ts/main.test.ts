import decode from './main'

describe('Challenge 03 - TS', () => {
  it('Test #0: Should return type "string"', () => {
    const message: string = ''
    expect(typeof decode(message)).toBe('string')
  })

  const testCases = [
    // {
    //   expected: 'hola mundo',
    //   message: 'hola (odnum)',
    // },
    // {
    //   expected: 'hello world!',
    //   message: '(olleh) (dlrow)!',
    // },
    {
      expected: 'santaclaus',
      message: 'sa(u(cla)atn)s',
    },
    // {
    //   expected: 'santa',
    //   message: '((nta)(sa))',
    // },
  ]
  testCases.forEach(({ message, expected }, idx) => {
    const testName = `Test #${idx + 1}: Should return "${expected}"`
    it(testName, () => {
      expect(decode(message)).toEqual(expected)
    })
  })
})
