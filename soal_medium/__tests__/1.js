const tembakTarget = require('../1')
const Restriction = require('hacktiv8-restriction')

describe('Soal 1', () => {
  test('Requirement Output (80)', () => {
    const result1 = tembakTarget(["S", " ", " ", " ", " ", "T"])
    const result2 = tembakTarget(["S", " ", "P", "P", " ", "T"])
    const result3 = tembakTarget(["S", " ", "B", "P", " ", "T"])
    const result4 = tembakTarget(["S", "P", " ", " ", "B", "T"])
    const result5 = tembakTarget(["S", "P", " ", " ", " ", "T"])
    const result6 = tembakTarget(["S", "P", "P", "P", " ", "T"])



    expect(result1).toEqual("target terkena tembakan")
    expect(result2).toEqual("tembakan menembus 2 pohon dan target terkena tembakan")
    expect(result3).toEqual("tembakan tidak menembus batu dan target tidak terkena tembakan")
    expect(result4).toEqual("tembakan tidak menembus batu dan target tidak terkena tembakan")
    expect(result5).toEqual("tembakan menembus 1 pohon dan target terkena tembakan")
    expect(result6).toEqual("tembakan tidak menembus 3 pohon dan target tidak terkena tembakan")
  })

  test('check restriction (-20)', async () => {
    const checkRestriction = new Restriction('../1.js');
    checkRestriction.rules = ['match', 'split', 'concat', 'search', 'pop', 'unshift', 'shift'];
    const result = await checkRestriction.readCode();
    expect(result).toBe(null);
  });

})
