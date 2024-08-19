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
      <link rel="canonical" href={"https://localhost:5173"} />
      <meta name="description" content="Jhorman Nieto - Desarrollador Full Stack con experiencia en HTML, CSS, JavaScript, ReactJS, Redux, Bootstrap, Node.js, Express, Sequelize, PostgresSQL y WordPress." />
      <meta name="keywords" content="Desarrollador Full Stack, HTML, CSS, JavaScript, ReactJS, Redux, Bootstrap, Node.js, Express, Sequelize, PostgresSQL, WordPress, Desarrollo Web" />
      <meta name="author" content="Jhorman Nieto" />
    </Helmet>
    <OneSectionComponent />
    <SecondSectionComponent />
    <ThirdSectionComponent />
    <FifthSectionComponent />
    <QuarterComponents />
    </>
  )
}