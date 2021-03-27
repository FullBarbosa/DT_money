import React, { useContext } from "react";
import { Container } from "./styled";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import total from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactionsContext";

export const Summery = () => {
  const { transactions } = useTransactions();
  console.log(transactions);

  const summry = transactions.reduce(
    (acc, transactions) => {
      if (transactions.type === "deposit") {
        acc.deposits += transactions.amount;
        acc.total += transactions.amount;
      } else {
        acc.withdraws += transactions.amount;
        acc.total -= transactions.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="" />
        </header>

        <strong>
          {" "}
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summry.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="" />
        </header>

        <strong>
          {" "}
          -
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summry.withdraws)}
        </strong>
      </div>

      <div className="countTotal">
        <header>
          <p>Total</p>
          <img src={total} alt="imagem de sifrão" />
        </header>

        <strong>
          {" "}
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summry.total)}
        </strong>
      </div>
    </Container>
  );
};
