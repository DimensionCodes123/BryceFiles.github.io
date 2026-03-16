const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24

const releaseDate = "March 19, 2026 00:00:00"

const countDown = new Date(releaseDate).getTime()

const x = setInterval(function(){

const now = new Date().getTime()
const distance = countDown - now

document.getElementById("days").innerText = Math.floor(distance/day)
document.getElementById("hours").innerText = Math.floor((distance%day)/hour)
document.getElementById("minutes").innerText = Math.floor((distance%hour)/minute)
document.getElementById("seconds").innerText = Math.floor((distance%minute)/second)

if(distance < 0){

clearInterval(x)

document.getElementById("headline").innerText = "🚀 Bryce Files Released"

document.getElementById("countdown").style.display = "none"

document.getElementById("content").style.display = "block"

document.getElementById("releaseSound").play()

launchConfetti()

}

},1000)



function launchConfetti(){

confetti({
particleCount:200,
spread:120,
origin:{y:.6}
})

}


/* STARFIELD BACKGROUND */

const canvas = document.getElementById("stars")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let stars = []

for(let i=0;i<200;i++){

stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2
})

}

function drawStars(){

ctx.clearRect(0,0,canvas.width,canvas.height)

ctx.fillStyle="white"

stars.forEach(star=>{

ctx.beginPath()
ctx.arc(star.x,star.y,star.size,0,Math.PI*2)
ctx.fill()

star.y+=0.3

if(star.y>canvas.height){
star.y=0
}

})

requestAnimationFrame(drawStars)

}

drawStars()
