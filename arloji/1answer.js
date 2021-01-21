// PSEUDOCODE
/**
 * BEGIN mentionWatch WITH watches as PARAMETER
 * STORE string WITH 'saya punya '
 * 
 * IF watches === true AND watches.length > 0 THEN
 *      FOR i from 0 to LENGTH of watches
 *          IF i === LENGTH of watches MINUS 1 THEN  
 *              string += `dan watches[i].`
 *          ELSE
 *              string += `watches[i], `
 *          ENDIF
 * ELSE
 *      RETURN 'Saya tidak punya arloji, trims' 
 * ENDIF
 * END
 */

function mentionWatch(watches) {
    let string = 'Saya punya '
    if (watches && watches.length > 0) {
        for (let i = 0; i < watches.length; i++) {
            if (i === watches.length - 1) {
                string += `dan ${watches[i]}.`
            } else {
                string += `${watches[i]}, `
            }
        }
    } else {
        return "Saya tidak punya arloji, trims."
    }
    return string
}

console.log(mentionWatch(["Swiss Army", "Daniel Wellington", "Dublot"]))
console.log(mentionWatch(["A", "B", "C", "D", "E"]))
console.log(mentionWatch([]))
console.log(mentionWatch())

module.exports = mentionWatch