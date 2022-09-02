import React from 'react';
import Navbar from '../Home/components/Navbar';
import Modal from "react-modal";
import App from "../Divis"




Modal.setAppElement("#root");

function Formula() {
 
  return (
    <>
    <Navbar/>
    <App/>   
     
 </>
  );
}

export default Formula;