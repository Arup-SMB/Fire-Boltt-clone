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


setInterval(showTime, 1000);


// Defining showTime funcion
function showTime() {
	// Getting current time and date
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	

	// Setting time for 12 Hrs format
	if (hour >= 12) {
		if (hour > 12) hour -= 12;
		am_pm = "";
	} else if (hour == 0) {
		hr = 12;
		am_pm = "";
	}

	hour =
		hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime =
		hour +
		":" +
		min +
		":" +
		sec +
		am_pm;

	// Displaying the time
	document.getElementById(
		"clock"
	).innerHTML = currentTime;
}

showTime();