// 导航滚动事件
$('.menu-container a').click(function() {
	var obj = $(this).attr('href')
	var top = $(obj).offset().top - 74;
	$('html,body').animate({scrollTop:top}, 500);
	return false;
});

$(window).scroll(function() {
	var x = $(window).scrollTop();
		// alert('aaa');
	if ( x > 400) {
		// alert('aaa');
		$('.fa.fa-angle-up').css('display', 'block');
	}else{
		$('.fa.fa-angle-up').css('display', 'none');
	}
});

$('.fa.fa-angle-up').click(function() {
	$('html,body').animate({scrollTop:0}, 500);
});