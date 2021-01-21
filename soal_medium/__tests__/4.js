const Restriction = require('hacktiv8-restriction');
let fileName = '../4.js'
const pilihMakanan = require(fileName);

describe('Soal 4', () => {
    let menu1 = [
        ["pisang", 100],
        ["coklat", 200],
        ["sapi panggang", 300]
    ]
    let menu2 = [
        ["a", 100],
        ["a b c d", 400],
        ["a b c d e", 500],
        ["a b", 200],
        ["a b c", 300]
    ]

    test('Cek alergi (25)', () => {
        expect(pilihMakanan(menu1, ['pisang'], 5000)).toEqual(['coklat','sapi panggang'])
        expect(pilihMakanan(menu1, ['coklat'], 5000)).toEqual(['pisang','sapi panggang'])
        expect(pilihMakanan(menu1, ['sapi panggang'], 5000)).toEqual(['pisang','coklat'])
        expect(pilihMakanan(menu1, ['pisang','sapi panggang'], 5000)).toEqual(['coklat'])
        expect(pilihMakanan(menu1, ['coklat','sapi panggang'], 5000)).toEqual(['pisang'])
        expect(pilihMakanan(menu1, ['coklat','pisang'], 5000)).toEqual(['sapi panggang'])
        expect(pilihMakanan(menu1, ['sapi panggang','coklat','pisang'], 5000)).toEqual(['masak di rumah'])
        
        expect(pilihMakanan(menu2, ['a'], 500)).toEqual(['a b c d', 'a b c d e', 'a b','a b c',])
        expect(pilihMakanan(menu2, ['a b'], 500)).toEqual(['a','a b c d', 'a b c d e','a b c'])
    });

    test('Cek uang (25)', () => {
        expect(pilihMakanan(menu1, [], 300)).toEqual(['pisang','coklat','sapi panggang'])
        expect(pilihMakanan(menu1, [], 200)).toEqual(['pisang','coklat'])
        expect(pilihMakanan(menu1, [], 100)).toEqual(['pisang'])
        expect(pilihMakanan(menu1, [], 50)).toEqual(['masak di rumah'])

        expect(pilihMakanan(menu2, [], 200)).toEqual(['a','a b'])
        expect(pilihMakanan(menu2, [], 400)).toEqual(['a','a b c d','a b','a b c'])
    });

    test('Cek alergi dan uang (50)', () => { 
        expect(pilihMakanan(menu1, ['pisang'], 200)).toEqual(['coklat'])
        expect(pilihMakanan(menu1, ['coklat'], 200)).toEqual(['pisang'])
        expect(pilihMakanan(menu1, ['sapi panggang'], 200)).toEqual(['pisang','coklat'])
        expect(pilihMakanan(menu1, ['pisang','sapi panggang'], 200)).toEqual(['coklat'])
        expect(pilihMakanan(menu1, ['coklat','sapi panggang'], 200)).toEqual(['pisang'])
        expect(pilihMakanan(menu1, ['coklat','pisang'], 200)).toEqual(['masak di rumah'])
        expect(pilihMakanan(menu1, ['sapi panggang','coklat','pisang'], 200)).toEqual(['masak di rumah'])
        
        expect(pilihMakanan(menu1, ['pisang'], 100)).toEqual(['masak di rumah'])
        expect(pilihMakanan(menu1, ['coklat'], 100)).toEqual(['pisang'])
        expect(pilihMakanan(menu1, ['sapi panggang'], 100)).toEqual(['pisang'])
        expect(pilihMakanan(menu1, ['pisang','sapi panggang'], 100)).toEqual(['masak di rumah'])
        expect(pilihMakanan(menu1, ['coklat','sapi panggang'], 100)).toEqual(['pisang'])
        expect(pilihMakanan(menu1, ['coklat','pisang'], 100)).toEqual(['masak di rumah'])
        expect(pilihMakanan(menu1, ['sapi panggang','coklat','pisang'], 100)).toEqual(['masak di rumah'])

        expect(pilihMakanan(menu1, ['pisang'], 50)).toEqual(['masak di rumah'])
        expect(pilihMakanan(menu1, ['coklat'], 50)).toEqual(['masak di rumah'])
        expect(pilihMakanan(menu1, ['sapi panggang'], 50)).toEqual(['masak di rumah'])
        expect(pilihMakanan(menu1, ['pisang','sapi panggang'], 50)).toEqual(['masak di rumah'])
        expect(pilihMakanan(menu1, ['coklat','sapi panggang'], 50)).toEqual(['masak di rumah'])
        expect(pilihMakanan(menu1, ['coklat','pisang'], 50)).toEqual(['masak di rumah'])
        expect(pilihMakanan(menu1, ['sapi panggang','coklat','pisang'], 50)).toEqual(['masak di rumah'])

        expect(pilihMakanan(menu2, ['a', 'a b'], 200)).toEqual(['masak di rumah'])
        expect(pilihMakanan(menu2, ['a b c'], 400)).toEqual(['a','a b c d','a b'])
    });

    test('check restriction (-30)', async () => {
        const checkRestriction = new Restriction(fileName);
        checkRestriction.rules = ['match', 'split', 'concat', 'search', 'unshift', 'shift'];
        const result = await checkRestriction.readCode();
        expect(result).toBe(null);
    });
});
