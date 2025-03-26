import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import cocolpanJPG from '../../assets/images/portolfio/cocolpan.jpg';

export const CocolpanProjectComponent = () => {
  return (
    <>
      <Helmet>
        <title>Cocolpan - Jhorman Nieto P</title>
        <link rel="canonical" href={"https://jhorman.com/projects/2"} />
        <meta name="description" content="Jhorman Nieto - Desarrollador Full Stack con experiencia en HTML, CSS, JavaScript, ReactJS, Redux, Bootstrap, Node.js, Express, Sequelize, PostgresSQL y WordPress." />
        <meta name="keywords" content="Desarrollador Full Stack, HTML, CSS, JavaScript, ReactJS, Redux, Bootstrap, Node.js, Express, Sequelize, PostgresSQL, WordPress, Desarrollo Web" />
        <meta name="author" content="Jhorman Nieto" />
      </Helmet>
      <section className="project" id="cocolpan">
        <div className="project-content">
          <div className="project-left">
            <Link className="project-link-image" to={"https://cocolpan.com/"}>
              <img src={cocolpanJPG} className="project-image" alt="Proyecto de cocolpan" />
            </Link>
          </div>
          <div className="project-right">
            <h2 className="project-subtitle">Cocolpan - constructora</h2>
            <p className="project-subdescription">Se realizó una reestructuración completa de una página web previamente entregada con diversos problemas técnicos, optimizando tanto su diseño como su funcionalidad para mejorar la experiencia del usuario y garantizar un rendimiento óptimo.</p>
            <p>El desarrollo se llevó a cabo utilizando HTML, CSS y JavaScript puro (VanillaJS), asegurando un código limpio, eficiente y adaptable a distintos dispositivos. Adicionalmente, se incorporó PHP para la implementación de un formulario de contacto personalizado, permitiendo el envío seguro y eficiente de mensajes al correo electrónico corporativo del cliente, mejorando así la comunicación con los usuarios.</p>
            <p>Gracias a estas mejoras, la página ahora cuenta con una interfaz más intuitiva, mayor estabilidad y una arquitectura optimizada que facilita la interacción con los visitantes y fortalece la presencia digital del negocio.</p>
          </div>
        </div>
      </section>
    </>
  )
}
