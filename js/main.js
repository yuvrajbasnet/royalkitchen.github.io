$(document).ready(function(){
	
	$(".nav-icon").click(function(){
		$(".full-nav").addClass("open");
	});

	$(".nav-close").click(function() {
		$(".full-nav").removeClass("open");
	});

	$(window).scroll(function(){
		var sc = $(window).scrollTop();
		if ( sc > 100){
           $(".nav").addClass("sticky");
		}
		else{
           $(".nav").removeClass("sticky");
		}

	});
	
	 

	 
    
    $("#news-slider").owlCarousel({
    	items:3,
    	itemsDesktop:[1199,3],
    	itemsDesktopSmall:[1000,2],
    	itemsMobile:[599,1],
    	pagination:false,
    	navigationText:false,
    	autoplay:true
    });
   
    document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);
});