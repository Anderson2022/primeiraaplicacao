import { Fragment } from 'react';
import { BrowserRouter, Router, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import useAuth from '../hooks/userauth';
/*-------- Tag de limitação do usuario -----*/

const Private = ({item}) => {
    const signed =false;

    return signed > 0 ? <item /> : <Signin />;
};



/*------- Criando as rotas de acesso ------- */
const RoutesApp = () => {
  return (
    <BrowserRouter>
    <Fragment>
        <Routes>
          <Router exact path="/home" element={<Private Item={Home}/>} />
          <Router path="/" element={<Signin/>} />
          <Router exact path="/signup" element={<Signup />} />
          <Router exact path="*" element={<Signin />} />  
        </Routes>
    </Fragment>
    </BrowserRouter>
    );
};

export default RoutesApp;