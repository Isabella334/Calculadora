import { useState } from "react"

const useCalculator = () => {
  const [display, setDisplay] = useState('0')  

  const handleNumberInput = (n: string) => {
    setDisplay(n)
  }

  return { display, handleNumberInput }
}

export default useCalculator
