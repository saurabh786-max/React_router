import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Contactform from './Components/ContactForm/Contactform.jsx'
import ContactHeader from './Components/ContactHeader/ContactHeader.jsx'
import About from './Components/About/About.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<App/>}>
      <Route path='' element = {<Home/>}/>
      <Route path='contact' element ={<ContactHeader/>}/>
       <Route path='about' element={<About/>}/>
      
    </Route>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
