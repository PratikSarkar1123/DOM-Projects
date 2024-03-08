let box = document.querySelector(".container");
let i = document.querySelector("i");

box.addEventListener("dblclick", function () {
  setTimeout(function () {});
  i.style.transform = " translate(-50%, -50%) scale(0.8)";
  setTimeout(function () {
    i.style.transform = " translate(-50%, -50%) scale(0)";
  }, 1000);
});
