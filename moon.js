window.onload = function() {

	$(document.body).css("visibility", "visible");

	$('#moon').css("top", "17%");
	
	$('#stars').css("transform", "translate(0,-20%)");
	$('#stars').css("-moz-transform", "translate(0,-20%)");
	$('#stars').css("-webkit-transform", "translate(0,-20%)");
	$('#stars').css("-o-transform", "translate(0,-20%)");
	$('#stars').css("-ms-transform", "translate(0,-20%)");
	
	$('#stars2').css("transform", "translate(0,-13%)");
	$('#stars2').css("-moz-transform", "translate(0,-13%)");
	$('#stars2').css("-webkit-transform", "translate(0,-13%)");
	$('#stars2').css("-o-transform", "translate(0,-13%)");
	$('#stars2').css("-ms-transform", "translate(0,-13%)");

	$('#skip').css("opacity", "0.0");
	$('#skip').css("filter", "alpha(opacity=0)");

	$('#skiplink').delay(8000).hide(0);
	$('#text').delay(8000).queue(function(next){
		$(this).css("z-index", "1");
		if ($('#introduction').offset().left + 500 >= ($(window).width()/2)) {
			$('#headshot').css("opacity", "0");
		}
		else $('#headshot').css("opacity", "100");
		next();
	});


	$('#bar').css("visibility", "visible");

	$('#content').css("transform", "rotateX(0deg)");
	$('#content').css("-moz-transform", "rotateX(0deg)");
	$('#content').css("-webkit-transform", "rotateX(0deg)");

	$('#text').css("opacity", "1.0");
	$('#text').css("filter", "alpha(opacity=100)");

}

$(document).ready(function() {
	$('#contact').click(function() {

		$('#dropinfo').css("transition", "transform 0.5s linear .5s");
		$('#dropinfo').css("-moz-transition", "-moz-transform 0.5s linear .5s");
		$('#dropinfo').css("-webkit-transition", "-webkit-transform 0.5s linear .5s");
		$('#dropinfo').css("-o-transition", "-o-transform 0.5s linear .5s");

		$('#dropdown').css("transition", "top .5s ease-out");
		$('#dropdown').css("-moz-transition", "top .5s ease-out");
		$('#dropdown').css("-webkit-transition", "top .5s ease-out");
		$('#dropdown').css("-o-transition", "top .5s ease-out");

		$('.contactdata').css("transition", "opacity 1s linear 1s");
		$('.contactdata').css("-moz-transition", "opacity 1s linear 1s");
		$('.contactdata').css("-webkit-transition", "opacity 1s linear 1s");
		$('.contactdata').css("-o-transition", "opacity 1s linear 1s");

		$('#dropdown').css("top", "25%");
		$('#dropinfo').css("transform", "rotateY(0deg)");
		$('#dropinfo').css("-moz-transform", "rotateY(0deg)");
		$('#dropinfo').css("-webkit-transform", "rotateY(0deg)");
		$('.contactdata').css("opacity", "1.0");
		$('#back').css("display", "block");
	})
});

$(document).ready(function() {
	$('#projects').click(function() {

		$('#dropinfo').css("transition", "transform 0.5s linear .5s");
		$('#dropinfo').css("-moz-transition", "-moz-transform 0.5s linear .5s");
		$('#dropinfo').css("-webkit-transition", "-webkit-transform 0.5s linear .5s");
		$('#dropinfo').css("-o-transition", "-o-transform 0.5s linear .5s");

		$('#dropdown').css("transition", "top .5s ease-out");
		$('#dropdown').css("-moz-transition", "top .5s ease-out");
		$('#dropdown').css("-webkit-transition", "top .5s ease-out");
		$('#dropdown').css("-o-transition", "top .5s ease-out");

		$('.comingdata').css("transition", "opacity 1s linear 1s");
		$('.comingdata').css("-moz-transition", "opacity 1s linear 1s");
		$('.comingdata').css("-webkit-transition", "opacity 1s linear 1s");
		$('.comingdata').css("-o-transition", "opacity 1s linear 1s");

		$('#dropdown').css("top", "25%");
		$('#dropinfo').css("transform", "rotateY(0deg)");
		$('#dropinfo').css("-moz-transform", "rotateY(0deg)");
		$('#dropinfo').css("-webkit-transform", "rotateY(0deg)");
		$('.comingdata').css("opacity", "1.0");
		$('#back').css("display", "block");
	})
});

$(document).ready(function (){
	$('#back').children().click(function(){

		$('#dropinfo').css("transition", "transform 0.5s linear");
		$('#dropinfo').css("-moz-transition", "-moz-transform 0.5s linear");
		$('#dropinfo').css("-webkit-transition", "-webkit-transform 0.5s linear");
		$('#dropinfo').css("-o-transition", "-o-transform 0.5s linear");

		$('#dropdown').css("transition", "top .5s ease-out .5s");
		$('#dropdown').css("-moz-transition", "top .5s ease-out .5s");
		$('#dropdown').css("-webkit-transition", "top .5s ease-out .5s");
		$('#dropdown').css("-o-transition", "top .5s ease-out .5s");

		$('.comingdata').css("transition", "opacity 1s linear");
		$('.comingdata').css("-moz-transition", "opacity 1s linear");
		$('.comingdata').css("-webkit-transition", "opacity 1s linear");
		$('.comingdata').css("-o-transition", "opacity 1s linear");

		$('.contactdata').css("transition", "opacity 1s linear");
		$('.contactdata').css("-moz-transition", "opacity 1s linear");
		$('.contactdata').css("-webkit-transition", "opacity 1s linear");
		$('.contactdata').css("-o-transition", "opacity 1s linear");

		$('.contactdata').css("opacity", "0");
		$('.comingdata').css("opacity", "0");
		$('#dropinfo').css("transform", "rotateY(90deg)");
		$('#dropinfo').css("-moz-transform", "rotateY(90deg)");
		$('#dropinfo').css("-webkit-transform", "rotateY(90deg)");
		$('#dropdown').css("top", "-51%");
		$('#back').delay(1000).hide(0);
	})
});

$(document).ready(function() {
	$('#skiplink').click(function() {
		$('link[href="moon.css"]').attr({href: 'finished.css'});
		if ($('#introduction').offset().left + 500 >= ($(window).width()/2)) {
			$('#headshot').css("opacity", "0");
		}
		else $('#headshot').css("opacity", "100");
	})
});

$(window).resize(function() {
	if ($('#introduction').offset().left + 500 >= ($(window).width()/2)) {
		$('#headshot').css("opacity", "0");
	}
	else $('#headshot').css("opacity", "100");
});