import React from "react";
import { Summery } from "../Summery/Summery";
import { TransetionTable } from "../TransetionTable/TransetionTable";
import { Container } from "./styled";

export const Dashboard = () => {
  return (
    <Container>
      <Summery />
      <TransetionTable />
    </Container>
  );
};
