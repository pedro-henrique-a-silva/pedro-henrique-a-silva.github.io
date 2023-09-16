import { useRef } from 'react';
import { 
  Card, 
  CarouselContainer, 
  ArrowsWrapper, 
  ImgContainer,
  TagsContainer } from './style';
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
    <CarouselContainer ref={carouselRef}>
      {data.map((project) => (
        <Card key={project.id}>
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
        </Card>
      ))}
      
    </CarouselContainer>
    <ArrowsWrapper>
      <button
        type="button"
        onClick={ handleLeftArrow }
      >
        <ArrowCircleLeft size={24} color="#ebe5e5" weight="fill" />
      </button>
      <button
        type='button'
        onClick={ handleRightArrow }
      >
        <ArrowCircleRight size={24} color="#ebe5e5" weight="fill" />
      </button>
    </ArrowsWrapper>
    </>
  );
}

export default Carousel;
