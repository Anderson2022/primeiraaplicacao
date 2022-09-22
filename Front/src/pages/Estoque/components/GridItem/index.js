import React, { useState } from "react";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
 
} from "react-icons/fa";
import Modal from "./Modal/Modal"
import './Modal/styles.scss';

const GridItem = ({ item,  }) => {
const [isModalVisible, setIsModalVisible] = useState(false);
 
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
        <button onClick={() => setIsModalVisible(true)}>Delete</button>
       {isModalVisible ? (
       <Modal onClose={() => setIsModalVisible(false)}>
        <h2>Deletar item?</h2>
       </Modal>)
        : null}
      </C.Td>
    </C.Tr>
  );
};

export default GridItem;
