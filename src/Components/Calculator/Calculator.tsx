import useCalculator from "../../hooks/useCalculator"
import Button from "../Button"
import Display from "../Display"
import styles from "./Calculator.module.css"

const Calculator = () => {
  const { display, handleNumberInput } = useCalculator()

  return (
    <div className={styles.calc}>
      <div className={styles.wrapper}>
        <Display value={display}/>
      </div>
      <div className={styles.keyboard}>
        <Button label="C" onClick={() => {}}/>
        <Button label="+/-" onClick={() => {}}/>
        <Button label="%" onClick={() => {}}/>
        <Button label="÷" onClick={() => {}}/>
        <Button label="7" onClick={()=>{handleNumberInput("7")}}/>
        <Button label="8" onClick={()=>{handleNumberInput("8")}}/>
        <Button label="9" onClick={()=>{handleNumberInput("9")}}/>
        <Button label="x" onClick={() => {}}/>
        <Button label="4" onClick={()=>{handleNumberInput("4")}}/>
        <Button label="5" onClick={()=>{handleNumberInput("5")}}/>
        <Button label="6" onClick={()=>{handleNumberInput("6")}}/>
        <Button label="-" onClick={() => {}}/>
        <Button label="1" onClick={()=>{handleNumberInput("1")}}/>
        <Button label="2" onClick={()=>{handleNumberInput("2")}}/>
        <Button label="3" onClick={()=>{handleNumberInput("3")}}/>
        <Button label="+" onClick={() => {}}/>
        <Button label="0" onClick={()=>{handleNumberInput("0")}}/>
        <Button label="." onClick={() => {}}/>
        <Button label="=" onClick={() => {}}/>
      </div>
    </div>
  )
}

export default Calculator
