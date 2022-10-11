import React from "react";
import GlobalStyle from "../../../../../styles/global";


const Modal = ({children, onClose = ()=>{} }) => {
    return (
    <div className="modal">
        <div className="container">
             <div className="content">{children}</div>
             <button className="close" onClick={onClose}>Fechar</button>
           
            
           <GlobalStyle/>
        </div>
    </div>
);
};

export default Modal;