import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ArrowIcon } from './Svg';
import { URL } from '../../config';

function IntroVer2(props) {
  const [right, setRight] = useState(0);
  const [transition, setTransition] = useState(true);
  const [data, setData] = useState();
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem('access_token')
  );

  useEffect(() => {
    fetch(`${URL}/texts/1?lan=${props.lan}`)
      .then(res => res.json())
      .then(res => {
        setData(res);
      });
  }, [props.lan]);

  const prev = () => {
    if (right !== 0) {
      setRight(right => right + 600);
      return;
    }
    setRight(right => right + 600);
    setTimeout(() => {
      setTransition(false);
      setRight(-1200);
    }, 500);
    setTimeout(() => {
      setTransition(true);
    }, 501);
  };

  const next = () => {
    if (right !== -1200) {
      setRight(right => right - 600);
      return;
    }
    setRight(right => right - 600);
    setTimeout(() => {
      setTransition(false);
      setRight(0);
    }, 500);
    setTimeout(() => {
      setTransition(true);
    }, 501);
  };

  const submitHandler = e => {
    // e.preventDefault();
    const loginForm = new FormData();
    loginForm.append('username', e.target[0].value);
    loginForm.append('password', e.target[1].value);
    fetch(`http://147.46.94.226:8000/auth/login`, {
      method: 'POST',
      body: JSON.stringify({
        username: e.target[0].value,
        password: e.target[1].value,
      }),
      body: loginForm,
    })
      .then(res => res.json())
      .then(res => {
        if (res['access_token']) {
          localStorage.setItem('access_token', res['access_token']);
          setLoggedIn(true);
        }
      });
  };

  return (
    <Container>
      <Carousel>
        <Section
          order={-1}
          color="gray"
          right={right}
          transition={transition}
        ></Section>
        <Section
          order={0}
          color="white"
          right={right}
          transition={transition}
        ></Section>
        <Section
          order={1}
          color="blue"
          right={right}
          transition={transition}
        ></Section>
        <Section
          order={2}
          color="gray"
          right={right}
          transition={transition}
        ></Section>
        <Section
          order={3}
          color="white"
          right={right}
          transition={transition}
        ></Section>
        <MainText>
          {data?.[0].text.split('<br />').map(el => (
            <p>{el}</p>
          ))}
        </MainText>
        <SubText color="darkgray">
          {data?.[1].text.split('<br />').map(el => (
            <p>{el}</p>
          ))}
        </SubText>
        <CBtn>
          <i className="fas fa-chevron-circle-left" onClick={prev} />
          <i className="fas fa-chevron-circle-right" onClick={next} />
        </CBtn>
      </Carousel>
      <LoginBox>
        {loggedIn ? (
          <>
            <MainText>Hello!</MainText>
            <MainText>환영합니다 🙌</MainText>
          </>
        ) : (
          <>
            <MainText>{props.lan === 'kor' ? '로그인하기' : 'Log In'}</MainText>
            <Form onSubmit={submitHandler}>
              <Input
                type="text"
                name="id"
                placeholder={
                  props.lan === 'kor'
                    ? '아이디를 입력하세요'
                    : 'Enter your account'
                }
              />
              <Input
                type="password"
                name="pw"
                placeholder={
                  props.lan === 'kor'
                    ? '비밀번호를 입력하세요'
                    : 'Enter your password'
                }
              />
              <Label>
                <input type="checkbox" />
                {props.lan === 'kor' ? '아이디 저장하기' : 'Remember Account'}
              </Label>
              <Btn> {props.lan === 'kor' ? '로그인' : 'Log In'}</Btn>
            </Form>
          </>
        )}
      </LoginBox>
      <Arrow onClick={props.scrollDown}>
        <ArrowIcon />
      </Arrow>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  ${({ theme }) => theme.flexSet()};
  width: 100%;

  @media ${({ theme }) => theme.media.desktop} {
    height: 600px;
    margin-top: 68px;
  }

  @media ${({ theme }) => theme.media.tablet} {
    height: 550px;
    margin-top: 68px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    margin-top: 55px;
    flex-direction: column;
  }
`;

const Carousel = styled.div`
  ${({ theme }) => theme.flexColumnSet('flex-start')};
  padding-top: 80px;
  position: relative;
  width: 600px;
  height: 80%;
  overflow: hidden;

  @media ${({ theme }) => theme.media.mobile} {
    order: 2;
    width: 100%;
    height: 300px;
    padding-top: 40px;
  }
`;

const Section = styled.div`
  position: absolute;
  top: 0;
  left: ${props => props.order * 600}px;
  background-color: ${props => props.color};
  width: 600px;
  height: 100%;
  z-index: -1;
  transform: translateX(${props => props.right}px);
  transition: ${props => (props.transition ? '0.5s' : '0s')};
`;

const MainText = styled.div`
  width: 80%;
  height: fit-content;
  margin-bottom: 20px;
  font-size: 1.75rem;
  font-weight: bold;
  line-height: 1.4;
`;

const SubText = styled.div`
  width: 80%;
  color: ${props => props.color};
  line-height: 1.4;
`;

const CBtn = styled.div`
  ${({ theme }) => theme.flexSet('space-between')};
  position: absolute;
  top: 70%;
  left: 10%;
  width: 65px;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.mainGray};

  i {
    cursor: pointer;
  }
`;

const LoginBox = styled.div`
  ${({ theme }) => theme.flexColumnSet()};
  border-radius: 20px;
  /* box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.15); */
  text-align: center;
  width: 400px;
  height: 400px;
  margin: 0 20px;

  @media ${({ theme }) => theme.media.mobile} {
    order: 1;
    width: 90%;
    height: 350px;
    padding: 30px 0;
  }
`;

const Form = styled.form`
  width: 80%;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 15px;
  margin: 5px;
  background-color: ${({ theme }) => theme.colors.subGray};
  color: ${({ theme }) => theme.colors.textBlack};
  border-radius: 15px;
  font-size: 1rem;

  &::placeholder {
    color: #c4c4c4;
  }
`;

const Label = styled.label`
  display: block;
  width: 100%;
  margin: 10px;
  color: #c4c4c4;
  text-align: left;
  input {
    margin: 10px;
  }
`;

const Btn = styled.button`
  width: 100%;
  padding: 10px;
  color: white;
  background-color: ${({ theme }) => theme.colors.mainBlue};
  border-radius: 20px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
  font-size: 1.4rem;
  cursor: pointer;
`;

const Arrow = styled.div`
  ${({ theme }) => theme.posCenterX()};
  position: absolute;
  bottom: -20px;
  cursor: pointer;
  animation: hover 1.5s ease-in-out infinite;

  @keyframes hover {
    from {
      opacity: 0.5;
      transform: translate3d(-50%, -5px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(-50%, 5px, 0);
    }
  }
`;

export default IntroVer2;
