import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom";
import porkingJPG from '../../assets/images/portolfio/porking.jpg';

export const PorkingProjectComponent = () => {

  return (
    <>
      <Helmet>
        <title>Porking - Jhorman Nieto P</title>
        <link rel="canonical" href={"https://jhorman.com/projects/1"} />
        <meta name="description" content="Jhorman Nieto - Desarrollador Full Stack con experiencia en HTML, CSS, JavaScript, ReactJS, Redux, Bootstrap, Node.js, Express, Sequelize, PostgresSQL y WordPress." />
        <meta name="keywords" content="Desarrollador Full Stack, HTML, CSS, JavaScript, ReactJS, Redux, Bootstrap, Node.js, Express, Sequelize, PostgresSQL, WordPress, Desarrollo Web" />
        <meta name="author" content="Jhorman Nieto" />
      </Helmet>
      <section className="project" id="porking">
        <div className="project-content">
          <div className="project-left">
            <Link className="project-link-image" to={"https://porkking.netlify.app/"}>
              <img src={porkingJPG} className="project-image" alt="Proyecto de porking" />
            </Link>
          </div>
          <div className="project-right">
            <h2 className="project-subtitle">Menú digital</h2>
            <p className="project-subdescription">Se desarrolló un menú digital de comida rápida diseñado a medida, con una interfaz moderna, intuitiva y atractiva, enfocada en brindar una excelente experiencia de usuario. La aplicación web fue creada utilizando HTML, CSS y JavaScript puro (VanillaJS), garantizando un código ligero, eficiente y fácilmente escalable. Para mejorar la accesibilidad y ampliar el alcance del negocio, se implementó una funcionalidad de traducción en dos idiomas, permitiendo a los usuarios alternar entre los idiomas de manera fluida y sin interrupciones. Además, la página está altamente optimizada en términos de rendimiento y adaptabilidad, asegurando una navegación rápida y sin problemas en dispositivos móviles y de escritorio. El diseño prioriza la usabilidad con una estructura clara y elementos visuales bien organizados, facilitando a los clientes la exploración del menú y la selección de productos de manera sencilla y eficiente.</p>
          </div>
        </div>
      </section>
    </>
  )
}
