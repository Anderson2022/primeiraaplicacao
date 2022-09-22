import React from "react";
import GlobalStyle from "../../../../../styles/global";


const Alter = ({children, onClose, handleSave = ()=>{} }) => {
    return (
    <div className="modal">
        <div className="container">   
             <div className="content">{children}</div>
             <button className="close" onClick={onClose}>Fechar</button>
             <button onClick={handleSave}>ADICIONAR</button>
           <GlobalStyle/>
        </div>
    </div>
);
};

export default Alter;