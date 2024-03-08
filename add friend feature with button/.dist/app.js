let add = document.querySelector("#add");
let h5 = document.querySelector("#stranger");
let flag = 0;
let remove = document.querySelector("#remove");

add.addEventListener("click", function () {
  if (flag === 0) {
    setTimeout(function () {
      h5.textContent = "Friends";
      h5.style.color = "green";
    }, 800);

    flag = 1;
  } else if (flag === 1) {
    setTimeout(function () {
      h5.textContent = "Stranger";
      h5.style.color = " rgb(79, 79, 79)";
    }, 800);
    flag = 0;
  }
});

remove.addEventListener("click", function () {
  setTimeout(function () {
    h5.textContent = "Stranger";
    h5.style.color = " rgb(79, 79, 79)";
  }, 800);
});
