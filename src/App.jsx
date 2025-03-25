
import { Outlet } from 'react-router-dom'
import './App.css'
import Contactform from './Components/ContactForm/Contactform'
import ContactHeader from './Components/ContactHeader/ContactHeader'
import Nav from './Components/Navbar/Nav'

function App() {

  return (
    <>
     <Nav/>
     <Outlet/>
    </>
  )
}

export default App
