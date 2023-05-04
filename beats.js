let myForm = document.getElementById("myForm")

let synth = new Tone.Synth().toDestination()

function onSubmit (e) {



    e.preventDefault()

    synth.triggerAttack(myForm.elements["thyName"].value)

    alert(myForm.elements["thyName"].value)

    let duration = parseFloat(myForm.elements["duration"].value) 

    synth.triggerRelease(Tone.now() + duration)


}
myForm.addEventListener("submit", onSubmit)