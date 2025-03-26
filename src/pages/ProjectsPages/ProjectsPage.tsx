import { Helmet } from "react-helmet-async";
import '../../styles/project.css';
import porkKingJPG from '../../assets/images/porkingpty.jpg';
import azumiJPG from '../../assets/images/azumipty.jpg';
import cocolpanJPG from '../../assets/images/cocolpanpty.jpg';
import codigoJPG from '../../assets/images/codigosdeprogramacion.jpg';
import aikikairdJPG from '../../assets/images/aikikaird.jpg';
import ecommerceJPG from '../../assets/images/ecommerce.jpg';
import HtmlComponents from '../../components/TechnologyUseComponents/HtmlComponents';
import CssComponents from '../../components/TechnologyUseComponents/CssComponents';
import JavaScript from "../../components/TechnologyUseComponents/JsComponents";
import ButtonReadMore from "../../components/ProjectsComponents/ButtonReadMore";
import PhpComponents from "../../components/TechnologyUseComponents/PhpComponents";
import React from "../../components/TechnologyUseComponents/ReactComponents";
import WordPress from "../../components/TechnologyUseComponents/WordPressComponents";
import WoocomerceComponents from "../../components/TechnologyUseComponents/WoocomerceComponents";
import wpBakeryPNG from '../../assets/icons/wpb.png';
import elementorPNG from '../../assets/icons/elementor.png';

export const ProjectsPage = () => {
  return (
    <section className="project-page container">
      <Helmet>
        <title>Proyectos - Jhorman Nieto P</title>
        <link rel="canonical" href={"https://jhorman.com/projects"} />
        <meta name="description" content="Jhorman Nieto - Desarrollador Full Stack con experiencia en HTML, CSS, JavaScript, ReactJS, Redux, Bootstrap, Node.js, Express, Sequelize, PostgresSQL y WordPress." />
        <meta name="keywords" content="Desarrollador Full Stack, HTML, CSS, JavaScript, ReactJS, Redux, Bootstrap, Node.js, Express, Sequelize, PostgresSQL, WordPress, Desarrollo Web" />
        <meta name="author" content="Jhorman Nieto" />
      </Helmet>
      <h1 className="title">PORTAFOLIO DE IMPLEMENTACIONES</h1>      
      <div className="project-page-portfolio">
        <div className="portfolio-item">
          <div className="portfolio-item_image">
            <img src={porkKingJPG} alt="Proyecto de porking" width={300} height={300} />
          </div>
          <div className="portfolio-item_description">
            <h2>Menú Digital</h2>
            <p>Menú digital de comida rápida, diseñado a medida con una interfaz moderna e intuitiva. Se implementó funcionalidad de traducción en dos idiomas para mejorar la experiencia del usuario y expandir el alcance del negocio. La página está optimizada para rendimiento y adaptabilidad en dispositivos móviles.</p>
          </div>
          <ButtonReadMore id={1}/>
          <div className="portfolio-item_technology">
            <HtmlComponents />
            <CssComponents />
            <JavaScript />
          </div>
        </div>
        <div className="portfolio-item">
          <div className="portfolio-item_image">
            <img src={cocolpanJPG} alt="Proyecto de porking" width={300} height={300} />
          </div>
          <div className="portfolio-item_description">
            <h2>Constructora</h2>
            <p>Reestructuración de una página web entregada con problemas técnicos. Se optimizó el diseño y funcionalidad, mejorando la experiencia del usuario y corrigiendo errores previos. Además, se implementó un formulario personalizado con PHP para garantizar el envío eficiente de mensajes al correo electrónico de la empresa, fortaleciendo la comunicación con los clientes.</p>
          </div>
          <ButtonReadMore id={2}/>
          <div className="portfolio-item_technology">
            <HtmlComponents />
            <CssComponents />
            <JavaScript />
            <PhpComponents />
          </div>
        </div>
        <div className="portfolio-item">
          <div className="portfolio-item_image">
            <img src={azumiJPG} alt="Proyecto de porking" width={300} height={300} />
          </div>
          <div className="portfolio-item_description">
            <h2>Menú Digital</h2>
            <p>Menú organizado por categorías para facilitar a los clientes la búsqueda y visualización de los platos. Esta estructura intuitiva mejora la experiencia del usuario al permitir un acceso rápido y ordenado a las opciones disponibles. El proyecto combina funcionalidad y diseño moderno para adaptarse a cualquier dispositivo.</p>
          </div>
          <ButtonReadMore id={3}/>
          <div className="portfolio-item_technology">
            <React />
            <CssComponents />
          </div>
        </div>
        <div className="portfolio-item">
          <div className="portfolio-item_image">
            <img src={ecommerceJPG} alt="Proyecto de porking" width={300} height={300} />
          </div>
          <div className="portfolio-item_description">
            <h2>E-commerce</h2>
            <p>Desarrollo de un e-commerce creado con WordPress para permitir compras en línea de platos de forma rápida y segura. La página web fue totalmente personalizada según las preferencias del cliente, utilizando plugins y herramientas que optimizaron la funcionalidad y facilitaron la customización. El resultado es una plataforma moderna, intuitiva y completamente adaptada a las necesidades del negocio y sus usuariosDesarrollo de un e-commerce con WordPress que permite la compra en línea de platos de manera rápida y segura. La página web fue totalmente personalizada al gusto del cliente, utilizando plugins y herramientas para optimizar la funcionalidad y el diseño. Además, se implementó Google Translate para ofrecer una experiencia multilingüe, facilitando el acceso a clientes de diferentes idiomas. El resultado es una plataforma moderna, intuitiva y adaptada a las necesidades del negocio y sus usuarios.</p>
          </div>
          <ButtonReadMore id={4}/>
          <div className="portfolio-item_technology">
            <WordPress />
            <WoocomerceComponents />
            <img src={wpBakeryPNG} alt="wp bakery" width={70} height={75}/>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="portfolio-item_image">
            <img src={aikikairdJPG} alt="Proyecto de porking" width={300} height={300} />
          </div>
          <div className="portfolio-item_description">
            <h2>Aikikai</h2>
            <p>Proyecto desarrollado utilizando Elementor, como solicitado por el cliente, para garantizar una gestión sencilla y práctica de su página web. Se personalizaron varias secciones según los requerimientos específicos del cliente, asegurando que el diseño y las funcionalidades se adaptaran a sus necesidades. La página fue creada de la manera más intuitiva posible, permitiendo al cliente manejar y actualizar el contenido de forma autónoma y eficiente.</p>
          </div>
          <ButtonReadMore id={5}/>
          <div className="portfolio-item_technology">
            <WordPress />
            <img src={elementorPNG} alt="elementor" width={300} height={300} className="elementor"/>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="portfolio-item_image">
            <img src={codigoJPG} alt="Proyecto de porking" width={300} height={300} />
          </div>
          <div className="portfolio-item_description">
            <h2>Código</h2>
            <p>Desarrollo de un proyecto creado para facilitar la reutilización de código de programación entre compañeros y amigos. Se implementó una estructura organizada y modular para que los fragmentos de código puedan ser fácilmente reutilizados en futuros proyectos, ahorrando tiempo y mejorando la eficiencia del desarrollo. Este proyecto fue diseñado con un enfoque práctico, permitiendo la integración de nuevas funcionalidades de manera rápida y sencilla, y optimizando el flujo de trabajo del equipo.</p>
          </div>
          <ButtonReadMore id={6}/>
          <div className="portfolio-item_technology">
            <React />
          </div>
        </div>
      </div>
    </section>
  )
}