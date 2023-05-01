let milliseconds = 0
let seconds = 0
let minutes = 0

let digits = document.getElementById('digits')

let interval;

function start () {
    reset()
    
    
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
}

function reset () {
    clearTimeout(interval)
    seconds = 0
    milliseconds = 0
    minutes = 0
    digits.innerHTML = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0') + ':' + String(milliseconds).padStart(2, 0)
 
}
