
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Full Stack Developer", "Programmer","Game Developer"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["DICT"],
        typeSpeed: 30,
        backSpeed: 200,
        loop: false
    });
	
	 var typed = new Typed(".typing-3", {
        strings: ["John Manuel Antioquia"],
        typeSpeed: 100,
        backSpeed: 150,
        loop: false
    });
	
	 var typed = new Typed(".typing-4", {
        strings: ["III"],
        typeSpeed: 100,
        backSpeed: 150,
        loop: false
    });
	
	 var typed = new Typed(".typing-5", {
        strings: ["ICTE 10066", "Internship", "Computer Programmer Specialist"],
        typeSpeed: 100,
        backSpeed: 150,
        loop: true
    });
	
	 var typed = new Typed(".typing-7", {
        strings: ["2020-00216-MQ-0"],
        typeSpeed: 100,
        backSpeed: 150,
        loop: false
    });


    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
