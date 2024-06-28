import { OneSectionComponent } from '../../components/HomeComponents/OneSectionComponent';
import { SecondSectionComponent } from '../../components/HomeComponents/SecondSectionComponent';
import { ThirdSectionComponent } from '../../components/HomeComponents/ThirdSectionComponent';
import '../../styles/HomePage.css';

export const HomePage = () => {

  return (
    <>
    <OneSectionComponent />
    <SecondSectionComponent />
    <ThirdSectionComponent />
    </>
  )
}