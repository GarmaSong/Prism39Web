import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Nav from './components/Nav';
import Circle from './components/Circle';
import IntroVer2 from './components/IntroVer2';
import Cards from './components/Cards';
import TryDemo from './components/TryDemo';
import Logos from './components/Logos';

function Main(props) {
  const circle = useRef();
  const [lanModal, setLangModal] = useState(false);
  const [lan, setLang] = useState('kor');

  const setLanguage = (e, lan) => {
    e.stopPropagation();
    setLang(lan);
  };

  return (
    <Container>
      <Nav lan={lan} />
      <Lang onClick={() => setLangModal(curr => !curr)}>
        <img src="/images/global.png" />
        {lanModal && (
          <LangModal>
            <Li selected={lan === 'kor'} onClick={e => setLanguage(e, 'kor')}>
              KOR
            </Li>
            <Li selected={lan === 'eng'} onClick={e => setLanguage(e, 'eng')}>
              ENG
            </Li>
          </LangModal>
        )}
      </Lang>
      <IntroVer2
        lan={lan}
        scrollDown={() => {
          circle.current.scrollIntoView({ behavior: 'smooth' });
        }}
      />
      <div ref={circle}></div>
      <Circle lan={lan} />
      <Cards />
      <Logos />
      <TryDemo />
    </Container>
  );
}
const Container = styled.div``;

const Lang = styled.div`
  position: absolute;
  top: 15px;
  right: 40px;
  width: 60px;
  text-align: center;
  cursor: pointer;
  z-index: 10;

  img {
    width: 35px;
  }
`;

const LangModal = styled.ul`
  ${({ theme }) => theme.flexColumnSet('space-around')};
  height: 70px;
  margin-top: 5px;
  padding: 10px 0;
  border-radius: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  font-size: 0.9rem;
`;

const Li = styled.li`
  color: ${props =>
    props.selected
      ? props.theme.colors.mainBlack
      : props.theme.colors.mainGray};
`;

export default Main;
