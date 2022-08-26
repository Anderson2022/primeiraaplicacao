import React from 'react'
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
import SidebarItem from '../SidebarItem'
import Button from '../Button';

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }
  
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
        <SidebarItem Icon={FaIdCardAlt} Text="Employees" />
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