!function(t){var i,e,n=$(".sidebar"),a=$(".dashboard__contacts"),s=$(".container__settings"),c=$(".title__contacts"),o=$(".dashboard__header").height();$(".nav__sidebar-btn").click(function(){var e,a;"0px"===n.css("left")?(e="-"+n.width(),a=0):(e=0,a=220),$(t).width()<=500?($(".dashboard").css(220===a?{position:"absolute",width:500}:{position:"absolute",width:"100%"}),$(".dashboard").animate({left:a},400,"easeOutCubic")):$(".dashboard").animate({paddingLeft:a},400,"easeOutCubic"),n.animate({left:e},400,"easeOutCubic",function(){i()}),$(t).width()>1500&&(0===a?($(".content__container").animate({width:"+="+$(".sidebar").width()},400,"easeOutCubic",function(){i()}),$(".content__title").animate({width:"+="+$(".sidebar").width()},400,"easeOutCubic",function(){i()})):($(".content__container").animate({width:"-="+$(".sidebar").width()},400,"easeOutCubic",function(){i()}),$(".content__title").animate({width:"-="+$(".sidebar").width()},400,"easeOutCubic",function(){i()})))}),$(".search__icon").click(function(){var e;a.animate({right:"-"+a.width()},400,"easeOutCubic"),$(".dashboard__ctg-content").animate({marginRight:0},400,"easeOutCubic",function(){i()}),c.css("display","inline-block"),c.animate({opacity:1},200,"easeOutCubic"),$(t).width()>1500&&(e=$(t).width()-$(".sidebar").width()-$(".sidebar").css("left").slice(0,-2),$(".content__container").animate({width:e},400,"easeOutCubic",function(){i()}),$(".content__title").animate({width:e-20},400,"easeOutCubic",function(){i()}))}),c.click(function(){$(t).width()>500&&$(".dashboard__ctg-content").animate({marginRight:221},400,"easeOutCubic"),a.animate({right:0},400,"easeOutCubic"),c.animate({opacity:0},200,"easeOutCubic",function(){c.css("display","none")}),$(t).width()>1500&&(width=$(t).width()-$(".sidebar").width()-$(".sidebar").css("left").slice(0,-2),$(".content__container").animate({width:"-="+$(".dashboard__contacts").width()},400,"easeOutCubic",function(){i()}),$(".content__title").animate({width:"-="+$(".dashboard__contacts").width()},400,"easeOutCubic",function(){i()}))}),$(".show__btn").click(function(){var t=$(".show__btn");"Show Settings"===t.text()?$(".settings__group").show(function(){i(),t.text("Hide Settings")}):$(".settings__group").hide(function(){i(),t.text("Show Settings")})}),i=function(){var i=parseInt($(".sidebar").css("left").slice(0,-2)),e=parseInt($(".dashboard__contacts").css("left").slice(0,-2));$(".container__messages").height($(t).height()-$(".dashboard").height()+$(".container__messages").height()),$(".dashboard__ctg-content").width($(t).width()>1500?$(t).width()-$(".sidebar").width()-i-26:$(t).width()-$(".sidebar").width()-$(".dashboard__contacts").width()-26-i+e),$(".contacts__list").height($(t).height()-o-$(".contacts__ctg").height()-$(".contacts__search-wrapper").height())},e=function(){var t;s.width()<=560?(t=$(".container__messages").height(),$(".container__settings .settings__group").css({display:"block",marginLeft:"auto",marginRight:"auto"}),$(".container__messages").height(t),$(".settings__show").css("display","block"),$(".settings__group").hide(400,"easeOutCubic",function(){i()})):($(".settings__show").css("display","none"),$(".settings__group").show(400,"easeOutCubic",function(){i()}),$(".container__settings .settings__group").css({display:"inline-block",marginRight:10})),i()},$(t).resize(function(){$(t).height()>=600&&i(),e()}),e(),i()}(this);