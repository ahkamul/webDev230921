//  # 079 : Sort, Some and Every Function in JS :

// Ex. 1 :

// var persons = [
//     {
//         name : 'A',
//         age : 24
//     },
//     {
//         name : 'B',
//         age : 19
//     },
//     {
//         name : 'C',
//         age : 26
//     },
//     {
//         name : 'D',
//         age : 21
//     }
// ]

// var arr = [4, 8, 1, 6, 7, 9, -2, 4, 0, 3, -4, 5, 6, 8, 2, 1, -8, 7]

// arr.sort ()
// console.log (arr)

// persons.sort ()
// console.log (persons)

// Ex. 2 (Uses of Call Back Function): 

// Ascending Order : 

// var arr = [4, 8, 1, 6, 7, 9, -2, 4, 0, 3, -4, 5, 6, 8, 2, 1, -8, 7]

// arr.sort (function (a , b) {
//     if (a > b) {
//         return 1
//     } else if (a < b) {
//         return -1
//     } else {
//         return 0
//     }
// })

// console.log (arr)


// Descending Order : 

// var arr = [4, 8, 1, 6, 7, 9, -2, 4, 0, 3, -4, 5, 6, 8, 2, 1, -8, 7]

// arr.sort (function (a , b) {
//     if (a >  b) {
//         return -1
//     } else if (a < b) {
//         return 1
//     } else {
//         return 0
//     }
// })

// console.log (arr)


// Ex. 3


// var persons = [
//     {
//         name : 'A',
//         age : 24
//     },
//     {
//         name : 'B',
//         age : 19
//     },
//     {
//         name : 'C',
//         age : 26
//     },
//     {
//         name : 'D',
//         age : 21
//     }
// ]

// persons.sort (function (a , b){
//     if (a.age > b.age) {
//         return 1
//     } else if (a.age < b.age) {
//         return -1
//     } else {
//         return 0
//     }
// })

// console.log (persons)


// Ex. 4. 

// var arr = [4, 8, 1, 6, 7, 9, 4, 0, 3, 5, 6, 8, 2, 1, 7]

// var res1 = arr.every (function (value) {
//     return value % 2 === 0
// })

// console.log (res1)


// var res2 = arr.every (function (value) {
//     return value >= 0
// })

// console.log (res2)


// Ex. 5 


// var arr = [4, 8, 1, 6, 7, 9, 4, 0, -1, 3, 5, 6, 8, 2, 1, 7]

// var res3 = arr.some (function (value) {
//     return value % 2 === 1
// })

// console.log (res3)


// var res4 = arr.some (function (value) {
//     return value < 0
// })

// console.log (res4)


// # 080 : Return a Function from Another Function in JS : 

// Ex. 1 :

// function greet (msg) {
//     function greetings (name) {
//         return msg + ', ' + name + '!'
//     }
//     return greetings
// }

// var gm = greet ('Good Morning')
// //console.log (typeof gm)

// var msg = gm ('Amima')
// console.log (msg)

// I haven't understood how it happens. 


// Ex. 2. 

// function base (b) {
//     return function (n) {
//         var result = 1
//         for (var i = 0; i < b; i ++){
//             result += n
//         }
//         return result
//     }
// }

// // var base10 = base (10)
// // console.log (base10 (2))

// var base5 = base (5)
// console.log (base (2))
// console.log (base (3))
// console.log (base (5))

// // Totally out of mind !!!!!!!!!!!


// # 081 : Recursive Function in JS :

// Ex. 1 

// function sayHi (n) {
//     if (n === 0) {
//         return
//     }
//     console.log ('Hi, I am calling.')
//     sayHi (n - 1)
// }

// sayHi (10)

// Ex. 2 
 
// function sum (n) {
//     if (n === 1) {
//         return 1
//     }
//     return n + sum (n - 1)
// }
// console.log (sum (5))
// console.log (sum (6))


// Ex. 3 

// function fact (n) {
//     if (n === 1) {
//         return 1
//     }
//     return n + fact (n - 1)
// }
// console.log (fact (5))
// console.log (fact (7))

// Ex. 4 

var arr = [1, 2, 3, 4, 5, 7, 8, 9, 10]

function sumOfArray (arr, lastIndex) {
    if (lastIndex < 0) {
        return 0
    }
    return arr [lastIndex] + sumOfArray (arr, lastIndex - 1)
}

console.log (sumOfArray (arr, arr.length - 1))

