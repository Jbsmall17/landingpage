const openIcon = document.querySelector(".menu")
const closeIcon = document.querySelector(".menu.close")
const headerEl = document.querySelector(".primary-header")

openIcon.addEventListener("click",()=>{
    headerEl.classList.add("active")
})
closeIcon.addEventListener("click",()=>{
    headerEl.classList.remove("active")
})