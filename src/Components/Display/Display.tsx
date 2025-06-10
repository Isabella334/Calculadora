import styles from "./Display.module.css"

const Display = ({value}: {value: string}) => {
  return <div className={styles.display}>{value}</div>
}

export default Display
