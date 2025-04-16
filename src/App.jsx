import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import Proyects from './components/Proyects'
import AboutMe from './components/AboutMe'

function App() {

  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar/>} >
          <Route index element={<HomePage/>} />
          <Route path='proyectos' element={<Proyects />} />
          <Route path='SobreMi' element={<AboutMe />} />
        </Route >
      </Routes>
    </BrowserRouter> 
  </>
  )
}

export default App
