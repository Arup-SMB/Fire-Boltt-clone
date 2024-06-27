$(".slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay:true,
    dots: true,
    autoplayTimeout: 3000,
    // nav: true,
});
// Slider Buttons
var slider = $(".owl-carousel");

$(".carousel-prev").click(function() {
    slider.trigger("prev.owl.carousel")
});

$(".carousel-next").click(function() {
    slider.trigger("next.owl.carousel")
});

// Information Numbers

document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
     let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
       current += increment;
       obj.textContent = current;
       if (current == end) {
        clearInterval(timer);
       }
      }, step);
    }
 
    setInterval(function(){
      counter("productUnit", 0, 20, 5000);
    }, 7000)  
    
});