!function(i){{var t,n=$(".sidebar"),a=$(".dashboard__contacts"),c=$(".title__contacts");$(".dashboard__nav").height()+$(".dashboard__location").height()}$(".nav__sidebar-btn").click(function(){n.animate({width:0},400,"easeInOutCirc",function(){n.css("display","none")})}),c.click(function(){a.show(400),c.animate({opacity:0},400,"swing",function(){c.css("display","none")})}),$(".search__icon").click(function(){a.hide(400),c.css("display","inline-block"),c.animate({opacity:1},1e3,"easeOutCubic")}),$(i).resize(function(){$(i).height()>=600&&t()}),(t=function(){$(".container__messages").height($(i).height()-$(".dashboard").height()+$(".container__messages").height()),$(".contacts__list").height($(i).height()-$(".dashboard").height()+$(".contacts__list").height())})()}(this);