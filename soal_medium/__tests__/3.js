const Restriction = require('hacktiv8-restriction');
const tukarPasangan = require('../3.js');

describe('Soal 3', () => {
  test('Requirement output (100)', () => {
    expect(tukarPasangan([
      ['Bayu', '', 'Aming'],
      ['Dzakki', '', 'Mimi Peri'],
    ], [1, 0])).toEqual([
      [ 'Bayu', 'Mimi Peri', 'Aming' ],
      [ 'Dzakki', 'Aming', 'Mimi Peri' ]
    ]);

    expect(tukarPasangan([
      ['Bayu', '', 'Aming'],
      ['Ardi', '', 'Taylor Swift'],
      ['Fiqi', '', 'Lisa'],
      ['Dzakki', '', 'Mimi Peri'],
      ['Josep', '', 'Power Ranger Pink'],
      ['Risan', '', 'Tinky Winky']
    ], [0, 1, 2, 3, 4, 5])).toEqual([
      [ 'Bayu', 'Aming', 'Aming' ],
      [ 'Ardi', 'Taylor Swift', 'Taylor Swift' ],
      [ 'Fiqi', 'Lisa', 'Lisa' ],
      [ 'Dzakki', 'Mimi Peri', 'Mimi Peri' ],
      [ 'Josep', 'Power Ranger Pink', 'Power Ranger Pink' ],
      [ 'Risan', 'Tinky Winky', 'Tinky Winky' ]
    ]);

    expect(tukarPasangan([
      ['Bayu', '', 'Aming'],
      ['Ardi', '', 'Taylor Swift'],
      ['Fiqi', '', 'Lisa'],
      ['Dzakki', '', 'Mimi Peri'],
      ['Josep', '', 'Power Ranger Pink'],
      ['Risan', '', 'Tinky Winky']
    ], [5, 4, 3, 2, 1, 0])).toEqual([
      [ 'Bayu', 'Tinky Winky', 'Aming' ],
      [ 'Ardi', 'Power Ranger Pink', 'Taylor Swift' ],
      [ 'Fiqi', 'Mimi Peri', 'Lisa' ],
      [ 'Dzakki', 'Lisa', 'Mimi Peri' ],
      [ 'Josep', 'Taylor Swift', 'Power Ranger Pink' ],
      [ 'Risan', 'Aming', 'Tinky Winky' ]
    ]);

    expect(tukarPasangan([
      ['Bayu', '', 'Aming'],
      ['Ardi', '', 'Taylor Swift'],
      ['Fiqi', '', 'Lisa'],
      ['Dzakki', '', 'Mimi Peri'],
      ['Josep', '', 'Power Ranger Pink'],
      ['Risan', '', 'Tinky Winky'],
      ['Bayu', '', 'Chucky'],
      ['Acong', '', 'Anabelle'],
      ['Djoko', '', 'Sub Zero'],
      ['Sitorus', '', 'Shao Kahn'],
      ['Aldo', '', 'Yoona'],
      ['Reynold', '', 'Cloud']
    ], [6, 5, 2, 3, 8, 9, 0, 1, 4, 7, 10, 11])).toEqual([
      [ 'Bayu', 'Chucky', 'Aming' ],
      [ 'Ardi', 'Tinky Winky', 'Taylor Swift' ],
      [ 'Fiqi', 'Lisa', 'Lisa' ],
      [ 'Dzakki', 'Mimi Peri', 'Mimi Peri' ],
      [ 'Josep', 'Sub Zero', 'Power Ranger Pink' ],
      [ 'Risan', 'Shao Kahn', 'Tinky Winky' ],
      [ 'Bayu', 'Aming', 'Chucky' ],
      [ 'Acong', 'Taylor Swift', 'Anabelle' ],
      [ 'Djoko', 'Power Ranger Pink', 'Sub Zero' ],
      [ 'Sitorus', 'Anabelle', 'Shao Kahn' ],
      [ 'Aldo', 'Yoona', 'Yoona' ],
      [ 'Reynold', 'Cloud', 'Cloud' ]
    ]);

    expect(tukarPasangan([
      ['Bayu', '', 'Aming'],
      ['Ardi', '', 'Taylor Swift'],
      ['Fiqi', '', 'Lisa'],
      ['Dzakki', '', 'Mimi Peri'],
      ['Josep', '', 'Power Ranger Pink'],
      ['Risan', '', 'Tinky Winky'],
      ['Bayu', '', 'Chucky'],
      ['Acong', '', 'Anabelle'],
      ['Djoko', '', 'Sub Zero'],
      ['Sitorus', '', 'Shao Kahn'],
      ['Aldo', '', 'Yoona'],
      ['Reynold', '', 'Cloud'],
      ['Zaenal', '', 'Scorpion'],
      ['Sugeng', '', 'Harry Potret'],
      ['Kaiba', '', 'Blanka'],
      ['Sukirman', '', 'Sasuke'],
      ['Bernad', '', 'Naruto'],
      ['Renhard', '', 'Golden Retriever']
    ], [10, 11, 2, 3, 12, 0, 4, 5, 15, 16, 1, 6, 7, 8, 13, 9, 14, 17])).toEqual([
      [ 'Bayu', 'Yoona', 'Aming' ],
      [ 'Ardi', 'Cloud', 'Taylor Swift' ],
      [ 'Fiqi', 'Lisa', 'Lisa' ],
      [ 'Dzakki', 'Mimi Peri', 'Mimi Peri' ],
      [ 'Josep', 'Scorpion', 'Power Ranger Pink' ],
      [ 'Risan', 'Aming', 'Tinky Winky' ],
      [ 'Bayu', 'Power Ranger Pink', 'Chucky' ],
      [ 'Acong', 'Tinky Winky', 'Anabelle' ],
      [ 'Djoko', 'Sasuke', 'Sub Zero' ],
      [ 'Sitorus', 'Naruto', 'Shao Kahn' ],
      [ 'Aldo', 'Taylor Swift', 'Yoona' ],
      [ 'Reynold', 'Chucky', 'Cloud' ],
      [ 'Zaenal', 'Anabelle', 'Scorpion' ],
      [ 'Sugeng', 'Sub Zero', 'Harry Potret' ],
      [ 'Kaiba', 'Harry Potret', 'Blanka' ],
      [ 'Sukirman', 'Shao Kahn', 'Sasuke' ],
      [ 'Bernad', 'Blanka', 'Naruto' ],
      [ 'Renhard', 'Golden Retriever', 'Golden Retriever' ]
    ]);
  });
  
  test('check restriction (-20)', async () => {
    const checkRestriction = new Restriction('../3.js');
    checkRestriction.rules = ['match', 'split', 'concat', 'search', 'pop', 'unshift', 'shift'];
    const result = await checkRestriction.readCode();
    expect(result).toBe(null);
  });
});
