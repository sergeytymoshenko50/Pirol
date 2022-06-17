//clients slide-show
var imgList = document.querySelectorAll('.clients__wrap .img');	    
var currentClientsSlide = 0;
var slideClientsInterval = setInterval(nextClientsSlide, 2000);

function nextClientsSlide(){
	imgList[currentClientsSlide].className = 'img';
	currentClientsSlide = (currentClientsSlide + 1) % imgList.length;
	imgList[currentClientsSlide].className = 'img c-active';
};


//services slide-show

var servBlocks = document.querySelectorAll('.serv__wrap .serv__blok');	    
var currentServicesSlide = 0;
var slideServicesInterval = setInterval(nextServicesSlide, 2000);

function nextServicesSlide(){
	servBlocks[currentServicesSlide].className = 'serv__blok';
	currentServicesSlide = (currentServicesSlide + 1) % servBlocks.length;
	servBlocks[currentServicesSlide].className = 'serv__blok s-active';
};

//quots control

var quotesBlocks = document.querySelectorAll('.quotes__container .container__blok');	    
var quotePoint = document.querySelectorAll('.qoutes__points .quote-point');
var currentQuotesSlide = 0;
var slideQuotesInterval = setInterval(nextQuotesSlide, 15000);

function nextQuotesSlide(){
	quotesBlocks[currentQuotesSlide].className = 'container__blok';
	quotePoint[currentQuotesSlide].className = 'quote-point';
	currentQuotesSlide = (currentQuotesSlide + 1) % quotesBlocks.length;
	quotesBlocks[currentQuotesSlide].className = 'container__blok q-active';
	quotePoint[currentQuotesSlide].className = 'quote-point point-active';
};