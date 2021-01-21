const checkAdmission = require('../2')
const Restriction = require('hacktiv8-restriction')

describe('Soal 2', () => {
  test('Requirement Output (100)', () => {
    const result1 = checkAdmission({
        name: 'Raline',
        dob: '10/05/1987',
        date: '14/09/2020',
        scores: [85,70,95]
    })
    const result2 = checkAdmission({
        name: 'Dewi',
        dob: '10/05/1997',
        date: '14/09/2020',
        scores: [60,50,50]
    })

    const result3 = checkAdmission({
        name: 'Arya',
        dob: '09/09/1999',
        date: `07/09/2020`,
        scores: [65,65,65]
    })

    expect(result1).toEqual({ 
       name: 'Raline',
       id  : '20098705',
       status: 'pass'
    })

    expect(result2).toEqual({ 
       name: 'Dewi',
       status: 'fail'
    })

    expect(result3).toEqual({
        name: 'Arya', 
        id: '20099909', 
        status: 'pass' 
    })
  })

  test('check restriction (-20)', async () => {
    const checkRestriction = new Restriction('../2.js');
    checkRestriction.rules = ['match', 'split', 'concat', 'search', 'pop', 'unshift', 'shift'];
    const result = await checkRestriction.readCode();
    expect(result).toBe(null);
  });

})
