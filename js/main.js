$(document).ready(function() { // Ждём загрузки страницы
	
	$(".image").click(function(){	// Событие клика на маленькое изображение
	  	var img = $(this);	// Получаем изображение, на которое кликнули
		var src = img.attr('src'); // Достаем из этого изображения путь до картинки
		$(".works-wrapper").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
						 "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
						 "<img src=" + src + " class='popup_img' />"+ // Само увеличенное фото
						 "</div>");
		$(".popup").fadeIn(200); // Медленно выводим изображение
		$(".popup_bg").click(function(){	// Событие клика на затемненный фон	   
			$(".popup").fadeOut(200);	// Медленно убираем всплывающее окн	
      setTimeout(function() {	// Выставляем таймер
			  $(".popup").remove(); // Удаляем разметку всплывающего окна
			}, 200);
		});
	});
	
});

//mobile menu
$('.men-btn').on('click', function(e){
	e.preventDefault;
	$('.mobile_nav').toggleClass('btn-active');	
});
//hide menu on click to tag
$('.mob-item').on('click', function(e){
	e.preventDefault;
	$('.mobile_nav').toggleClass('btn-active');
});


//works slider
var wwq = document.body.getElementsByClassName('wwq');
var currentSlide = 0;

function nextImg(){
	changeImg(currentSlide + 1);
};

function prevImg(){
	changeImg(currentSlide -1);
};

function changeImg(n){	
	wwq[currentSlide].className = 'wwq hide';
	currentSlide = (n + wwq.length) % wwq.length;
	wwq[currentSlide].className = 'wwq show';
};


let counter = anime({
	targets: ".count",
	value: [0, 548],
	round: 1,
	easing: 'easeInOutExpo'
  });

