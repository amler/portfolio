'use strict';

$('.header').find('a').click(function(event) {
    event.preventDefault();
    var section = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(section).offset().top
    });
});

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
			this.currentIndex = 0;
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
};

$('.fa-chevron-right').on('click', function() { imageSlideshow.slideshowNext(); });
$('.fa-chevron-left').on('click', function() { imageSlideshow.slideshowPrev(); });
$('.fa-times').on('click', function() { imageSlideshow.hideModal(); });


$('.design-work').click(function(event){
	event.preventDefault();
	var detailArray = $(this).data('images');
	imageSlideshow.imageArray = detailArray;
	imageSlideshow.showModal();
});


