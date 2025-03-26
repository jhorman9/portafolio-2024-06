import { Link } from 'react-router-dom';

interface IDComponent {
  id: number
}

const ButtonReadMore: React.FC<IDComponent> = ({ id }) => {
  return (
    <button className='read-more'><Link to={`/projects/${id}`}>Leer más...</Link></button>
  )
}

export default ButtonReadMore;