# 🧋 Gongcha 웹사이트 리뉴얼 프로젝트 (개인 작업)

## 📆 프로젝트 기간

* **1차 개발** : 2024.09 (1개월)
* **리팩터링 및 기능 개선** : 2026.06

---

## 📝 프로젝트 개요

공차 브랜드 웹사이트를 React 기반으로 리뉴얼한 프로젝트입니다.

브랜드 아이덴티티를 유지하면서 사용자 중심의 **UI/UX 개선**, **반응형 웹 구현**, **컴포넌트 구조 개선**, **성능 최적화**를 목표로 지속적으로 리팩터링을 진행했습니다.

### 기존 문제점

* 메뉴 및 정보 구조가 복잡하여 사용성이 떨어짐
* 브랜드 아이덴티티가 충분히 드러나지 않음
* 모바일 환경에서 메뉴 탐색 및 정보 확인이 불편함
* 메인 페이지의 모든 컴포넌트를 한 번에 렌더링하여 초기 로딩 부담이 존재함
* 메뉴 페이지의 반복 코드가 많아 유지보수가 어려움

### 개선 방향

* 브랜드 톤앤매너를 유지한 UI 리뉴얼
* 메뉴 탐색 흐름 개선
* PC / Tablet / Mobile 반응형 UI 구현
* React.lazy + Suspense 기반 Lazy Loading 적용
* 공통 컴포넌트화를 통한 유지보수성 향상
* 모바일 메뉴 UX 개선

---

## 🛠 기술 스택

### Frontend

* React
* JavaScript (ES6+)
* HTML5
* CSS3

### Library

* Swiper
* React CountUp
* React Hot Toast
* React Lazy
* Suspense

### API

* Kakao Map API

### Backend / Hosting

* Firebase
* GitHub Pages

### Version Control

* Git
* GitHub

---

## 🎯 개발 목표

* 브랜드 아이덴티티를 강화한 UI 리뉴얼
* 사용자 중심의 메뉴 탐색 UX 개선
* React 기반 반응형 웹 구현
* 컴포넌트 구조 개선 및 공통 컴포넌트화
* Lazy Loading을 통한 초기 로딩 부담 감소
* 모바일 환경에서 정보 접근성과 사용성 향상

---

## 🚀 주요 기능

| 기능                      | 설명                      | 목적            |
| ----------------------- | ----------------------- | ------------- |
| 📱 반응형 웹                | PC / Tablet / Mobile 대응 | 다양한 디바이스 지원   |
| 🧊 Swiper               | 신메뉴 슬라이드 UI             | 메뉴 탐색 개선      |
| 📈 React CountUp        | 글로벌 경쟁력 수치 애니메이션        | 브랜드 신뢰도 향상    |
| 🍹 메뉴 상세 팝업             | 영양정보 및 메뉴 정보 제공         | 사용자 편의성 향상    |
| 🗺️ Kakao Map API       | 매장 검색 및 위치 확인           | 위치 기반 서비스     |
| ⚡ React.lazy + Suspense | 하단 섹션 Lazy Loading      | 초기 로딩 부담 감소   |
| 🦴 Skeleton UI          | 로딩 중 Skeleton 표시        | 사용자 경험 개선     |
| 🖼️ LazyImage           | 이미지 Lazy Loading        | 이미지 로딩 최적화    |
| 🔔 Toast UI             | alert → Toast 변경        | 자연스러운 사용자 피드백 |
| 🧩 MenuGrid 공통 컴포넌트     | 반복 코드 제거                | 유지보수성 향상      |
| 📱 모바일 메뉴 UX 개선         | 메뉴 상세 팝업 및 GNB 개선       | 모바일 사용성 향상    |

---

## ✨ 리팩터링 및 개선 사항

## 🚀 성능 최적화

* React.lazy와 Suspense를 적용하여 메인 페이지 하단 섹션을 지연 로딩
* Skeleton UI를 적용하여 로딩 중 빈 화면을 최소화
* LazyImage 공통 컴포넌트를 제작하여 이미지 Lazy Loading 적용
* 첫 화면 이미지는 eager 옵션을 사용하여 초기 렌더링 속도 유지

---

## 🧩 구조 개선

* Content.js를 섹션 단위 컴포넌트로 분리
* MenuGrid 공통 컴포넌트 제작
* useIntersectionObserver Custom Hook 제작
* 메뉴 데이터를 별도 파일로 분리하여 유지보수성 향상

---

## 🎨 UI / UX 개선

* 모바일 GNB를 가로 스크롤 탭으로 개선
* 메뉴 상세 팝업에서 사이즈 선택 위치 변경
* 선택한 사이즈의 가격 및 칼로리만 표시
* 영양성분을 2열 Grid 형태로 재구성
* alert를 Toast UI로 변경
* 메뉴 카드 Scroll Reveal Animation 적용

---

### 📌 프로젝트를 통해 얻은 경험

* React 기반 컴포넌트 설계 및 리팩터링 경험
* 공통 컴포넌트를 활용한 코드 재사용성 향상
* React.lazy와 Suspense를 활용한 성능 최적화 경험
* 모바일 환경을 고려한 UI/UX 개선 경험
* 지속적인 리팩터링을 통해 유지보수성과 확장성을 고려하는 개발 방식 학습


## 🔗 배포 주소
👉 [https://sohyun32253.github.io/Gongcha/](https://sohyun32253.github.io/Gongcha/)

## 📄 기획서
👉 [기획서 보기 (Google Slides)](https://docs.google.com/presentation/d/1fqL8HC99VYc21IRYkY7RmP6n1_zODk4DQ60MtMVKbjA/edit?usp=sharing)


---

## 🖼️ 화면 미리보기

### 💻 PC 메인 페이지  
![메인_pc](https://github.com/user-attachments/assets/daae62e3-25c6-45df-9202-aa554c664c87)

### 📱 메뉴 / 서브 페이지  
![공차서브](https://github.com/user-attachments/assets/27d42036-31a2-4cc0-9b6a-513c293d3263)

---

## 🔐 테스트 계정 (로그인 테스트용)

| 이메일 | 비밀번호 |
|--------|-----------|
| dully1234@naver.com | 12345678 |
| heedong1111@gmail.com | 11111111 |





