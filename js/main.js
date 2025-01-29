import * as eloquentJavaScript from '/js/eloquent-javascript.js'
// import * as CN from '/js/complex-number.js'
import { newCN } from '/js/complex-number.js'

let test1 = newCN(-10, -5)
let test2 = newCN(-2, -4)
let test3 = test1.subtract(test2)
let test4 = test1.multiply(test2)
let test5 = test1.divide(test2)

console.log('cn1: ' + complexNumberText(test1))
console.log('cn2: ' + complexNumberText(test2))
console.log('cn1 - cn2: ' + complexNumberText(test3))
console.log('cn1 * cn2: ' + complexNumberText(test4))
console.log('cn1 / cn2: ' + complexNumberText(test5))

function complexNumberText(cn) {
  let cnText = `(${cn.real} `
  if (cn.complex < 0) {
    cnText += `- ${cn.complex * -1}i)`
  } else {
    cnText += `+ ${cn.complex}i)`
  }
  return cnText
}
