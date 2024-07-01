import data from '../data/data'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";

import { 
  A11y,
  Navigation, 
  Pagination,
  Scrollbar, 
  } from 'swiper/modules';

  // Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { ProjectCard, ProjectDescription, ProjectImage } from './ui/projectsComponents';
import { Title, TitleNoProjects } from './ui/title';
import { Paragraph } from './ui/paragraph';
import { AboutSocialMedia, AboutSocialMediaWrapper } from './ui/aboutComponents';
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import { CarouselProps } from '../type';

function Carousel( props: CarouselProps) {
  const { projects, filter } = props
  let projectsToRender = projects

  if (filter !== "all") {
    projectsToRender = projects.filter((project) => project.tags.includes(filter))
  }

  if (projectsToRender.length === 0) {
    return (
    <TitleNoProjects $isVisible={true} $titleSize={1.5} $titleWeight={400} $titleColor="#E8E7E7">
      Sem projetos para mostrar
    </TitleNoProjects>
  )
  }
  return (
    <>
       <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={projectsToRender.length < 3 ? projectsToRender.length : 3}
      spaceBetween={50}
      pagination={{ clickable: true }}
    >
      { projectsToRender.map((project) => (
        <SwiperSlide key={project.id}>
          <ProjectCard>
            <ProjectImage src={project.projectImage} alt={project.projectName} />
            <ProjectDescription>
              <Title $isVisible={true} $titleSize={1.5} $titleWeight={400} $titleColor="#E8E7E7">
                {project.projectName}
              </Title>
              <Paragraph $paragraphColor='#E8E7E7'>
                {project.projectDescription}
              </Paragraph>
              <AboutSocialMediaWrapper>
                <AboutSocialMedia $socialColor="#0077B5">
                  <LinkedinLogo size={18}/>
                </AboutSocialMedia>
                <AboutSocialMedia $socialColor="#7232bd">
                  <GithubLogo size={18}/>
                </AboutSocialMedia>
              </AboutSocialMediaWrapper>
            </ProjectDescription>
          </ProjectCard>
        </SwiperSlide>
      ))
    }
    </Swiper>
    </>
  );
}

export default Carousel;
