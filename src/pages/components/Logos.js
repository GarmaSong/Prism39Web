import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Logos = () => {
  const [logoHover, setLogoHover] = useState(0);
  const [logoInfo, setLogoInfo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/data/logoData.json`)
      .then(res => res.json())
      .then(res => {
        setLogoInfo(res);
      });
  }, [setLogoInfo]);

  const coloredLogo = (e, index) => {
    setLogoHover(index);
  };

  return logoInfo.length ? (
    <LogosWrapper>
      <DescBox img={logoInfo[logoHover].descImg}>
        <DescTextBox>
          <DescText>
            {logoInfo[logoHover].title.split(',').map(el => {
              return <h1>{el}</h1>;
            })}
          </DescText>
          <DescBtn>{logoInfo[logoHover].btnText}</DescBtn>
        </DescTextBox>
      </DescBox>
      <LogoBox>
        {logoInfo.map((el, index) => {
          return (
            <LogoBorder key={el.id}>
              <Logo
                onClick={e => {
                  coloredLogo(e, index);
                }}
              >
                {logoHover === index ? (
                  <LogoImg alt={el.imgAfter} src={el.imgAfter} />
                ) : (
                  <LogoImg alt={el.imgBefore} src={el.imgBefore} />
                )}
              </Logo>
            </LogoBorder>
          );
        })}
      </LogoBox>
    </LogosWrapper>
  ) : null;
};

const LogosWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 500px;
`;

const DescBox = styled.div`
  ${({ theme }) => theme.posCenterX()};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 400px;
  overflow: hidden;
  background-image: ${props => `url(${props.img})`};
  background-size: cover;
`;

const DescTextBox = styled.div`
  position: relative;
  right: 10%;
  max-width: 1080px;
  height: 200px;
  @media ${({ theme }) => theme.media.mobile} {
    right: 0;
    padding: 0 10px;
  } ;
`;

const DescText = styled.h1`
  font-weight: 500;
  font-size: 2rem;
  line-height: 50px;
  color: #fff;

  @media ${({ theme }) => theme.media.mobile} {
    font-size: 1.7rem;
    line-height: 2rem;
  } ;
`;

const DescBtn = styled.button`
  position: absolute;
  bottom: 0;
  width: 255px;
  height: 55px;
  background: #fff;
  border-radius: 33px;
  font-weight: bold;
  font-size: 1.7rem;
  line-height: 3rem;
  color: #4a4a4a;

  &:hover {
    color: #4066eb;
  }
`;

const LogoBox = styled.div`
  ${({ theme }) => theme.posCenterX()};
  top: 400px;
  max-width: 930px;
  height: 86px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;

  @media ${({ theme }) => theme.media.mobile} {
    width: 100%;
    height: 70px;
  } ;
`;

const LogoBorder = styled.div`
  border-right: 1px solid #f3f3f3;
  width: 120px;
  height: 100%;

  &:last-child {
    border-right: none;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: auto;
  cursor: pointer;
`;

const LogoImg = styled.img`
  @media ${({ theme }) => theme.media.mobile} {
    width: 60%;
  }
`;

export default Logos;
