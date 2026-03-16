const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24

const releaseDate = "March 19, 2026 00:00:00"

const countDown = new Date(releaseDate).getTime()

const x = setInterval(function() {

const now = new Date().getTime()
const distance = countDown - now

document.getElementById("days").innerText = Math.floor(distance / day)
document.getElementById("hours").innerText = Math.floor((distance % day) / hour)
document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute)
document.getElementById("seconds").innerText = Math.floor((distance % minute) / second)

if (distance < 0) {

clearInterval(x)

document.getElementById("headline").innerText = "🚀 Bryce Files Released"

document.getElementById("countdown").style.display = "none"

document.getElementById("content").style.display = "block"

}

}, 1000)
