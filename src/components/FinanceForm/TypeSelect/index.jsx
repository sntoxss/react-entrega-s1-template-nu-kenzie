import styles from "./style.module.scss"
export const TypeSelect = ({ onSelect }) => {
  const handleChange = (e) => {
    onSelect(e.target.value);
  }
  return (
    <select className={styles.container} name="type" onChange={handleChange} required>
      <option value="">Selecione o tipo</option>
      <option value="Entrada">Entrada</option>
      <option value="Dispensa">Dispensa</option>
    </select>
  )
}