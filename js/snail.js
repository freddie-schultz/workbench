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

console.log(snail(testArray))
console.log(snail(testArray2))
