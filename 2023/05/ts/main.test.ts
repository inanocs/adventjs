import { cyberReindeer1, cyberReindeer2 } from './main'

describe('Challenge 05 - TS', () => {
  it('Test #0: Should return type "array"', () => {
    const road: string = ''
    const time = 1
    expect(Array.isArray(cyberReindeer1(road, time))).toBe(true)
    expect(Array.isArray(cyberReindeer2(road, time))).toBe(true)
  })

  const testCases = [
    {
      expected: [
        'S..|...|..',
        '.S.|...|..',
        '..S|...|..',
        '..S|...|..',
        '..S|...|..',
        '...S...*..',
        '...*S..*..',
        '...*.S.*..',
        '...*..S*..',
        '...*...S..',
      ],
      road: 'S..|...|..',
      time: 10,
    },
    {
      expected: ['S.|.', '.S|.', '.S|.', '.S|.'],
      road: 'S.|.',
      time: 4,
    },
    {
      expected: [
        'S.|.|.',
        '.S|.|.',
        '.S|.|.',
        '.S|.|.',
        '.S|.|.',
        '..S.*.',
        '..*S*.',
      ],
      road: 'S.|.|.',
      time: 7,
    },
    {
      expected: ['S.|..', '.S|..', '.S|..', '.S|..', '.S|..', '..S..'],
      road: 'S.|..',
      time: 6,
    },
    {
      expected: [
        'S.|.|.|......|.||.........',
        '.S|.|.|......|.||.........',
        '.S|.|.|......|.||.........',
        '.S|.|.|......|.||.........',
        '.S|.|.|......|.||.........',
        '..S.*.*......*.**.........',
        '..*S*.*......*.**.........',
        '..*.S.*......*.**.........',
      ],
      road: 'S.|.|.|......|.||.........',
      time: 8,
    },
  ]
  testCases.forEach(({ road, time, expected }, idx) => {
    const testName = `Test #${idx + 1}: Should return "[${expected}]"`
    it(testName, () => {
      expect(cyberReindeer1(road, time)).toEqual(expected)
      expect(cyberReindeer2(road, time)).toEqual(expected)
    })
  })
})
