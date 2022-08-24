import React, {useState} from 'react';
import Input from '../../components/input';
import Button from '../../components/button';
import * as C from './style';
import {Link, useNavigate} from "react-router-dom";
import useAuth from '../../hooks/userauth';


const Signin = () => {

        const[email, setEmail] = useState("");
        const[senha, setSenha] = useState("");
        const[error, setError] = useState("");

  return (
    <C.Container>
        <C.Label>Login</C.Label>
            <C.Content>
                <Input
                type="email"
                placeholder="Digite seu E-mail"
                value={email}
                onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
                <input
                type="password"
                placeholder="Digite sua senha"
                value={email}
                onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
                <C.labelError>{error}</C.labelError>
                <Button Text={Entrar} onClick={handleLogin}/>
                <C.Strong>
                    <link to="/signup">&nbsp; Registre-se</link>
                </C.Strong>
             <C.LabelSignup>
           </C.Content>
    </C.Container>
  );
};

export default Signin;