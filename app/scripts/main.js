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
	showModal: function() {
		this.currentIndex = 0;
		this.renderImages();
		$('.modal-wrap').show();
	},
	slideshowNext: function() {
		this.currentIndex +=1;
		var arrayTotal = this.imageArray.length;
		if (this.currentIndex > (arrayTotal - 1)) {
			this.currentIndex = 0
		}
		this.fade();
	},
	slideshowPrev: function() {
		imageSlideshow.currentIndex -=1;
		if (imageSlideshow.currentIndex <= 0) {
			imageSlideshow.currentIndex = imageSlideshow.imageArray.length - 1;
		}
		
		imageSlideshow.fade();
	},
	fade: function() {
		$('.detail').animate({
			opacity: 0,
		}, 500, function() {
			imageSlideshow.renderImages();
		});
	},
	renderImages: function() {
		for (var i = 0; i < this.imageArray.length; i++) {
			if (i === this.currentIndex) {
				var src = this.imageArray[i];
				var img = new Image();
				img.onload = function() {
					$('.detail').attr('src', src);
					$('.detail').animate({
						opacity: 1,
					}, 500, function() {
						// Animation complete.
					});
				};
				img.src = src;
			}
		}
	}
}

$('.fa-chevron-right').on('click', function() { imageSlideshow.slideshowNext(); });
$('.fa-chevron-left').on('click', function() { imageSlideshow.slideshowPrev(); });
$('.fa-times').on('click', function() { imageSlideshow.hideModal(); });

$('.design-work').click(function(event){
	event.preventDefault();
	var detailArray = $(this).data('images');
	imageSlideshow.imageArray = detailArray;
	imageSlideshow.showModal();
});


