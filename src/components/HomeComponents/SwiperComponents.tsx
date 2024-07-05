import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

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
    pagination={{
      clickable: true,
    }}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    modules={[EffectCoverflow, Pagination, Autoplay]}
    className="mySwiper"
  >
    <SwiperSlide>
      <Link to='https://www.cocolpan.com/index.html' target='_blank'>
        <img title='Imagen de naturaleza' loading='lazy' width={100} height={100} alt='Imagen de la naturaleza' src="https://swiperjs.com/demos/images/nature-1.jpg" />      
      </Link>
    </SwiperSlide>
    <SwiperSlide>
      <Link to='https://www.cocolpan.com/index.html' target='_blank'>
        <img title='Imagen de naturaleza' loading='lazy' width={100} height={100} alt='Imagen de la naturaleza' src="https://swiperjs.com/demos/images/nature-2.jpg" />
      </Link>
    </SwiperSlide>
    <SwiperSlide>
      <Link to='https://www.cocolpan.com/index.html' target='_blank'>
        <img title='Imagen de naturaleza' loading='lazy' width={100} height={100} alt='Imagen de la naturaleza' src="https://swiperjs.com/demos/images/nature-3.jpg" />
      </Link>
    </SwiperSlide>
    <SwiperSlide>
      <Link to='https://www.cocolpan.com/index.html' target='_blank'>
        <img title='Imagen de naturaleza' loading='lazy' width={100} height={100} alt='Imagen de la naturaleza' src="https://swiperjs.com/demos/images/nature-4.jpg" />
      </Link>
    </SwiperSlide>
    <SwiperSlide>
      <Link to='https://www.cocolpan.com/index.html' target='_blank'>
        <img title='Imagen de naturaleza' loading='lazy' width={100} height={100} alt='Imagen de la naturaleza' src="https://swiperjs.com/demos/images/nature-5.jpg" />
      </Link>
    </SwiperSlide>
    <SwiperSlide>
      <Link to='https://www.cocolpan.com/index.html' target='_blank'>
        <img title='Imagen de naturaleza' loading='lazy' width={100} height={100} alt='Imagen de la naturaleza' src="https://swiperjs.com/demos/images/nature-6.jpg" />
      </Link>
    </SwiperSlide>
    <SwiperSlide>
      <Link to='https://www.cocolpan.com/index.html' target='_blank'>
        <img title='Imagen de naturaleza' loading='lazy' width={100} height={100} alt='Imagen de la naturaleza' src="https://swiperjs.com/demos/images/nature-7.jpg" />
      </Link>
    </SwiperSlide>
    <SwiperSlide>
      <Link to='https://www.cocolpan.com/index.html' target='_blank'>
        <img title='Imagen de naturaleza' loading='lazy' width={100} height={100} alt='Imagen de la naturaleza' src="https://swiperjs.com/demos/images/nature-8.jpg" />
      </Link>
    </SwiperSlide>
    <SwiperSlide>
      <Link to='https://www.cocolpan.com/index.html' target='_blank'>
        <img title='Imagen de naturaleza' loading='lazy' width={100} height={100} alt='Imagen de la naturaleza' src="https://swiperjs.com/demos/images/nature-1.jpg" />
      </Link>
    </SwiperSlide>
  </Swiper>
  )
}
