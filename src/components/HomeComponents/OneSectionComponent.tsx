import homeIcon from '../../assets/images/home-page.png';
import homeIcon2 from '../../assets/images/Developer activity-amico.png';

export const OneSectionComponent = () => {
  return (
    <section className="homePage container">
        <div className='homePage_header'>
        <h1 className='title_page'>Hola, <span>mi nombre es <span className='color'>Jhorman Nieto</span></span></h1>
        <h2 className='subtitle_page'>Desarrollador Full Stack</h2>
        <p className='description-txt'>¡Hola! Soy un desarrollador <span className="color">FULL STACK </span> con experiencia en HTML, CSS, JavaScript, ReactJS, Redux, Bootstrap, Node.js, Express, Sequelize, PostgresSQL y Wordpress. Mi pasión por el desarrollo web me ha llevado a crear aplicaciones web innovadoras y eficientes que mejoran la experiencia del usuario. Si estás buscando un desarrollador Full Stack, estás en el lugar correcto. ¡Echa un vistazo a mis proyectos y contáctame para trabajar juntos!</p>
        <button className='btn-primary'>Descargar Curriculum</button>
        </div>
        <div>
        <img src={homeIcon2} alt="Icono de inicio de Jhorman Nieto desarrollador de software" title='Icono de inicio de Jhorman Nieto desarrollador de software' loading='eager' width={440} height={431}/>
        </div>
    </section>
  )
}
