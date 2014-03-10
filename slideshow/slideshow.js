$(document).ready(function(){
	(function($) {
		$.fn.slideshow = function() {
			activeItem = $(".ss_accordion:first li:last");
			$(activeItem).addClass('active');
			$(".active p.ss_heading").css("color", "white");

			$(".ss_accordion li").hover(function(){
				$(".active p.ss_heading").css("color", "none");
				$(activeItem).animate({width: "50px"}, {duration:300, queue:false});
				// Change width according to the images width + 50px (heading)
				$(this).animate({width: "550px"}, {duration:300, queue:false});
				$("p.ss_heading").css("color", "none");
				$("p.ss_heading", this).css("color", "white");
				activeItem = this;
			});
		};
	})(jQuery);
	$(".ss_accordion").slideshow();
});