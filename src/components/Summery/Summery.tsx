import React from "react";
import { Container } from "./styled";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import total from "../../assets/total.svg";

export const Summery = () => {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="" />
        </header>

        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="" />
        </header>

        <strong> - R$500,00</strong>
      </div>

      <div className="countTotal">
        <header>
          <p>Total</p>
          <img src={total} alt="imagem de sifrão" />
        </header>

        <strong>R$500,00</strong>
      </div>
    </Container>
  );
};
