// # 082 : Currying in JS :

// Ex. 1 :

// function add (a, b, c) {
//     return a + b + c
// }

// //add (41, 52, 63)

// function Currying (a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c
//         }
//     }
// }

// var result = Currying (41) (52) (63)
// console.log (result)


// 083 : Function Composition :

function print (inp) {
    console.log (inp)
}

function multiplyByFive (n) {
    return n * 5
}

function add (a , b) {
    return a + b
}

print (multiplyByFive (add (3 , 5)))



