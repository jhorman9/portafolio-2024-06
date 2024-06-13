import homeIcon from '../../assets/images/home-page.png';
import aboutIcon from '../../assets/images/social-media.png';
import '../../styles/HomePage.css';

export const HomePage = () => {
  return (
    <>
    <section className="homePage container">
      <div className='homePage_header'>
        <h1 className='title_page'>Hola, <span>mi nombre es <span className='color'>Jhorman Nieto</span></span></h1>
        <h2>Desarrollador Full Stack</h2>
        <p className='description-txt'>¡Hola! Soy un desarrollador <span className="color">FULL STACK </span> con experiencia en HTML, CSS, JavaScript, ReactJS, Redux, Bootstrap, Node.js, Express, Sequelize, PostgresSQL y Wordpress. Mi pasión por el desarrollo web me ha llevado a crear aplicaciones web innovadoras y eficientes que mejoran la experiencia del usuario. Si estás buscando un desarrollador Full Stack, estás en el lugar correcto. ¡Echa un vistazo a mis proyectos y contáctame para trabajar juntos!</p>
        <button className='btn-primary'>Descargar Curriculum</button>
      </div>
      <div>
        <img src={homeIcon} alt="Icono de inicio de Jhorman Nieto desarrollador de software" title='Icono de inicio de Jhorman Nieto desarrollador de software' loading='eager' width={440} height={431}/>
      </div>
    </section>
    <section className='homePage_2 container'>
      <div className='homePage_2-content'>
        <div className='homePage_2-content__image'>
          <img src={aboutIcon} loading='eager' alt="Icono sobre acerca de mi de Jhorman Nieto desarrollador de software" title='Icono sobre acerca de mi de Jhorman Nieto desarrollador de software' width={670} height={476} />
        </div>
        <div className='homePage_2-content__description description-txt'>
          <h2 className='title'>SOBRE M&#205;</h2>
          <p>Desarrollador full stack venezolano, actualmente radicado en Panamá. Con 26 años de edad, mi pasión por la tecnología y el desarrollo web me llevó a estudiar HTML, CSS y JavaScript, y me especialicé en el desarrollo del frontend con ReactJS, Redux y Bootstrap, y del backend con Node.js, Express, Sequelize y Postgres. Adicionalmente también sé usar Wordpress.</p>
          <p>Siempre estoy en busca de nuevos conocimientos y desafíos, lo que me lleva a estar constantemente actualizándome y aprendiendo nuevas tecnologías para poder brindar soluciones innovadoras a mis clientes.</p>
        </div>
      </div>
    </section>
    </>
  )
}
