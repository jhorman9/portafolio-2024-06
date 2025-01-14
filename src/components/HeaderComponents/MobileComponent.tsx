import { ListNavigateComponent } from './ListNavigateComponent';
import { SocialMediaComponent } from './SocialMediaComponent';

interface MobileComponentProps {
  isOpen: boolean;
  setIsOpen(value: boolean): void;
}

export const MobileComponent: React.FC<MobileComponentProps> = ({ isOpen, setIsOpen }) => {

  const changeFalse = (): void => {
    setIsOpen(false);
  };

  return (
      <div className='mobile-navbar' style={isOpen ? { display: 'block' } : { display: 'none' }} onClick={changeFalse}>
        <ListNavigateComponent />
        <div className='mobile-navbar_social-media d-none'>
          <SocialMediaComponent />
        </div>    
      </div>
  )
}
