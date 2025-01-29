export class ComplexNumber {
  constructor(r, c) {
    this.real = r
    this.complex = c
  }

  getReal() {
    return this.real
  }

  getComplex() {
    return this.complex
  }

  add(complexNumber) {
    return new ComplexNumber(
      this.real + complexNumber.real,
      this.complex + complexNumber.complex
    )
  }

  subtract(complexNumber) {
    return new ComplexNumber(
      this.real - complexNumber.real,
      this.complex - complexNumber.complex
    )
  }

  multiply(complexNumber) {
    let thisReal = this.getReal()
    let thisComplex = this.getComplex()
    let otherReal = complexNumber.getReal()
    let otherComplex = complexNumber.getComplex()

    let newReal = thisReal * otherReal - thisComplex * otherComplex
    let newComplex = thisReal * otherComplex + thisComplex * otherReal

    return newCN(newReal, newComplex)
  }

  divide(complexNumber) {
    let thisReal = this.getReal()
    let thisComplex = this.getComplex()
    let otherReal = complexNumber.getReal()
    let otherComplex = complexNumber.getComplex()
    let conjugateComplex = otherComplex * -1
    let denom = otherReal * otherReal + otherComplex * otherComplex
    let numLeft = thisReal * otherReal - thisComplex * conjugateComplex
    let numRight = thisReal * conjugateComplex + thisComplex * otherReal
    // console.log(`${numLeft} / ${denom} + ${numRight} / ${denom}`)
    return newCN(numLeft / denom, numRight / denom)
  }
}

export function newCN(real, complex) {
  return new ComplexNumber(real, complex)
}
