import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <AwardedWrapper>
        <AwardedTitle>Recognized and Awarded by</AwardedTitle>
        <AwardedLogoBox>
          <AwardedLogo src="images/schmidt_logo 1.png"></AwardedLogo>
          <AwardedLogo src="images/kosme_logo 1.png"></AwardedLogo>
          <AwardedLogo src="images/ulsan_logo 1.png"></AwardedLogo>
        </AwardedLogoBox>
      </AwardedWrapper>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.section``;

const AwardedWrapper = styled.section`
  margin-top: 100px;
  padding: 20px;

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

export default Footer;
