import { useState } from "react"
import styles from "./style.module.scss"
import { TypeSelect } from "./TypeSelect"

export const FinanceForm = ({ array }) => {

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [type, setType] = useState("");

  const handleTypeSelect = (selectedType) => {
    setType(selectedType)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const showMensage = [
      {
        nome: name,
        valorR$: number,
        tipo: type,
      },
    ];

    array(showMensage);

    showMensage.forEach(element => {
      const valorFormatado = parseFloat(element.valorR$).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      },)
      console.log(`nome: ${name}, valor(R$): ${valorFormatado}, tipo: ${type}`);
    });
  };

  return (
    <section className={`${styles.container_form}`}>
      <form onSubmit={handleSubmit}>
        <div className={styles.blockMain}>
          <div className={`${styles.description}`}>
            <label className={`paragraph2 colorBlack`}>Decrição</label>
            <input type="text" placeholder="Digite aqui sua descrição" onChange={(e) => setName(e.target.value)} required />
            <p className="paragraph2 colorGrey">Ex: Compra de roupas</p>
          </div>
          <div className={`${styles.description}`}>
            <label className={`paragraph2 colorBlack`}>Valor(R$)</label>
            <input type="number" min={0} onChange={(e) => setNumber(e.target.value)} required />
          </div>
          <div className={`${styles.description}`}>
            <label className={`paragraph2 colorBlack`}>Tipo de valor</label>
            <TypeSelect onSelect={handleTypeSelect} />
          </div>
          <button type="submit">Inserir valor</button>
        </div>
      </form>
    </section>
  )
}
