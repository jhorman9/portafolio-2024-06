import { NavLink } from 'react-router-dom';

export const ListNavigateComponent = () => {
    
    return (
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
  )
}
