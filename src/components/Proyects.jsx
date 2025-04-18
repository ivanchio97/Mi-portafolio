import React from 'react'
import '../styles/Proyects.css'
import htcImg from '../assets/htc.gif'
import binaryImg from '../assets/binary.gif'
import beboEats from '../assets/beboEats.gif'
import quizz from '../assets/quizz.gif'
import study from '../assets/study.gif'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import "slick-carousel/slick/slick-theme.css"

const Proyects = () =>{

  const names = ["Study Tracker","Hack the code", "Binary Game", "Biblia Quizz", "Clon de Uber Eats"]
  const images = [study,htcImg,binaryImg,quizz,beboEats]
  const descriptions = [
  "App para el monitoreo y control de estudio personal",
  "Juego sobre lógica para adolescentes", 
  "Juego sobre conversión de sistemas numéricos",
  "Test sobre personajes de la biblia",
  "App estilo Uber Eats"
]
  const links_live = [
    "https://study-tracker-react.netlify.app/",
    "https://hack-the-code.netlify.app/",
    "https://binary-game-10.netlify.app/",
    "https://biblia-quizz.netlify.app/",
    "https://uber-eats-clon.netlify.app/"
  ]
  const links_github = [
    "https://github.com/ivanchio97/study-tracker",
    "https://github.com/ivanchio97/hackthecode",
    "https://github.com/ivanchio97/binary-game-1.0",
    "https://github.com/ivanchio97/BibliaQuizz",
    "https://github.com/ivanchio97/Uber-Eats-Clon"
  ]

  const FlechaIzquierda = ({onClick}) =>{
    return <i className="bi bi-arrow-left-circle-fill tech flecha-izquierda" onClick = {onClick} ></i>
  }

  const FlechaDerecha = ({onClick}) =>{
    return <i className="bi bi-arrow-right-circle-fill tech flecha-derecha" onClick = {onClick} ></i>
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <FlechaIzquierda/>,
    nextArrow: <FlechaDerecha />
  }



  return(
    <main className='proyects'>
      <Slider {...settings} className='slider' >
      {
          names.map((element,ind)=>{
            return (
              <div className='item'>
                <div className='item-image'>
                  <img src={images[ind]} alt=""/>
                </div>
                <div className='item-data'>
                  <h2>{element}</h2>
                  <p className='item-description' >{descriptions[ind]}</p>
                  <div className='item-buttons'>
                  <a href={links_live[ind]} target='_blank' ><button><i class="bi bi-play-circle-fill"></i>Ver en vivo</button></a>
                  <a href={links_github[ind]} target='_blank'  ><button><i class="bi bi-github"></i>Ver repositorio</button></a>
                  </div>
                </div>
              </div>
            )
          })
        }
      </Slider>
    </main>
  )
}
export default Proyects