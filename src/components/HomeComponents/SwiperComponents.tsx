import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import porkKingJPG from '../../assets/images/porkingpty.jpg';
import azumiJPG from '../../assets/images/azumipty.jpg';
import cocolpanJPG from '../../assets/images/cocolpanpty.jpg';
import codigoJPG from '../../assets/images/codigosdeprogramacion.jpg';
import customCodeJPG from '../../assets/images/custom-code.jpg';
import aikikairdJPG from '../../assets/images/aikikaird.jpg';
import crudJPG from '../../assets/images/crud.jpg';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

export const SwiperComponents = () => {
  return (
    <Swiper
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={'auto'}
    initialSlide={4}
    loop={true}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
    pagination={false}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    modules={[EffectCoverflow, Pagination, Autoplay]}
    className="mySwiper"
  >
    <SwiperSlide>
      <Link to='https://porkking.netlify.app/' target='_blank'>
        <img title='Imagen de porking panamá' loading='lazy' width={100} height={100} alt='Imagen de porking panamá' src={porkKingJPG} />      
      </Link>
    </SwiperSlide>
    <SwiperSlide>
      <Link to='https://azumipty.netlify.app/' target='_blank'>
        <img title='Imagen de azumi panamá' loading='lazy' width={100} height={100} alt='Imagen de Azumi Panamá' src={azumiJPG} />
      </Link>
    </SwiperSlide>
    <SwiperSlide>
      <Link to='https://cocolpan.com/' target='_blank'>
        <img title='Imagen de cocolpan panamá' loading='lazy' width={100} height={100} alt='Imagen de Cocolpan Panamá' src={cocolpanJPG} />
      </Link>
    </SwiperSlide>
    <SwiperSlide>
      <Link to='https://codigodeprogramacion.netlify.app/' target='_blank'>
        <img title='Imagen de códigos de programación' loading='lazy' width={100} height={100} alt='Imagen de Azumi Panamá' src={codigoJPG} />
      </Link>
    </SwiperSlide>
    <SwiperSlide>
      <Link to='https://generatorcss-jhorman.netlify.app/' target='_blank'>
        <img title='Imagen de custom code' loading='lazy' width={100} height={100} alt='Imagen de custom code' src={customCodeJPG} />
      </Link>
    </SwiperSlide>
    <SwiperSlide>
      <Link to='https://aikikaird.org/' target='_blank'>
        <img title='Imagen de aikido república dominicana' loading='lazy' width={100} height={100} alt='Imagen de aikido república dominicana' src={aikikairdJPG} />
      </Link>
    </SwiperSlide>
    <SwiperSlide>
      <Link to='#' target='_blank'>
        <img title='Imagen de cocolpan panamá' loading='lazy' width={100} height={100} alt='Imagen de Cocolpan Panamá' src={crudJPG} />
      </Link>
    </SwiperSlide>
  </Swiper>
  )
}
