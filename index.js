// Functional Programming in JS :

// # 070 : First Class Function in JS :

// A function can be a first class function if it has the following 6 characteristics :

// 1. A Function can be stored in a variable :

// function add (a , b) {
//     return a + b
// }
// var sum = add
// console.log(sum (4 , 5))
// console.log(typeof sum)


// // 2. A Function can be stored in an object :

// var arr = []
// arr.push (add)

// console.log (arr)
// console.log(arr [0] (5 , 3))


// // 3. A Function can be stored in an object: 

// var obj = {
//     sum : add
// }
// console.log(obj)
// console.log(obj.sum (7 , 9))


// // 4. We can create function as Need:

// setTimeout(function (){
//     console.log ("I have created some JS codes ..........")
// }, 100)



// 5. We can pass function as an arguments:



// 6. We can return function from another function: 


// # 71 : Higher Order Function in JS :

// function add (a , b) {
//     return a + b
// }

//     function manipulate (a , b, func) {
//         var c = a + b
//         var d = a - b

//         function multiply (){
//             var m = func (a , b)
//             return c * d * m
//         }
//         return multiply
//     }

// var multiply = manipulate (3 , 4 , add)
// console.log (multiply())

// # 072: Closure First Look in JS :

// var b = 10

// function a () {
//     var x = 5

//     return function () {
//         console.log (x)
//     }
// }

// var abc = a ()
// console.dir (abc)


// # 073 : Callback Function in JS :

// function sample (a , b){
//     var c = a + b
//     var d = a - b
//     var result = sum (c , d)
//     return result
// }

// function sum (a , b){
//     return a + b
// }
 
// console.log (sample (5 , 8))

// callback function :

// function sample (a , b , cb){
//     var c = a + b
//     var d = a - b
//     var result = cb (c , d)
//     return result
// }

// function sum (a , b) {
//     return a + b
// }

// var result = sample (5 , 8 , sum)
// console.log(result)

// var result2 = sample (5 , 8 , function (c , d) {
//     return c - d
// })

// Don't know how it can work. 


// # 074 : Foreach Implementation in JS :

// Ex. 1

// var arr = [1 , 2 , 3 , 4 , 5]

// arr.forEach (function (value, index, arr){
//     console.log (value, index, arr)
// })

// Ex. 2

// var arr = [1, 2, 3, 4, 5]

// var sum = 0
// arr.forEach(function (value, index, arr) {
//     sum += value
// })

// console.log (sum)

// Ex. 3

// var arr = [1, 2, 3, 4, 5]

// function forEach (arr) {
//     for (var i = 0; i < arr.length; i++) {
//         console.log (arr [i])
//     }
// }
// forEach (arr)

// Ex. 4 

// var arr = [1, 2, 3, 4, 5]

// function forEach (arr, cb){
//     for (var i = 0; i < arr.length; i ++){
//         cb (arr [i])
//     }
// }

// forEach (arr, function (value) {
//     console.log (value)
// })

// Ex. 5

// var arr = [1, 2, 3, 4, 5]

// function forEach (arr , cb){
//     for (var i = 0; i < arr.length; i++){
//         cb (arr [i])
//     }
// }

// var sum = 0
// forEach (arr, function (value) {
//     sum += value
// })

// console.log (sum)

// Ex. 6

// var arr = [1, 2, 3, 4, 5]

// function forEach (arr, cb) {
//     for (var i = 0; i < arr.length; i ++) {
//         cb (arr [i], i, arr)
//     }
// }

// var sum = 0
// forEach (arr, function (value, index, arr){
//     console.log (value, index, arr)
//     sum += value
// })

// console.log(sum)

// 075 : Map Function in JS: 

// Ex. 1

// var arr = [1, 2, 3, 4, 5]

// var sqrArr = arr.map (function (value){
//     return Math.random () * 100
// })

// console.log(arr)
// console.log(sqrArr)

// Ex. 2 

// var arr = [1, 2, 3, 4, 5]

// var sqrArr = arr.map (function (value) {
//     return value * value
// })

// console.log (arr)
// console.log (sqrArr)

// Ex. 3 

// var arr = [1, 2, 3]

// function myMap (arr) {
//     var newArr = []
//     for (var i = 0; i < arr.length; i ++){
//         var temp = arr [i] * arr [i]
//         newArr.push (temp)
//     }
//     return newArr
// }
// console.log (myMap (arr))

// Ex. 4. 

// var arr = [1, 2, 3]

// function myMap (arr, cb) {
//     var newArr = []
//     for (var i = 0; i < arr.length; i ++){
//         var temp = cb (arr [i], i, arr)
//         newArr.push (temp)
//     }
//     return newArr
// }

// console.log (myMap(arr))  // Doesn't return result, but why I don't know 

// # 076 : Filter Function in JS :

// Ex. 1

// var arr = [4, 8, 1, 3, 5, 6, 4, 3, 9]

// var filteredArr = arr.filter(function (value) {
//     //return value % 2 === 0
//     //return value % 2 === 1
//     return value > 3
// })

// console.log (filteredArr)


// Ex. 2 

// var arr = [4, 8, 1, 3, 5, 6, 4, 3, 9]

// function myFilter (arr) {
//     var newArr = []
//     for (var i = 0; i < arr.length; i ++) {
//         if (arr [i] % 2 === 0) {
//             newArr.push (arr [i])
//         }
//     }
//     return newArr
// }

// console.log(myFilter (arr))

// Ex. 3

// var arr = [4, 8, 1, 3, 5, 6, 4, 3, 9]

// function myFilter (arr, cb) {
//     var newArr = []
//     for (var i = 0; i < arr.length; i ++) {
//         if (cb (arr [i], i, arr)){
//             newArr.push (arr [i])
//         }
//     }
//     return newArr
// }

// console.log(myFilter (arr, function (value){
//     return value % 2 === 1
// }))

// console.log (myFilter (arr, function (value){
//     return value > 3
// }))


// # 077 : Reduce Function in JS :

// Ex. 1

// var arr = [1, 2, 3, 4, 5, 107]

// var sum = arr.reduce (function (prev, curr){
//     return prev + curr
// //})
// }, 100)

// var max = arr.reduce (function (prev, curr){
//     return Math.max (prev, curr)
// }, 0)

// console.log (sum)
// console.log (max)

// Ex. 2

// var arr = [1, 2, 3, 4, 5, 7]

// function myReduce (arr, cb, acc) {
//     for (var i = 0; i < arr.length; i++){
//         acc = cb (acc, arr [i])
//     }
//     return acc
// }

// var sum = myReduce (arr, function (prev, curr) {
//     return prev + curr
// }, 0)

// // Program not working, but don't know why ? 


// # 078 : Find and FindIndex Function in JS :

// Ex. 1
 
// var arr = [7, 4, 8, 6, 9, 2, 1, 70, 3]

// var result = arr.find (function (value) {
//     return value === 9
// })

// console.log (result)

// Ex. 2
 
// var arr = [7, 4, 8, 6, 9, 2, 1, 70, 3]

// var result = arr.findIndex (function (value) {
//     return value === 9
// })

// console.log (result)


// Ex. 3

var arr = [7, 4, 8, 6, 9, 2, 1, 70, 3]

function myFind (arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        if (cb (arr [i])) {
            //return arr [i]
            return i
        }
    }
}

var result = myFind (arr, function (value) {
    return value === 9
})

console.log (result)
