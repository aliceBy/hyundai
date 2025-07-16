# 현대면세점 프로젝트 HTML 구조 설계 문서

## 1. 프로젝트 개요

현대면세점 모바일 웹사이트로, 사은행사, 추천상품, 전체상품을 탭으로 구분하여 제공하는 반응형 웹 애플리케이션입니다.

## 2. HTML 구조 설계의 핵심 고려사항

### 2.1 시맨틱 마크업 구조

```html
<div id="wrap">
  <main id="main_contents">
    <!-- 상품상단 비주얼 -->
    <div class="visaul_wrap">
      <!-- 비주얼 배경, 텍스트, 이미지 영역 -->
    </div>

    <!-- 탭 영역 -->
    <div class="tab_contents">
      <nav class="tab_nav">
        <!-- 탭 네비게이션 -->
      </nav>
      <div class="tab_inner">
        <!-- 사은행사 섹션 -->
        <section id="promotion_area" class="promotion_area">
        <!-- 추천상품 섹션 -->
        <section id="recommend_area" class="recommend_area">
        <!-- 전체상품 섹션 -->
        <section id="all_products_area" class="all_products_area">
      </div>
    </div>
  </main>
</div>
```

**핵심 고려사항:**

- `main`, `section`, `nav` 등 시맨틱 태그 활용
- 각 섹션별 고유 ID 부여로 탭 네비게이션과 연결
- 접근성을 고려한 구조 설계

### 2.2 컴포넌트 기반 구조

#### 비주얼 영역 컴포넌트

```html
<div class="visaul_wrap visual_bg-F3E1CC date-3D444F title-3D444F sub_text-3D444F">
	<span class="visual_bg"></span>
	<div class="text_box">
		<span class="date">날짜</span>
		<h2 class="title">제목</h2>
		<p class="sub_text">설명</p>
	</div>
	<div class="img_box">
		<img src="..." alt="..." />
	</div>
</div>
```

#### 상품 아이템 컴포넌트

```html
<div class="product_item">
	<div class="product_img">
		<a href="#;">
			<img src="..." alt="..." />
		</a>
		<button type="button" class="btn_cart">장바구니</button>
	</div>
	<div class="product_text">
		<a href="#;">
			<span class="brand_name">브랜드명</span>
			<p class="description">상품설명</p>
			<div class="discount_info">
				<span class="discount_percent">할인율</span>
				<del class="discount_price">원가</del>
			</div>
			<div class="final_price_info">
				<p class="price_usd">최종가격</p>
			</div>
		</a>
	</div>
</div>
```

## 3. CSS 네이밍 규칙

### 3.1 BEM 방법론 기반 네이밍

#### 블록(Block) - 요소(Element) - 수정자(Modifier) 구조

```css
/* 블록 */
.visaul_wrap {
}
.product_item {
}
.brand_list {
}

/* 요소 */
.visaul_wrap .text_box {
}
.visaul_wrap .img_box {
}
.product_item .product_img {
}
.product_item .product_text {
}

/* 수정자 */
.product_item.type_19 {
}
.product_item .product_img .flag_19 {
}
```

### 3.2 기능별 네이밍 규칙

#### 레이아웃 관련

- `_wrap`: 컨테이너 역할
- `_area`: 섹션 영역
- `_box`: 콘텐츠 박스
- `_inner`: 내부 컨테이너

#### 상태 관련

- `active`: 활성 상태

#### 상품아이템 타입 관련

- `type_19`: 19세 이상 전용 상품
- `flag_soldout`: 품절 표시
- `flag_arlm`: 알람 표시

### 3.3 동적 스타일링을 위한 클래스 네이밍

#### 상단 비주얼 색상변경 예시

- 배경색 : visual_bg-색상코드
- 날짜텍스트 : date-색상코드
- 타이틀 : title-색상코드
- 서브텍스트 : sub_text-색상코드

#### 이벤트영역 색상변경 예시

- 이벤트라벨배경색 : label-색상코드
- gift조건 텍스트색상 : condition_text-색상코드

```css
/* 색상 코드를 클래스명에 포함 */
.visual_bg-F3E1CC {
}
.date-3D444F {
}
.title-3D444F {
}
.sub_text-3D444F {
}
.label-A58768 {
}
.condition_text-3D444F {
}
```

## 4. JavaScript 인터랙션 개요

### 4.1 초기화 구조

```javascript
function initApp() {
	initSwipers(); // 슬라이드 모음
	initToggleSwitch(); // 스위치
	initTabNavigation(); // 탭스크롤
	initColorStyles(); // 클래스 색상변경
}

$(document).ready(function () {
	initApp();
});
```

### 4.2 주요 인터랙션 기능

- Swiper 슬라이더

- 탭 네비게이션

- 토글 스위치

- 동적 스타일 적용

## 5. 반응형 대응 방법

### Media Query 전략 (모바일 -> 데스크탑)

```css
/* 기본 스타일 (모바일) */
.visaul_wrap .img_box {
	margin-top: 32px;
	border-radius: 12px;
	overflow: hidden;
}

/* 태블릿/데스크톱 (768px 이상) */
@media screen and (min-width: 768px) {
	.visaul_wrap .img_box {
		max-width: 552px;
		max-height: 352px;
		margin: 23px auto 0;
	}
}
```

### 주요 브레이크포인트

- **768px**: 태블릿/데스크톱 전환점
- **모바일**: 320px ~ 767px
- **태블릿/데스크톱**: 768px 이상

### Swiper 반응형 설정

## 7. 접근성 고려사항

### 7.1 시맨틱 마크업

- 적절한 heading 구조 (h1~h6)
- alt 텍스트 제공

## 8. 유지보수성 고려사항

### 8.1 모듈화

- 컴포넌트별 CSS 주석으로 분리
- JavaScript 기능별 함수 분리
- 재사용 가능한 클래스 설계

### 8.2 확장성

- 새로운 브랜드/상품 추가 용이성
- 색상 테마 변경 용이성(md 및 디자이너 html로 색상변경돼게 사용 가능)
- 기능 추가 시 구조 변경 최소화
