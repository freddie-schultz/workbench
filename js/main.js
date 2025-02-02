import * as eloquentJavaScript from '/js/eloquent-javascript.js'
// import * as CN from '/js/complex-number.js'
import { newCN } from '/js/complex-number.js'
import { displayComplexNumberAsText as cnText } from '/js/complex-number.js'

// let test1 = newCN(-10, -5)
// let test2 = newCN(-2, -4)
// let test3 = test1.subtract(test2)
// let test4 = test1.multiply(test2)
// let test5 = test1.divide(test2)

// console.log('cn1: ' + cnText(test1))
// console.log('cn2: ' + cnText(test2))
// console.log('cn1 - cn2: ' + cnText(test3))
// console.log('cn1 * cn2: ' + cnText(test4))
// console.log('cn1 / cn2: ' + cnText(test5))

const myCanvas = document.querySelector('#myCanvas')
const canvasContext = myCanvas.getContext('2d')

// window.addEventListener('load', draw)

function draw() {
  counter = 1
  let y = 0
  for (let j = 0; j < 500; j++) {
    for (let i = 0; i < 500; i++) {
      // console.log(color)
      canvasContext.fillStyle = '#' + counter.toString(16).padStart(6, '0')
      canvasContext.fillRect(i, y, 1, 1)
      counter += 1
    }
    y++
  }
  console.log('done')
}

let arrayDimension = 500
let pixelArray = []
for (let y = 0; y < arrayDimension; y++) {
  let pixelArrayX = new Int32Array(arrayDimension)
  for (let x = 0; x < arrayDimension; x++) {
    pixelArrayX[x] = x
  }
  pixelArray[y] = [y, pixelArrayX]
}
// console.log(pixelArray[2][1][30])

// for (let i = 0; i < 250000; i++) {
//   pixelArray[i] = counter++
//   console.log(pixelArray[i])
// }

function snail(array) {
  if (array.length == 1) {
    return array[0]
  }
  console.log('array length: ' + array.length)
  let sideLength = array[0].length
  console.log('side length: ' + sideLength)

  let snailArray = []

  let count = sideLength * sideLength

  let layers = Math.ceil(array[0].length / 2)

  for (let i = 0; i < layers; i++) {
    for (let j = i; j < sideLength - i; j++) {
      if (count-- > 0) {
        console.log('1 pushing ' + array[i][j])
        snailArray.push(array[i][j])
      }
    }

    for (let j = i + 1; j < sideLength - i - 1; j++) {
      if (count-- > 0) {
        console.log('2 pushing ' + array[j][sideLength - i - 1])
        snailArray.push(array[j][sideLength - i - 1])
      }
    }

    for (let j = sideLength - i; j > i; j--) {
      if (count-- > 0) {
        console.log('3 pushing ' + array[sideLength - i - 1][j - 1])
        snailArray.push(array[sideLength - i - 1][j - 1])
      }
    }

    for (let j = sideLength - i - 2; j > i; j--) {
      if (count-- > 0) {
        console.log('4 pushing ' + array[j][i])
        snailArray.push(array[j][i])
      }
    }
  }

  return snailArray
}

let testArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

let testArray2 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
]

// console.log(snail(testArray))
// console.log(snail(testArray2))
