import { 
  Card, 
  ImgContainer,
  TagsContainer,
  CarouselWrapper,
} from './style';
import data from '../../data/data'
import { Swiper, SwiperSlide } from 'swiper/react';

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
          autoplay= {{
            delay: 3000
          }}
          spaceBetween={10}
          effect= {'coverflow'}
          grabCursor= {true}
          coverflowEffect= {{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true
          }}
          breakpoints= {{
            // when window width is >= 320px
            568: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            // when window width is >= 480px
            850: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            // when window width is >= 640px
            1100: {
              slidesPerView: 4,
              spaceBetween: 40
            }
          }}
          // cardsEffect={{
          //   slideShadows: true,
          // }}
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
