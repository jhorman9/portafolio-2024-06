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
        <link rel="canonical" href="https://jhorman.com/#/projects" />
        <meta name="description" content="Portafolio de proyectos de Jhorman Nieto, desarrollador Full Stack en Panamá. Descubre implementaciones en HTML, CSS, JavaScript, ReactJS, WordPress y más." />
        <meta name="keywords" content="Portafolio, Proyectos, Jhorman Nieto, Desarrollador Full Stack, HTML, CSS, JavaScript, ReactJS, WordPress, Panamá, Desarrollo Web" />
        <meta name="author" content="Jhorman Nieto" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Proyectos - Jhorman Nieto P" />
        <meta property="og:description" content="Portafolio de proyectos de Jhorman Nieto, desarrollador Full Stack en Panamá." />
        <meta property="og:url" content="https://jhorman.com/#/projects" />
        <meta property="og:site_name" content="Jhorman Nieto - Portafolio" />
        <meta property="og:image" content="https://jhorman.com/assets/logo-desktop-white-Cy8VoD5d.svg" />
        <meta property="og:locale" content="es_ES" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Proyectos - Jhorman Nieto P" />
        <meta name="twitter:description" content="Portafolio de proyectos de Jhorman Nieto, desarrollador Full Stack en Panamá." />
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
            "@type": "CollectionPage",
            "name": "Portafolio de Proyectos",
            "description": "Portafolio de proyectos de Jhorman Nieto, desarrollador Full Stack en Panamá.",
            "url": "https://jhorman.com/#/projects",
            "creator": {
              "@type": "Person",
              "name": "Jhorman Nieto",
              "sameAs": [
                "https://github.com/jhorman9",
                "https://www.linkedin.com/in/jhormandev/"
              ]
            },
            "hasPart": [
              {"@type": "WebPage", "name": "Menú Digital"},
              {"@type": "WebPage", "name": "Constructora"},
              {"@type": "WebPage", "name": "Menú Digital Azumi"},
              {"@type": "WebPage", "name": "E-commerce"},
              {"@type": "WebPage", "name": "Aikikai"},
              {"@type": "WebPage", "name": "Código"}
            ]
          })}
        </script>
      </Helmet>
      <h1 className="title">PORTAFOLIO DE IMPLEMENTACIONES</h1>      
      <div className="project-page-portfolio">
        <div className="portfolio-item">
          <div className="portfolio-item_image">
            <img
              src={porkKingJPG}
              alt="Captura del proyecto Men\u00fa Digital Porkking"
              width={300}
              height={300}
              loading="lazy"
            />
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
            <img
              src={cocolpanJPG}
              alt="Captura del proyecto Constructora Cocolpan"
              width={300}
              height={300}
              loading="lazy"
            />
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
            <img
              src={azumiJPG}
              alt="Captura del proyecto Men\u00fa Digital Azumi"
              width={300}
              height={300}
              loading="lazy"
            />
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
            <img
              src={ecommerceJPG}
              alt="Captura del proyecto E-commerce"
              width={300}
              height={300}
              loading="lazy"
            />
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
            <img
              src={aikikairdJPG}
              alt="Captura del proyecto Aikikai"
              width={300}
              height={300}
              loading="lazy"
            />
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
            <img
              src={codigoJPG}
              alt="Captura del proyecto C\u00f3digo"
              width={300}
              height={300}
              loading="lazy"
            />
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
