function mutliply2DArrays(arr1, arr2) {
  const result = []

  for (let x in arr1) {
    const row = []
    for (let y in arr1[x]) {
      row.push(arr1[x][y] * arr2[x][y])
    }
    result.push(row)
  }

  return result
}

function add2DArrays(arr1, arr2) {
  const result = []

  for (let x in arr1) {
    const row = []
    for (let y in arr1[x]) {
      row.push(arr1[x][y] + arr2[x][y])
    }
    result.push(row)
  }

  return result
}

function subtract2DArrays(arr1, arr2) {
  const result = []

  for (let x in arr1) {
    const row = []
    for (let y in arr1[x]) {
      row.push(arr1[x][y] - arr2[x][y])
    }
    result.push(row)
  }

  return result
}

function nullTheTwos(arr) {
  for (let i in arr) {
    for (let j in arr[i]) {
      if (arr[i][j] >= 2 || arr[i][j] <= -2) {
        arr[i][j] = null
      }
    }
  }
}

let reals = []
let comps = []

let r = []
let c = []

function generateReals() {
  for (let x = -2; x < 2; x += 0.04) {
    const rRow = []
    const cRow = []
    for (let y = -2; y < 2; y += 0.04) {
      rRow.push(x)
      cRow.push(y)
    }
    r.push(rRow)
    c.push(cRow)
  }
}

const myCanvas = document.querySelector('#myCanvas')
const canvasContext = myCanvas.getContext('2d')

generateReals()
nullTheTwos(comps)

for (let i = 0; i < 100; i++) {
  let newReals = mutliply2DArrays(r, r)
  let newComps = mutliply2DArrays(c, c)
  let t1 = subtract2DArrays(newReals, newComps)
  reals = add2DArrays(t1, r)
  nullTheTwos(reals)
}

for (let x = 0; x < 100; x++) {
  for (let y = 0; y < 100; y++) {
    if (reals[x][y] == null || comps[x][y] == null) {
      canvasContext.fillRect(x, y, 1, 1)
    }
  }
}
