const openIcon = document.querySelector(".menu")
const closeIcon = document.querySelector(".menu.close")
const headerEl = document.querySelector(".primary-header")
const nodelistEl = document.querySelectorAll("div.main-div div.div-second div")
const sliderEl = document.querySelector(".slider-main")
const chev_left = document.querySelector(".left")
const chev_right = document.querySelector(".right")

const pkg_array = [
    {
        type :"Basic",
        price: "Free",
        desc: "Free plan for all users",
        list : [
                "Unlimited URL Shortening",
                "Basic Link Analytics",
                "Customizable Short Links",
                "Standard Support",
                "Ad-supported"
            ]
    },
    {
        type: "Proffessional",
        price: "$15/month",
        desc: "Ideal for creators",
        list : [
            "Enhanced Link Analytics",
            "Custom Branded Domains",
            "Advanced Link Customization",
            "Priority Support",
            "Ad-free Experience"
        ]
    },
    {
        type: "Teams",
        price: "$25/month",
        desc : "Share with up to 10 users",
        list : [
            "Team Collaboration",
            "User Roles and Permissions",
            "Enhanced Security",
            "API Access",
            "Dedicated Account Manager"
        ]
    }   
]

let currentNum = 0;
function checkNumber(num){
    if ( num > 2){
        return 0
    }
    else if(num < 0){
        return 2
    }
    return num 
}
function increaseNum(){
    currentNum = currentNum + 1;
    return checkNumber(currentNum)

}
function decreaseNum(){
    currentNum = currentNum - 1;
    return checkNumber(currentNum)
}
chev_right.addEventListener("click",()=>{
    sliderEl.innerHTML = "";
    currentNum = increaseNum();
    console.log(pkg_array[currentNum].type)
    const div = document.createElement("div")
    div.classList.add("pkg")
    const paragraph = document.createElement("p")
    paragraph.textContent = pkg_array[currentNum].type
    paragraph.classList.add("title")
    
    div.appendChild(paragraph)
    
    const header3 = document.createElement("h3")
    header3.classList.add("price")
    header3.textContent = pkg_array[currentNum].price
    
    div.appendChild(header3)
    
    const paragraph1 = document.createElement("p")
    paragraph1.classList.add("desc")
    paragraph1.textContent = pkg_array[currentNum].desc

    div.appendChild(paragraph1)

    const ulist = document.createElement("ul")
    ulist.classList.add("list")
    const array = pkg_array[currentNum].list
    for(let i=0; i < array.length; i++){
        const listitem = document.createElement("li")
        listitem.textContent = array[i]
        ulist.appendChild(listitem)
    }
    div.appendChild(ulist)
    sliderEl.appendChild(div)
    // console.log(increaseNum())
})
chev_left.addEventListener("click",()=>{
    sliderEl.innerHTML = "";
    currentNum = decreaseNum();
    console.log(pkg_array[currentNum].type)
    const div = document.createElement("div")
    div.classList.add("pkg")
    const paragraph = document.createElement("p")
    paragraph.textContent = pkg_array[currentNum].type
    paragraph.classList.add("title")
    
    div.appendChild(paragraph)
    
    const header3 = document.createElement("h3")
    header3.classList.add("price")
    header3.textContent = pkg_array[currentNum].price
    
    div.appendChild(header3)
    
    const paragraph1 = document.createElement("p")
    paragraph1.classList.add("desc")
    paragraph1.textContent = pkg_array[currentNum].desc

    div.appendChild(paragraph1)

    const ulist = document.createElement("ul")
    ulist.classList.add("list")
    const array = pkg_array[currentNum].list
    for(let i=0; i < array.length; i++){
        const listitem = document.createElement("li")
        listitem.textContent = array[i]
        ulist.appendChild(listitem)
    }
    div.appendChild(ulist)
    sliderEl.appendChild(div)
    // console.log(decreaseNum())
})
// console.log(sliderEl.innerHTML)
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

