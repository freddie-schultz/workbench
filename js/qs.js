function qs(arr) {
  if (arr.length <= 1) {
    return arr
  }

  const left = []
  const right = []

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[0]) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  // const left = arr.filter((e) => e <= arr[0])
  // const right = arr.filter((e) => e > arr[0])

  return qs(left).concat([arr[0]]).concat(qs(right))
}

const test = [1, 8, 6, 7, 5, 9, 4, 3, 2]
const test2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const test3 = [
  1, 5, 6, 4, 7, 8, 41, 1, 2, 3, 4, 6, 41, 0, 21, 50, 4, 5, 7, 8, 4, 5, 6, 1, 2,
  4, 5, 7, 8, 9, 5, 1, 2, 3,
]
const sorted = qs(test3)
console.log(sorted)
