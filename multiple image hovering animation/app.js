let elem = document.querySelectorAll(".elem");

elem.forEach(function (val) {
  val.addEventListener("mouseover", function () {
    val.childNodes[3].style.opacity = 0.7;
  });
  val.addEventListener("mouseleave", function () {
    val.childNodes[3].style.opacity = 0;
  });
  val.addEventListener("mousemove", function (det) {
    val.childNodes[3].style.left = det.x + "px";
    // val.childNodes[3].style.top = det.y + "px";
  });
});
