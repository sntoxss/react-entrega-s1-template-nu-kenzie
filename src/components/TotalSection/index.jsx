import styles from "./style.module.scss"

export const TotalSection = ({ totalAmount }) => {
  return (
    <section className={styles.container}>
      <div>
        <h3 className="title3">Valor total:</h3>
        <p className="paragraph2">O valor refere ao saldo</p>
      </div>
      <div>
        <h3 className="title3 red">{totalAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
      </div>
    </section>
  )
}
