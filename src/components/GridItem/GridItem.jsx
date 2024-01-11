import React from "react";
import { levels } from "../../helpers/imc";
import styles from "./GridItem.module.css";
import upImage from "../../assets/up.png";
import downImage from "../../assets/down.png";

const GridItem = ({ item }) => {
  return (
    <div className={styles.main} style={{ backgroundColor: item.color }}>
      <div className={styles.gridIcon}>
        {item.icon === "up" && (
          <img src={upImage} alt="O Seu IMC está bom." width="20" />
        )}
        {item.icon === "down" && (
          <img src={downImage} alt="O Seu IMC não está bom." width="20" />
        )}
      </div>
      <div className={styles.gridTitle}>{item.title}</div>
      {item.yourImc && (
        <div className={styles.yourImc}>
          O seu IMC é de {item.yourImc} kg/m²
        </div>
      )}
      <div className={styles.gridInfo}>
        <>
          IMC está entre <strong>{item.imc[0]}</strong> e{" "}
          <strong>{item.imc[1]}</strong>
        </>
      </div>
    </div>
  );
};

export default GridItem;
