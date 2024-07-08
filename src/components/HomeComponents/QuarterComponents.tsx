import { useNavigate } from "react-router-dom";
import { SwiperComponents } from "./SwiperComponents";

export const QuarterComponents = () => {

  const navigate = useNavigate();

  return (
    <section className='homePage_4'>
        <div className="homePage_4-container container">
            <h2>ALGUNOS DE MIS PROYECTOS</h2>
            <SwiperComponents />
            <button className='btn-primary' onClick={()=> navigate('/projects')}>Ver más</button>
        </div>
    </section>
  )
}
