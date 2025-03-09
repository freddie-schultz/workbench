function rot13(str) {
  let charArray = str.split('')
  let regxL = /[a-z]/
  let regxU = /[A-Z]/
  for (let i = 0; i < charArray.length; i++) {
    if (charArray[i].match(regxL)) {
      let charCode = getLetterIndex(charArray[i])
      charArray[i] = rotLetter(charCode, true)
    }

    if (charArray[i].match(regxU)) {
      let charCode = getLetterIndex(charArray[i])
      charArray[i] = rotLetter(charCode, false)
    }
  }
  return charArray.join('')
}

function getLetterIndex(l) {
  let lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

  for (let i in lowerAlphabet) {
    if (l == lowerAlphabet[i]) {
      return Number(i) + 1
    }
  }
  for (let i in upperAlphabet) {
    if (l == upperAlphabet[i]) {
      return Number(i) + 1
    }
  }
}

function rotLetter(x, c) {
  let lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'
  let upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let newX = (x + 13) % 26
  if (newX == 0) {
    newX = 26
  }
  if (c) {
    return lowerAlphabet[newX - 1]
  } else {
    return upperAlphabet[newX - 1]
  }
}

let s = 'This is my first ROT13 excercise!'
console.log(rot13(s))
