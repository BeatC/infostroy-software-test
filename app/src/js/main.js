; (function (window) {
	var sidebar = $('.sidebar'),
		dashboardContacts = $('.dashboard__contacts'),
		containerSettings = $('.container__settings'),
		titleContacts = $('.title__contacts'),
		headerHeight = $('.dashboard__nav').height() + $('.dashboard__location').height(),
		adapt, checkWidth;

	$('.nav__sidebar-btn').click(function () {
		sidebar.toggle();
		checkWidth()
	});

	titleContacts.click(function () {
		dashboardContacts.show();
		titleContacts.css('display', 'none');
		checkWidth();
	});

	$('.search__icon').click(function () {
		dashboardContacts.hide();
		titleContacts.css('display', 'inline-block');
		checkWidth()
	});

	$(window).resize(function () {
		if($(window).height() >= 600) {
			adapt();
		}
		checkWidth();
	});

	// adapting height to the window resolution
	adapt = function () {
		// for messages
		$('.container__messages').height($(window).height() - $('.dashboard').height() + $('.container__messages').height());
		// for contacts
		$('.contacts__list').height($(window).height() - $('.dashboard').height() + $('.contacts__list').height());
	};

	checkWidth = function () {
		var messagesHeight;
		if(containerSettings.width() <= 560) {
			messagesHeight = $('.container__messages').height();
			$('.container__settings .settings__group').css({
				display: 'block',
				marginLeft: 'auto',
				marginRight: 'auto'
			});
			$('.container__messages').height(messagesHeight);
		} else {
			$('.container__settings .settings__group').css({
				display: 'inline-block',
				marginRight: 10
			});
			adapt();
		}
	};

	checkWidth();
	adapt();
})(this);