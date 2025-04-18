import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'

const NavBar = () =>{

  const [active, setActive] = useState([true,false,false])
  const toogle = (ind)=>{
    const blank = [false,false,false];
    blank[ind] = true;
    setActive(blank)
  }

  return(
    <div className='bowser'>
      <nav>

      <div className='nav-buttons'>
      <button><i class="bi bi-chevron-left"></i></button>
      <button><i class="bi bi-chevron-right"></i></button>
      <button><i class="bi bi-arrow-clockwise"></i></button>
      </div>

      <div className='middle'>
      <i class="bi bi-search"></i>
      <input type="text" className='search-bar' placeholder='Buscar proyecto...' />
      </div>


      <div className='nav-buttons'>
      <button><i class="bi bi-dash"></i></button>
      <button><i class="bi bi-square"></i></button>
      <button><i class="bi bi-x"></i></button>
      </div>
      </nav>

      <header className='menu'>
        <div className='logo'>
          &#60;BeboDev/&#62;
        </div>

        <ul>
          <li><Link to = '/' className={ active[0] ? `active` : `link`} onClick={()=>{toogle(0)}} >Inicio</Link></li>
          <li><Link to = '/proyectos' className={ active[1] ? `active` : `link`} onClick={()=>{toogle(1)}} >Proyectos</Link></li>
          <li><Link to = '/sobremi' className={ active[2] ? `active` : `link`} onClick={()=>{toogle(2)}} >Sobre mí</Link></li>
        </ul>
      </header>

</div>
  )
}
export default NavBar