import React from 'react'
import '../styles/AboutMe.css'

const AboutMe = () =>{
  return(
    <main className='about-me'>
      <p> <strong> Soy docente de programación </strong> con experiencia enseñando <strong> HTML, CSS, JavaScript, C++ y Python </strong> a estudiantes de secundaria y bachillerato. Aunque no he trabajado aún como desarrollador en una empresa, he dedicado mi tiempo a crear <strong> proyectos propios con React </strong> para fortalecer mis habilidades técnicas y prepararme para dar el salto al mundo del desarrollo frontend.</p>
      <div className='my-data' >
        <div className='about-me-left'>
          <h2 className='about-me-title'>🛠️ Habilidades Técnicas</h2>
            <div className='about-me-section'> <small>FrontEnd</small> <span className='tecnologias'>
                <i class="devicon-react-original-wordmark colored tech"></i>
                <i class="devicon-html5-plain-wordmark colored tech"></i>
                <i class="devicon-css3-plain-wordmark colored tech"></i>
                <i class="devicon-javascript-plain colored tech"></i>
              </span> </div>
              <div className='about-me-section' ><small>Conocimientos básicos</small><span className='tecnologias'>
                <i class="devicon-python-plain-wordmark tech"></i>
                <i class="devicon-cplusplus-plain colored tech"></i>
                <i class="devicon-visualbasic-plain colored tech"></i>
              </span> </div>
              <div className='about-me-section' ><small>Conocimientos básicos</small><span className='tecnologias'>
                <i class="devicon-visualstudio-plain colored tech"></i>
                <i class="devicon-git-plain colored tech"></i>
                <i class="devicon-github-original-wordmark colored tech"></i>
              </span> </div>
          
        </div>
        <div className='about-me-right'>
          <h2 className='about-me-title' > 🎯 Actualmente aprendiendo...</h2>
            <div> <span className='tecnologias'>
                  <h3>FrontEnd: </h3> 
                  <i class="devicon-vuejs-plain-wordmark colored tech"></i>
                  <i class="devicon-typescript-plain colored tech"></i>
                </span> </div>
            <div> <span className='tecnologias'>
              <h3>BackEnd: </h3> 
              <i class="devicon-nodejs-plain-wordmark colored tech"></i>
              <i class="devicon-postgresql-plain-wordmark colored tech"></i>
            </span> </div>
        </div>
      </div>
      


    </main>
  )
}
export default AboutMe