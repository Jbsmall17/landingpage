const openIcon = document.querySelector(".menu")
const closeIcon = document.querySelector(".menu.close")
const headerEl = document.querySelector(".primary-header")
const nodelistEl = document.querySelectorAll("div.main-div div.div-second div")
openIcon.addEventListener("click",()=>{
    headerEl.classList.add("active")
})
closeIcon.addEventListener("click",()=>{
    headerEl.classList.remove("active")
})

nodelistEl.forEach((nodeEl)=>{
    nodeEl.addEventListener("click",(e)=>{
        e.target.parentElement.classList.toggle("active")
    })
})