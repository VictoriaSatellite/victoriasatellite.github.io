$( document ).ready(function() {
	$('.portfolio').each(function(){

		$(this).slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			initialSlide:0,
			variableWidth:true,
			centerMode: true,
			centerPadding: '60px',
			autoplay: true,
			autoplaySpeed: ((Math.random()*2000)+1750),
			dots:false
		})
	})
});