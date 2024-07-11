import { useEffect, useState } from 'react';
import aboutIcon2 from '../../assets/images/Developer activity-amico.png';
import { useNavigate } from 'react-router-dom';

interface CalculateAgeFunction {
  (date: string): number;
}

interface AgeState {
  age: number | null;
}
export const SecondSectionComponent = () => {

  const [ageState, setAgeState] = useState<AgeState>({ age: null });

  const birthDate = '1997-08-12';
  const navigate = useNavigate();

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
          <img src={aboutIcon2} loading='eager' alt="Icono sobre acerca de mi de Jhorman Nieto desarrollador de software" title='Icono sobre acerca de mi de Jhorman Nieto desarrollador de software' width={670} height={476} />
        </div>
        <div className='homePage_2-content__description'>
          <h2 className='title'>SOBRE M&#205;</h2>
          <p className='description-txt'>Radicado en Panamá, tengo {ageState.age} años y una pasión inquebrantable por la tecnología y el desarrollo web. Mi trayectoria profesional me ha permitido especializarme tanto en el frontend como en el backend, ofreciendo soluciones integrales y efectivas para mis clientes.</p>
          <p className='description-txt without-margin'>Mi enfoque está en la creación de experiencias de usuario intuitivas y optimizadas, así como en el desarrollo de sistemas robustos y escalables. Siempre estoy en busca de nuevos conocimientos y desafíos, manteniéndome actualizado con las últimas tendencias y tecnologías para garantizar que mis proyectos sean innovadores y de alta calidad.</p>
          <button className='btn-primary' onClick={()=> navigate('/about')}>Leer más</button>
        </div>
      </div>
    </section>
  )
}
