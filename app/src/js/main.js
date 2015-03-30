; (function (window) {
	var sidebar = $('.sidebar'),
		dashboardContacts = $('.dashboard__contacts'),
		titleContacts = $('.title__contacts'),
		headerHeight = $('.dashboard__nav').height() + $('.dashboard__location').height(),
		adapt;

	$('.nav__sidebar-btn').click(function () {
		sidebar.animate({
			width: 0
		}, 400, 'easeInOutCirc', function() {
			sidebar.css('display', 'none');
		});
	});

	titleContacts.click(function () {
		dashboardContacts.show(400);
		titleContacts.animate({
			opacity: 0
		}, 400, 'swing', function () {
			titleContacts.css('display', 'none');
		});
	});

	$('.search__icon').click(function () {
		dashboardContacts.hide(400);
		titleContacts.css('display', 'inline-block');
		titleContacts.animate({
			opacity: 1
		}, 1000, 'easeOutCubic');
	});

	$(window).resize(function () {
		if($(window).height() >= 600) {
			adapt();
		}
	});

	// adapting height to the window resolution
	adapt = function () {
		// for messages
		$('.container__messages').height($(window).height() - $('.dashboard').height() + $('.container__messages').height());
		// for contacts
		$('.contacts__list').height($(window).height() - $('.dashboard').height() + $('.contacts__list').height());
	}

	adapt();
})(this);