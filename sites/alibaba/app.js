let $ = document
let closeAlert = $.querySelector(".icon-zarb")
closeAlert.addEventListener("click" , event => event.target.parentElement.parentElement.remove())
let moreInfo = $.querySelector(".moreinfo")
let listInfo = $.querySelectorAll(".li-footer")
let useSVGFooter = false
let useSVGQues = false
listInfo.forEach((data) => {
    data.addEventListener("click" , (event) => {
        event.preventDefault()
        if(event.target.nodeName === "LI"){
            let target = event.target.nextElementSibling
            target.classList.toggle("toggle-moreinfo")
            let icon = event.target.children[1].children[0]
            if(useSVGFooter){
                useSVGFooter = false
                icon.innerHTML = `<path d="M21.266 7.302a.75.75 0 0 1 1.037 1.08l-.069.066-9.75 8.25a.75.75 0 0 1-.89.058l-.078-.058-9.75-8.25a.75.75 0 0 1 .893-1.202l.075.056L12 15.142l9.266-7.84Z"></path>`
            }
            else{
                useSVGFooter = true
                icon.innerHTML = `<path d="M21.266 16.698a.75.75 0 0 0 1.037-1.08l-.069-.066-9.75-8.25a.75.75 0 0 0-.89-.058l-.078.058-9.75 8.25a.75.75 0 0 0 .893 1.202l.075-.056L12 8.858l9.266 7.84Z"></path>`
            }
        }
        else if(event.target.nodeName === "A"){
            let target = event.target.parentElement.nextElementSibling
            target.classList.toggle("toggle-moreinfo")
            let icon = event.target.nextElementSibling.children[0]
            if(useSVGFooter){
                useSVGFooter = false
                icon.innerHTML = `<path d="M21.266 7.302a.75.75 0 0 1 1.037 1.08l-.069.066-9.75 8.25a.75.75 0 0 1-.89.058l-.078-.058-9.75-8.25a.75.75 0 0 1 .893-1.202l.075.056L12 15.142l9.266-7.84Z"></path>`
            }
            else{
                useSVGFooter = true
                icon.innerHTML = `<path d="M21.266 16.698a.75.75 0 0 0 1.037-1.08l-.069-.066-9.75-8.25a.75.75 0 0 0-.89-.058l-.078.058-9.75 8.25a.75.75 0 0 0 .893 1.202l.075-.056L12 8.858l9.266 7.84Z"></path>`
            }
        }
        else if( event.target.nodeName === "svg"){
            let target = event.target.parentElement.parentElement.nextElementSibling
            target.classList.toggle("toggle-moreinfo")
            let icon = event.target
            if(useSVGFooter){
                useSVGFooter = false
                icon.innerHTML = `<path d="M21.266 7.302a.75.75 0 0 1 1.037 1.08l-.069.066-9.75 8.25a.75.75 0 0 1-.89.058l-.078-.058-9.75-8.25a.75.75 0 0 1 .893-1.202l.075.056L12 15.142l9.266-7.84Z"></path>`
            }
            else{
                useSVGFooter = true
                icon.innerHTML = `<path d="M21.266 16.698a.75.75 0 0 0 1.037-1.08l-.069-.066-9.75-8.25a.75.75 0 0 0-.89-.058l-.078.058-9.75 8.25a.75.75 0 0 0 .893 1.202l.075-.056L12 8.858l9.266 7.84Z"></path>`
            }
        }
        
    })
})
let changeCityValue = $.querySelector(".center-icon-input")
let firstCity = $.querySelector("#firstcity")
let endcity = $.querySelector("#endcity")
changeCityValue.addEventListener("click" , () => {
    let firstValue = firstCity.value
    let endValue = endcity.value
    firstCity.value = endValue
    endcity.value = firstValue
}) 
let spanScroll = document.querySelector("#scroll")
window.addEventListener("scroll" , function(){
    let allHeight = $.documentElement.clientHeight
    let height = window.scrollY
    let inHeight = window.innerHeight
    let widthSpan = (height / (allHeight - inHeight)) * 100
    spanScroll.style.width = widthSpan + "%"
})
let sag = $.querySelectorAll(".item-ques")
sag.forEach(data => {
    data.addEventListener("click" , (e) => {
        if(e.target.className === "item-ques"){
            e.target.children[1].children[1].classList.toggle("show-para")
            let icon = e.target.children[2].children[0]
            if(useSVGQues){
                useSVGQues = false
                icon.innerHTML = `<path d="M21.266 7.302a.75.75 0 0 1 1.037 1.08l-.069.066-9.75 8.25a.75.75 0 0 1-.89.058l-.078-.058-9.75-8.25a.75.75 0 0 1 .893-1.202l.075.056L12 15.142l9.266-7.84Z"></path>`
            }
            else{
                useSVGQues = true
                icon.innerHTML = `<path d="M21.266 16.698a.75.75 0 0 0 1.037-1.08l-.069-.066-9.75-8.25a.75.75 0 0 0-.89-.058l-.078.058-9.75 8.25a.75.75 0 0 0 .893 1.202l.075-.056L12 8.858l9.266 7.84Z"></path>`
            }
        }
        else if(e.target.nodeName === "svg"){
            e.target.parentElement.parentElement.children[1].children[1].classList.toggle("show-para")
            let icon = e.target
            if(useSVGQues){
                useSVGQues = false
                icon.innerHTML = `<path d="M21.266 7.302a.75.75 0 0 1 1.037 1.08l-.069.066-9.75 8.25a.75.75 0 0 1-.89.058l-.078-.058-9.75-8.25a.75.75 0 0 1 .893-1.202l.075.056L12 15.142l9.266-7.84Z"></path>`
            }
            else{
                useSVGQues = true
                icon.innerHTML = `<path d="M21.266 16.698a.75.75 0 0 0 1.037-1.08l-.069-.066-9.75-8.25a.75.75 0 0 0-.89-.058l-.078.058-9.75 8.25a.75.75 0 0 0 .893 1.202l.075-.056L12 8.858l9.266 7.84Z"></path>`
            }
        }
        else if(e.target.className === "quesinfo-para"){
            e.target , e.target.nextElementSibling.classList.toggle("show-para")
            let icon = e.target.parentElement.nextElementSibling.children[0]
            if(useSVGQues){
                useSVGQues = false
                icon.innerHTML = `<path d="M21.266 7.302a.75.75 0 0 1 1.037 1.08l-.069.066-9.75 8.25a.75.75 0 0 1-.89.058l-.078-.058-9.75-8.25a.75.75 0 0 1 .893-1.202l.075.056L12 15.142l9.266-7.84Z"></path>`
            }
            else{
                useSVGQues = true
                icon.innerHTML = `<path d="M21.266 16.698a.75.75 0 0 0 1.037-1.08l-.069-.066-9.75-8.25a.75.75 0 0 0-.89-.058l-.078.058-9.75 8.25a.75.75 0 0 0 .893 1.202l.075-.056L12 8.858l9.266 7.84Z"></path>`
            }
        }
    })
})