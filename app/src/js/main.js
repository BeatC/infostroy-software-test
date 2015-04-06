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

		if($(window).width() <= 500) {
			if(dashPadding === 220) {
				$('.dashboard').css({
					position: 'absolute',
					width: 500
				});
			} else {
				$('.dashboard').css({
					position: 'absolute',
					width: '100%'
				});
			}
			$('.dashboard').animate({
				left: dashPadding
			}, 400, 'easeOutCubic');
		} else {
			$('.dashboard').animate({
				paddingLeft: dashPadding
			}, 400, 'easeOutCubic');
		}

		sidebar.animate({
			left: offset
		}, 400, 'easeOutCubic', function () {
			adapt();
		});

		if($(window).width() > 1500) {
			if(dashPadding === 0) {
				$('.content__container').animate({
					width: '+=' + $('.sidebar').width()
				}, 400, 'easeOutCubic', function () {
					adapt();
				});

				$('.content__title').animate({
					width: '+=' + $('.sidebar').width()
				}, 400, 'easeOutCubic', function () {
					adapt();
				});
			} else {
				$('.content__container').animate({
					width: '-=' + $('.sidebar').width()
				}, 400, 'easeOutCubic', function () {
					adapt();
				});

				$('.content__title').animate({
					width: '-=' + $('.sidebar').width()
				}, 400, 'easeOutCubic', function () {
					adapt();
				});
			}
		}
	});

	$('.search__icon').click(function () {
		var width;
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
	
		if($(window).width() > 1500) {
			width = $(window).width() - $('.sidebar').width() - $('.sidebar').css('left').slice(0,-2);
			$('.content__container').animate({
				width: width
			}, 400, 'easeOutCubic', function () {
				adapt();
			});

			$('.content__title').animate({
				width: width - 20
			}, 400, 'easeOutCubic', function () {
				adapt();
			});
		}
	});

	titleContacts.click(function () {
		if($(window).width() > 500) {
			$('.dashboard__ctg-content').animate({
				marginRight: 221
			}, 400, 'easeOutCubic');
		}
		dashboardContacts.animate({
			right: 0
		}, 400, 'easeOutCubic');
		titleContacts.animate({
			opacity: 0
		}, 200, 'easeOutCubic', function () {
			titleContacts.css('display', 'none');
		});

		if($(window).width() > 1500) {
			width = $(window).width() - $('.sidebar').width() - $('.sidebar').css('left').slice(0,-2);
			$('.content__container').animate({
				width: '-=' + $('.dashboard__contacts').width()
			}, 400, 'easeOutCubic', function () {
				adapt();
			});

			$('.content__title').animate({
				width: '-=' + $('.dashboard__contacts').width()
			}, 400, 'easeOutCubic', function () {
				adapt();
			});
		}
	});

	// adapting height to the window resolution
	adapt = function () {
		var offsetSidebar = parseInt($('.sidebar').css('left').slice(0,-2)), 
		    offsetContacts = parseInt($('.dashboard__contacts').css('left').slice(0,-2));
		// for messages
		$('.container__messages').height($(window).height() - $('.dashboard').height() + $('.container__messages').height());
		$('.dashboard__ctg-content').width($(window).width() - $('.sidebar').width() - $('.dashboard__contacts').width() - 26 - offsetSidebar + offsetContacts);
		// for contacts
		$('.contacts__list').height($(window).height() - headerHeight - $('.contacts__ctg').height() - $('.contacts__search-wrapper').height());
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

			$('.settings__show').css('display', 'block');
			$('.settings__group').hide(400, 'easeOutCubic', function () {
				adapt();
			});
		} else {
			$('.settings__show').css('display', 'none');
			$('.settings__group').show(400, 'easeOutCubic', function () {
				adapt();
			});
			$('.container__settings .settings__group').css({
				display: 'inline-block',
				marginRight: 10
			});
		}
	};


	$(window).resize(function () {
		var width;
		if($(window).height() >= 600) {
			adapt();
		}
		checkWidth();
	});

	checkWidth();
	adapt();
})(this);