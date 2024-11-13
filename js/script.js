(function($){
  $(document).ready(function(){

    const dropBtn = $('.js-menu-btn'),
          dropSubMenu = dropBtn.parent().find('.js-menu'),
          dropBtnMobile = $('.js-mobile-nav-btn'),
          dropNav = $('.js-nav');
    // Add arrow svg to dropdown-btn
    dropBtn.append(
      `<svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.2765 0.186768L6.68652 4.51335L2.09652 0.186768L0.686523 1.51875L6.68652 7.18677L12.6865 1.51875L11.2765 0.186768Z" fill="#003D4C"/>
      </svg>`
    );


    //  Add arrow to pagination button
    const paginationBtn = $('.pagination__prev, .pagination__next');
    if (paginationBtn.length > 0) {
      paginationBtn.append(
        `<svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.2765 0.186768L6.68652 4.51335L2.09652 0.186768L0.686523 1.51875L6.68652 7.18677L12.6865 1.51875L11.2765 0.186768Z" fill="#003D4C"/>
        </svg>`
      );
    }


    // Show/hide menu in header

    // show/hide menu on click
    dropBtn.on('click', function() {
      if($(this).hasClass('opened')) {
        $(this).removeClass('opened');
        dropSubMenu.slideUp();
      } else {
        $('.js-menu-btn').removeClass('opened');
        $('.js-menu').slideUp();
        $(this).addClass('opened');
        dropSubMenu.slideDown()
      }
    });

    // Show/hide menu on mobile
    dropBtnMobile.on('click', function() {
      if($(this).hasClass('opened')) {
        $(this).removeClass('opened').closest('.header').find('.js-nav').slideUp();
        $('.js-menu-btn').removeClass('opened');
        $('.js-menu').slideUp();
      } else {
        $(this).addClass('opened').closest('.header').find('.js-nav').slideDown();
      }
    });


    // hide menu on click outside
    $(document).click(function(e){ 
      const windowWidth = $(window).width();
      if ((!dropNav.is(e.target) && !dropBtnMobile.is(e.target))
        && (dropNav.has(e.target).length === 0 && dropBtnMobile.has(e.target).length === 0)) {
          dropNav.find('.js-menu-btn').removeClass('opened');
          dropNav.find('.js-menu').slideUp();
          if(windowWidth < 992) {
            dropBtnMobile.removeClass('opened');
            dropNav.slideUp();
          }
        }
    });

    //hide menu on scroll
    var lastScrollTop = 0;
    $(window).scroll(function(){
      let st = $(this).scrollTop();
      if (st !== lastScrollTop) {
        dropBtn.removeClass('opened');
        dropSubMenu.slideUp();
      }
      lastScrollTop = st;
    });



    //Carousel
    if ($('.js-carousel').length > 0) {
      $('.js-carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: `<button class="slick-arrow slick-prev"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5 21L12.3506 19.1494L5.02687 11.8125L21 11.8125V9.1875L5.02687 9.1875L12.3506 1.85062L10.5 0L0 10.5L10.5 21Z" fill="#012A53"/>
        </svg></button>`,
        nextArrow: `<button class="slick-arrow slick-next"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5 21L12.3506 19.1494L5.02687 11.8125L21 11.8125V9.1875L5.02687 9.1875L12.3506 1.85062L10.5 0L0 10.5L10.5 21Z" fill="#012A53"/>
        </svg></button>`,
      });
    }

    // Accordion
    $('.js-accordion').on('click', '.js-accordion-btn', function(){
      const parent = $(this).parent(),
            mainParent = $(this).closest('.js-accordion'),
            windowWidth = $(window).width();

      if (parent.hasClass('opened')) {
        parent.removeClass('opened').find('.js-accordion-content').slideUp();
      } else {
        parent.addClass('opened').find('.js-accordion-content').slideDown();
      }
    });

    // Hide/show more text
    const moreBtn = $('.js-more-btn'),
          moreContent = $('.js-more-content');

    moreBtn.on('click', function() {
      if ($(this).hasClass('opened')) {
        $(this).removeClass('opened').text('Read More');
        moreContent.slideUp();
      } else {
        $(this).addClass('opened').text('Read Less');
        moreContent.slideDown();
      }
    });
  })
})(jQuery)