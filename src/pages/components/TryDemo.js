import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TryDemo = () => {
  return (
    <TryDemoWrapper>
      <DemoContentsBox>
        <Demo>
          <DemoTextBox>
            <DemoTitle>지금 체험해 보세요</DemoTitle>
            <DemoDesc>
              cup salted butter* softened.
              <br /> tsp baking soda.
              <br /> cup light brown sugar
            </DemoDesc>
            <DemoBtn>download</DemoBtn>
          </DemoTextBox>
        </Demo>
        <AwardedWrapper>
          <AwardedTitle>Recognized and Awarded by</AwardedTitle>
          <AwardedLogoBox>
            <AwardedLogo src="images/schmidt_logo 1.png"></AwardedLogo>
            <AwardedLogo src="images/kosme_logo 1.png"></AwardedLogo>
            <AwardedLogo src="images/ulsan_logo 1.png"></AwardedLogo>
          </AwardedLogoBox>
        </AwardedWrapper>
      </DemoContentsBox>
    </TryDemoWrapper>
  );
};

const TryDemoWrapper = styled.section`
  width: 100%;
`;

const DemoContentsBox = styled.div`
  width: 80%;
  margin: auto;

  @media ${({ theme }) => theme.media.mobile} {
    width: 100%;
  }
`;

const Demo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 460px;
  margin: 160px auto 80px auto;
  background: #4066eb;
  border-radius: 30px;
  text-align: center;

  &:hover {
    background: linear-gradient(-45deg, #eb4066, #4066eb, #7040eb, #40bceb);
    background-size: 500% 500%;
    animation: GradientDemo 15s ease infinite;
  }

  @keyframes GradientDemo {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const DemoTextBox = styled.div``;
const DemoTitle = styled.h1`
  font-weight: bold;
  font-size: 2.3rem;
  line-height: 3rem;
  color: #ffffff;
`;
const DemoDesc = styled.p`
  margin: 25px auto 40px auto;
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
  color: #ffffff;
`;
const DemoBtn = styled.button`
  width: 180px;
  height: 52px;
  background: #ffffff;
  border-radius: 30px;
  font-weight: bold;
  font-size: 25px;
  line-height: 36px;
  color: #4066eb;

  &:hover {
    color: #4a4a4a;
  }
`;

const AwardedWrapper = styled.section`
  margin-top: 80px;

  @media ${({ theme }) => theme.media.mobile} {
    margin-top: 100px;
  }
`;

const AwardedTitle = styled.h2`
  text-align: center;
  font-size: 17px;
  font-weight: 700;
  line-height: 25px;
  color: #e0e0e0;
`;

const AwardedLogoBox = styled.div`
  margin: 40px auto 300px auto;
  text-align: center;
`;

const AwardedLogo = styled.img`
  margin: 0 15px;

  @media ${({ theme }) => theme.media.mobile} {
    display: block;
    margin: 15px auto;
  }
`;

export default TryDemo;
