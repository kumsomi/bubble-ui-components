const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// listener to activate the bar into X 
// and the class which is going to show the menu
// navMenu.addEventListener("click", ()=>console.log("navMenu"));

hamburger.addEventListener("click", ()=>{
    // navMenu.style.setProperty("--childenNumber", navMenu.children.length);
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    console.log("hamburger");

})

// in order to close the hamburger as soon as we click on any link
document.querySelectorAll(".linking").forEach(
    link => link.addEventListener("click", ()=>{
            console.log("links clicked");
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
))
