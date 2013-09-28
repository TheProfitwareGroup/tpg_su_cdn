tpg.load = function(){
	var hL = $("#c-left").height();
	var hR = $("#c-right").height();
	if(hL > (hR + 23)){
		$("#c-right").css({'height':(hL+23)+'px'});
	}else{
		$("#c-left").css({'height':(hR-23)+'px'});
	}
};

tpg.auth = new Object();
tpg.auth.close = function(){
	$("#auth").fadeOut(100, function(){
		$("#auth-bg").fadeOut(300);
	});
};

tpg.auth.open = function(){
	$("#auth-bg").fadeIn(100, function(){
		$("#auth").fadeIn(300);
	});
};


var slider = new Object();
slider.num = 1;
slider.int = '';

tpg.root = 'http://tpg.su/';

/* PUBLIC CONFIG */
slider.pictures = ['pic1.png', 'pic2.png', 'pic4.png'];
slider.links = ['weblab', 'platform', 'eventflow'];
slider.append = 0;
slider.interval = 5000;
slider.speed = 500;
/* ************* */


slider.run = function(){
	$("#slider table tr").each(function(index, element){
		$(element).append('<td><img style="display:none;" src="' + tpg.url + 'img/slider/' + slider.pictures[slider.pic(slider.num + index - 1)] + '?v=3" alt=""></td>');
	});
	$("#slider table img").each(function(index, element){$(element).fadeIn(Math.random()*(400-100)+100);});
	slider.int = setInterval('slider.slide()', slider.interval);
};
slider.next = function(){
	clearInterval(slider.int);
	slider.slide(false);
	slider.int = setInterval('slider.slide()', slider.interval);
};
slider.prev = function(){
	clearInterval(slider.int);
	slider.slide(true);
	slider.int = setInterval('slider.slide()', slider.interval);
};
slider.pic = function(num){
	if(num < slider.pictures.length && num > 0){
		return num;
	}else if(num >= slider.pictures.length){
		return num - slider.pictures.length;
	}else{
		return 0;
	}
};
slider.click = function(){
	document.location = tpg.root + slider.links[slider.pic(slider.num)];
};
slider.remAn = function(){

};

slider.slide = function(prev){
	if(prev){
		if(slider.num != 1){
			$("#main-slider table")
				.animate({'left':'+=300px'}, slider.speed, 'linear', slider.remAn());
			$(".min-slider table")
				.animate({'left':'+=172px'}, slider.speed, 'linear', slider.remAn());
			slider.num--;
		}
	}else{
		if(slider.num == slider.pictures.length){
			$("#slider table").each(function(index, element){
				$(element)
					.animate({'left':'100px'}, slider.speed + Math.random()*(400-100)+100, 'linear', slider.remAn())
					.animate({'left':'0px'}, slider.speed + Math.random()*(400-100)+100, 'linear', slider.remAn());
			});
			slider.num = 0;
			slider.append = 1;
		}else{
			if(slider.append == 0){
				$("#slider table tr").each(function(index, element){
					$(element).append('<td><img src="' + tpg.url + 'img/slider/' + slider.pictures[slider.pic(slider.num + index)] + '?v=3" alt=""></td>');
				});
			}
			$("#main-slider table")
				.animate({'left':'-=300px'}, slider.speed, 'linear', slider.remAn());
			$(".min-slider table")
				.animate({'left':'-=172px'}, slider.speed, 'linear', slider.remAn());
		}
		slider.num++;
	}
};
