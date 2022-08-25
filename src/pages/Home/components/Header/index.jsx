import React, { useState} from "react";
import { Container2 } from "./styles";
import {FaBars} from 'react-icons/fa';


const Header = ()  =>{
    const [sidebar, setSidebar] = useState(false)

    const showSiderbar = () => setSidebar(!sidebar)

    return (
        <Container2>
            <FaBars onClick={showSiderbar}/>            
        </Container2>
        )
}
export default Header