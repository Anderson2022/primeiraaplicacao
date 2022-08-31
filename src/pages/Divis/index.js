import React from 'react';
import ReactDOM from 'react-dom';

import Form from '../Divis/Form'
import Navbar from '../Home/components/Navbar';

const Formula = () =>{
ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <Form />
  </React.StrictMode>,
  document.getElementById('root')
);
}
export default Formula;
