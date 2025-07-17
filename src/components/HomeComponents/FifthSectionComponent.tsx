import { Link } from 'react-router-dom';
import consultingSVG from '../../assets/icons/consulting.svg';
import performanceSVG from '../../assets/icons/Performance.svg';
import solvingsSVG from '../../assets/icons/solving.svg';
import updateManteinanceSVG from '../../assets/icons/update-maintenance.svg';

export const FifthSectionComponent = () => {

  return (
    <section className='homePage_5 container'>
      <div className='homePage_5-content'>
        <div className='homePage_5-content__description description-txt'>
          <h2 className='title'>SOPORTE</h2>
          <p>Brindo una amplia gama de servicios y soporte para asegurar que tus proyectos funcionen de manera eficiente y efectiva. Entre mis servicios se incluyen:</p>
          <ul className='homePage_5-cards'>
            <li className='home-card'>
              <div className='home-image'>
                <img src={consultingSVG} alt="Consultoría Técnica" width={170} height={150} />
              </div>
              <div className='home-body'>
                <h3>Consultoría Técnica</h3>
                <p>Proveer asesoramiento experto sobre las mejores prácticas y estrategias para el desarrollo web</p>
              </div>
              <div className="home-footer">
                <Link to={"https://wa.link/oyoacx"}>Saber mas...</Link>
              </div>
            </li>
            <li className='home-card'>
              <div className='home-image'>
              <img src={solvingsSVG} alt="Solución de problemas" width={170} height={150} />
              </div>
              <div className='home-body'>
                <h3>Solución de Problemas</h3>
                <p>Identificar y resolver problemas técnicos en proyectos existentes para asegurar su funcionamiento óptimo.</p>
              </div>
              <div className="home-footer">
                <Link to={"https://wa.link/2kugyy"}>Saber mas...</Link>
              </div>
            </li>
            <li className='home-card'>
              <div className='home-image'>
              <img src={performanceSVG} alt="Optimización de rendimiento" width={170} height={150} />
              </div>
              <div className='home-body'>
                <h3>Optimización de Rendimiento</h3>
                <p>Realizar análisis y mejoras para asegurar un rendimiento óptimo de los sitios web.</p>
              </div>
              <div className="home-footer">
                <Link to={"https://wa.link/xygnqf"}>Saber mas...</Link>
              </div>
            </li>
            <li className='home-card'>
              <div className='home-image'>
              <img src={updateManteinanceSVG} alt="Mantenimiento y actualización" width={170} height={150} />
              </div>
              <div className='home-body'>
                <h3>Mantenimiento y Actualización</h3>
                <p>Ofrecer servicios continuos para mantener y actualizar sitios web y aplicaciones.</p>
              </div>
              <div className="home-footer">
                <Link to={"https://wa.link/kyivh9"}>Saber mas...</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
