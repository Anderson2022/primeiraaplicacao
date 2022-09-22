import React, { useState } from "react";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
 
} from "react-icons/fa";
import Modal from "./Modal/Modal"
import Alter from "./Modal/Alter";
import './Modal/styles.scss';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container } from "../Header/styles";

const GridItem = ({ item, onDelete }) => {
const [isModalVisible, setIsModalVisible] = useState(false);
const [isAlterVisible, setIsAlterVisible] = useState(false);
const [amount, setAmount] = useState("");
const [vlr , setVlr] = useState("")
  return (
    <C.Tr>
      <C.Td>{item.desc}</C.Td>
      <C.Td>{item.group}</C.Td>
      <C.Td>{item.vlr}</C.Td>
      <C.Td>{item.amount}</C.Td>
      
     
      <C.Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
         <C.Td alignCenter>
      </C.Td>     
        <button className="delete" onClick={() => setIsModalVisible(true)}>Deleta</button>
       {isModalVisible ? (
       <Modal onClose={() => setIsModalVisible(false)}>
        <h2>Deletar item?</h2>
        <button className="yes" onClick={() => onDelete(item.id)}>Sim</button>
       </Modal>       
       ) : null}


      <button className="alter" onClick={() => setIsAlterVisible(true)}>Alterar</button>
      {isAlterVisible ? (
       <Alter onClose={() => setIsAlterVisible(false)}>
       <h2>Alteração de item</h2>
       <Form.Control className="form" size="lg" type="text" placeholder="Produto" />
      <br />
      <Form.Select className="select" aria-label="Selecione o grupo">
    
      <option>Grupo</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>

    <C.Label>Quantidade</C.Label> 
    <C.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
          
           <C.Label>Valor</C.Label>
          <C.Input
            value={vlr}
            type="number"
            onChange={(e) => setVlr(e.target.value)}
          />
           
       </Alter >       
       ) : null}
      </C.Td>
    </C.Tr>
  );
};

export default GridItem;
