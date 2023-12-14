$(function () {
    // logo 클릭 시 최상단으로
    $("h1.logo").on("click", function () {
        $("html,body").stop().animate({
            scrollTop: 0 // 수직 스크롤 위치 0
            // .stop() - 예상치 못한 동작 방지를 위함
        }, 400); // 0.4초동안(ms)
    });
    // .on("click", function() -> function이 뒤에 있는 이유는 로고 클릭 시 함수 실행하기 위함
    // scrollTop 은 스크롤 위치를 이동시키기 위한 jQuery 애니메이션 함수

    // pc + Mobile 메뉴 클릭 시 애니메이션으로 위치 이동
    // .menu와 .m_menu의 a 태그 속성 중 href 의 # 으로 시작하는 요소 클릭 시
    $(".menu li a[href^='#'], .m_menu li a[href^='#']").on("click", function () {
        var target = $(this).attr("href");
        var targetPostion = $(target).offset().top;
        // 스크롤 애니메이션 설정 - 0.8초 동안 상단으로 스크롤
        $("html,body").animate({
            scrollTop: targetPostion
        }, 800); // 0.8초
        // html, body 동시에 잡아주는 이유 - 웹 호환성 때문. 일괄된 동작 보장 위해서 두 개를 다 잡아줌
    });

    // 햄버거버튼 클릭시 - 모바일 메뉴 보기/가리기
    // 스토리 : 햄버거버튼 클릭시 메뉴박스와 X버튼 보기
    // eq() - jQuery에서 특정 요소의 순서값 가져올 때 사용하는 메서드
    $(".rightmenu li").eq(2).click(function () {
        $(".m_menu").show();
        // 보기
        $(".rightmenu").hide();
        // 가리기
        $(".m_menu li").eq(3).show();
    });

    // x 클릭시 메뉴박스 사라짐
    $(".m_menu li").eq(3).click(function () {
        $(".m_menu").hide();
        $(this).hide();
        $(".rightmenu").show();
    });

    // 배경 스크롤 이벤트
    $(window).scroll(function () { // .scroll 스크롤 이벤트
        // 현재 스크롤의 위치 scr에 넣어줌
        // window - this
        // -100은, 기존의 요소에서 상단으로 100px 올려준 상태
        // (scr / 2) : 현재 스크롤 위치를 2로 나눈 값 의미
        // 스크롤 위치에 따라 동적으로 계산된 값에 따라 위치 이동됨
        // 스크롤 위치가 증가하면 (scr / 2) 값도 증가된다.
        // 스크롤 위치가 감소하면 (scr / 2) 값도 감소되어 동적으로 보인다.
        var scr = $(this).scrollTop(); // .scrollTop() - 수직스크롤의 위치를 나타내는 메서드

        $("ul.center_bg li").eq(0).css({
            "top": -100 + (scr / 2)
        });
        $("ul.center_bg li").eq(1).css({
            "top": -100 + (scr / 1.7)
        });
        $("ul.center_bg li").eq(2).css({
            "top": 80 + (scr / 3)
        });
        $("ul.center_bg li").eq(3).css({
            "top": 60 + (scr / 5)
        });
        $("ul.center_bg li").eq(4).css({
            "top": 10 + (scr / 5)
        });
        $("ul.center_bg li").eq(5).css({
            "top": -60 + (scr / 2)
        });
        $("ul.center_bg li").eq(6).css({ // x 좌표값은 중앙
            // y(수직) 위치값을 초기 위치보다 위로 올라가도록 효과를 줌
            "transform": "translate(-50%," + (-50 - (scr / 100)) + "%)"
        });

// 육각형 위치 이동
$(".hexagon").css({ // x 좌표값은 중앙
    "transform": "translate(-50%," + (-50 -(scr / 99.5)) + "%)"
});

// 레드카펫 위치 이동
$("#redcarpet").css({
    // 위로 올라가는 효과 구현
    "transform": "translateY(" + (-100 - (scr / 2.5)) + "px)"
    // 현재 위치를 수정하기 위해서는 (-100 -(scr / 2.5))에서 -100 부분을 수정하면 됨
});

// 폿폴배경 위치 이동
$(".port_bg li").eq(0).css({
    "transform": "translateY(" + (0 - (scr / 1.5)) + "px)"
});

$(".port_bg li").eq(1).css({
    "transform": "translateY(" + (0 - (scr / 1.5)) + "px)"
});

$(".port_bg li").eq(2).css({
    "transform": "translateY(" + (0 - (scr / 1.5)) + "px)"
});
// 레드카펫2
    // 스크롤 위치가 1630px 이상인 경우 추가 스타일 적용 (if문)
    // scr 1630px 보다 큰지 확인 후에 해당 조건이 참일 경우 scr에서 1630px 빼줌
    // 이렇게 하는 이유는 상단의 레드카펫 구조와 동일하게 동작하게 해주기 위해서임
    // scr - 내가 스크롤을 내린 위치
    if (scr > 1630) {
        scr -= 1630;
        $("#redcarpet2").css({
            "transform": "translateY(" + (0 - (scr / 2.2)) + "px)"
        });
    }

    });

});

// 스크롤 위치값을 scr에 넣어줌
// 스크롤이 위로 올라갈수록 li에 배경 이미지들이 동적으로 이동되는 스크립트
// li의 첫 번째 요소는 0부터 시작(그래서 .eq(0)부터였던 것) - 0, 1, 2, 3, ...
// window - 웹브라우저 창
// 슬래쉬 / : 나눈다는 의미