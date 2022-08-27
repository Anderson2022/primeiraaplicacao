<<<<<<< HEAD
import React, { useState } from 'react'
=======
import React, {useState} from 'react'
>>>>>>> 95c7d2533f05edfcee421f8f7aa3b61ab7404156
import { Container, Content } from './styles';
import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
  FaRegSun, 
  FaUserAlt, 
  FaIdCardAlt, 
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar,
  
} from 'react-icons/fa';
import useAuth from '../../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import SidebarItem from '../SidebarItem';
import Button from '../Button';
<<<<<<< HEAD
import Form from '../../../Divis/Form';
=======
import Form from '../../../Divi/Form';
>>>>>>> 95c7d2533f05edfcee421f8f7aa3b61ab7404156

  const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }
<<<<<<< HEAD
    const [Form, setForm] = useState(false)
    const showForm = () => setForm(!Form) 
 
  
=======
  const {isFormVisible, setIsFormVisible} = useState(false);
>>>>>>> 95c7d2533f05edfcee421f8f7aa3b61ab7404156
  const { signout } = useAuth();
  const navigate = useNavigate();
  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem Icon={FaHome} Text="Inicio" />
        <SidebarItem Icon={FaChartBar} Text="Statistics" />
        <SidebarItem Icon={FaUserAlt} Text="Usuarios" />
        <SidebarItem Icon={FaEnvelope} Text="E-Mail" />
        <SidebarItem Icon={FaRegCalendarAlt} Text="Calendario" />
<<<<<<< HEAD
        <SidebarItem Icon={FaIdCardAlt} Text="Finanças" onClick={showForm}/>
        {Form && <Form active={setForm}/>}
=======
        <SidebarItem Icon={FaIdCardAlt} Text="Finanças" onClick={() => setIsFormVisible(true) }>Finanças</SidebarItem>
            {isFormVisible  ?  <Form /> : null }
>>>>>>> 95c7d2533f05edfcee421f8f7aa3b61ab7404156
        <SidebarItem Icon={FaRegFileAlt} Text="Reports" />
        <SidebarItem Icon={FaRegSun} Text="Settings" />   
        <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>      
      </Content>
      
    </Container>
  )
}

export default Sidebar