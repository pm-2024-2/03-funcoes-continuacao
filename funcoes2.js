
function maior(p1, p2) { // função polimórfica
    if (typeof(p1) == 'number' && typeof(p2) == 'number') {
        return p1 > p2 ? p1 : p2
    }
    if (typeof(p1) == 'string' && typeof(p2) == 'string') {
        return p1.length > p2.length ? p1 : p2
    }
} 

console.log(typeof('s'))

console.log(maior())
console.log(maior(90))
console.log(maior('tads', 'informatica'))

// console.log(maior(new Date(2024, 9, 14), new Date(2024, 9, 20)))
// console.log(Color(255, 0, 0), Color(0, 0, 255))

var num1 = 50
var num2 = 9
var num3 = 76

console.log(maior(maior(num1, num2), num3))

console.log(maior(78, 13))
console.log(maior(45, 109))



