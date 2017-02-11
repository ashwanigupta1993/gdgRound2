$(document).ready(function(){
                // Activate Carousel
                $("#myCarousel").carousel({
                    interval :false
                });

                // Enable Carousel Indicators
                $(".item1").click(function(){
                    $("#myCarousel").carousel(0);
                });
                $(".item2").click(function(){
                    $("#myCarousel").carousel(1);
                });
                $(".item3").click(function(){
                    $("#myCarousel").carousel(2);
                });
            });

$(document).ready(function(){
    // Activate Carousel
    $("#myCarousel2").carousel({
                    interval :false
                });
    
    // Enable Carousel Indicators
   
    
    // Enable Carousel Controls
    $(".left").click(function(){
        $("#myCarousel2").carousel("prev");
    });
    $(".right").click(function(){
        $("#myCarousel2").carousel("next");
    });
});

$(document).ready(function () {
    $(".navbar-default .navbar-nav > li > a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });

        }
    });
});
