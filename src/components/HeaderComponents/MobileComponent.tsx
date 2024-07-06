import { ListNavigateComponent } from './ListNavigateComponent';
import { SocialMediaComponent } from './SocialMediaComponent';

interface MobileComponentProps {
  isOpen: boolean;
}

export const MobileComponent: React.FC<MobileComponentProps> = ({ isOpen }) => {

  return (
      <div className='mobile-navbar' style={isOpen ? { display: 'block' } : { display: 'none' }}>
        <ListNavigateComponent />
        <div className='mobile-navbar_social-media d-none'>
          <SocialMediaComponent />
        </div>    
      </div>
  )
}
