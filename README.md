# 2차 협업 프로젝트 이유식 쇼핑몰

### 2차 Team A

## 시연영상
![Yummeal](https://github.com/returnys/Yummeal/assets/130682309/5d7ad3cd-c660-4c7d-b8c1-64799e627c40)

## 프로젝트 정보

- [Notion](https://concrete-scallion-31d.notion.site/YUMMEAL-80d792f626424ef59dd2f22e8097d48f?pvs=4)
- [Figma(wireframe)](https://www.figma.com/file/A0h9Ai58OM6pRxUXWUmYJP/yummeal?type=design&node-id=1096%3A369&mode=design&t=2UxOfiDdVm4zzZRJ-1)
- [Figma(flowchart)](<https://www.figma.com/file/wuGGvaWhGaIq53x6VOSm8P/Pokedex-Flowchart-(Community)?type=whiteboard&node-id=0%3A1&t=DYSvMAgpH8f4KJT6-1>)

## 활용 모듈

- <img src="https://img.shields.io/badge/React-263238?style=flat&logo=React&logoColor=skyblue">
- <img src="https://img.shields.io/badge/StyledComponent-DB7093?style=flat&logo=styledcomponents&logoColor=white">
- <img src="https://img.shields.io/badge/ReduxToolkit-764ABC?style=flat&logo=redux&logoColor=white">
- <img src="https://img.shields.io/badge/ReactRouter-CA4245?style=flat&logo=reactrouter&logoColor=white">
- <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=white">
- <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white">
- <img src="https://img.shields.io/badge/Eslint-4B32C3?style=flat&logo=eslint&logoColor=white">

## 프로젝트 기간

- 2023.07.14 ~ 2023.08.18

## 팀원 소개 및 역할

- Frontend
  - 팀장 : 손용수(헤더 & 푸터, 장바구니페이지, 결제페이지, 결제내역페이지, 검색결과페이지)
  - 팀원 : 박지성(상품등록페이지, 마이페이지(주문내역), TOKEN, REDUCER)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;손정민(회원가입페이지, 로그인페이지, 마이페이지(회원정보수정))<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;정다혜(메인페이지, 상품리스트페이지, 상품상세페이지)
- Backend
  - 팀장 : 이진규
  - 팀원 : 김다율, 서영기, 홍기윤

## 주요기능

#### 헤더 & 푸터

- 로그인 여부에 따른 인터페이스 변화
- 카테고리별 상품리스트 출력 및 이동
- 반응형 구현

#### 메인

- 로그인 여부에 따른 상품추천 내용 변화(로그인 시 맞춤추천)
- 반응형 구현

#### 로그인

- jwt 토큰 인증 구현(cookie 및 session 사용)
- 반응형 구현

#### 회원가입

- 유효성 검사
- 아이디 및 닉네임 중복확인 기능
- 다음 주소 API 이용 주소찾기 기능
- 반응형 구현

#### 상품리스트

- 페이지네이션 기능
- 상세페이지 이동
- 반응형 구현

#### 상품 상세

- 이미지 클릭 시 교체
- 장바구니 담기 및 바로구매 기능(로그인 유무 확인)
- 앵커 활용한 영역이동
- 반응형 구현

#### 검색결과

- 검색어에 따른 결과 출력
- 정렬(판매량, 가격) 기능, 알레르기 필터(선택한 값 제외한 결과, 다중선택가능)
- 반응형 구현

#### 장바구니

- 수량 조절 및 목록 삭제 기능
- 상품 상세 페이지 이동 가능
- 반응형 구현

#### 결제

- 회원정보 자동 입력
- 포인트 기능
- 반응형 구현

#### 상품 등록

- 웹 에디터 사용(이미지 넣으면 서버에 이미지 업로드 후 미리보기)
- 반응형 구현

#### 마이페이지

- 주문 배송 / 유저 정보 수정 컴포넌트로 분리
- 개월별 주문내역 조회 가능
- 반응형 구현
