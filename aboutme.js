//variables
const $ = document
let toUpIcon = $.querySelector(".toup")
let showMenuIcon = $.querySelector("#showmenu")
let closeMenuIcon = $.querySelector("#closemenu")
let ulNav = $.querySelector("#parent-navlist")
let navBar = $.querySelector("nav")
let header = $.querySelector("header")
let main = $.querySelector("main")
// events
showMenuIcon.addEventListener("click" , showMenu)
closeMenuIcon.addEventListener("click" , closeMenu)
toUpIcon.addEventListener("click" , toUpPage)
window.addEventListener("scroll" , fixedNavBar)
window.addEventListener("scroll" , showToUpIcon)
//functions
function showMenu(){
    ulNav.classList.add("show-menu")
    header.classList.add("gray-opacity")
    main.classList.add("gray-opacity")
    $.body.addEventListener("click" , (e) => {
        if(e.target.nodeName != "UL" && e.target.nodeName != "LI" && e.target.nodeName != "I"){
            closeMenu()
        }
    })
}
function closeMenu(){
    ulNav.classList.remove("show-menu")
    header.classList.remove("gray-opacity")
    main.classList.remove("gray-opacity")
}
function showToUpIcon(){
    if($.body.scrollTop > 150 || $.documentElement.scrollTop > 150)
        toUpIcon.style.transform = "scale(1)"
    else
        toUpIcon.style.transform = "scale(0)"
}
function fixedNavBar(){
    if($.body.scrollTop > 150 || $.documentElement.scrollTop > 150){
        navBar.style.position = "fixed"
        navBar.style.zIndex = "3"
    }
    else{
        navBar.style.position = "static"
        navBar.style.zIndex = "1"
    }
}
function toUpPage(){
    $.body.scrollTop = 0
    $.documentElement.scrollTop = 0
}