import { ListNavigateComponent } from './ListNavigateComponent';
import logoPNG from '../../assets/images/logo/logo-jhorman-nieto.png';
import { SocialMediaComponent } from './SocialMediaComponent';

interface MobileComponentProps {
  isOpen: boolean;
}

export const MobileComponent: React.FC<MobileComponentProps> = ({ isOpen }) => {

  return (
      <div className='mobile-navbar' style={isOpen ? { display: 'block' } : { display: 'none' }}>
        <div className='mobile-navbar_logo'>
          <img src={logoPNG} alt="Logo de Jhorman Nieto" loading='eager' title='Logo de jhorman nieto' />
        </div>
        <ListNavigateComponent />
        <div className='mobile-navbar_social-media d-none'>
          <SocialMediaComponent />
        </div>    
      </div>
  )
}
