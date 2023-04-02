$('.slider').slick({
  slidesToShow: 1,
  autoplay: true,
  prevArrow: false,
  nextArrow:false
});
const scrollBtn = document.getElementById("btn");

scrollBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 620,
    behavior: "smooth"
  });
});

const scrollBtn1 = document.getElementById("scrollBtn1");

scrollBtn1.addEventListener("click", function() {
  window.scrollTo({
    top: 620,
    behavior: "smooth"
  });
});
const scrollBtn2 = document.getElementById("scrollBtn2");

scrollBtn2.addEventListener("click", function() {
  window.scrollTo({
    top: 1200,
    behavior: "smooth"
  });
});
const scrollBtn3 = document.getElementById("scrollBtn3");

scrollBtn3.addEventListener("click", function() {
  window.scrollTo({
    top: 1800,
    behavior: "smooth"
  });
});
const scrollBtn4 = document.getElementById("scrollBtn4");

scrollBtn4.addEventListener("click", function() {
  window.scrollTo({
    top: 2325,
    behavior: "smooth"
  });
});
