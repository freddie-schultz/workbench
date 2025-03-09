type Point = [number, number]

const myCanvas = document.querySelector('#myCanvas') as HTMLCanvasElement
const canvasContext = myCanvas.getContext('2d') as CanvasRenderingContext2D

function drawPoint(point: Point): void {
  canvasContext.fillRect(point[0], point[1], 1, 1)
}

const point1 = [500, 100] as Point
const point2 = [100, 793] as Point
const point3 = [900, 793] as Point

export function chaosGame() {
  drawPoint(point1)
  drawPoint(point2)
  drawPoint(point3)

  let currentPoint = getRandomPoint()

  for (let i = 0; i < 1000000; i++) {
    drawPoint(currentPoint)
    const rand = Math.floor(Math.random() * 3)
    switch (rand) {
      case 0:
        currentPoint = halfwayToPoint(currentPoint, point1)
        break
      case 1:
        currentPoint = halfwayToPoint(currentPoint, point2)
        break
      case 2:
        currentPoint = halfwayToPoint(currentPoint, point3)
        break
    }
  }
}

function getRandomPoint(): Point {
  const x = Math.floor(Math.random() * 1000)
  const y = Math.floor(Math.random() * 1000)
  return [x, y]
}

function halfwayToPoint(currentPoint: Point, newPoint: Point): Point {
  const newX = (currentPoint[0] + newPoint[0]) / 2
  const newY = (currentPoint[1] + newPoint[1]) / 2
  return [newX, newY]
}

export function chaosGameRecursive() {
  drawPoint(point1)
  drawPoint(point2)
  drawPoint(point3)

  let currentPoint = getRandomPoint()

  halfwayToPointRecursive(currentPoint, 1)
}

function halfwayToPointRecursive(currentPoint: Point, level: number) {
  if (level >= 13) {
    return
  }

  const newX1 = (currentPoint[0] + point1[0]) / 2
  const newY1 = (currentPoint[1] + point1[1]) / 2
  const newX2 = (currentPoint[0] + point2[0]) / 2
  const newY2 = (currentPoint[1] + point2[1]) / 2
  const newX3 = (currentPoint[0] + point3[0]) / 2
  const newY3 = (currentPoint[1] + point3[1]) / 2

  halfwayToPointRecursive([newX1, newY1], level + 1)
  halfwayToPointRecursive([newX2, newY2], level + 1)
  halfwayToPointRecursive([newX3, newY3], level + 1)

  drawPoint([newX1, newY1])
  drawPoint([newX2, newY2])
  drawPoint([newX3, newY3])
}

export function chaosGameInterval() {
  drawPoint(point1)
  drawPoint(point2)
  drawPoint(point3)

  let currentPoint = getRandomPoint()

  const maxIterations = 1000000
  let counter = 0
  let interval = setInterval(() => {
    counter++
    if (counter >= maxIterations) {
      clearInterval(interval)
    }
    drawPoint(currentPoint)
    const rand = Math.floor(Math.random() * 3)
    switch (rand) {
      case 0:
        currentPoint = halfwayToPoint(currentPoint, point1)
        break
      case 1:
        currentPoint = halfwayToPoint(currentPoint, point2)
        break
      case 2:
        currentPoint = halfwayToPoint(currentPoint, point3)
        break
    }
  }, 1)
}
