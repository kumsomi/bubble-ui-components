const showbtn = document.getElementById("show-btn");

const modal = document.getElementById("modal");

const close = document.getElementById("close");

// const body = document.getElementsByTagName("body");

const showlink = document.getElementById("show-link");

showlink.addEventListener("click", () => {
  modal.style.display = "block";
  // modal.appendTo("body");
  
});


showbtn.addEventListener("click", () => {
    modal.style.display = "block";
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});