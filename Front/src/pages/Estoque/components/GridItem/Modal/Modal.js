import React from "react";


const Modal = ({children, onClose = ()=>{} }) => {
    return (
    <div className="modal">
        <div className="container">
             <div className="content">{children}</div>
            <button className="close" onClick={onClose}>Fechar</button>
           
        </div>
    </div>
);
};

export default Modal;