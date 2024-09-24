const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function page3Animation() {
  var elemC = document.querySelector("#elem-container"); // for selecting elem container
  var fixed = document.querySelector("#fixed-image"); // selecting fixed-image
  elemC.addEventListener("mouseenter", function () {
    // on mouseenter
    fixed.style.display = "block"; // this style work
  });
  elemC.addEventListener("mouseleave", function () {
    // on mouse leave
    fixed.style.display = "none"; // this style work
  });

  // for selecting all and doing dynamic

  var elems = document.querySelectorAll(".elem"); // if you console it then it return nodelist which is similler to array
  elems.forEach(function (e) {
    // forEach run for the limit of array
    e.addEventListener("mouseenter", function () {
      // adding mouseenter event to e = the div which coming on hover
      var image = e.getAttribute("data-image"); // defining out atrribute which give the image of the selected div
      // console.log(image);

      fixed.style.backgroundImage = `url(${image})`; // adding the image to the fixed which we got from every div
    });
  });

  // ^^^^^^ test &&&&&&7

  // var a = document.querySelector("#elen1");

  // var b= a.getAttribute("data-image")
  // console.log(b);

  //  this is for selecting single image {{{{{{}}}}}}

  // var elem1 = document.querySelector("#elem1");
  // elem1.addEventListener("mouseenter", function () {
  //   var image = elem1.getAttribute("data-image");
  //   fixed.style.backgroundImage = `url(${image})`;
  // });
}

// <!-- Initialize Swiper -->
function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    // spaceBetween: 10,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    
    breakpoints: {
      // When window width is >= 768px
      768: {
        slidesPerView: 3, // Show 3 slides per view on larger screens
        spaceBetween: 30, // Increase space between slides for better layout
      },
    },
  });
}

function menuAnimation() {
  var menu = document.querySelector("nav #navMenu");
  var full = document.querySelector("#navMobile");
  var img = document.querySelector("nav img");
  var flag = 0;
  menu.addEventListener("click", function () {
    if (flag == 0) {
      full.style.top = -20%;
      img.style.opacity = 0;
      flag = 1;
    } else {
      full.style.top = "-100%";
      img.style.opacity = 1;
      flag = 0;
    }
  });
}
function loader() {
  setTimeout(() => {
    var loader = document.querySelector(".loader");
    loader.style.top = "-100%";
  }, 4000);
}

swiperAnimation();
page3Animation();
menuAnimation();
loader();
