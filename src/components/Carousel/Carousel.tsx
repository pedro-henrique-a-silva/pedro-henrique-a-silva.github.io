import { 
  Card, 
  ImgContainer,
  TagsContainer,
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
    <Swiper
        modules={[EffectCoverflow, Navigation, Pagination]}
        speed={1000}
        slidesPerView={5}
        centeredSlides
        tag="section"
        loop={true}
        effect='coverflow'
        coverflowEffect={{
          rotate: 50, 
          stretch: 0, 
          depth: 160, 
          modifier: 1, 
          slideShadows: false,
          scale: 0.7
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
   
    </>
  );
}

export default Carousel;
