import { useState } from "react";
import styles from "./app.module.css";
import Header from "./components/Header";

import { levels, calculateImc } from "./helpers/imc";
import GridItem from "./components/GridItem/GridItem";

import leftArrowImage from "./assets/leftarrow.png";

function App() {
  const [heightField, setHeightField] = useState(0);
  const [weightField, setWeightField] = useState(0);
  const [toShow, setToShow] = useState(null);

  const onChangeHeighthandler = (e) => {
    setHeightField(parseFloat(e.target.value));
  };

  const onChangeweighthandler = (e) => {
    setWeightField(parseFloat(e.target.value));
  };

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      setToShow(calculateImc(heightField, weightField));
    } else alert("Digite todos os campos solicitados!!!");
  };

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  };

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Você sabe o que significa IMC ?</h1>
          <p>
            Criado no século 19 pelo matemático Lambert Quételet, o Índice de
            Massa Corporal, conhecido pela sigla IMC, é um cálculo simples que
            permite medir se alguém está ou não com o peso ideal. Ele aponta se
            o peso está adequado ou se está abaixo ou acima do peso.
          </p>
          <p>
            Para fazer o cálculo, basta dividir o peso pela altura ao quadrado.
            O número final representa o quanto a pessoa tem de massa muscular +
            massa de gordura + massa óssea. Com o resultado, o próximo passo é
            interpretá-lo.
          </p>
          <input
            type="number"
            placeholder="Digite a sua altura. Ex: 1.5 ( em metros )."
            value={heightField > 0 ? heightField : ""}
            onChange={onChangeHeighthandler}
            disabled={toShow ? true : false}
          />

          <input
            type="number"
            placeholder="Digite o seu peso. Ex: 81.2 ( em kilogramas )."
            value={weightField > 0 ? weightField : ""}
            onChange={onChangeweighthandler}
            disabled={toShow ? true : false}
          />

          <button
            onClick={handleCalculateButton}
            disabled={toShow ? true : false}
          >
            Calcular IMC
          </button>
        </div>
        <div className={styles.rightSide}>
          {!toShow && (
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem item={item} key={key} />
              ))}
            </div>
          )}
          {toShow && (
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt="" width={25} />
              </div>
              <GridItem item={toShow} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
