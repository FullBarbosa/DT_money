import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="" />

        <button type="button">Nova Tranzação</button>
      </Content>
    </Container>
  );
};
