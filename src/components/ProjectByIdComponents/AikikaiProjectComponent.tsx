import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import aikikairdJPG from '../../assets/images/portolfio/aikikaird.jpg';

export const AikikaiProjectComponent = () => {
  return (
    <>
      <Helmet>
        <title>Aikikaird - Jhorman Nieto P</title>
        <link rel="canonical" href={"https://jhorman.com/projects/5"} />
        <meta name="description" content="Jhorman Nieto - Desarrollador Full Stack con experiencia en HTML, CSS, JavaScript, ReactJS, Redux, Bootstrap, Node.js, Express, Sequelize, PostgresSQL y WordPress." />
        <meta name="keywords" content="Desarrollador Full Stack, HTML, CSS, JavaScript, ReactJS, Redux, Bootstrap, Node.js, Express, Sequelize, PostgresSQL, WordPress, Desarrollo Web" />
        <meta name="author" content="Jhorman Nieto" />
      </Helmet>
      <section className="project" id="porking">
        <div className="project-content">
          <div className="project-left">
            <Link className="project-link-image" to={"https://aikikaird.org/"}>
              <img src={aikikairdJPG} className="project-image" alt="Proyecto de porking" />
            </Link>
          </div>
          <div className="project-right">
            <h2 className="project-subtitle">Aikikaird</h2>
            <p className="project-subdescription">Se desarrolló un sitio web profesional utilizando WordPress, con Elementor como constructor visual, siguiendo las especificaciones y requerimientos del cliente. La elección de estas tecnologías garantiza una gestión intuitiva, flexible y eficiente, permitiendo al cliente actualizar y administrar el contenido de manera autónoma, sin necesidad de conocimientos técnicos avanzados.</p>
            <p>Se personalizaron múltiples secciones del sitio para asegurar que tanto el diseño como las funcionalidades se ajustaran a las necesidades específicas del negocio. Además, se optimizó la estructura y navegación de la página, priorizando la experiencia del usuario, el rendimiento y la adaptabilidad en dispositivos móviles y de escritorio.</p>
            <p>El resultado es una plataforma dinámica, moderna y completamente funcional, que ofrece una presencia digital sólida y profesional, alineada con los objetivos del cliente.</p>
          </div>
        </div>
      </section>
    </>
  )
}
