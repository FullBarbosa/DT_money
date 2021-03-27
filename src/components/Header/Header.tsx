import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface Modal {
  onOpenNewTransactionModal: () => void;
}

export const Header = ({ onOpenNewTransactionModal }: Modal) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="" />

        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Tranzação
        </button>
      </Content>
    </Container>
  );
};
