import { useEffect, useState } from 'react';
import aboutIcon from '../../assets/images/Bug fixing-amico.png';

export const FifthSectionComponent = () => {

  return (
    <section className='homePage_5 container'>
      <div className='homePage_5-content'>
        <div className='homePage_5content__image'>
          <img src={aboutIcon} loading='eager' alt="Icono sobre acerca de mi de Jhorman Nieto desarrollador de software" title='Icono sobre acerca de mi de Jhorman Nieto desarrollador de software' width={670} height={476} />
        </div>
        <div className='homePage_5-content__description description-txt'>
          <h2 className='title'>SOPORTE</h2>
          <p>Brindo una amplia gama de servicios de soporte para asegurar que tus proyectos funcionen de manera eficiente y efectiva. Entre mis servicios se incluyen:</p>
          <ul className='list-support'>
            <li><strong className='color'>Consultoría Técnica:</strong> Proveer asesoramiento experto sobre las mejores prácticas y estrategias para el desarrollo web.</li>
            <li><strong className='color'>Mantenimiento y Actualización:</strong> Ofrecer servicios continuos para mantener y actualizar sitios web y aplicaciones.</li>
            <li><strong className='color'>Optimización de Rendimiento:</strong> Realizar análisis y mejoras para asegurar un rendimiento óptimo de los sitios web.</li>
            <li><strong className='color'>Solución de Problemas:</strong> Identificar y resolver problemas técnicos en proyectos existentes.</li>
            <li><strong className='color'>Capacitación y Formación:</strong> Proporcionar entrenamiento especializado y formación en tecnologías y herramientas específicas.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
