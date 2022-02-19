const showtoast = document.getElementById("show-toast");

const snackbar = document.getElementById("snackbar");

const close=document.getElementById("toast-close");

showtoast.addEventListener("click", () => {
    snackbar.style.display = "block";
});

close.addEventListener("click", ()=>{
    snackbar.style.display="none";
})
