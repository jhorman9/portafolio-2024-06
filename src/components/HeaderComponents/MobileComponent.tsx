import { ListNavigateComponent } from './ListNavigateComponent';
import logoSVG from '../../assets/images/logo/logo-desktop.svg';
import { SocialMediaComponent } from './SocialMediaComponent';

interface MobileComponentProps {
  isOpen: boolean;
}

export const MobileComponent: React.FC<MobileComponentProps> = ({ isOpen }) => {

  return (
      <div className='mobile-navbar' style={isOpen ? { display: 'block' } : { display: 'none' }}>
        <div className='mobile-navbar_logo'>
          <img src={logoSVG} alt="Logo de Jhorman Nieto" loading='eager' title='Logo de jhorman nieto' />
        </div>
        <ListNavigateComponent />
        <div className='mobile-navbar_social-media d-none'>
          <SocialMediaComponent />
        </div>    
      </div>
  )
}
