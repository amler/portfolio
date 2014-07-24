'use strict';

$('.design-work').click(function(){
	var src = $(this).find('img').attr('src');
	console.log(src);
	$('.modal-wrap').find('.detail').attr('src', src);
	$('.modal-wrap').show();
});



$('.fa-times').click(function(){
	$('.modal-wrap').hide();
});