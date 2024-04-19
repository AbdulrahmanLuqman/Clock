const sec = document.querySelector(".sec")
const mins = document.querySelector(".min")
const hours = document.querySelector(".hour")

function setDate(){
    const date = new Date;
    const seconds = date.getSeconds()
    const setDegrees = ((seconds / 60) * 360) + 90

    sec.style.transform = `rotate(${setDegrees}deg)`

    const minutes = date.getMinutes()

    const minDegrees = ((minutes / 60) * 360) + 90

    mins.style.transform = `rotate(${minDegrees}deg)`


    const hour = date.getHours()

    const hourDegrees = ((hour / 12) * 360) + 90

    hours.style.transform = `rotate(${hourDegrees}deg)` 
}

setInterval(setDate, 1000)