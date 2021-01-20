const calculateAlay = require('../1answer')
const Restriction = require('hacktiv8-restriction')

describe('Soal 1', () => {
  test('Requirement Output (80)', () => {
    const result1 = calculateAlay([
        'Lucu sek@l! y@ng mul!@, h@h@', 
        'Hai, @ku g@nggu k@mu gak'
    ])
    
    expect(result1).toEqual([29.17, 15])
  })

  test('check restriction (-20)', async () => {
    const checkRestriction = new Restriction('../1answer.js');
    checkRestriction.rules = ['match', 'split', 'concat', 'search', 'pop', 'unshift', 'shift'];
    const result = await checkRestriction.readCode();
    expect(result).toBe(null);
  });

})
