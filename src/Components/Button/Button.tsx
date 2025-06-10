const Button = ({label, onClick}: {
  label: string, 
  onClick: () => void}
) => {
  return (
    <div>
      <span>{label}</span>
      <button onClick={onClick}>{label}</button>
    </div>
  )
}

export default Button
