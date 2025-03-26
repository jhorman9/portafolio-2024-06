import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import codigoJPG from '../../assets/images/portolfio/codigo.jpg';

export const CodigoProjectComponent = () => {
  return (
    <>
      <Helmet>
        <title>Código de programación - Jhorman Nieto P</title>
        <link rel="canonical" href={"https://jhorman.com/projects/6"} />
        <meta name="description" content="Jhorman Nieto - Desarrollador Full Stack con experiencia en HTML, CSS, JavaScript, ReactJS, Redux, Bootstrap, Node.js, Express, Sequelize, PostgresSQL y WordPress." />
        <meta name="keywords" content="Desarrollador Full Stack, HTML, CSS, JavaScript, ReactJS, Redux, Bootstrap, Node.js, Express, Sequelize, PostgresSQL, WordPress, Desarrollo Web" />
        <meta name="author" content="Jhorman Nieto" />
      </Helmet>
      <section className="project" id="porking">
        <div className="project-content">
          <div className="project-left">
            <Link className="project-link-image" to={"https://codigodeprogramacion.netlify.app/"}>
              <img src={codigoJPG} className="project-image" alt="Proyecto de programación" />
            </Link>
          </div>
          <div className="project-right">
            <h2 className="project-subtitle">Código de programación</h2>
            <p className="project-subdescription">Se desarrolló un proyecto colaborativo diseñado para optimizar la reutilización de código entre desarrolladores, facilitando el intercambio de fragmentos y estructuras modulares en distintos proyectos. Se implementó una arquitectura organizada y escalable, permitiendo que el código pueda integrarse de manera eficiente en futuras implementaciones, reduciendo tiempos de desarrollo y mejorando la productividad del equipo.</p>
            <p>El proyecto fue concebido con un enfoque práctico y flexible, permitiendo la incorporación de nuevas funcionalidades de forma ágil y manteniendo una estructura limpia y ordenada. Esta solución no solo optimiza el flujo de trabajo, sino que también promueve las buenas prácticas de desarrollo, fomentando la colaboración y la eficiencia en entornos de trabajo compartidos.</p>
          </div>
        </div>
      </section>
    </>
  )
}
