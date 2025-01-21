/*
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('FizzBuzz')
  } else if (i % 3 == 0) {
    console.log('Fizz')
  } else if (i % 5 == 0) {
    console.log('Buzz')
  } else {
    console.log(i)
  }
}
*/

/*
// let size = prompt('Enter size: ')
let size = 8
let board = ''

for (i = 1; i <= size; i++) {
  if (i % 2 == 1) {
    for (j = 1; j <= size; j++) {
      if (j % 2 == 0) {
        board += '#'
      } else {
        board += ' '
      }
    }
  } else {
    for (j = 1; j <= size; j++) {
      if (j % 2 == 1) {
        board += '#'
      } else {
        board += ' '
      }
    }
  }
  board += '\n'
  // console.log(board)
}
console.log(board)
*/

// console.log('C', 'O', 2)

// function isEven(num) {
//   if (num < 0) {
//     num *= -1
//   }

//   if (num == 0) {
//     return true
//   } else if (num == 1) {
//     return false
//   } else {
//     return isEven(num - 2)
//   }
// }

// function countBs(s) {
//   return countChar(s, 'B')
// }

// function countChar(s, c) {
//   let numberOfChars = 0
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] == c) {
//       numberOfChars += 1
//     }
//   }
//   return numberOfChars
// }

// function tableFor(event, journal) {
//   let table = [0, 0, 0, 0]
//   for (let i = 0; i < journal.length; i++) {
//     let entry = journal[i]
//     let index = 0
//     if (entry.events.includes(event)) index += 1
//     if (entry.squirrel) index += 2
//     table[index] += 1
//   }
//   return table
// }

// function printNums(...numbers) {
//   numbers.forEach((n) => {
//     console.log(n)
//   })
// }

// let arr1 = [1, 2, 3, 4, 5, 6]
// let arr2 = [1, 2, 3]
// let arr3 = 4

// printNums(arr1)
// printNums(arr2)
// printNums(arr3)

// function range(start, end, st) {
//   let r = []
//   let s = st
//   if (s == undefined) {
//     s = 1
//   }
//   // console.log('step: ' + s + ' start: ' + start + ' end: ' + end)
//   if (s > 0) {
//     for (let i = start; i <= end; i += s) {
//       r.push(i)
//     }
//   } else if (s < 0) {
//     for (let i = start; i >= end; i += s) {
//       r.push(i)
//     }
//   } else {
//     r.push(0)
//   }

//   return r
// }

// function sum(rangeArray) {
//   let s = 0
//   for (let i = 0; i < rangeArray.length; i++) {
//     s += rangeArray[i]
//   }
//   return s
// }

// console.log(range(1, 10))
// // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1))
// // → [5, 4, 3, 2]
// console.log(sum(range(1, 10)))
// // → 55

// function reverseArrayInPlace(arr) {
//   let rArr = []
//   for (let i = arr.length - 1; i >= 0; i--) {
//     rArr.push(arr[i])
//   }

//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = rArr[i]
//   }
// }

// let list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null,
//     },
//   },
// }

// function reverseArray(arr) {
//   let rArr = []
//   for (let i = arr.length - 1; i >= 0; i--) {
//     rArr.push(arr[i])
//   }
//   return rArr
// }

// function prepend(val, list) {
//   if (list == undefined) {
//     // console.log('returning rest null')
//     return { value: val, rest: null }
//   }
//   // console.log('returning rest not null')
//   return { value: val, rest: list }
// }

// function arrayToList(valuesArray) {
//   let rArr = reverseArray(valuesArray)
//   let newList = {}
//   // console.log(Object.keys(newList).length)
//   for (let v of rArr) {
//     if (Object.keys(newList).length == 0) {
//       newList = prepend(v)
//     } else {
//       newList = prepend(v, newList)
//     }
//   }
//   return newList
// }

// function listToArray(list) {
//   arr = []

//   for (let node = list; node; node = node.rest) {
//     arr.push(node.value)
//   }

//   return arr
// }

// function nth(list, n) {
//   if (n != 0) {
//     return nth(list.rest, n - 1)
//   } else {
//     return list.value
//   }
// }

// // //This works but I think I need the arr to be inside the listToArray function...
// // let arr = []

// // function listToArray(list) {
// //   if (list.rest != null) {
// //     // console.log('rest not null, going deeper. current value ' + list.value)
// //     arr.concat(listToArray(list.rest))
// //   }
// //   let tempArr = [list.value]
// //   // console.log('temp array is ' + tempArr)
// //   // console.log('current array is ' + arr)
// //   arr = tempArr.concat(arr)

// //   return arr
// // }

// console.log(arrayToList([10, 20]))
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30])))
// // → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)))
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1))
// // → 20

// function deepEqual(param1, param2) {
//   if (typeof param1 == 'object' && typeof param2 == 'object') {
//     console.log('both are objects')
//     if (param1 === null || param2 === null) {
//       console.log('at least one is null')
//       return param1 === param2
//     } else {
//       console.log('neither are null')
//       if (Object.keys(param1).length != Object.keys(param2).length) {
//         console.log('objects have different number of keys')
//         return false
//       } else if (Object.keys(param1).length == 0) {
//         console.log('both are objects with no keys')
//         return true
//       }

//       for (const prop in param1) {
//         if (!deepEqual(param1[prop], param2[prop])) {
//           console.log("key didn't match")
//           return false
//         }
//       }

//       console.log("keys check didn't fail, returning default of true")
//       return true
//     }
//   }

//   return param1 === param2
// }

// // console.log(typeof { id: 1 })
// // let obj = {}
// let obj = { here: { is: 'an' }, object: 2 }
// console.log(deepEqual(obj, obj))
// // → true
// console.log(deepEqual(obj, { here: 1, object: 2 }))
// // → false
// console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 }))
// // → true
