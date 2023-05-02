let milliseconds = 0
let seconds = 0
let minutes = 0

let digits = document.getElementById('digits')

let interval;

let startButton = document.getElementById('Start-btn')

function start () {

    startButton.disabled = true

  

    
    interval = setInterval(function () {
        milliseconds = milliseconds + 10

        if (milliseconds >= 1000) {
            seconds = seconds + 1
            milliseconds = 0
        }


        if (seconds >= 60) {
            minutes = minutes + 1
            seconds = 0
        }
        console.log(seconds)
        console.log(milliseconds)
        console.log(seconds)

        digits.innerHTML = String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0') + ':' + milliseconds


    }, 10)
}

function stop () {
   clearInterval(interval)
   startButton.disabled = false
   digits.innerHTML = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0') + ':' + String(milliseconds).padStart(2, 0)
}

function reset () {
    clearInterval(interval)
    milliseconds = 0
    seconds = 0
    minutes = 0
    digits.innerHTML = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0') + ':' + String(milliseconds).padStart(2, 0)
    
    const myList = document.getElementById('mylist')
    myList.innerHTML = ""
 
    
}
function laps () {
    let myList = document.getElementById('mylist')
    
    let NewListItem = document.createElement('li')
    NewListItem.textContent = String(minutes).padStart(2, 0) + ':' + String(seconds).padStart(2, 0) + ':' + String(milliseconds).padStart(2, 0)
    jList.appendChild(NewListItem)
}


