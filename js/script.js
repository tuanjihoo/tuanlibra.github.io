$(document).ready(function() {
	init();
	$(window).resize(function() {
		init();
	})

	$('.btn-signup').on('click', function() {
		window.location.href = '/signup.html';
	})

	var nice = $("html").niceScroll({
        cursorcolor:"#17c18e",
        cursorborder: "none",
        cursorborderradius: "0px"
    });

    $(".box-baigiang .panel-body, .title .panel-body, .program .panel-body, .result .panel-body").niceScroll({
        cursorcolor:"#17c18e",
        cursorborder: "none",
        cursorborderradius: "0px"
    });

    $(document).on('click', ".fullscreen-title, .fullscreen-content", function() {
		if($(this).parents('.panel-default').hasClass('fixed')) {
			$(this).parents('.panel-default').removeClass('fixed');
			$(this).html('<i class="fa fa-expand" aria-hidden="true"></i>');
		} else {
			$(this).parents('.panel-default').addClass('fixed');
			$(this).html('<i class="fa fa-compress" aria-hidden="true"></i>');
		}
    })
});

function init() {
	var windowH = $(window).height();
	$(".content-signin").css('height', (windowH - $("#header").height()) + 'px');

	var formSignInH = $(".form-signin").height();

	$('.form-signin').css('margin-top', (windowH - $("#header").height() - formSignInH - 30)/2 + 'px');
}