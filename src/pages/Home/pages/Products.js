

import Modal from "react-modal";
import Navbar from "../components/Navbar";
import "./pages.css";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function Products() {
 
  return (
    
    
    <div className="Container">
    <Navbar/>
    
        <h2>Hello - I am a modal!</h2>
        <hr />
        <p>
          We maintain that accessibility is a key component of any modern web
          application. As such, we have created this modal in such a way that it
          fulfills the accessibility requirements of the modern web. We seek to
          keep the focus on accessibility while providing a functional, capable
          modal component for general use.
        </p>
     
       
    </div>
  
  );
}

export default Products;