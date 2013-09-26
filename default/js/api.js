var api = new Object();

api.size = function(){
	return {
		width : document.compatMode=='CSS1Compat' && !window.opera?document.documentElement.clientWidth:document.body.clientWidth,
		height : document.compatMode=='CSS1Compat' && !window.opera?document.documentElement.clientHeight:document.body.clientHeight
	};
};

api.ajax = function(uri, p, callback){
	$.post(tpg.url + "chidori.ajax.php",
	{action: uri, param: p},
	function(data){ callback(data); });
};