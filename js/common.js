$(function(){

	// slick  init 
	
	$('.gallery-slider').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: $('.gallery-slider-nav.prev'),
		nextArrow: $('.gallery-slider-nav.next'),
		responsive: [
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});

});

$(function(){

	$('.gallery-slider-item').css('height', $('.gallery-slider-item-wrapper').width() + 'px');

});

$(function () {
	$(".gallery-slider-item").click(function(event) {
		/* Act on the event */
		event.preventDefault();
		var src = getComputedStyle(this).backgroundImage,
			item = this.classList[1];
		document.body.style.setProperty(`--backimg`, src);
		$('[class*="gallery-item"]').hide();
		$('[class*="gallery-item"]').removeAttr('hidden');
		$('.gallery-' + item).show();

		return false;

	});
}); 

$(function() {
	$("a[href='#']").click(function(e) {
		e.preventDefault();
		alert("Sorry, this item is not avaliable now.");
	})
});

