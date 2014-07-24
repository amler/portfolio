'use strict';

// $.fn.slideshow = function(options) {

//  	var defaults = {
// 		imageArray: options.length,
// 		count: 0,
// 		nextButton: $('.fa-chevron-right'),
// 		prevButton: $('.fa-chevron-left')
// 	};

// 	nextButton.on('click', slideshowNext);
// 	prevButton.on('click', slideshowPrev);
	
// 	function slideshowNext() {
// 		settings.count +=1
// 		if (settings.count > (settings.imageArray - 1)) {
// 			settings.count = 0
// 		}
// 		settings.renderTestimonial();
// 	};

// 	function slideshowPrev() {
// 		settings.count -=1
// 		if (settings.count <= 0) {
// 			settings.count = settings.imageArray - 1;
// 		}
// 		settings.renderTestimonial();
// 	};
	
// 	function renderTestimonial () {
// 		for (var i = 0; i < settings.imageArray; i++) {
// 			if (i !== count) {
// 				$('.detail').attr('src', settings.imageArray[i])
// 			} else {
// 				$('.detail').attr('src', settings.imageArray[i])
// 			}
// 		}
// 	};	

// 	var settings = $.extend( {}, defaults, options );
// 	return this;
// };


// $('.design-work').click(function(){
// 	var src = $(this).find('img').attr('src');
// 	console.log(src);
// 	$('.modal-wrap').find('.detail').attr('src', src);
// 	$('.modal-wrap').show();
// });

// $('.fa-times').click(function(){
// 	$('.modal-wrap').hide();
// });


var imageSlideshow = {
	imageArray: [],
	currentIndex: 0,
	hideModal: function() { 
		$('.modal-wrap').hide();
	},
	showModal:  function() {
		$('.modal-wrap').show();
		this.renderImages();
	},
	slideshowNext: function() {
		imageSlideshow.currentIndex +=1
		var arrayTotal = imageSlideshow.imageArray.length;
		if (imageSlideshow.currentIndex > (arrayTotal - 1)) {
			imageSlideshow.currentIndex = 0
		}
		imageSlideshow.renderImages();
	},
	slideshowPrev: function() {
		imageSlideshow.currentIndex -=1
		if (imageSlideshow.currentIndex <= 0) {
			imageSlideshow.currentIndex = imageSlideshow.imageArray.length - 1;
		}
		imageSlideshow.renderImages();
	},
	renderImages: function() {
		for (var i = 0; i < this.imageArray.length; i++) {
			if (i === this.currentIndex) {
				$('.detail').attr('src', this.imageArray[i]);
			}
		}
	}
}

$('.fa-chevron-right').on('click', imageSlideshow.slideshowNext);
$('.fa-chevron-left').on('click', imageSlideshow.slideshowPrev);
$('.fa-times').on('click', imageSlideshow.hideModal);

$('.design-work').click(function(){
	var detailArray = $(this).data('images');
	imageSlideshow.imageArray = detailArray;
	imageSlideshow.showModal();
});


