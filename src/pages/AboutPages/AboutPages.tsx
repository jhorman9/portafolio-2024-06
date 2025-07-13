import { Helmet } from 'react-helmet-async';
import aboutMePNG from '../../assets/icons/about.svg';
import '../../styles/About.css';

export const AboutPages = () => {
  return (
    <>
    <Helmet>
      <title>Sobre mí - Jhorman Nieto P</title>
      <link rel="canonical" href="https://jhorman.com/#/about" />
      <meta name="description" content="Jhorman Nieto - Desarrollador Full Stack con experiencia en HTML, CSS, JavaScript, ReactJS, Redux, Bootstrap, Node.js, Express, Sequelize, PostgresSQL y WordPress." />
      <meta name="keywords" content="Sobre mí, Desarrollador Full Stack, Jhorman Nieto, HTML, CSS, JavaScript, ReactJS, Node.js, Express, PostgreSQL, WordPress, Panamá, Portafolio" />
      <meta name="author" content="Jhorman Nieto" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta property="og:type" content="profile" />
      <meta property="og:title" content="Sobre mí - Jhorman Nieto P" />
      <meta property="og:description" content="Conoce más sobre Jhorman Nieto, desarrollador Full Stack en Panamá." />
      <meta property="og:url" content="https://jhorman.com/#/about" />
      <meta property="og:site_name" content="Jhorman Nieto - Portafolio" />
      <meta property="og:image" content="https://jhorman.com/assets/logo-desktop-white-Cy8VoD5d.svg" />
      <meta property="og:locale" content="es_ES" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Sobre mí - Jhorman Nieto P" />
      <meta name="twitter:description" content="Conoce más sobre Jhorman Nieto, desarrollador Full Stack en Panamá." />
      <meta name="twitter:image" content="https://jhorman.com/assets/logo-desktop-white-Cy8VoD5d.svg" />
      <meta name="twitter:creator" content="@Jhorman1D" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="content-language" content="es" />
      <meta name="geo.region" content="PA" />
      <meta name="geo.placename" content="Panamá" />
      <meta name="theme-color" content="#000000" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Jhorman Nieto",
          "jobTitle": "Desarrollador Full Stack",
          "url": "https://jhorman.com/#/about",
          "image": "https://jhorman.com/assets/logo-desktop-white-Cy8VoD5d.svg",
          "description": "Con más de dos años de experiencia en frontend y un año adicional en backend, comprometido con el crecimiento constante y la actualización en nuevas tecnologías. Experto en gestión de hosting y dominios, mantenimiento y migración de sitios web.",
          "sameAs": [
            "https://github.com/jhorman9",
            "https://www.linkedin.com/in/jhormandev/"
          ],
          "knowsAbout": [
            "JavaScript",
            "ReactJS",
            "Node.js",
            "Express",
            "PostgreSQL",
            "WordPress",
            "HTML",
            "CSS",
            "Bootstrap",
            "Redux",
            "Sequelize"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "PA",
            "addressLocality": "Panamá"
          },
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Licenciatura en Administración Tecnológica y Redes Informáticas"
          }
        })}
      </script>
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
