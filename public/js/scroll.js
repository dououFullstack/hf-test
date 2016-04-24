// 导航滚动事件
$('.menu-container a').click(function() {
	var obj = $(this).attr('href')
	var top = $(obj).offset().top - 74;
	$('html,body').animate({scrollTop:top}, 500);
	return false;
});