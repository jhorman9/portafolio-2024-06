import { NavLink } from "react-router-dom";
import '../../styles/header.css';
import logoPNG from '../../assets/images/logo/logo-jhorman-nieto.png';
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Link } from "react-router-dom";

export const Header = () => {

  const [width] = useWindowDimensions();

  return (
    <header>
      <Link to='/' className="logo">
        <img src={logoPNG} loading="eager" width={100} height={100} title="logo" alt="react logo" />
      </Link>
      {
        width < 768 ?
        <svg viewBox="0 0 100 80" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="10" fill="#ea8f1d"></rect>  
          <rect y="30" width="100" height="10" fill="#ea8f1d"></rect>
          <rect y="60" width="100" height="10" fill="#ea8f1d"></rect>
        </svg>
          :
        <nav>
          <ul>
            <li>
              <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} to="/">INICIO</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} to="/about">SOBRE M&#205;</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} to="/projects">PORTAFOLIO</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} to="/contact">CONTACTOS</NavLink>
            </li>
          </ul>
        </nav>
      }
    </header>
  )
}
