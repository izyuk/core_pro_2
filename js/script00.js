$(function (){
	$(".slider").slick({
		infinite: false,
		arrows:false,
		slidesToShow: 4,
		dots:true,
		dotsClass:'slick-dots',
		responsive: [
		{
			breakpoint: 1100,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint:992,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint:768,
			settings: {
				slidesToShow: 1
			}
		},
		]
	});

	$(".slider_two").slick({
		infinite: false,
		arrows:false,
		slidesToShow: 3,
		dots:true,
		dotsClass:'slick-dots',
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		},
		]
	});
	$('.mob_button, .close_menu').click(function (){
		$('.head .contacts').toggleClass('active');
	});
})