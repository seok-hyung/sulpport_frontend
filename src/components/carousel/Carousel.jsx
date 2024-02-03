import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { carouselList } from './CarouselList';
import styled from 'styled-components';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = carouselList;
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [mouseDown, setMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null); // 추가된 부분
  const [carouselWidth, setCarouselWidth] = useState(1100);
  useEffect(() => {
    setCarouselWidth(carouselRef.current.offsetWidth); // 추가된 부분
  }, []); // 추가된 부분

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX);
  };

  const handleMouseDown = (e) => {
    setMouseDown(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseLeave = () => {
    setMouseDown(false);
  };

  const moveSlide = (direction) => {
    if (direction === 'prev') {
      const prevIndex = currentIndex - 1 < 0 ? items.length - 1 : currentIndex - 1;
      setCurrentIndex(prevIndex);
    } else if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % items.length;
      setCurrentIndex(nextIndex);
    }
  };

  const handleMouseMove = (e) => {
    if (!mouseDown) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * (carouselWidth / window.innerWidth);
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = (e) => {
    setMouseDown(false);
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * (carouselWidth / window.innerWidth);
    if (walk > 0) {
      moveSlide('prev');
    } else {
      moveSlide('next');
    }
  };

  return (
    <>
      <CarouselSection>
        <div
          className="img-container"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          ref={carouselRef} // 추가된 부분
        >
          {items.map((item, index) => (
            <CarouselContent
              key={item.id}
              url={item.url}
              index={index}
              currentIndex={currentIndex}
            >
              <h2>{item.tags}</h2>
              <p>{item.txt}</p>
            </CarouselContent>
          ))}
        </div>
        <ButtonWrapper>
          {items.map((_, index) => (
            <Button
              key={index}
              onClick={() => setCurrentIndex(index)}
              active={index === currentIndex}
            />
          ))}
        </ButtonWrapper>
      </CarouselSection>
    </>
  );
};

export default Carousel;

const CarouselSection = styled.section`
  width: 1100px;
  border-radius: 20px;
  position: relative;
  display: flex;
  height: 300px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 700px;
  }
  .img-container {
    position: relative;
    width: 100%;
    display: flex;
    overflow: hidden;
    border-radius: 10px;
    cursor: pointer;
  }
`;
const CarouselContent = styled.div`
  width: 100%;
  height: 300px;
  position: absolute;
  border-radius: 20px;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 40px;
  box-sizing: border-box;
  transition: transform ease-out 0.5s;
  transform: ${(props) => `translateX(${(props.index - props.currentIndex) * 100}%)`};
  h2 {
    font-size: 30px;
    margin-bottom: 20px;
    color: white;
  }
  p {
    font-size: 44px;
    color: white;
    font-weight: 900;
  }
`;
const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  left: 60px;
  bottom: 35px;
`;

const Button = styled.button`
  width: 15px;
  height: 15px;
  margin: 0 5px;
  border-radius: 50%;
  border: none;
  background-color: grey;
  cursor: pointer;
  transition: all 0.3s ease;
  box-sizing: border-box;
  ${(props) =>
    props.active &&
    `
    padding: 5px;
    scale:1.3;
    background-color: var(--main-color);
  `}
`;
