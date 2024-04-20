import { 
  Card, 
  ImgContainer,
  TagsContainer,
  CarouselWrapper,
} from './style';
import data from '../../data/data'
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

import { 
  EffectCoverflow,
  Navigation, 
  Pagination, 
  } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Carousel() {

  return (
    <>
    <CarouselWrapper>
      <Swiper
          modules={[EffectCoverflow, Navigation, Pagination]}
          speed={1000}
          slidesPerView={1}
          centeredSlides
          tag="section"
          loop={true}
          spaceBetween={20}
          effect= {'fade'}
          fadeEffect= {{
            crossFade: true
          }}
          breakpoints={ {
            // when window width is >= 320px
            768: {
              slidesPerView: 3,
              spaceBetween: 40
            },
            1100: {
              slidesPerView: 4,
              spaceBetween: 50
            },
           
          }}
          cardsEffect={{
            slideShadows: true,
          }}
          navigation
          pagination={{ clickable: true }}
        >
          {data.map((project) => (
            <SwiperSlide
              key={ project.id }
            >
              <Card>
                <a href={project.projectUrl} target="_blank">
                  <ImgContainer>
                    <img src={project.projectImage} alt="img" />
                  </ImgContainer>
                  <h3>{project.projectName}</h3>
                  <p>{project.projectDescription}</p>
                  <TagsContainer>
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </TagsContainer>
                </a>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </CarouselWrapper>
    </>
  );
}

export default Carousel;
