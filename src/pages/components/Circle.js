import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { CircleFrag } from './Svg';
import { URL } from '../../config';

function Circle(props) {
  const rotator = useRef();
  const steps = useRef([]);
  const texts = useRef([]);
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${URL}/texts/2?lan=${props.lan}`)
      .then(res => res.json())
      .then(res => {
        setData(res);
      });
  }, [props.lan]);

  const STEP_DATA = [
    {
      top: 50,
      mobileTop: 70,
      reverse: false,
      src: '/images/icon1.png',
      mainText: data?.[0].text,
      subText: data?.[1].text.split('<br />').map(el => <p>{el}</p>),
    },
    {
      top: 450,
      mobileTop: 320,
      reverse: true,
      src: '/images/icon2.png',
      mainText: data?.[2].text,
      subText: data?.[3].text.split('<br />').map(el => <p>{el}</p>),
    },
    {
      top: 850,
      mobileTop: 570,
      reverse: false,
      src: '/images/icon3.png',
      mainText: data?.[4].text,
      subText: data?.[5].text.split('<br />').map(el => <p>{el}</p>),
    },
  ];

  useEffect(() => {
    const rotateDeg = [
      {
        stepId: 0,
        deg: -0.18,
      },
      {
        stepId: 1,
        deg: 0.07,
      },
      {
        stepId: 2,
        deg: 0.26,
      },
    ];

    const rotate = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          rotateDeg.forEach(el => {
            if (Number(entry.target.id) === el.stepId) {
              rotator.current.style.transform = `rotate(${el.deg}turn)`;
              texts.current[entry.target.id].style.opacity = 1;
              texts.current[entry.target.id].style.transform = 'unset';
            }
          });
          if (Number(entry.target.id) === 3) {
            rotator.current.style.transform = `rotate(-0.4turn)`;
          }
          if (Number(entry.target.id) === 4) {
            rotator.current.style.transform = `rotate(0.55turn)`;
          }
        }
      });
    };

    const option = {
      rootMargin: '-40% 0% -20% 0%',
    };
    const observer = new IntersectionObserver(rotate, option);

    steps.current.forEach(step => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  return (
    <Container>
      <RotationHandler top id="3" ref={el => (steps.current[3] = el)} />
      <CircleContainer ref={rotator}>
        <FragContainer>
          <CircleFrag />
        </FragContainer>
        <CircleLine />
      </CircleContainer>
      {STEP_DATA.map((step, index) => (
        <Step
          key={index}
          ref={el => (steps.current[index] = el)}
          id={index}
          top={step.top}
          mobileTop={step.mobileTop}
        >
          <ImgBox reverse={step.reverse}>
            <Icon src={step.src} />
          </ImgBox>
          <TextArea reverse={step.reverse}>
            <div ref={el => (texts.current[index] = el)}>
              <MainText>{step.mainText}</MainText>
              <SubText>{step.subText}</SubText>
            </div>
          </TextArea>
        </Step>
      ))}
      <RotationHandler bottom id="4" ref={el => (steps.current[4] = el)} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 1300px;
  margin: 50px 0;
  overflow: hidden;

  @media ${({ theme }) => theme.media.mobile} {
    width: 100%;
    height: 900px;
  }
`;

const CircleContainer = styled.div`
  position: relative;
  top: 150px;
  width: 830px;
  height: 830px;
  transform: rotate(-0.4turn);
  transition: 1.5s;

  @media ${({ theme }) => theme.media.desktop} {
    left: -100px;
  }

  @media ${({ theme }) => theme.media.tablet} {
    left: -200px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    left: -250px;
    width: 550px;
    height: 550px;
  }
`;

const CircleLine = styled.div`
  ${({ theme }) => theme.posCenter()};
  width: 96%;
  height: 96%;
  border-radius: 50%;
  border: 1px solid #dbdbdb;
`;

const FragContainer = styled.div`
  position: absolute;
  top: 8%;
  left: 82%;
  width: 60px;

  * {
    width: 100%;
  }

  @media ${({ theme }) => theme.media.mobile} {
    top: 5%;
    width: 32px;
  }
`;

const Step = styled.div`
  ${({ theme }) => theme.flexSet()};
  ${({ theme }) => theme.posCenterX()};
  position: absolute;
  top: ${props => `${props.top}px`};
  width: 700px;
  height: 300px;

  @media ${({ theme }) => theme.media.mobile} {
    width: 90%;
    height: 200px;
    top: ${props => `${props.mobileTop}px`};
  }
`;

const ImgBox = styled.div`
  order: ${props => props.reverse && 2};
  position: relative;
  width: 230px;
  height: 230px;
  border-radius: 25px;
  background-color: white;
  animation: floating 2s infinite;

  @media ${({ theme }) => theme.media.mobile} {
    width: 150px;
    height: 150px;
  }

  @keyframes floating {
    0% {
      transform: translateY(3%);
    }
    50% {
      transform: translateY(-3%);
    }
    100% {
      transform: translateY(3%);
    }
  }
`;

const Icon = styled.img`
  width: 100%;
`;

const TextArea = styled.div`
  order: ${props => props.reverse && 1};
  /* width: 300px; */
  margin-left: ${props => props.reverse || '70px'};
  margin-right: ${props => props.reverse && '70px'};
  color: ${({ theme }) => theme.colors.textBlack};
  background-color: rgba(256, 256, 256, 0.5);
  text-align: ${props => props.reverse && 'right'};

  @media ${({ theme }) => theme.media.mobile} {
    width: 45%;
    margin-left: ${props => props.reverse || '30px'};
    margin-right: ${props => props.reverse && '30px'};
  }

  > div {
    opacity: 0;
    transition: 1s;
    transform: translateX(${props => (props.reverse ? '-10%' : '10%')});
  }
`;

const MainText = styled.div`
  height: fit-content;
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.4;
  word-break: keep-all;

  @media ${({ theme }) => theme.media.mobile} {
    font-size: 1.2rem;
  }
`;

const SubText = styled.div`
  color: ${props => props.color};
  line-height: 1.4;
  word-break: keep-all;
`;

const RotationHandler = styled.div`
  position: absolute;
  top: ${props => props.top && 0};
  bottom: ${props => props.bottom && 0};
  width: 100%;
  height: 5px;
`;

export default Circle;
