import styles from "./style.module.scss"

export const FinanceCard = ({ dataArray, onDelete }) => {

  const formatCurrency = (value) => {
    const numericValue = parseFloat(value);
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(numericValue);
  };

  return (
    <div className={styles.container}>
      <span className={`${styles.line} ${dataArray.tipo === "Entrada" ? styles.entrada : styles.dispensa}`}>
      </span>
      <div className={styles.container_text}>
        <div className={styles.text_block}>
          <h2 className="title3">{dataArray.nome}</h2>
          <p className="paragraph2">{dataArray.tipo}</p>
        </div>
        <div className={styles.block_value}>
          {formatCurrency(dataArray.valorR$)}
          <button onClick={onDelete}>Excluir</button>
        </div>
      </div>
    </div >
  );
};