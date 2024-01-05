const openMenuBtn = document.querySelector(".open-icon");

const navUl = document.querySelector("ul");
console.log(navUl);

const closeMenuBtn = document.querySelector(".close-icon");

closeMenuBtn.addEventListener("click", ()=> {
    navUl.style.left = -80 + "%"
    navUl.style.opacity = 0
    openMenuBtn.classList.remove("active")
    closeMenuBtn.classList.add("active")

})

openMenuBtn.addEventListener("click", ()=> {
    navUl.style.left = 50 + "%"
    navUl.style.opacity = 1
    openMenuBtn.classList.add("active")
    closeMenuBtn.classList.remove("active")
})

