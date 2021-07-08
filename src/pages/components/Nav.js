import React, { useState } from 'react';
import styled from 'styled-components';

function Nav(props) {
  const [dropDown, setDropDown] = useState(false);

  return (
    <Background>
      <Container>
        <Logo src="images/logo.png" />
        <Menus>
          {(props.lan === 'kor' ? MENU_TABS : MEUN_TABS_ENG).map(
            (tab, index) => (
              <Menu key={index}>{tab}</Menu>
            )
          )}
        </Menus>
        <Button color={({ theme }) => theme.colors.textBlack}>Join us</Button>
        <Button color="white" bgColor={({ theme }) => theme.colors.mainBlue}>
          Contact us
        </Button>

        <Bars onClick={() => setDropDown(!dropDown)} className="fas fa-bars" />
        {dropDown && (
          <DropDown>
            {MENU_TABS.map((tab, index) => (
              <MobileMenu key={index}>{tab}</MobileMenu>
            ))}
            <MobileMenu blue>Join us</MobileMenu>
            <MobileMenu blue>Contact us</MobileMenu>
          </DropDown>
        )}
      </Container>
    </Background>
  );
}

const MENU_TABS = [
  '제품소개',
  '회사소개',
  '영업문의',
  '고객센터',
  '이용가이드',
];

const MEUN_TABS_ENG = [
  'Product',
  'Company',
  'Business Consult',
  'Customer Center',
  'Usage Guide',
];

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 68px;
  background-color: white;
  z-index: 10;
`;

const Container = styled.div`
  ${({ theme }) => theme.flexSet('space-between')};
  ${({ theme }) => theme.posCenterX()};
  top: 0;
  width: 100vw;
  padding: 10px;
  font-size: 0.9rem;

  @media ${({ theme }) => theme.media.desktop} {
    width: 1080px;
  }
`;

const Logo = styled.img`
  width: 153px;
  margin: 5px;
  cursor: pointer;

  @media ${({ theme }) => theme.media.desktop} {
    margin-right: 20px;
  }

  @media ${({ theme }) => theme.media.tablet} {
    width: 120px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    width: 100px;
  }
`;

const Menus = styled.ul`
  ${({ theme }) => theme.flexSet('space-between')};
  margin-right: auto;

  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;

const Menu = styled.li`
  margin: 0 10px;
  color: ${({ theme }) => theme.colors.textBlack};
  cursor: pointer;

  &:last-child {
    color: ${({ theme }) => theme.colors.mainBlue};
  }
`;

const Button = styled.button`
  width: 100px;
  height: 33px;
  margin: 2px;
  border-radius: 8px;
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  font-weight: bold;
  cursor: pointer;

  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;

const Bars = styled.i`
  display: none;

  @media ${({ theme }) => theme.media.mobile} {
    display: block;
    position: absolute;
    top: 15px;
    right: 15px;
    color: ${({ theme }) => theme.colors.mainGray};
    font-size: 1.4rem;
  }
`;

const DropDown = styled.div`
  @media ${({ theme }) => theme.media.mobile} {
    position: absolute;
    top: 50px;
    right: 0;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.mainGray};
    background-color: white;
  }
`;

const MobileMenu = styled(Menu)`
  margin: 30px;
  color: ${props => props.blue && '#4066EB'};
`;

export default Nav;
