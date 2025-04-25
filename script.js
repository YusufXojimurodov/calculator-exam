let sonkirgiz = +prompt("Birinchi sonni kirigizing")

let qiymatnikiriting = prompt("Qiymatni kiriting faqat +,-,/,* shular korinishi bilan raqam bilan emas" + "\n" + "1) +" + "\n" + "2) -" + "\n" + "3) /" + "\n" + "4) *")

let sonni2kirgiz = +prompt("Ikkinchi sonni kirgizing")

function check() {

    if (qiymatnikiriting === '+') {
        let javob = sonkirgiz + sonni2kirgiz;
        document.getElementById("javob").innerHTML = " Javob: " + javob;
    } else if (qiymatnikiriting === '-') {
        let javob = sonkirgiz - sonni2kirgiz;
        document.getElementById("javob").innerHTML = " Javob: " + javob;
    } else if (qiymatnikiriting === '/') {
        let kalkulator = document.getElementById("javob").innerHTML = " Javob: " + Number(sonkirgiz) / Number(sonni2kirgiz)
    } else if (qiymatnikiriting === '*') {
        let kalkulator = document.getElementById("javob").innerHTML = " Javob: " + Number(sonkirgiz) * Number(sonni2kirgiz)
    } else {
        alert("Notogri Operator")
    }
    let check = document.getElementById("check")
}

let karobka = document.getElementById("kalkULATOR")

let birinchi = document.getElementById("birinchi")
let qiymat = document.getElementById("qiymat")
let ikkinchi = document.getElementById("ikkinchi")
birinchi.innerHTML = sonkirgiz
qiymat.innerHTML = qiymatnikiriting
ikkinchi.innerHTML = sonni2kirgiz

karobka.style.width = "300px"
karobka.style.height = "200px"
karobka.style.backgroundColor = "yellow"
karobka.style.borderRadius = "24px"
karobka.style.display = "flex"
karobka.style.justifyContent = "center"
karobka.style.alignItems = "center"
karobka.style.gap = "15px"

birinchi.style.color = "red"
birinchi.style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
birinchi.style.fontSize = "48px"

qiymat.style.color = "red"
qiymat.style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
qiymat.style.fontSize = "48px"

ikkinchi.style.color = "red"
ikkinchi.style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
ikkinchi.style.fontSize = "48px"


checkbtn.style.width = "300px"
checkbtn.style.height = "150px"
checkbtn.style.borderRadius = "24px"
checkbtn.style.backgroundColor = "blue"
checkbtn.style.fontSize = "24px"
checkbtn.style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
checkbtn.style.color = "white"
checkbtn.style.border = "none"

let javobbb = document.getElementById("javob")

javobbb.style.width = "300px"
javobbb.style.height = "150px"
javobbb.style.backgroundColor = "blueviolet"
javobbb.style.color = "white"
javobbb.style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
javobbb.style.display = "flex"
javobbb.style.justifyContent = "center"
javobbb.style.alignItems = "center"
javobbb.style.fontSize = "24px"
javobbb.style.borderRadius = "24px"

let allfather = document.getElementById("allfather")

allfather.style.display = "flex"
allfather.style.justifyContent = "center"
allfather.style.alignItems = "center"
allfather.style.flexDirection = "column"
allfather.style.gap = "15px"

let body = document.getElementById("body")

body.style.backgroundColor = "black"