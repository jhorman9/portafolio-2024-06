import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HTML5 from '../TechnologyUseComponents/HtmlComponents';
import CSS from '../TechnologyUseComponents/CssComponents';
import JavaScript from '../TechnologyUseComponents/JsComponents';
import React from '../TechnologyUseComponents/ReactComponents';
import Redux from '../TechnologyUseComponents/ReduxComponents';
import Nodejs from '../TechnologyUseComponents/NodeComponents';
import Expressjs from '../TechnologyUseComponents/ExpressJsComponents';
import Sequelize from '../TechnologyUseComponents/SequelizeComponents';
import PostgreSQL from '../TechnologyUseComponents/PostgreSqlComponents';
import Bootstrap from '../TechnologyUseComponents/BoostrapComponents';
import Git from '../TechnologyUseComponents/GitComponents';
import Github from '../SocialmediaComponents/GithubComponents';
import NPM from '../TechnologyUseComponents/NpmComponents';
import ReactRouter from '../TechnologyUseComponents/ReactRouter';
import TypeScript from '../TechnologyUseComponents/TypeScriptComponents';
import VisualStudioCode from '../TechnologyUseComponents/VSCodeComponents';
import WordPress from '../TechnologyUseComponents/WordPressComponents';

export const MultiCarouselComponents = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 7
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 5
        },
        table2: {
          breakpoint: { max: 768, min: 576 },
          items: 4
        },
        mobile: {
          breakpoint: { max: 575, min: 468 },
          items: 3
        },
        mobile2: {
          breakpoint: { max: 468, min: 0 },
          items: 2
        }
      };

  return (
    <Carousel
    draggable={true}
    infinite={true}
    responsive={responsive}
    autoPlay={true}
    autoPlaySpeed={1000}
    >
        <HTML5 />
        <CSS />
        <JavaScript />
        <TypeScript />
        <React />
        <ReactRouter />
        <Bootstrap />
        <Redux />
        <Nodejs />
        <Expressjs />
        <PostgreSQL />
        <Sequelize />
        <WordPress />
        <Git />
        <Github />
        <NPM />
        <VisualStudioCode />
    </Carousel>
  )
}
