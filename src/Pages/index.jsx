import { useState, useEffect } from "react";
import { FinanceForm } from "../components/FinanceForm";
import { FinanceList } from "../components/FinanceList";
import { Header } from "../components/Header";
import { TotalSection } from "../components/TotalSection";
import "../styles/global.scss";
import "../styles/reset.scss";
import styles from "./style.module.scss";

export const Page = () => {
  const [dataArray, setDataArray] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const handleForm = (newArray) => {
    setDataArray((prevArray) => [...prevArray, ...newArray]);
  };
  useEffect(() => {
    const newTotal = dataArray.reduce((acc, item) => acc + parseFloat(item.valorR$ || 0), 0);
    setTotalAmount(newTotal);
  }, [dataArray]);
  const handleDelete = (index) => {
    setDataArray((prevArray) => prevArray.filter((item, indice) => indice !== index));
  };
  return (
    <>
      <Header />
      <div className={styles.boxMain}>
        <div className={styles.box}>
          <FinanceForm array={handleForm} />
          <TotalSection totalAmount={totalAmount} /> { }
        </div>
        <FinanceList dataArray={dataArray} onDelete={handleDelete} />
      </div>
    </>
  );
};