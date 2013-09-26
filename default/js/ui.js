var ui = {};



/**
* @info menu
**/
ui.menu = function(oid, hasParent){
	$("#" + oid)
		.hover(function(){}, function(){
			$('#' + oid)
				.stop()
				.hide(100, function(){
					$(this)
						.parent()
						.find('.ui-button')
						.removeClass('active');
				});
		})
		.parent()
		.find('.ui-button')
		.click(function(){
			if($(this).hasClass('active')){
				$('#' + oid).hide(100);
				$(this).removeClass('active');
			}else{
				if(hasParent){
					$(this)
						.parent()
						.parent()
						.find('.ui-button')
						.removeClass('active')
						.parent()
						.find('.ui-menu')
						.hide(100);
				}
				$('#' + oid).show(100);
				$(this).addClass('active');
			}
		}
	);
	
	$("#" + oid + " a")
		.click(function(){
			$(this)
				.parent()
				.parent()
				.hide(100)
				.parent()
				.find('.ui-button')
				.removeClass('active');
		}
	);
};



/**
* @info tabs
**/
ui.tabs = function(oid){
	$("#" + oid + " a")
		.click(function(){
			$("#" + oid + " a").removeClass('active');
			$(this).addClass('active');
		}
	);
	
};



/**
**/
ui.box = function(oid){
	$("#news-" + oid + " img").stop().fadeTo(1, 0.4);
	$("#news-" + oid).hover(function(){
		$("#news-" + oid + " img").stop().fadeTo(300, 1);
	}, function(){
		$("#news-" + oid + " img").stop().fadeTo(300, 0.4);
	});
};
