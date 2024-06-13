import { Link } from 'react-router-dom';
import logoType from '../../assets/images/logo/logo-jhorman-nieto.png';
import '../../styles/footer.css';

export const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logoType} alt="Logo de Jhorman Nieto P" title='Logo de Jhorman Nieto' loading='lazy' width={150} height={200}/>
      </div>
      <div>
        <h3>Navegacion</h3>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/">Sobre mi</Link></li>
          <li><Link to="/">Portafolio</Link></li>
          <li><Link to="/">Contactos</Link></li>
        </ul>
      </div>
      <div>
        <h3>Proyectos</h3>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/">Sobre mi</Link></li>
          <li><Link to="/">Portafolio</Link></li>
          <li><Link to="/">Contactos</Link></li>      
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