import { Link } from 'react-router-dom';
import logoType from '../../assets/images/logo/logo-jhorman-nieto.png';
import '../../styles/footer.css';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer>
      <div>
        <Link to='/'>
          <img src={logoType} alt="Logo de Jhorman Nieto P" title='Logo de Jhorman Nieto' loading='lazy' width={150} height={200}/>
        </Link>
      </div>
      <div>
        <h3>Navegacion</h3>
        <ul>
          <li><NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} to="/">Inicio</NavLink></li>
          <li><NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} to="/about">Sobre mi</NavLink></li>
          <li><NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} to="/projects">Portafolio</NavLink></li>
          <li><NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} to="/contact">Contactos</NavLink></li>
        </ul>
      </div>
      <div>
        <h3>Proyectos</h3>
        <ul>
          <li><Link to="/">Menu 1</Link></li>
          <li><Link to="/">Menu 2</Link></li>
          <li><Link to="/">Menu 3</Link></li>
          <li><Link to="/">Menu 4</Link></li>      
        </ul>
      </div>
      <div>
        <h3>Contactos</h3>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/">Sobre mi</Link></li>
          <li><Link to="/">Portafolio</Link></li>
          <li><Link to="/">Contactos</Link></li>      
        </ul>
      </div>
    </footer>
  )
}