// carrossel SLICK
const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 3000);

function autoSlide() {
	counter += 1;
	slidefun(counter);
}

function plusSlides(n) {

	counter += n;
	slidefun(counter);
	resetTimer();
    
}

function currentSlide(n) {

	counter = n;
	slidefun(counter);
	resetTimer();
}

function resetTimer() {

	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}

// MOUSEOVER

$('.slider').on('mouseover', function() {
    $('.next').show();
  });
  
$('.slider').on('mouseout', function() {
    $('.next').hide();
});

$('.slider').on('mouseover', function() {
    $('.prev').show();
  });
  
$('.slider').on('mouseout', function() {
    $('.prev').hide();
});

// Carrossel 1

$('.carrposition').on('mouseover', function() {
    $('.slick-next').show();
});
  
$('.carrposition').on('mouseout', function() {
    $('.slick-next').hide();
});



$('.carrposition').on('mouseover', function() {
    $('.slick-prev').show();
  });
  
$('.carrposition').on('mouseout', function() {
    $('.slick-prev').hide();
});


// carrossel 2

$('.carr-model').slick({

	prevArrow: '.slick-prev',
	nextArrow: '.slick-next',
	infinite: false,
	speed: 300,
	slidesToShow: 5,
	slidesToScroll: 5,
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  infinite: true,
		  dots: true
		}
	  },
	  {
		breakpoint: 600,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	  // You can unslick at a given breakpoint now by adding:
	  // settings: "unslick"
	  // instead of a settings object
	]
  });


// outro carrossel

$('.carr-terc').slick({
	prevArrow: '.slick-prev-two',
	nextArrow: '.slick-next-two',
	dots: false,
	infinite: false,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 3,
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  infinite: true,
		  dots: true
		}
	  },
	  {
		breakpoint: 600,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	  // You can unslick at a given breakpoint now by adding:
	  // settings: "unslick"
	  // instead of a settings object
	]
  });

$('.carrossel-terceiro').on('mouseover', function() {
	$('.slick-prev-two').show();
});
  
$('.carrossel-terceiro').on('mouseout', function() {
    $('.slick-prev-two').hide();
});

$('.carrossel-terceiro').on('mouseover', function() {
	$('.slick-next-two').show();
});
  
$('.carrossel-terceiro').on('mouseout', function() {
    $('.slick-next-two').hide();
});


// outro carrossel categorias populares

$('.carr-categ').slick({
	prevArrow: '.slick-prev-tree',
	nextArrow: '.slick-next-tree',
	dots: true,
	infinite: false,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  infinite: true,
		  dots: true
		}
	  },
	  {
		breakpoint: 600,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	  // You can unslick at a given breakpoint now by adding:
	  // settings: "unslick"
	  // instead of a settings object
	]
  });

$('.carrossel-categ').on('mouseover', function() {
	$('.slick-prev-tree').show();
});
  
$('.carrossel-categ').on('mouseout', function() {
    $('.slick-prev-tree').hide();
});

$('.carrossel-categ').on('mouseover', function() {
	$('.slick-next-tree').show();
});
  
$('.carrossel-categ').on('mouseout', function() {
    $('.slick-next-tree').hide();
});

  $('#slick-slider').slick({
    autoplay: true,
    dots: true,
    appendArrows: $('.slick-slider-nav'),
    appendDots: $('.slick-slider-dots'),
    prevArrow: "<button class='slick-prev btn btn-white rounded-circle'><i class='mdi mdi-chevron-left'></i></button>",
    nextArrow: "<button class='slick-next btn btn-white rounded-circle'><i class='mdi mdi-chevron-right'></i></button>",
});

// 

$('#hamburger').on('click', function() {
  $('#dropdown').slideToggle('slow');
});

$('.menu-link').each(function() {
  $(this).on('click', function() {
    $('#dropdown').slideToggle('slow');
  });
});