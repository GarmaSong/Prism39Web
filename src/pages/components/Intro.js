import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ArrowIcon } from './Svg';

function Intro(props) {
  const screens = useRef([]);

  useEffect(() => {
    screens.current.forEach(img => {
      img.setAttribute('id', 'onload');
    });
  }, []);

  return (
    <Container>
      <TextArea>
        <MainText>
          bold text Ingredients
          <br />
          US Customary
          <br />
          Metric 1x 2x 3x
        </MainText>
        <SubText color={({ theme }) => theme.colors.mainBlue}>
          2 large eggs
        </SubText>
        <SubText color="darkgray">
          Introduction to the product Introductionto the product Introduction
        </SubText>
      </TextArea>
      <ImgArea>
        <Screen>
          <Img src="/images/main_img_base.jpg" />
          {SCREEN_DATA.map(data => (
            <InnerScreen
              ref={el => (screens.current[data.id] = el)}
              src={data.src}
              position={data.position}
              reverse={data.reverse}
              reverseFloat={data.reverseFloat}
            />
          ))}
        </Screen>
      </ImgArea>
      <Arrow onClick={props.scrollDown}>
        <ArrowIcon />
      </Arrow>
    </Container>
  );
}

const SCREEN_DATA = [
  {
    id: 0,
    src: '/images/main_center_img.png',
    position: [35, 35, 55],
    reverse: false,
    reverseFloat: false,
  },
  {
    id: 1,
    src: '/images/main_right_img.png',
    position: [-10, 55, 38],
    reverse: true,
    reverseFloat: true,
  },
  {
    id: 2,
    src: '/images/center_article1.png',
    position: [35, 36, 55],
    reverse: false,
    reverseFloat: false,
  },
  {
    id: 3,
    src: '/images/main_left_img.png',
    position: [10, 10, 25],
    reverse: false,
    reverseFloat: false,
  },
  {
    id: 4,
    src: '/images/left_article1.png',
    position: [15, 20, 5],
    reverse: false,
    reverseFloat: true,
  },
  {
    id: 5,
    src: '/images/left_article2.png',
    position: [40, 0, 5],
    reverse: false,
    reverseFloat: true,
  },
  {
    id: 6,
    src: '/images/left_article3.png',
    position: [85, 15, 5],
    reverse: false,
    reverseFloat: true,
  },
  {
    id: 7,
    src: '/images/right_article1.png',
    position: [40, 80, 10],
    reverse: true,
    reverseFloat: false,
  },
];

const Container = styled.div`
  position: relative;
  ${({ theme }) => theme.flexSet('space-around')};
  width: 100%;

  @media ${({ theme }) => theme.media.desktop} {
    height: 600px;
  }

  @media ${({ theme }) => theme.media.tablet} {
    height: 550px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    padding: 50px 0 100px 0;
    flex-direction: column;
  }
`;

const TextArea = styled.div`
  ${({ theme }) => theme.flexColumnSet()};
  width: 40%;
  height: 100%;

  @media ${({ theme }) => theme.media.mobile} {
    order: 2;
    width: 100%;
  }
`;

const MainText = styled.div`
  width: 300px;
  height: fit-content;
  margin-bottom: 50px;
  font-size: 1.75rem;
  font-weight: bold;
  line-height: 1.4;
`;

const SubText = styled.div`
  width: 300px;
  color: ${props => props.color};
  line-height: 1.4;
`;

const ImgArea = styled.div`
  ${({ theme }) => theme.flexColumnSet()};
  perspective: 500px;

  @media ${({ theme }) => theme.media.desktop} {
    width: 60%;
  }

  @media ${({ theme }) => theme.media.tablet} {
    width: 40%;
  }

  @media ${({ theme }) => theme.media.mobile} {
    order: 1;
    width: 70%;
    margin: 30px auto;
  }
`;

const Screen = styled.div`
  position: relative;
  transform: skew(0, 2deg) rotateY(-4deg);

  @media ${({ theme }) => theme.media.desktop} {
    width: 500px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    width: 100%;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const InnerScreen = styled.img`
  position: absolute;
  top: ${props => `${props.position[0]}%`};
  left: ${props => `${props.position[1]}%`};
  width: ${props => `${props.position[2]}%`};
  transition: 1s;

  &#onload {
    top: ${props =>
      !props.reverseFloat
        ? `${props.position[0] - 5}%`
        : `${props.position[0] - 25}%`};
    left: ${props =>
      !props.reverse
        ? `${props.position[1] - 20}%`
        : `${props.position[1] + 5}%`};
    width: ${props => `${props.position[2] + 20}%`};
    animation: ${props =>
        !props.reverseFloat ? 'floating' : 'floatingReverse'}
      2s ease-in-out infinite;
  }

  @keyframes floating {
    0% {
      transform: translateY(7px);
    }
    50% {
      transform: translateY(-7px);
    }
    100% {
      transform: translateY(7px);
    }
  }

  @keyframes floatingReverse {
    0% {
      transform: translateY(-7px);
    }
    50% {
      transform: translateY(7px);
    }
    100% {
      transform: translateY(-7px);
    }
  }
`;

const Arrow = styled.div`
  ${({ theme }) => theme.posCenterX()};
  position: absolute;
  bottom: 20px;
  cursor: pointer;
  animation: hover 1.5s ease-in-out infinite;

  @keyframes hover {
    from {
      opacity: 0.5;
    }
    to {
      bottom: 10px;
      opacity: 1;
    }
  }
`;

export default Intro;
