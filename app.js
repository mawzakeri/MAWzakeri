// variables
const $ = document
let showMenuIcon = $.querySelector("#showmenu")
let closeMenuIcon = $.querySelector("#closemenu")
let navBar = $.querySelector("nav")
let ulNav = $.querySelector("#parent-navlist")
let header = $.querySelector("header")
let main = $.querySelector("main")
let resumeBox = $.querySelectorAll(".show-resume-box")
let resumeDescriptions = $.querySelector(".resume-description")
let menuStatus = false
let projectBox = $.querySelectorAll(".project")
let projectDescriptions = $.querySelectorAll(".project-description")
let projects = $.querySelectorAll(".project")
let startConvLink = $.querySelector("#start-conv")
let input = $.querySelector(".inputs") 
let inputs = $.querySelectorAll(".inputs") 
let submitMessage = $.querySelector("#submit-message")
let nameInput = $.querySelector("#name-input")
let emailInput = $.querySelector("#email-input")
let messageInput = $.querySelector("#message-input")
let modalMessage = $.querySelector(".modal-message")
let closeModalIcon = $.querySelector("#closeIconModal")
let modalPending = $.querySelector(".modal-message-pending")
let emailValidateData = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
let toUpIcon = $.querySelector(".toup")
let mainPr = $.querySelector("#main-proj")
let navLink = $.querySelectorAll(".link-navlist")
let dataNavLink = [] // برای بهینه سازی و هر دفعه حلثه نزدن روی لینک ها
//events
showMenuIcon.addEventListener("click" , showMenu)
closeMenuIcon.addEventListener("click" , closeMenu)
startConvLink.addEventListener("click" , (e) => {
    e.preventDefault()
    input.focus()
})
submitMessage.addEventListener("click" , e => {
    e.preventDefault()
    let inputStatus = true
    let emailStatus = emailValidateData.test(emailInput.value)
    inputs.forEach( input => {
        if(!input.value.trim()){
            inputStatus = false
        }
    })
    if(inputStatus && emailStatus){
        getMessages()
    }
    if(!emailStatus && inputStatus){
        emailInvalidModal()
    }
    if(!inputStatus){
        epmtyInputModal()
    }
})
window.addEventListener("scroll" , showToUpIcon)
window.addEventListener("scroll" , fixedNavBar)
toUpIcon.addEventListener("click" , toUpPage)
// functions
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
resumeBox.forEach(box => {
    box.addEventListener("click" , (e) => {
        if(e.target.className.includes("show-resume-box")){
            resumeDescriptions.innerHTML = `<p class="resume-des-text">${e.target.children[3].innerHTML}</p>`
            resumeBox.forEach(target => {
                if(target === e.target){
                    target.classList.add("active")
                }
                else {
                    if(target.className.includes("active")){
                        target.classList.remove("active")
                    }
                }
            })
        }
        else{
            resumeDescriptions.innerHTML = `<p class="resume-des-text">${e.target.parentElement.children[3].innerHTML}</p>`
        }
    })
})
resumeBox.forEach(box => {
    box.addEventListener("touchend" , (e) => {
        if(e.target.className.includes("show-resume-box")){
            resumeDescriptions.innerHTML = `<p class="resume-des-text">${e.target.children[3].innerHTML}</p>`
            resumeBox.forEach(target => {
                if(target === e.target){
                    target.classList.add("active")
                }
                else {
                    if(target.className.includes("active")){
                        target.classList.remove("active")
                    }
                }
            })
        }
        else{
            resumeDescriptions.innerHTML = `<p class="resume-des-text">${e.target.parentElement.children[3].innerHTML}</p>`
        }
    })
})
projectBox.forEach(project => {
    project.addEventListener("click" , (e) => {
        
    })
})
projects.forEach(project => {
    project.addEventListener("click" , (e) => {
        console.log(e.target.parentElement.parentElement.children[1])
            if(e.target.nodeName === "IMG" || e.target.className === "hover-project-box"){
                    let projdesData = e.target.parentElement.parentElement.children[1].outerHTML
                    createModal(projdesData)
            }
             else if(e.target.className === "project-link"){
                let projdesData = e.target.parentElement.parentElement.parentElement.children[1].outerHTML
                    createModal(projdesData)
            }
    })
})
function createModal(projectData){
    $.body.insertAdjacentHTML("afterbegin" , `${projectData}`)
    $.body.children[0].classList.add("projdes-display")
    let closeIconTarget = $.body.children[0].children[0].children[0]
    closeIconTarget.addEventListener("click" , (e) => {
        $.body.children[0].remove()
    })
}
function removeProjdesTarget(p){
    p.remove()
}
inputs.forEach(input => {
    input.addEventListener("keyup" , e => {
        if(e.keyCode == 13){
            e.preventDefault()
            let inputStatus = true
            inputs.forEach( input => {
                if(!input.value.trim()){
                    inputStatus = false
            }
            })
            if(inputStatus){
                getMessages()
            }
        }
    })
})
function emailInvalidModal(){
    modalMessage.children[1].children[0].classList.remove("check-icon")
    modalMessage.children[1].children[0].classList.add("invalid-email-icon")
    modalMessage.children[1].children[1].innerHTML = "ایملیت رو اشتباه وارد کردی !"
    modalMessage.children[1].children[2].innerHTML = "ایمیل مثلا باید با این فرمت باشه : mawzakeri@gmail.com"
    modalMessage.classList.add("show-modal-message")
    closeModalIcon.addEventListener("click" , () => {
        resetToOrgModal("check-icon"  , "invalid-email-icon")
        modalMessage.classList.remove("show-modal-message")
    })
}
function epmtyInputModal(){
    modalMessage.children[1].children[0].classList.remove("check-icon")
    modalMessage.children[1].children[0].classList.add("empty-input-icon")
    modalMessage.children[1].children[1].innerHTML = "لطفا پیامت رو کامل بنویس !"
    modalMessage.children[1].children[2].innerHTML = "همه کادر ها رو پر کن تا بتونم وقتی پیام فرستادی جوابت رو بدم :)"
    modalMessage.classList.add("show-modal-message")
    closeModalIcon.addEventListener("click" , () => {
        resetToOrgModal("check-icon"  , "empty-input-icon")
        modalMessage.classList.remove("show-modal-message")
    })
}
function getMessages(){
    let message = {
        name : nameInput.value , 
        email : emailInput.value ,
        message : messageInput.value
    }
    let dataConection = fetch("https://conversations-c3b52-default-rtdb.firebaseio.com/messages.json" , {
        method : "POST" , 
        headers : {
            "type-content" : "application/json"
        },
        body : JSON.stringify(message)
    })
    .then(res => {
        modalPending.classList.remove("modal-message-pending-shower")
        modalMessage.classList.add("show-modal-message")
        closeModalIcon.addEventListener("click" , () => {
            modalMessage.classList.remove("show-modal-message")
            clearInputs()
        })
    })
    .catch(rej => {
        modalPending.classList.remove("modal-message-pending-shower")
        modalMessage.children[1].children[0].classList.remove("check-icon")
        modalMessage.children[1].children[0].classList.add("error-icon")
        modalMessage.children[1].children[1].innerHTML = "در هنگام ارسال پیام خطایی رخ داده !"
        modalMessage.children[1].children[2].innerHTML = "لطفا دوباره پیامت رو ارسال کن و اینترنتت رو هم چک کن :("
        modalMessage.classList.add("show-modal-message")
        closeModalIcon.addEventListener("click" , () => {
            resetToOrgModal("check-icon"  , "error-icon")
            modalMessage.classList.remove("show-modal-message")
        })
    })
    modalPending.classList.add("modal-message-pending-shower")
}
//  در توابع بالا بعضی کد ها باعث میشن تا پیغام اصلی مودال عوض بشه و این تابع این قضیه رو ریست میکنه
function resetToOrgModal(orgClass , oldClass){
    modalMessage.children[1].children[0].classList.add(orgClass)
    modalMessage.children[1].children[0].classList.remove(oldClass)
    modalMessage.children[1].children[1].innerHTML = "پیغام با موفقیت ارسال شد !"
    modalMessage.children[1].children[2].innerHTML = "تشکر بابت ارسال پیامت الان میرم میخونم :)"
}
function clearInputs(){
    inputs.forEach(input => {
        input.value = ""
    })
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
function showToUpIcon(){
    if($.body.scrollTop > 150 || $.documentElement.scrollTop > 150)
        toUpIcon.style.transform = "scale(1)"
    else
        toUpIcon.style.transform = "scale(0)"
}
navLink.forEach(link => {
    link.addEventListener("click" , (e) => {
        navLink.forEach(linkDisable => {
            if(linkDisable.className.includes("active-link")){
                linkDisable.classList.remove("active-link")
                console.log("اره")
            }
        })
        if(e.target.nodeName === "A")
            e.target.classList.add("active-link")
        if(e.target.nodeName === "LI")
            e.target.children[0].classList.add("active-link")
    })
})
function toUpPage(){
    $.body.scrollTop = 0
    $.documentElement.scrollTop = 0
}