import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/HomePage.css'
import avatar from '../assets/avatar.svg'
const HomePage = () =>{
  return(
    <main className='main-container'>
      <div className='left'>
      <p className='saludo'>¡Hola! Soy Iván 👋🏻</p>
      <div className='h1'>
        <h1>Desarrollador</h1>
        <h1 className='blue'>FrontEnd</h1>
      </div>
      <p className='frase'>~ La Mecatrónica es mi profesión, pero el desarrollo web mi pasión ~</p>
      <strong className='desc'>Estoy en busca de oprtunidades laborales para inciarme como desarrollador</strong> <br/>
      <div className='left-buttons'>
        <button id="download" className='hide-button'><Link to='proyectos' ><span>Ver proyectos</span> <i class="bi bi-person-workspace"></i> </Link></button>
        <button id="download"><a href="/Curriculum2025.pdf" download><span>Descargar CV</span><i class="bi bi-download"></i></a></button>
      </div>

      </div>

      <div className='right'>
        <img src={avatar} className="avatar-profile" alt='avatar image' />
        <small><em>Desarrollador en:</em></small>
        <div className='tecnologias'>
            <i class="devicon-react-original-wordmark colored tech"></i>
            <i class="devicon-html5-plain-wordmark colored tech"></i>
            <i class="devicon-css3-plain-wordmark colored tech"></i>
            <i class="devicon-javascript-plain colored tech"></i>
        </div>

      </div>

    </main>
  )
} 

export default HomePage