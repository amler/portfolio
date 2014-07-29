'use strict';


$('header a, #fixed-menu a').click(function(event) {
    event.preventDefault();
    var section = $(this).attr('href');
    console.log(section);
    $('html, body').animate({
        scrollTop: $(section).offset().top
    }, 700);
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 450) {
		$('#fixed-menu').slideDown();
	} else {
		$('#fixed-menu').fadeOut();
	}
});

var imageSlideshow = {
	imageArray: [],
	currentIndex: 0,
	hideModal: function() {
		$('.modal-wrap, #modal').hide();
	},
	showModal: function() {
		this.currentIndex = 0;
		this.renderImages();
		$('.modal-wrap, #modal').show();
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
$('.fa-times, .modal-wrap').on('click', function() { imageSlideshow.hideModal(); });


$('.design').click(function(event){
	event.preventDefault();
	var detailArray = $(this).data('images');
	imageSlideshow.imageArray = detailArray;
	imageSlideshow.showModal();
});
