import { Link, useNavigate } from 'react-router-dom';
import logoSVG from '../../assets/images/logo/logo-mobile-white.svg';
import '../../styles/footer.css';
import { NavLink } from 'react-router-dom';

export const Footer = () => {

  const navigate = useNavigate();

  const changeRoute = () => {
    navigate('/');
  }

  return (
    <footer>
      <div className="container">
        <div className='logo-footer'>
          <img src={logoSVG} alt="Logo de Jhorman Nieto P" title='Logo de Jhorman Nieto' loading='lazy' width={200} height={200} onClick={changeRoute}/>
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
            <li><Link to="/projects/4">Ecommerce</Link></li>
            <li><Link to="/projects/3">Menú digital</Link></li>
            <li><Link to="/projects/2">Constructora</Link></li>
            <li><Link to="/projects/5">Artes Marciales</Link></li>      
          </ul>
        </div>
        <div>
          <h3>Contactos</h3>
          <ul>
            <li><a href="mailto:softwaredeveloper@jhorman.com">softwaredeveloper@jhorman.com</a></li>
            <li><Link to="https://wa.link/e77f4c" target='_blank' rel="noopener noreferrer">+507 6596-1547</Link></li>
            <li><Link to="/contact">Formulario de contacto</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}