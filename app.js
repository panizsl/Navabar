var lastScrollTop = 0;
navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  var ScrollTop = window.pageYOffset;
  if (ScrollTop > lastScrollTop) {
    navbar.style.top = "-90px";
  } else {
    navbar.style.top = "0px";
  }
});
