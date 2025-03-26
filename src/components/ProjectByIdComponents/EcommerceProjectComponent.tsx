import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ecommerceJPG from '../../assets/images/portolfio/ecommerce.jpg';

export const EcommerceProjectComponent = () => {
  return (
    <>
      <Helmet>
        <title>Ecommerce - Jhorman Nieto P</title>
        <link rel="canonical" href={"https://jhorman.com/projects/4"} />
        <meta name="description" content="Jhorman Nieto - Desarrollador Full Stack con experiencia en HTML, CSS, JavaScript, ReactJS, Redux, Bootstrap, Node.js, Express, Sequelize, PostgresSQL y WordPress." />
        <meta name="keywords" content="Desarrollador Full Stack, HTML, CSS, JavaScript, ReactJS, Redux, Bootstrap, Node.js, Express, Sequelize, PostgresSQL, WordPress, Desarrollo Web" />
        <meta name="author" content="Jhorman Nieto" />
      </Helmet>
      <section className="project" id="porking">
        <div className="project-content">
          <div className="project-left">
            <Link className="project-link-image" to={"https://develop.azumipty.com/"}>
              <img src={ecommerceJPG} className="project-image" alt="Proyecto de una tienda en linea de azumi" />
            </Link>
          </div>
          <div className="project-right">
            <h2 className="project-subtitle">Ecommerce - Azumi</h2>
            <p className="project-subdescription">Se desarrolló un e-commerce profesional utilizando WordPress, diseñado para ofrecer una experiencia de compra en línea rápida, segura y eficiente. La plataforma fue totalmente personalizada según las necesidades y preferencias del cliente, incorporando plugins y herramientas especializadas que optimizan tanto la funcionalidad como la gestión del sitio.</p>
            <p>Para mejorar el alcance y la accesibilidad, se implementó Google Translate, permitiendo una experiencia multilingüe y facilitando la navegación a clientes de distintos idiomas. Además, se integraron métodos de pago seguros y una interfaz intuitiva que agiliza el proceso de compra, garantizando una experiencia fluida para los usuarios.</p>
            <p>El resultado es una solución e-commerce moderna y escalable, diseñada para maximizar la conversión y brindar una navegación óptima en dispositivos móviles y de escritorio, alineada con los objetivos comerciales del cliente.</p>
          </div>
        </div>
      </section>
    </>
  )
}
