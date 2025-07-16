$(function () {
	var swiper = new Swiper('.mySwiper', {
		slidesPerView: 2.7,
		centeredSlides: false,
		spaceBetween: 16,
		grabCursor: true,
		breakpoints: {
			768: {
				slidesPerView: 4,
			},
		},
	});
	var swiper2 = new Swiper('.product_slide_swiper', {
		slidesPerView: 1,
		grabCursor: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
	var swiper3 = new Swiper('.product_list_swiper', {
		slidesPerView: 1,
		grabCursor: true,
		pagination: {
			el: '.product_list_pagination',
			clickable: true,
		},
	});
	// 토글 스위치 기능
	$('.toggle_switch input').on('change', function () {
		if ($(this).is(':checked')) {
			console.log('품절 상품 숨김');
		} else {
			console.log('품절 상품 표시');
		}
	});

	// 탭 네비게이션 스크롤 기능
	$('.tab_nav a').on('click', function (e) {
		e.preventDefault(); // 기본 링크 동작 방지

		var targetId = $(this).attr('href');
		var $targetElement = $(targetId);

		$('.tab_nav a').removeClass('active');
		$(this).addClass('active');

		$('html, body').animate(
			{
				scrollTop: $targetElement.offset().top,
			},
			800
		);
	});
	// visual 클래스에 따른 변경
	$('.visaul_wrap, .event_area').each(function () {
		var $this = $(this);
		var className = $this.attr('class');
		var classList = className.split(' ');

		// 처리할 클래스 매핑
		var classMap = {
			visual_bg: '.visual_bg',
			title: '.title',
			date: '.date',
			sub_text: '.sub_text',
			label: '.label',
			condition_text: '.condition_text',
		};

		// 각 클래스 타입별로 처리
		$.each(classMap, function (prefix, target) {
			var targetClass = classList.find(function (cls) {
				return cls.indexOf(prefix + '-') === 0;
			});

			if (targetClass) {
				var colorCode = targetClass.replace(prefix + '-', '');
				if (colorCode.length === 3 || colorCode.length === 6) {
					if (target.startsWith('.visual_bg') || target.startsWith('.label')) {
						// 배경색
						$this.find(target).css('background-color', '#' + colorCode);
					} else {
						// 텍스트 색상
						$this.find(target).css('color', '#' + colorCode);
					}
				}
			}
		});
	});
});
