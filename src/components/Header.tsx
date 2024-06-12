import { NavLink } from "react-router-dom";
import '../styles/header.css';
import logoPNG from '../assets/images/logo/logo-jhorman-nieto.png';

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logoPNG} loading="eager" width={100} height={100} title="logo" alt="react logo" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} to="/">INICIO</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} to="/about">SOBRE MI</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} to="/projects">PORTAFOLIO</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} to="/contact">CONTACTOS</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
