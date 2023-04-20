let turtleLivingQuarters = document.getElementById("aquarium")
let turtle = new RealTurtle.default(turtleLivingQuarters,{autoStart:true})

turtle.setSpeed(0.9)

turtle.setFillStyle('green')
turtle.setStrokeColorRGB(0, 0, 0)

turtle.setPosistion

turtle.beginPath()

for (let i = 0; i < 4; i++) {
    turtle.forward(45)
    turtle.right(90)
    turtle.forward(45)
}

turtle.closePath()
turtle.fill()


turtle.beginPath()

turtle.forward(45)
turtle.right(45)
turtle.forward(90)
turtle.right(45)
turtle.right(45)
turtle.forward()


turtle.closePath()
turtle.fill()