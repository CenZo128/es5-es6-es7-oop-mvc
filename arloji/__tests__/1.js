const mentionWatch = require('../1answer')
const Restriction = require('hacktiv8-restriction')

describe('Soal 1', () => {
  test('Requirement Output (50)', () => {
    const result1 = mentionWatch(["Swiss Army","Daniel Wellington", "Dublot"])
    const result2 = mentionWatch(["A","B","C","D","E"])
    const result3 = mentionWatch([])
    const result4 = mentionWatch()
    
    expect(result1).toEqual('Saya punya Swiss Army, Daniel Wellington, dan Dublot.')
    expect(result2).toEqual('Saya punya A, B, C, D, dan E.')
    expect(result3).toEqual('"Saya tidak punya arloji, trims."')
    expect(result4).toEqual('"Saya tidak punya arloji, trims."')
  })

  test('check restriction (-20)', async () => {
    const checkRestriction = new Restriction('../1answer.js');
    checkRestriction.rules = ['match', 'split', 'concat', 'search', 'pop', 'unshift', 'shift'];
    const result = await checkRestriction.readCode();
    expect(result).toBe(null);
  });

})
