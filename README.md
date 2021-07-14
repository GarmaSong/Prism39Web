## 📆 프로젝트 기간
- 2021.06.07 ~ 2021.07.01 (약 4주)

## 📌 Keywords
- 인턴십 | 핀테크 | Scrolling | Drag & Drop

## 🔨 사용한 기술 스택
- React | Hooks | Styled-components | Github | Figma

## 👪 팀원구성
- Front-end: 김도은, 송가람
- Back-end:  문성호, 양영건

## 🔗 프로젝트 링크
- [블로그](https://velog.io/@sgr2134/%EA%B8%B0%EC%97%85%ED%98%91%EC%97%85-%ED%9A%8C%EA%B3%A0%EB%A1%9D) 

## 🧐 프로젝트 개요

- 금융 데이터 업무 자동화 서비스를 제공하는 Financial DataOps 스타트업의 회사 소개 페이지 구현

## 🎯 프로젝트 목표

- 초기 웹사이트 구현을 목표로 회사 소개와 더불어 제품 데모의 핵심 기능인 Drag & Drop 기능 파악
- 스크롤 다운 인터랙션을 사용하여 생소할 수 있는 금융 데이터 소개를 흥미롭게 나타냄

## 🎉 프로젝트 진행

### 구현 사항

❗**자세한 코드 설명은 [여기](https://velog.io/@sgr2134/1%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0%EB%A1%9D-Life-Friends-2%ED%8E%B8) 클릭해주세요.**

1. **Intersection Observer를 이용한 스크롤 이벤트 적용**
    - ReFlow와 RePaint의 개념을 바탕으로 여러가지 스크롤 이벤트의 비교
    - Intersection Observer를 이용한 스크롤 이벤트를 적용하며 브라우저 최적화
    - React Hook 중 useRef를 사용하여 관찰 될 대상을 포착
2. **Custom Hook을 사용한 그래프 그리기 및 비동기 처리**
    - Libraby 없이 그래프를 그리기 위해 SVG와 Canvas, Div 태그의 비교
    - 그래프의 퍼센트지를 카운트 하기 위해 setInterval의 비동기 처리에 대한 고민
    - custom Hook 중 하나인 useInterval을 사용하여 동기적으로 그래프를 그려냄
3. **마우스 드래그 이벤트를 통한 제품 핵심 기능의 파악**
    - onDragStat, onDragEnd, onDragOver등의 다양한 마우스 이벤트를 이해하고 적용
    - 동일 요소를 드래그 하는 방식과 드래그 된 위치에 새로운 요소를 그리는 방식의 이해

## 🤓 무엇을 배웠을까?

- **브라우저 최적화에 대한 고민**: ReFlow와 RePaint에 대한 개념에 대한 이해를 바탕으로 스크롤 이벤트 시 발생할 수 있는 브라우저 과부하에 대해 기본 내장 객체인 Intersection Observer를 사용하여 해결하고자 했습니다. 1px 단위로 생기는 스크롤 이벤트 대신 Viewport에 타겟이 되는 요소가 관찰이 될 때만 이벤트가 시행되는 방식을 사용하여 브라우저를 최적화 시킬 수 있었습니다.
- **다양한 구성원들과의 협업**: 기업 소개 페이지 구현 작업을 진행하며 실제 기획 및 디자인 팀과 함께 피드백을 주고받으며 페이지를 완성할 수 있었습니다. 페이지가 계속 수정되는 과정이었기 때문에 잦은 변동이 있었지만, Figma를 통해서 변화된 부분을 즉각적으로 파악하고 Agile방식을 차용한 스크럼 회의를 진행하며 빠르게 수정 사항들을 적용 시킬 수 있었습니다.
- **함께 성장하기 위해서는?:** 초기 스타트업에서 인턴십을 경험하며 회사와 개인이 함께 성장하기 위해 어떤 요소가 필요한지 고민해볼 수 있었습니다. 회사에서는 명확한 비전과 방향을 제시하는 부분이 중요한 부분이라고 생각되었고, 이를 개인의 입장에서는 상황을 빠르게 받아들이고 구체적인 목표와 역할을 설정할 수 있을 때 함께 시너지를 낼 수 있음을 배울 수 있었습니다.
