import { useRef } from 'react';
import { 
  Card, 
  CarouselContainer, 
  // ArrowsWrapper, 
  ImgContainer,
  TagsContainer,
  CarouselWrapper } from './style';
import {ArrowCircleRight, ArrowCircleLeft } from '@phosphor-icons/react'
import data from '../../data/data'

function Carousel() {

  const carouselRef = useRef<HTMLUListElement>(null);

  const handleLeftArrow = () => { 
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth + 20;
    }
  }

  const handleRightArrow = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += carouselRef.current.offsetWidth + 20;
    }
  }

  return (
    <>
    <CarouselWrapper>
      <CarouselContainer ref={carouselRef}>
        {data.map((project) => (
          <Card key={project.id}>
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
        ))}
        
      </CarouselContainer>
      {/* <ArrowsWrapper> */}
      <button
        type="button"
        onClick={ handleLeftArrow }
      >
        <ArrowCircleLeft size={40}  weight="fill" />
      </button>
      <button
        type='button'
        onClick={ handleRightArrow }
      >
        <ArrowCircleRight size={40}  weight="fill" />
      </button>
      {/* </ArrowsWrapper> */}
    </CarouselWrapper>
    </>
  );
}

export default Carousel;
