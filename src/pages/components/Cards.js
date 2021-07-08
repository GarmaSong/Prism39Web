import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const Cards = () => {
  const [cardInfo, setCardInfo] = useState([]);
  const target = useRef();
  const cards = useRef([]);

  useEffect(() => {
    fetch(`http://localhost:3000/data/cardData.json`)
      .then(res => res.json())
      .then(res => {
        setCardInfo(res);
      });
  }, [setCardInfo]);

  useEffect(() => {
    const showCard = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          cards.current.forEach((el, index) => {
            setTimeout(() => {
              el.style.animation = `slideIn 1.5s`;
              el.style.animationFillMode = `both`;
            }, (index + 1) * 200);
          });
        }
      });
    };
    const option = { rootMargin: '-10%', threshold: 0 };
    let observer = new IntersectionObserver(showCard, option);
    observer.observe(target.current);

    return () => observer.disconnect();
  }, []);

  return (
    <CardsWrapper ref={target}>
      {cardInfo &&
        cardInfo.map((el, index) => {
          return (
            <Card key={el.id} ref={el => (cards.current[index] = el)}>
              <CardInnerBox>
                <CardLogo alt={`card icon${el.id}`} src={el.img} />
                <CardTextBox>
                  <CardBold>{el.title}</CardBold>
                  <CardDesc>
                    {el.desc.split(',').map(el => (
                      <DescBreak>{el}</DescBreak>
                    ))}
                  </CardDesc>
                </CardTextBox>
              </CardInnerBox>
            </Card>
          );
        })}
    </CardsWrapper>
  );
};

const CardsWrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 20px;
  margin: 200px auto;

  @media ${({ theme }) => theme.media.mobile} {
    flex-wrap: wrap;
  } ;
`;

const Card = styled.div`
  width: 420px;
  height: 367px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
  box-shadow: 0px 4px 25px rgba(209, 209, 209, 0.25);
  border-radius: 15px;
  opacity: 0;

  &:last-child {
    margin-right: 0;
  }

  @media ${({ theme }) => theme.media.mobile} {
    margin: 0 auto 50px auto;
    /* animation: none; */
    &:last-child {
      margin: 0;
    }
  }

  @keyframes slideIn {
    from {
      transform: translateY(30%);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CardInnerBox = styled.div`
  width: 80%;
  padding: 10px;
`;

const CardLogo = styled.img``;

const CardTextBox = styled.div`
  width: 100%;
`;

const CardBold = styled.h1`
  margin: 30px 0 12px 0;
  font-size: 35px;
  line-height: 51px;
  font-weight: bold;
  color: #2e2e2e;
`;

const CardDesc = styled.div``;

const DescBreak = styled.p`
  font-size: 22px;
  line-height: 32px;
  color: #5a5a5a;
  font-weight: 300;
`;

export default Cards;
