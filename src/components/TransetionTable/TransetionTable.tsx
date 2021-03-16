import React from "react";

import { Container } from "./styled";

export const TransetionTable = () => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <td>Desenvolvimento de website</td>
          <td className="deposit">R$12.000</td>
          <td>Desenvolvimento</td>
          <td>Data</td>
        </tbody>

        <tbody>
          <td>Desenvolvimento de website</td>
          <td className="withdraw"> -R$12.000</td>
          <td>Desenvolvimento</td>
          <td>Data</td>
        </tbody>
      </table>
    </Container>
  );
};
