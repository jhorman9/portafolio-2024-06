import aboutIcon from '../../assets/images/social-media.png';

export const SecondSectionComponent = () => {

  const myDateOfBirth = 1997;
  const getDate = new Date();
  const getActuallyYear = getDate.getFullYear();
  const yearOld = getActuallyYear - myDateOfBirth;

  return (
    <section className='homePage_2 container'>
      <div className='homePage_2-content'>
        <div className='homePage_2-content__image'>
          <img src={aboutIcon} loading='eager' alt="Icono sobre acerca de mi de Jhorman Nieto desarrollador de software" title='Icono sobre acerca de mi de Jhorman Nieto desarrollador de software' width={670} height={476} />
        </div>
        <div className='homePage_2-content__description description-txt'>
          <h2 className='title'>SOBRE M&#205;</h2>
          <p>Desarrollador full stack, actualmente radicado en Panamá. Con {yearOld} años de edad, mi pasión por la tecnología y el desarrollo web me llevó a estudiar HTML, CSS y JavaScript, y me especialicé en el desarrollo del frontend con ReactJS, Redux y Bootstrap, y del backend con Node.js, Express, Sequelize y Postgres. Adicionalmente también sé usar Wordpress.</p>
          <p>Siempre estoy en busca de nuevos conocimientos y desafíos, lo que me lleva a estar constantemente actualizándome y aprendiendo nuevas tecnologías para poder brindar soluciones innovadoras a mis clientes.</p>
        </div>
      </div>
    </section>
  )
}
