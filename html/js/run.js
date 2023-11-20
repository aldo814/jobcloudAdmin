$(document).ready(function () {
	$("[class$='wrong_message']").hide();
	
	$('.all_menu').click(function () {
        $(this).toggleClass('active');
        $('.mega_menu').slideToggle(300);
    });

  
	//Header
    if (window.innerWidth < 1024) {
        $('#header .header-nav .all_menu a').click(function () {
            $('body').toggleClass('lock');
        });
$('#header .mega_menu #mega_gnb li .tit').click(function (){
           $(this).parent().toggleClass('active') 
        });
    } else {
    	$('.gnb, .mega_menu').mouseenter(function () {
    		$(".all_menu").addClass('active');
    		$('.mega_menu').stop().slideDown(300)
    	});
        
        $('.gnb, .mega_menu').mouseleave(function () {
    		$(".all_menu").removeClass('active');
    		$('.mega_menu').stop().slideUp(300)
    	});
    }
    

 


    /*메인 비쥬얼*/
    function updSwiperNumericPagination() {
        this.el.querySelector(".swiper-counter").innerHTML = '<span class="count">0' + (this.realIndex + 1) + '</span><span class="total">0' + this.el.slidesQuantity + "</span>";
    }

    $(".visual").each(function () {
        this.slidesQuantity = this.querySelectorAll(".swiper-slide").length;

        var mySwiper = new Swiper('.visual', {
            speed: 800,
            spaceBetween: 30,
            loop: false,
            autoHeight : true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: true // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지.
            },
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
            },
            loop: true,
            on: {
                init: updSwiperNumericPagination,
                slideChange: updSwiperNumericPagination
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        $('.wrap-autoplay-control > .swiper-button-pause').click(function () {
            $(this).hide();
            mySwiper.autoplay.stop();
            $('.wrap-autoplay-control > .swiper-button-play').show()

        });

        $('.wrap-autoplay-control > .swiper-button-play').click(function () {
            $(this).hide();
            mySwiper.autoplay.start();
            $('.wrap-autoplay-control > .swiper-button-pause').show();
        });

    });

    /* 인기 강좌 슬라이드*/
    var swiper = new Swiper('.slide01 .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: '.slide01 .lt_swiper-button-next',
            prevEl: '.slide01 .lt_swiper-button-prev',
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            501: {
                slidesPerView: 1,
            },
            280: {
                slidesPerView: 1,
            },
        }
    });

    var swiper = new Swiper('.slide02 .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: '.slide02 .lt_swiper-button-next',
            prevEl: '.slide02 .lt_swiper-button-prev',
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            501: {
                slidesPerView: 1,
            },
            280: {
                slidesPerView: 1,
            },
        }
    });

    var swiper = new Swiper('.slide03 .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: '.slide03 .lt_swiper-button-next',
            prevEl: '.slide03 .lt_swiper-button-prev',
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            501: {
                slidesPerView: 1,
            },
            280: {
                slidesPerView: 1,
            },
        }
    });

    var swiper = new Swiper('.review_area .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: '.review_area .lt_swiper-button-next',
            prevEl: '.review_area .lt_swiper-button-prev',
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            481: {
                slidesPerView: 1,
            },
            280: {
                slidesPerView: 1,
            },
        }
    });

    /*찜하기 버튼*/
    /*$('.like').click(function () {
        $(this).toggleClass('active')
    });*/

    /* 탭메뉴 */
    // 탭 컨텐츠 숨기기
    $(".tab_content").hide();

    // 첫번째 탭콘텐츠 보이기
    $(".tab_container").each(function () {
        $(this).children(".tabs li:first").addClass("active"); //Activate first tab
        $(this).children(".tab_content").first().show();
    });
    //탭메뉴 클릭 이벤트
    $(".tabs li a").click(function () {

        $(this).parent().siblings("li").removeClass("active");
        $(this).parent().addClass("active");
        $(this).parent().parent().parent().parent().find(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();
    });

    /* 메뉴 더보기 */
    $('.more_area .more_btn').click(function () {
        $(this).next().show();
    });

    // 외부영역 클릭 시 팝업 닫기
    $(document).mouseup(function (e) {
        var more_area = $(".more_cont");
        if (more_area.has(e.target).length === 0) {
            more_area.fadeOut(200);
        }
    });
    /* 첨부파일 */
    $('.fileInput').change(function () {
        var numfiles = $(this)[0].files.length;
        var parent = $(this).closest('.input-file');
        parent.find('ins').remove();
        for (i = 0; i < numfiles; i++) {
            parent.append('<ins>' + $(this)[0].files[i].name + '</ins>')
        }
    });

    /* faq */
    $('.faq_wrap .tit a').click(function () {
        $(this).parent().parent().next().find('div').slideToggle("200");
        $(this).parent().parent().next().toggleClass('active')
    });
    
    /* 좌측메뉴 */
 $(".snb .active ul").show();
    $(".snb > ul > li > a").click(function() {
        if ($(this).next().is(":hidden")) {
            $(".snb ul li ul").hide();
            $(this).next().show();
            $(this).parent().addClass('active');
             $(this).parent().siblings().removeClass('active')
        } else {
            $(".snb ul li ul").hide();
            $(this).parent().removeClass('active');
        }
    });
    
    $(".snb > ul > li > ul a").click(function() {
        $(this).parent().addClass('active');
        $(this).parent().removeClass('active');
    });
    
  
    
    //스크롤 이동
    $('.go_review a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
    
    /* 공유하기 */
    $('.share > a').click(function(){
       $('.share_layer').fadeToggle(100); 
    });
    

    /*툴팁*/
    $('.qa_wrap a').mouseenter(function(){
       $(this).next().fadeIn(100); 
    });
     $('.qa_wrap a').mouseleave(function(){
       $(this).next().fadeOut(100); 
    });
    
    /*$('.like_btn').click(function(){
       $(this).toggleClass('active') 
    });*/
    
    /* 수강후기 더보기 btn */
    $(".lv_review_list .item").slice(0, 5).css("display", "flex"); // 초기갯수
    $("#load").click(function(e){ // 클릭시 more
    	$(".pageCnt").text(parseInt($(".pageCnt").text())+5);
        e.preventDefault();
        $(".lv_review_list .item:hidden").slice(0, 5).fadeIn(200).css('display', 'flex'); // 클릭시 more 갯수 지저정
        if($(".lv_review_list .item:hidden").length == 0){ // 컨텐츠 남아있는지 확인
            $('#load').fadeOut(100); 
        }
    });
    
    
    var swiper = new Swiper('.lv_slide .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: '.lv_slide .lt_swiper-button-next',
            prevEl: '.lv_slide .lt_swiper-button-prev',
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 3,
            },
            480: {
                slidesPerView: 1,
            },
            280: {
                slidesPerView: 1,
            },
        }
    });
    
    // a href='#' 클릭 무시 스크립트
      $('a[href="#"]').click(function (ignore) {
         ignore.preventDefault();
      });
    
    
    /* 강의실 슬라이드 */
     var swiper = new Swiper('.lvr_slide .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: '.lvr_slide .lt_swiper-button-next',
            prevEl: '.lvr_slide .lt_swiper-button-prev',
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 3,
            },
            480: {
                slidesPerView: 1,
            },
            280: {
                slidesPerView: 1,
            },
        }
    });
    
    // input file
    const dt = new DataTransfer(); // Permet de manipuler les fichiers de l'input file

$("#attachment").on('change', function(e){
   for(var i = 0; i < this.files.length; i++){
      let fileBloc = $('<span/>', {class: 'file-block'}),
          fileName = $('<span/>', {class: 'name', text: this.files.item(i).name});
      fileBloc.prepend('<span class="file-delete"><span class="del">삭제</span></span>')
         .prepend(fileName);
      $("#filesList > #files-names").append(fileBloc);
   };
   for (let file of this.files) {
      dt.items.add(file);
   }
   this.files = dt.files;

   $('span.file-delete').click(function(){
      let name = $(this).next('span.name').text();
      $(this).parent().remove();
      for(let i = 0; i < dt.items.length; i++){
         if(name === dt.items[i].getAsFile().name){
            dt.items.remove(i);
            continue;
         }
      }
      document.getElementById('attachment').files = dt.files;
   });
});

});


    /* 팝업 */
    function openModal(modalname) {
        document.get
        $("." + modalname).show();
        $('body').addClass('not_scroll');
        $('.shadow').show();
    }

    function close_pop(flag) {
        $('.popup').hide();
        $('body').removeClass('not_scroll');
        $('.shadow').hide();
    };


    function close_pop03(flag) {
        $('.sch_pop').hide();
        $('body').removeClass('not_scroll');
        $('.shadow').hide();
    };


 
    /*윈도우창 닫기*/
       function closeWindow() {  
        window.close();  
        }  
