import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home/App";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Products from "../pages/Home/pages/Products";
import Inicio from "../pages/Home/pages/Inicio"

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<Signin />} />
          <Route exact path="/products" element={<Products />} />
          <Route path="*" element={<Products />} />
          <Route exact path="/inicio" element={<Inicio />} />
          <Route path="*" element={<Inicio />} />
        </Routes>
      </Fragment>
     
    </BrowserRouter>
    
  );
};

export default RoutesApp;