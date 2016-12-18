$(function() {
	// var h = $('.carousel-inner img').height() + 'px';
	// $('.carousel-control').css('line-height',h);
	
	// $(window).on('resize',function() {
	// 	var height = $('#myCarousel img').eq(0).height() ||
	// 				 $('#myCarousel img').eq(1).height() ||
	// 				 $('#myCarousel img').eq(2).height();
	// 	$('.carousel-control').css('line-height',height + 'px');
	// });
	
	// var h0 = ($('.imgh').eq(0).height() - $('.texth').eq(0).height())/2 + 'px';
	// $('.texth').eq(0).css('margin-top',h0);
	// $(window).on('resize',function() {
	// 	$('.texth').eq(0).css('margin-top',h0);
	// });

	// var h1 = ($('.imgh').eq(1).height() - $('.texth').eq(1).height())/2 + 'px';
	// $('.texth').eq(1).css('margin-top',h1);
	// $(window).on('resize',function() {
	// 	$('.texth').eq(1).css('margin-top',h1);
	// });
	
	$('.texth').each(function(index) {
		var h = ($('.imgh').eq(index).height() - $('.texth').eq(index).height())/2 + 'px';
			$('.texth').eq(index).css('margin-top',h);
			$(window).on('resize',function() {
				$('.texth').eq(index).css('margin-top',h);
			});
	});
});