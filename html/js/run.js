$(document).ready(function(){
    // 탭 컨텐츠 숨기기
    $(".tab_content").hide();

    // 첫번째 탭콘텐츠 보이기
    $("#gnb").each(function () {
        $(this).children(".gnb_tab li:first").addClass("active"); //Activate first tab
        $(this).children(".tab_content").first().show();
    });
    //탭메뉴 클릭 이벤트
    $(".gnb_tab li a").click(function () {
        $(this).parent().parent().parent().parent().find(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();
    });


    "use strict";
    const log = console.log;

    const items = [...document.querySelectorAll(`.item`)];

    const updateSelected = (items, selectedItem) => {
        items.forEach(item => {
            item.classList.remove(`item-selected`);
            item.classList.add(`item-unselected`)
        });
        selectedItem.classList.remove(`item-unselected`);
        selectedItem.classList.add(`item-selected`)
    }

    for (const item of items) {
        const flag = item.dataset.flag || false;
        if (!flag) {
            item.dataset.flag = true;
            item.addEventListener(`click`, (e) => {
                const className = e.target.getAttribute(`class`);
                switch (className) {
                    case `item-left`:
                    case `item-right`:
                        updateSelected(items, e.target.parentElement);
                        break;

                    default:
                        break;
                }
            });
        }
    }
    
     $('.gnb_area > li > a').click(function(){
        $(this).parent().addClass('active');
        $(this).parent().children('a').toggleClass('active');
        $(this).parent().siblings().removeClass('active');
         $(this).next('ul').slideToggle();
    });
    
      $('.menu_btn').click(function(){
         $(this).toggleClass('active');
          $('#gnb').fadeToggle();
      });
    
    

});
