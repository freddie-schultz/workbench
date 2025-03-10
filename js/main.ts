import * as eloquentJavaScript from '/js/eloquent-javascript.js'
// import * as CN from '/js/complex-number.js'
import { newCN } from '/js/complex-number.js'
import { displayComplexNumberAsText as cnText } from '/js/complex-number.js'
import { chaosGame, chaosGameRec, chaosGameInterval } from './chaos-game.ts'

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

const myCanvas = document.querySelector('#myCanvas') as HTMLCanvasElement
const canvasContext = myCanvas.getContext('2d') as CanvasRenderingContext2D

// window.addEventListener('load', draw)

function draw() {
  let counter = 1
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

// let arrayDimension = 500
// let pixelArray = []
// for (let y = 0; y < arrayDimension; y++) {
//   let pixelArrayX = new Int32Array(arrayDimension)
//   for (let x = 0; x < arrayDimension; x++) {
//     pixelArrayX[x] = x
//   }
//   pixelArray[y] = [y, pixelArrayX]
// }
// console.log(pixelArray[2][1][30])

// for (let i = 0; i < 250000; i++) {
//   pixelArray[i] = counter++
//   console.log(pixelArray[i])
// }

// chaosGame()
