import { useRef } from 'react';
import { Card, CarouselContainer, ArrowsWrapper } from './style';
import {ArrowCircleRight, ArrowCircleLeft } from '@phosphor-icons/react'

function Carousel() {

  const carouselRef = useRef<HTMLUListElement>(null);

  const images = [
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1671726203454-5d7a5370a9f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',

  ]

  const handleLeftArrow = () => { 
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth - 20;
    }
  }

  const handleRightArrow = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += carouselRef.current.offsetWidth - 20;
    }
  }

  return (
    <>
    <CarouselContainer ref={carouselRef}>
      <Card>
        <img src={images[0]} alt="img" />
        <h3>Card Content 1</h3>
        <p>Esse e o conteudo do meu card</p>
      </Card>
      <Card>
        <img src={images[1]} alt="img" />
        <h3>Card Content 2</h3>
        <p>Esse e o conteudo do meu card</p>
      </Card>
      <Card>
        <img src={images[2]} alt="img" />
        <h3>Card Content 3</h3>
        <p>Esse e o conteudo do meu card</p>
      </Card>
      <Card>
        <img src={images[3]} alt="img" />
        <h3>Card Content 4</h3>
        <p>Esse e o conteudo do meu card</p>
      </Card>
      <Card>
        <img src={images[4]} alt="img" />
        <h3>Card Content 5</h3>
        <p>Esse e o conteudo do meu card</p>
      </Card>
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
