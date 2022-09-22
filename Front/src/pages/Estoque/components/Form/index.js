import React, { useState } from "react";
import Grid from "../Grid";
import * as C from "./styles";

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState("");
  const [group, setGroup] = useState("");
  const [amount, setAmount] = useState("");
  const [vlr , setVlr] = useState("")
  const [isExpense, setExpense] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      group:  group,
      vlr: vlr,
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
    setGroup("");
    setVlr("");
  };

  return (
    <>
      <C.Container>
      <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Grupo</C.Label>
          <C.Input value={group} onChange={(e) => setGroup(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input
            value={vlr}
            type="number"
            onChange={(e) => setVlr(e.target.value)}
          />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Quantidade</C.Label>
          <C.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </C.InputContent>
        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rIncome">Entrada</C.Label>
          <C.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rExpenses">Saída</C.Label>
        </C.RadioGroup>
        <C.Button onClick={handleSave}>ADICIONAR</C.Button>
      </C.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default Form;
