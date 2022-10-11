import React, { useState } from "react";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
 
} from "react-icons/fa";
import Modal from "./Modal/Modal"
import Alter from "./Modal/Alter";
import './Modal/styles.scss';


const GridItem = ({ item, onDelete }) => {
const [isModalVisible, setIsModalVisible] = useState(false);
const [isAlterVisible, setIsAlterVisible] = useState(false);

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
           
       </Alter >       
       ) : null}
      </C.Td>
    </C.Tr>
  );
};

export default GridItem;
