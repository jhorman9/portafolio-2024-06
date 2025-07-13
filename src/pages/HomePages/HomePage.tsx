import { Helmet } from 'react-helmet-async';
import { FifthSectionComponent } from '../../components/HomeComponents/FifthSectionComponent';
import { OneSectionComponent } from '../../components/HomeComponents/OneSectionComponent';
import { QuarterComponents } from '../../components/HomeComponents/QuarterComponents';
import { SecondSectionComponent } from '../../components/HomeComponents/SecondSectionComponent';
import { ThirdSectionComponent } from '../../components/HomeComponents/ThirdSectionComponent';
import '../../styles/HomePage.css';

export const HomePage = () => {

  return (
    <>
    <Helmet>
      <title>Desarrollador Full Stack - Jhorman Nieto P</title>
      <link rel="canonical" href={"https://jhorman.com"} />
      <meta name="description" content="Jhorman Nieto - Desarrollador Full Stack con experiencia en HTML, CSS, JavaScript, ReactJS, Redux, Bootstrap, Node.js, Express, Sequelize, PostgresSQL y WordPress." />
      <meta name="keywords" content="Desarrollador Full Stack, HTML, CSS, JavaScript, ReactJS, Redux, Bootstrap, Node.js, Express, Sequelize, PostgresSQL, WordPress, Desarrollo Web" />
      <meta name="author" content="Jhorman Nieto" />
      
      {/* Meta tags para robots de búsqueda */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Meta tags para Open Graph (Facebook, LinkedIn, etc.) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Desarrollador Full Stack - Jhorman Nieto P" />
      <meta property="og:description" content="Jhorman Nieto - Desarrollador Full Stack con experiencia en HTML, CSS, JavaScript, ReactJS, Redux, Bootstrap, Node.js, Express, Sequelize, PostgresSQL y WordPress." />
      <meta property="og:url" content="https://jhorman.com" />
      <meta property="og:site_name" content="Jhorman Nieto - Portafolio" />
      <meta property="og:image" content="https://jhorman.com/assets/logo-desktop-white-Cy8VoD5d.svg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="es_ES" />
      
      {/* Meta tags para Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Desarrollador Full Stack - Jhorman Nieto P" />
      <meta name="twitter:description" content="Jhorman Nieto - Desarrollador Full Stack con experiencia en HTML, CSS, JavaScript, ReactJS, Redux, Bootstrap, Node.js, Express, Sequelize, PostgresSQL y WordPress." />
      <meta name="twitter:image" content="https://jhorman.com/assets/logo-desktop-white-Cy8VoD5d.svg" />
      <meta name="twitter:creator" content="@Jhorman1D" />
      
      {/* Meta tags adicionales para SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="content-language" content="es" />
      <meta name="geo.region" content="PA" />
      <meta name="geo.placename" content="Panamá" />
      <meta name="theme-color" content="#000000" />
      
      {/* Structured Data - JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Jhorman Nieto",
          "jobTitle": "Desarrollador Full Stack",
          "url": "https://jhorman.com",
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
          "worksFor": {
            "@type": "Organization",
            "name": "Freelance"
          }
        })}
      </script>
    </Helmet>
    <OneSectionComponent />
    <SecondSectionComponent />
    <ThirdSectionComponent />
    <FifthSectionComponent />
    <QuarterComponents />
    </>
  )
}