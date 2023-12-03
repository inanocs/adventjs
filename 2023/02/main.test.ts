import manufacture from './main'

describe('Challenge 02 - TS', () => {
  it('Test #0: Should return type "array"', () => {
    const gifts: Array<string> = []
    const materials = ''
    expect(Array.isArray(manufacture(gifts, materials))).toBe(true)
  })

  const testCases = [
    {
      expected: ['tren', 'oso'],
      gifts: ['tren', 'oso', 'pelota'],
      materials: 'tronesa',
    },
    {
      expected: [],
      gifts: ['coche', 'muñeca', 'balon'],
      materials: 'ocmuñalb',
    },
    {
      expected: [],
      gifts: ['patineta', 'robot', 'libro'],
      materials: 'nopor',
    },
    {
      expected: [],
      gifts: [],
      materials: 'letras',
    },
  ]
  testCases.forEach(({ gifts, materials, expected }, idx) => {
    const testName = `Test #${idx + 1}: Should return "[${expected}]"`
    it(testName, () => {
      expect(manufacture(gifts, materials)).toEqual(expected)
    })
  })
})
