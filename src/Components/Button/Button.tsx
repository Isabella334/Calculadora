import styles from "./Button.module.css"

const Button = ({label, onClick}: {
  label: string, 
  onClick: () => void}
) => {
  return (
    <div className={styles.buttonContainer}>
      <span className={styles.label}>{label}</span>
      <button className={styles.pillButton} onClick={onClick}></button>
    </div>
  )
}

export default Button
