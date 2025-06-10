import { useState } from "react"

const useCalculator = () => {
  const [display, setDisplay] = useState("0")
  const [prevValue, setPrevValue] = useState<number | null>(null)
  const [currentOp, setCurrentOp] = useState<string | null>(null)
  const [isNextInputNew, setIsNextInputNew] = useState(false)

  const handleNumberInput = (digit: string) => {
    if (digit === "." && display.includes(".")) return

    if (isNextInputNew) {
      setDisplay(digit)
      setIsNextInputNew(false)
      return
    }

    if (display.length >= 9) return

    setDisplay(display === "0" ? digit : display + digit)
  }

  const chooseOperation = (op: string) => {
    if (op === "+/-") {
      setDisplay(String(Number(display) * -1))
      return
    }

    setPrevValue(Number(display))
    setCurrentOp(op)
    setIsNextInputNew(true)
  }

  const executeCalculation = () => {
    if (prevValue === null || currentOp === null) return

    const currentValue = Number(display)
    let outcome: number

    switch (currentOp) {
      case "+":
        outcome = prevValue + currentValue
        break
      case "-":
        outcome = prevValue - currentValue
        break
      case "x":
        outcome = prevValue * currentValue
        break
      case "/":
        outcome = prevValue / currentValue
        break
      case "%":
        outcome = prevValue % currentValue
        break
      default:
        outcome = currentValue
    }

    if (!Number.isInteger(outcome)) {
      outcome = parseFloat(outcome.toPrecision(8))
    }

    if (outcome > 999999999) {
      setDisplay("ERROR")
      setIsNextInputNew(true)
    } else {
      setDisplay(String(outcome))
      setPrevValue(outcome)
    }

    setCurrentOp(null)
  }

  const resetCalc = () => {
    setDisplay("0")
    setPrevValue(null)
    setCurrentOp(null)
    setIsNextInputNew(false)
  }

  return {
    display,
    handleNumberInput,
    chooseOperation,
    executeCalculation,
    resetCalc,
  }
}

export default useCalculator
