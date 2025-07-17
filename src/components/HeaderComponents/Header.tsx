import '../../styles/header.css';
import logoSVG from '../../assets/images/logo/logo-desktop-white.svg';
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Link } from "react-router-dom";
import { DesktopComponent } from "./DesktopComponent";
import { MobileComponent } from "./MobileComponent";
import { useState } from 'react';

export const Header = () => {

  const [width] = useWindowDimensions();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header>
      <div className="header-container container">
        <Link to='/' className="logo">
          <img src={logoSVG} loading="lazy" width={250} height={48} title="logo" alt="react logo" />
        </Link>
        {
          width < 768 ?
          <>
          <button
            type="button"
            aria-label="Abrir menú"
            aria-expanded={isOpen}
            onClick={handleClick}
            className="header-toggle"
          >
            <svg viewBox="0 0 100 80" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="10" fill="#ea8f1d" />
              <rect y="30" width="100" height="10" fill="#ea8f1d" />
              <rect y="60" width="100" height="10" fill="#ea8f1d" />
            </svg>
          </button>
          <MobileComponent isOpen={isOpen} setIsOpen={setIsOpen}/>
          </>
            :
          <DesktopComponent />
        }
      </div>
    </header>
  )
}
