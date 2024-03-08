let main = document.querySelector(".main");
let cursor = document.querySelector(".cursor");

main.addEventListener("mousemove", function (detail) {
  cursor.style.left = detail.x + "px";
  cursor.style.top = detail.y + "px";
});
