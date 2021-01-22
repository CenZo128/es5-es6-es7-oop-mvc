let groups = [
    {
        name: "Twoosh",
        price: 500
    },
    {
        name: "Itsy",
        price: 175
    },
    {
        name: "GET7",
        price: 550,
    },
    {
        name: "Whitepink",
        price: 250
    },
    {
        name: "JYV",
        price: 300
    }
]


function hireGroup(groups, budget) {
    // code di sini
    if (!budget) return `There's no budget`
    let result = {
        performances : {}
    }
    let i = 0
    let flag = 0
    
    while (budget) {
        if (budget >= groups[i].price) {
            if (result['performances'][groups[i].name]) {
                result['performances'][groups[i].name] += 1
                budget -= groups[i].price
            } else {
                result['performances'][groups[i].name] = 1
                budget -= groups[i].price
            }
        }else{
            flag++
        }
        i++;
        if(flag === groups.length) break
        if (i === groups.length) {
            i = 0;
            flag= 0 
        }
    }
    result.exchange = budget
    return result
}

console.log(hireGroup(groups, 5350))
// {
//     performances : {
//         Twoosh : 3,
//         Itsy : 3,
//         GET7 : 3,
//         Whitepink : 3
//         JYV : 3
//     },
//     exchange : 25
// }

console.log(hireGroup(groups, 1000))
// {
//     performances : {
//         Twoosh : 1,
//         Itsy : 1,
//         Whitepink : 1
//     },
//     exchange : 75
// }
console.log(hireGroup(groups, 350))
// {
//     performances : {
//         Itsy : 2, 
//     },
//     exchange : 0
// }
console.log(hireGroup(groups, 100))
// {
//     performances :  {}
//     exchange : 100
// }
console.log(hireGroup(groups))
// There's no budget.
module.exports = hireGroup