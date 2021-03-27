import { FormEvent, useState, useContext } from "react";

// biblioteca React-Modal para criação de modal
import Modal from "react-modal";
import { ActiveButton, Container, TransactionTypeContainer } from "./styled";

import closeImg from "../../assets/close.svg";
import iconEntrada from "../../assets/income.svg";
import iconSaida from "../../assets/outcome.svg";
import { api } from "../../services/api";
import { useTransactions } from "../../hooks/useTransactionsContext";

Modal.setAppElement("#root");

interface ModalTransactionProps {
  isNewTransactionModalOpen: boolean;
  handleCloseNewTransactionModal: () => void;
}

export default function NewTrasactionModal({
  isNewTransactionModalOpen,
  handleCloseNewTransactionModal,
}: ModalTransactionProps) {
  const { createTransactions } = useTransactions();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransactions({
      title,
      amount,
      category,
      type,
    });

    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposits");
    handleCloseNewTransactionModal();
  }

  return (
    <Modal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      // overlayClassane reseta o estilo da biblioteca
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={handleCloseNewTransactionModal}
        className="react-modal-close"
      >
        <img src={closeImg} alt="" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />
        <TransactionTypeContainer>
          <ActiveButton
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "desposit"}
            activeColor="green"
          >
            <img src={iconEntrada} alt="entrada" />
            <span>Entrada</span>
          </ActiveButton>

          <ActiveButton
            type="button"
            onClick={() => {
              setType("widthdraw");
            }}
            isActive={type === "widthdraw"}
            activeColor="red"
          >
            <img src={iconSaida} alt="entrada" />
            <span>Entrada</span>
          </ActiveButton>
        </TransactionTypeContainer>
        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit" onClick={handleCreateNewTransaction}>
          Confirmar
        </button>
      </Container>
    </Modal>
  );
}
