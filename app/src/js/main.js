; (function (window) {
	var sidebar = $('.sidebar'),
		dashboardContacts = $('.dashboard__contacts'),
		containerSettings = $('.container__settings'),
		titleContacts = $('.title__contacts'),
		headerHeight = $('.dashboard__header').height(),
		adapt, checkWidth;

	$('.nav__sidebar-btn').click(function () {
		var offset, dashPadding;
		if(sidebar.css('left') === '0px') {
			offset = '-' + sidebar.width();
			dashPadding = 0;
		} else {
			offset = 0;
			dashPadding = 220;
		}

		sidebar.animate({
			left: offset
		}, 400, 'easeOutCubic', function () {
			adapt();
		});

		$('.dashboard').animate({
			paddingLeft: dashPadding
		}, 400, 'easeOutCubic');
		//checkWidth()
	});

	$('.search__icon').click(function () {
		dashboardContacts.animate({
			right: '-' + dashboardContacts.width()
		}, 400, 'easeOutCubic');

		$('.dashboard__ctg-content').animate({
			marginRight: 0
		}, 400, 'easeOutCubic', function () {
			adapt();
		});

		titleContacts.css('display', 'inline-block');
		titleContacts.animate({
			opacity: 1
		}, 200, 'easeOutCubic');
	});

	titleContacts.click(function () {
		dashboardContacts.animate({
			right: 0
		}, 400, 'easeOutCubic');
		titleContacts.animate({
			opacity: 0
		}, 200, 'easeOutCubic', function () {
			titleContacts.css('display', 'none');
		});
		
		$('.dashboard__ctg-content').animate({
			marginRight: 221
		}, 400, 'easeOutCubic');
	});

	// adapting height to the window resolution
	adapt = function () {
		// for messages
		$('.container__messages').height($(window).height() - $('.dashboard').height() + $('.container__messages').height());
		// for contacts
		$('.contacts__list').height($(window).height() - headerHeight - $('.contacts__ctg').height() - $('.contacts__search-wrapper').height());
	};

	checkWidth = function () {
		var messagesHeight;
		/*if(containerSettings.width() <= 560) {
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
		}*/
	};

/*	

	$(window).resize(function () {
		if($(window).height() >= 600) {
			adapt();
		}
		checkWidth();
	});

	
*/
	//checkWidth();
	adapt();
})(this);