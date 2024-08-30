import { FinanceCard } from "./FinanceCard"
import styles from "./style.module.scss"

export const FinanceList = ({ dataArray, onDelete }) => {
  return (
    <section>

      <div className={styles.sectionForm}>
        <h2 className="title3">Resumo Financeiro</h2>
        {dataArray.length === 0 ? (
          <h3 className="title2">Você ainda não possui nenhum lançamento</h3>
        ) : (
          <div className={styles.block_finance}>
            {dataArray.map((dataArray, index) => (
              <FinanceCard dataArray={dataArray} key={index} onDelete={() => onDelete(index)} />
            ))}</div>)}

      </div>
    </section>
  )
}
