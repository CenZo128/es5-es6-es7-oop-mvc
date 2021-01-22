const convert = {
    decimalToBinary : number => {
        let result = ''
        
        while(number > 0){
            result = (number%2) + result
            number = Math.floor(number/2)
            console.log(number)
        }
        return result
    },
    ToDecimal : number => {
        let result = 0
        for(let i = 0 ; i< number.length ; i++) {
            result += Math.pow(2,number.length-i-1) * Number(number[i])
        }
        return result
    }
};
console.log(convert.decimalToBinary(50))
console.log(convert.ToDecimal('1010'))
