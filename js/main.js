import * as eloquentJavaScript from '/js/eloquent-javascript.js'
// import * as CN from '/js/complex-number.js'
import { newCN } from '/js/complex-number.js'

let test1 = newCN(2, 5)
let test2 = newCN(4, -1)
let test3 = test1.subtract(test2)
let test4 = test1.multiply(test2)
let test5 = test1.divide(test2)

printComplexNumber(test1)
printComplexNumber(test2)
printComplexNumber(test3)
printComplexNumber(test4)
printComplexNumber(test5)

function printComplexNumber(cn) {
  let cnText = `(${cn.real} `
  if (cn.complex < 0) {
    cnText += `- ${cn.complex * -1}i)`
  } else {
    cnText += `+ ${cn.complex}i)`
  }
  console.log(cnText)
}
