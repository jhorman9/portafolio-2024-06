import { useEffect, useState } from 'react';
import aboutIcon from '../../assets/images/social-media.png';

interface CalculateAgeFunction {
  (date: string): number;
}

interface AgeState {
  age: number | null;
}
export const SecondSectionComponent = () => {

  const [ageState, setAgeState] = useState<AgeState>({ age: null });

  const birthDate = '1997-08-12';

  const calculateAge: CalculateAgeFunction = (date: string): number => {
    const today = new Date();
    const birth = new Date(date);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  useEffect(() => {
    const calculatedAge = calculateAge(birthDate);
    setAgeState({ age: calculatedAge });
  }, []);

  return (
    <section className='homePage_2 container'>
      <div className='homePage_2-content'>
        <div className='homePage_2-content__image'>
          <img src={aboutIcon} loading='eager' alt="Icono sobre acerca de mi de Jhorman Nieto desarrollador de software" title='Icono sobre acerca de mi de Jhorman Nieto desarrollador de software' width={670} height={476} />
        </div>
        <div className='homePage_2-content__description description-txt'>
          <h2 className='title'>SOBRE M&#205;</h2>
          <p>Desarrollador full stack, actualmente radicado en Panamá. Con {ageState.age} años de edad, mi pasión por la tecnología y el desarrollo web me llevó a estudiar HTML, CSS y JavaScript, y me especialicé en el desarrollo del frontend con ReactJS, Redux y Bootstrap, y del backend con Node.js, Express, Sequelize y Postgres. Adicionalmente también sé usar Wordpress.</p>
          <p>Siempre estoy en busca de nuevos conocimientos y desafíos, lo que me lleva a estar constantemente actualizándome y aprendiendo nuevas tecnologías para poder brindar soluciones innovadoras a mis clientes.</p>
        </div>
      </div>
    </section>
  )
}
