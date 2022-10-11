import React, {useState} from "react";
import GlobalStyle from "../../../../../styles/global";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import GridItem from "../index";




const Alter = ({onClose, handleSave = ()=>{} }) => {
    return (
        
    <div className="modal">
        <div className="container"> 
        <h2>Alteração de item</h2>
        
        
          <Form.Control className="form" size="lg" type="text" defaultValue={item.desc}/>    
              
          <Form.Select className="select" aria-label="Selecione o grupo" >
        
          </Form.Select>
        <InputGroup className="mb-3">
                <InputGroup.Text>Preço$</InputGroup.Text>
                      <Form.Control className="control" type="number"/>
                <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup>
        
        <InputGroup className="mb-4">
          <InputGroup.Text>Quantidade</InputGroup.Text>
            <Form.Control className="control" type="number" />
        </InputGroup> 
        
             
     
             <button className="close" onClick={onClose}>Fechar</button>
             <button className="Add" onClick={handleSave}>ADICIONAR</button>
           <GlobalStyle/>
        </div>
    </div>
);
};

   
export default Alter;