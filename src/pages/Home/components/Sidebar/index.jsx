import React, {useState} from 'react'
import { Container, Content } from './styles'
import Formulario from '../Divi'
import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
  FaRegSun, 
  FaUserAlt, 
  FaIdCardAlt, 
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar
} from 'react-icons/fa'
import useAuth from "../../../../hooks/useAuth"
import SidebarItem from '../SidebarItem'
import { useNavigate } from 'react-router-dom'
import Button from "../../components/Button";


const Sidebar = ({ active }) => {

  const { signout } = useAuth();
  const navigate = useNavigate();

  const closeSidebar = () => {
    active(false)
  }

    const [formulario,setFormulario] = useState(false)
    const showFormulario = () => setFormulario(!Formulario)

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem Icon={FaHome} Text="Inicio" />
        <SidebarItem Icon={FaChartBar} Text="Estatistica" />
        <SidebarItem Icon={FaUserAlt} Text="Usuario" />
        <SidebarItem Icon={FaEnvelope} Text="E-Mail" />
        <SidebarItem Icon={FaRegCalendarAlt} Text="Calendario" />
        <SidebarItem Icon={FaIdCardAlt} Text="Finanças" onClick={showFormulario} />
        <SidebarItem Icon={FaRegFileAlt} Text="Relatorios" />
        <SidebarItem Icon={FaRegSun} Text="Configurações" />
          
        <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
      </Content>
    </Container>
  )
}

export default Sidebar