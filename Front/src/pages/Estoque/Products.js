import React, { useEffect, useState } from "react";
import GlobalStyle from "../../styles/global";
import Header from "../Estoque/components/Header";
import Resume from "../Estoque/components/Resume";
import Form from "../Estoque/components/Form";
import Navbar from "../Home/components/Navbar";
import * as C from "./styles/styles";

const Products = () => {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(0);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(0);

    const total = Math.abs(income - expense).toFixed(0);

    setIncome(` ${income}`);
    setExpense(` ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""} ${total}`);
  }, [transactionsList]);

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };

  return (
    <>
    <Navbar />
    <C.Container>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />  
    </C.Container>    
      <GlobalStyle />
    </>
  );
};



export default Products;
