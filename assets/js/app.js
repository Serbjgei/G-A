





/*document.addEventListener("DOMContentLoaded", () => {

    // Tabs
   /* tabsBlock = () => {
        let tabElems = document.querySelectorAll('.tab');

        tabElems.forEach((tab, i) => {
            let tabButtonsElems = tab.querySelectorAll('.tab__button');
            let tabBlocksElems = tab.querySelectorAll('.tab__block');

            tab.setAttribute('data-tabCount', `tab-${i}`);

            tabBlocksElems.forEach((e, i) => {
                e.setAttribute('data-tab', i);
                if(i == 0) {
                    e.classList.add('show')
                }
            });

            tabButtonsElems.forEach((e, i) => {
                if(i == 0) {
                    e.classList.add('active')
                }
                e.setAttribute('data-tab', i);
                e.addEventListener('click', (e) => {
                    let buttonActive = e.target.getAttribute('data-tab');
                    let buttonButtonInner = e.target.parentElement.parentElement.querySelectorAll('.tab__button');
                    let buttonBlockInner = e.target.parentElement.parentElement.querySelectorAll('.tab__block');
                    let btnTab = e.target;

                    buttonButtonInner.forEach((e) => {
                        e.classList.remove('active');
                        if(e.classList.contains('active')) {
                            
                        } else {
                            
                            btnTab.classList.add('active');
                        }
                    });

                    buttonBlockInner.forEach((e) => {

                        if(buttonActive == e.getAttribute('data-tab')) {
                            e.classList.add('show');
                        } else {
                            e.classList.remove('show');
                        }
                     });
                });
            });
        });
    };
    tabsBlock()*/
//});

const swiperIntro = new Swiper(".intro-wrapper", {
    effect: 'fade',
    loop: true,
    allowTouchMove: true,
    fadeEffect: {
        crossFade: true,
    },
    pagination: {
        el: ".intro__pagination",
        clickable: true,
    },
    autoplay: {
        delay: 7000,
    },
});
const swiperProducts = new Swiper(".products__block", {
   loop: true,
   watchSlidesProgress: true,
   autoplay: {
          delay: 0,
          disableOnInteraction: false,
      },
   speed: 30000,
   effect: 'slide',
    slidesPerView: 'auto',
    freeMode: true,
    scrollbar: {
        el: ".products__scrollbar",
        hide: true,
    },
    navigation: {
        nextEl: ".recall-slider__next",
        prevEl: ".recall-slider__prev",
    },
});

// jQuery function
$(document).ready(function() {
    function headerFunc() {
        function headerDropdown() {
            $('.header__item').each(function() {
                if($(this).find('.header__dropdown').length) {
                    $(this).addClass('dropdown');
                }
            })
            $('.header__item button').click(function() {
                if($(this).parent().hasClass('open')) {
                    $(this).parent().removeClass('open');
                } else {
                    $('.header__item button').parent().removeClass('open');
                    $(this).parent().addClass('open');
                }
            })
        }
        headerDropdown()
        //Бургер меню
        function headerBurger (){
            $('.header__burger').click(function () {
                $('.header__burger').toggleClass('open');
                $('.header').toggleClass('open');
                $('.header__nav').toggleClass('open');
            });
        };
        headerBurger();
    }
    headerFunc();

    //contact
    function formValidate() {
        $('#contact-form').validate({
            errorContainer: ".contact-form-elem__err",
            rules: {
                name: {
                    required: true,
                    minlength: 4
                },
                email: {
                    required: true,
                    minlength: 4,
                    email: true
                },
                phone: {
                    required: true,
                    minlength: 4
                },
                message: {
                    required: true,
                    minlength: 10
                }
            },
            messages: {
                name: {
                    required: "Поле не заполнено",
                    minlength: "Минимальное количество символов: 4"
                },
                email: {
                    required: "Поле не заполнено",
                    minlength: "Минимальное количество символов: 4"
                },
                phone: {
                    required: "Поле не заполнено",
                    minlength: "Минимальное количество символов: 4"
                },
                message: {
                    required: "Поле не заполнено",
                    minlength: "Минимальное количество символов: 10"
                },
            }
        });
    };
    formValidate(); 
    
   //product
   $(".action-print").click(function(){
      window.print();
      return false;
   });
   
   
   //custom popups
   $('[data-fancybox="gallery"],[data-fancybox="gallery1"],[data-fancybox="gallery2"],[data-fancybox="gallery3"],[data-fancybox="gallery4"],[data-fancybox="gallery5"],[data-fancybox="gallery6"],[data-fancybox="gallery7"]').fancybox({
        idleTime: false,
        trapFocus: true,
        width: "900",
        height: 900,
        backFocus: false,
        hideScrollbar: false,
        breakpoints: {
            992: {
                width: 600,
                height: 600,
            },
            768: {
                width: 400,
                height: 400,
            },
            576: {
                width: '100%',
                height: '100%',
            },
        },
    });
   
    $.fancybox.defaults.idleTime = false;
    
   //////
   var swiper = new Swiper(".mySwiperTumbnail", {
        // loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        direction: "vertical",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            240: {
                direction: "horizontal",
                slidesPerView: 2,
            },
            480: {
                direction: "horizontal",
                slidesPerView: 2,
            },
            600: {
                direction: "horizontal",
                slidesPerView: 3,
            },
            1380: {
                direction: "vertical",
            }
        }
    });
    var swiper2 = new Swiper(".mySwiperItems", {
        loop: true,
        spaceBetween: 10,
        thumbs: {
            swiper: swiper,
        },
    });
    


    
    
   //////// 
   $('.tab__item').beefup({
        animation: '',
        openSingle: true,
        openSpeed: 0,
        closeSpeed: 0,
        onOpen: function ($el) {
            // Add active class to tabs
            $('a[href="#' + $el.attr('id') + '"]').parent().addClass(this.openClass)
                .siblings().removeClass(this.openClass);
        }
    });


  





/////////////resources страницв_____________________________________________________________________________________________________________
/////////////resources страницв_____________________________________________________________________________________________________________
/////////////resources страницв_____________________________________________________________________________________________________________
/////////////resources страницв_____________________________________________________________________________________________________________
/////////////resources страницв_____________________________________________________________________________________________________________



    function tabsBlock() {
        $('.tab__button-resources').click(function() {
          let id = $(this).attr('data-tab'), 
          content = $('.tab__block-resources[data-tab="'+ id +'"]');
          $('.tab__button-resources').removeClass('active');
          $(this).addClass('active');
          $('.tab__block-resources').removeClass('show');
          content.addClass('show');
        });
        
    };
    tabsBlock();




});
