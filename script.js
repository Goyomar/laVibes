// Theme swap
let actualTheme = "base"
document.querySelector("#theme").addEventListener("click",function(){
    if (actualTheme == "base") {
        actualTheme = "swap"
        document.querySelector("html").style.background = "linear-gradient(180deg, rgb(209, 12, 134) 0%, rgb(22, 190, 241) 18%, rgb(209, 89, 20) 80%, rgb(209, 12, 134) 100%)"
        document.querySelectorAll(".fa-solid").forEach(element => element.style.color = "rgb(209, 12, 134)")
        document.querySelector(".fa-bars").style.color="#FFFFFF"
        document.querySelector(".fa-brands").style.color = "rgb(209, 12, 134)"
        document.querySelector(".fa-regular").style.color = "rgb(209, 12, 134)"
    } else {
        actualTheme = "base"
        document.querySelector("html").style.background = ""
        document.querySelectorAll(".fa-solid").forEach(element => element.style.color = "")
        document.querySelector(".fa-brands").style.color = ""
        document.querySelector(".fa-regular").style.color = ""
    }  
})



// MENU BURGER fa-rotate-90
let burger = document.querySelector(".fa-bars")
let navBar = document.querySelector("#menu")

navBar.classList.add("whereAreYou")

burger.addEventListener("click",function(){
    if (burger.classList.contains("fa-times")) {
        burger.classList.replace("fa-times", "fa-bars")
        navBar.classList.toggle("whereAreYou")
    } else {
        burger.classList.replace("fa-bars", "fa-times")
        navBar.classList.toggle("whereAreYou")
    }
})

// ACCORDEON
let accordeon = document.querySelector("#accordeon")
let touche0 = document.querySelector("#touche0")
let touche1 = document.querySelector("#touche1")
let touche2 = document.querySelector("#touche2")

touche1.nextElementSibling.lastElementChild.classList.add("whereAreYou")
touche2.nextElementSibling.lastElementChild.classList.add("whereAreYou")

touche0.parentElement.addEventListener("click",function(){
    musiqueFrancaise(accordeon, touche0)
})
touche1.parentElement.addEventListener("click",function(){
    musiqueFrancaise(accordeon, touche1)
})
touche2.parentElement.addEventListener("click",function(){
    musiqueFrancaise(accordeon, touche2)
})

function musiqueFrancaise(accordeon, selecTouche) {
    let childList = accordeon.childNodes
    for (var i = 0; i < childList.length; i++) {
        if (childList[i].classList) {
            if (childList[i].classList.contains('touche')) {
                if (childList[i].firstElementChild == selecTouche){
                    childList[i].firstElementChild.classList.replace("fa-plus","fa-minus")
                    childList[i].lastElementChild.lastElementChild.classList.remove("whereAreYou")
                } else {
                    childList[i].firstElementChild.classList.replace("fa-minus","fa-plus")
                    childList[i].lastElementChild.lastElementChild.classList.add("whereAreYou")
                }
            }
        }
    }
}

// FILTRE GALERIE
const galerie = document.querySelector("#galerie")
let galerieImg = []
let audio = []
let image = []
let video = []

let galerieChild = galerie.childNodes
for (let u = 0; u < galerieChild.length; u++) {
    if (galerieChild[u].dataset) {
        galerieImg.push(galerieChild[u])
        if (galerieChild[u].dataset.type == "image") {
            image.push(galerieChild[u])
        } else if (galerieChild[u].dataset.type == "audio"){
            audio.push(galerieChild[u])
        } else if (galerieChild[u].dataset.type == "video"){
            video.push(galerieChild[u])
        }
    }
}

let userScreenSize = window.innerWidth
window.addEventListener('resize', function(){
    userScreenSize = window.innerWidth
    // if (userScreenSize <= 785) {
    // galerieImg[0].classList.add("whereAreYou")
    // galerieImg[1].classList.add("whereAreYou")
    // }
})

const allInput = document.querySelector("#optionAll")
const audioInput = document.querySelector("#optionAudio")
const imageInput = document.querySelector("#optionImage")
const videoInput = document.querySelector("#optionVideo")
const inputs = [allInput, audioInput, imageInput, videoInput]

allInput.addEventListener("click",function(){
    filterSelectInput(inputs, allInput)

    for (let p = 0; p < galerieImg.length; p++) {
        if (galerieImg[p].classList.contains("whereAreYou")) {
            galerieImg[p].classList.remove("whereAreYou")
        }
    }
})
audioInput.addEventListener("click",function(){
    filterSelectInput(inputs, audioInput)

    filterSelectImage(galerieImg, "audio")
})
imageInput.addEventListener("click",function(){
    filterSelectInput(inputs, imageInput)

    filterSelectImage(galerieImg, "image")
})
videoInput.addEventListener("click",function (){
    filterSelectInput(inputs, videoInput)

    filterSelectImage(galerieImg, "video")
})

function filterSelectInput(inputArray, input){
    for (let c = 0; c < inputArray.length; c++) {
        inputArray[c].classList.remove("selected")
    }
    input.classList.add("selected")
}

function filterSelectImage(galerie, filtre){
    for (let a = 0; a < galerie.length; a++) {
        if (galerie[a].classList.contains("whereAreYou")) {
            galerie[a].classList.remove("whereAreYou")
        }
        if (galerie[a].dataset.type != filtre) {
            galerie[a].classList.add("whereAreYou")
        }
    }
}

// CHEVRON TO THE TOP
let myTop = document.querySelector("header")

document.querySelector(".fa-chevron-up").addEventListener("click", () => {
    myTop.scrollIntoView({behavior: "smooth", block: "start"})
})

// hover image quel type <i class="fa-solid fa-music fa-2xl"></i> <i class="fa-solid fa-play"></i>


// galerie en js faire marcher filtre meme en responsive
// logo dans menu responsive
// centrer les coms ?
// footer colone
// agrandir taille charactere telephone