import { Helmet } from 'react-helmet-async';
import aboutMePNG from '../../assets/icons/about.svg';
import '../../styles/About.css';

export const AboutPages = () => {
  return (
    <>
    <Helmet>
      <title>Sobre mí - Jhorman Nieto P</title>
      <link rel="canonical" href="http://localhost:5173/#/about" />
      <meta name="description" content="Jhorman Nieto - Desarrollador Full Stack con experiencia en HTML, CSS, JavaScript, ReactJS, Redux, Bootstrap, Node.js, Express, Sequelize, PostgresSQL y WordPress." />
    </Helmet>
    <section className="about" id='about-section'>
      <div className="about_container container">
        <div>
          <img src={aboutMePNG} width={440} height={431} alt="Sobre mi" title="Sobre mi" loading="lazy" />
        </div>
        <div>
          <h1 className='title'>DESARROLLADOR FULL STACK</h1>
          <div className='description-txt'>
            <p>Con más de dos años de experiencia en frontend y un año adicional en backend, comprometido con el crecimiento constante y la actualización en nuevas tecnologías. A lo largo de mi carrera, he adquirido habilidades en la gestión de hosting y dominios, trabajando con proveedores como Neolo, GoDaddy, HostGator y Hostinger. Mi experiencia incluye el mantenimiento, alojamiento y migración de sitios web.</p>
            <p>Me apasiona el deporte, especialmente el fútbol, el voleibol y el gimnasio. Valoro el trabajo en equipo y disfruto aprendiendo cosas nuevas, así como compartiendo mis conocimientos con otros. Actualmente, estoy estudiando una licenciatura en Administración Tecnológica y Redes Informáticas. Además, me mantengo actualizado a través de cursos y la lectura de documentación técnica actual.</p>
            <p>Mi objetivo es seguir creciendo profesionalmente, aportando soluciones innovadoras y eficientes en el ámbito del desarrollo web.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
