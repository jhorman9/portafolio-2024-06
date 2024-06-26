import { ListNavigateComponent } from './ListNavigateComponent';

interface MobileComponentProps {
  isOpen: boolean;
}

export const MobileComponent: React.FC<MobileComponentProps> = ({ isOpen }) => {

  console.log(isOpen)

  return (
    <div className='mobile-navbar' style={isOpen ? { display: 'flex' } : { display: 'none' }}>
      <ListNavigateComponent />    
    </div>
  )
}
