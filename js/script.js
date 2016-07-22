$(document).ready(function() {
	init();
	$(window).resize(function() {
		init();
	})

	$('.btn-signup').on('click', function() {
		window.location.href = '/signup.html';
	})

	var nice = $("html").niceScroll({
        cursorcolor:"#7BC151",
        cursorborder: "none",
        cursorborderradius: "0px"
    });
});

function init() {
	var windowH = $(window).height();
	$(".content-signin").css('height', (windowH - $("#header").height()) + 'px');

	var formSignInH = $(".form-signin").height();

	$('.form-signin').css('margin-top', (windowH - $("#header").height() - formSignInH - 30)/2 + 'px');
}