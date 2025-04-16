import React from 'react'
import '../styles/HomePage.css'
import avatar from '../assets/avatar.svg'
const HomePage = () =>{
  return(
  <>
    <main className='main-container'>
      <div className='left'>
      <p className='saludo'>¡Hola! Soy Iván 👋🏻</p>
      <h1>Desarrollador</h1>
      <h1 className='blue'>FrontEnd</h1>
      <p className='frase'>~ La Mecatrónica es mi profesión, pero el desarrollo web mi pasión ~</p>
      <strong className='desc'>Estoy en busca de oprtunidades laborales para inciarme como desarrollador</strong> <br/>
      <button id="download"><a href="/Curriculum2025.pdf" download><span>Descargar CV</span><i class="bi bi-download"></i></a></button>
      </div>

      <div className='right'>
        <div className='avatar'>
          <img src={avatar} alt="avatar-profile" />
        </div>
        <small><em>Desarrollador en:</em></small>
        <div className='tecnologias'>
            <i class="devicon-react-original-wordmark colored tech"></i>
            <i class="devicon-html5-plain-wordmark colored tech"></i>
            <i class="devicon-css3-plain-wordmark colored tech"></i>
            <i class="devicon-javascript-plain colored tech"></i>
        </div>

      </div>

    </main>
  </>
  )
} 

export default HomePage