import 'slick-carousel';
import 'select2';    

$('.products-slider').slick({
    slidesToShow: 4,
    arrows: true,
    nextArrow: '<div class="products-slider__arr-next"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.779297 15L7.7793 7.674L0.779297 1" stroke-width="2" stroke-linejoin="round"/></svg></div>',
    prevArrow: '<div class="products-slider__arr-prev"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 15L1 7.674L8 1" stroke-width="2" stroke-linejoin="round"/></svg></div>',
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                variableWidth: true,
            }
        },
    ]
})

$('.header__menu-btn').click(function(){
    $('.menu').toggleClass('active');
    $('.overlay').toggleClass('active');
});

$('.overlay').click(function(){
    $('.menu').removeClass('active')
    $('.cart').removeClass('active');
    $(this).removeClass('active');    
});

$('.menu__nav-link').click(function(e){
    e.preventDefault();
    const parent = $(this).parent('.menu__nav-item');
    const submenu = parent.find('.menu__nav-submenu');

    if(parent.hasClass('active')){
        parent.removeClass('active');
    } else {
        parent.addClass('active');
    }

});

const windowWind = $(document).width();

if(windowWind < 768){
    $('.blog-list').slick({
        slidesToShow: 1,
        variableWidth: true,
        arrows: true,
        nextArrow: '<div class="products-slider__arr-next"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.779297 15L7.7793 7.674L0.779297 1" stroke-width="2" stroke-linejoin="round"/></svg></div>',
        prevArrow: '<div class="products-slider__arr-prev"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 15L1 7.674L8 1" stroke-width="2" stroke-linejoin="round"/></svg></div>',
    })
}

$('.cart-link').click(function(e){
    e.preventDefault();
    $('.cart-panel').addClass('active');
    $('.overlay').addClass('active');
});

$('.panel__header').click(function(){
    $('.cart-panel').removeClass('active');
    $('.overlay').removeClass('active');
});

$('.form__field-select').select2({
    minimumResultsForSearch: -1,
	width: '100%',	
	dropdownAutoWidth : true,	
	placeholder: function(){
		$(this).data('placeholder');
	}
})

$('.sort__block-select').select2({
    minimumResultsForSearch: -1,
	width: '100%',	
	dropdownAutoWidth : true,	
    dropdownCssClass : 'sort-results',
	placeholder: function(){
		$(this).data('placeholder');
	}
})