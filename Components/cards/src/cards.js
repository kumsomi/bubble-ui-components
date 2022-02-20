const dismissCardBtn = document.querySelector(
    ".dismiss-card .dismiss-card-btn"
);
const card = document.querySelector(".dismiss-card .card");
dismissCardBtn.addEventListener("click", () => {
    console.log("card is dismissed");
    card.classList.add("inactive-card");
});