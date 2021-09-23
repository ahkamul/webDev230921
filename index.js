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

// # 071: Closure First Look in JS :

var b = 10

function a () {
    var x = 5

    return function () {
        console.log (x)
    }
}

var abc = a ()
console.dir (abc)