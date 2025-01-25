import { Link } from 'react-router-dom';

const ButtonReadMore = () => {
  return (
    <button className='read-more'><Link to={"/projects/1"}>Leer más...</Link></button>
  )
}

export default ButtonReadMore;