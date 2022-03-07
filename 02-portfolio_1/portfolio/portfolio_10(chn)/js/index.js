$(document).ready(function(){
  

    // header menu 
    var $menu = $('.m_menu>ul');
        $submenu = $('.sub_menu');
    
    // 메뉴바 hover 시 show,hide 해라
    $menu.hover(function(){
        $submenu.show();

    }, function(){
        $submenu.hide();

    });


    // footer family site
    var $family_h = $('.family_hidden');  
        $family_s = $('.family_site');
        $ficon = $('.family_icon');

    // family click 시 toggle 해라
    $family_s.click(function(){
        $family_h.toggle();
        $ficon.toggleClass('on1');
    });
    
    // click hidden box
    var $btn1 = $('.button1');  
        $btn2 = $('.button2');
        $hi_con = $('.click_contents');

    // btn1 click 시 hi_con show 해라
    $btn1.click(function(){
        $hi_con.show();
    });
     
    // btn2 click 시 hi_con hide 해라
    $btn2.click(function(){
        $hi_con.hide();        
    });





    //  text swiper 1
    var swiper = new Swiper('.swiper-container.swiperc1', {
        navigation: {
          nextEl: '.swiper-button-next.swipern1',
          prevEl: '.swiper-button-prev.swiperp1',
        },
      });


    // main view swiper 2
    var swiper2 = new Swiper('.swiper-container.swiperc2', {
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,            
    navigation: {
        nextEl: '.swiper-button-next.swipern2',
        prevEl: '.swiper-button-prev.swiperp2',
    },
    autoplay:{
        delay:3445
    }
    });

});