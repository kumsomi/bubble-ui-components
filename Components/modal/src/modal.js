const showbtn = document.getElementById("show-btn");

const modal = document.getElementById("modal");

const close = document.getElementById("close");

const showlink = document.getElementById("show-link");

showlink.addEventListener("click", () => {
  modal.style.display = "block";
});

showbtn.addEventListener("click", () => {
    modal.style.display = "block";
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});