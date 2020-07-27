let c = document.getElementById("canvas")

let ctx = c.getContext('2d');

//Drapeau
ctx.fillStyle = "black"
ctx.fillRect(10, 10, 30, 60)

ctx.fillStyle = "red"
ctx.fillRect(40, 10, 30, 60)

ctx.fillStyle = "yellow"
ctx.fillRect(70, 10, 30, 60)

//Bateau

ctx.fillStyle ="brown"
ctx.beginPath()
ctx.moveTo(10, 100)
ctx.lineTo(60, 100)
ctx.lineTo(55, 110)
ctx.lineTo(15, 110)
ctx.fill()

ctx.beginPath()
ctx.moveTo(35, 100)
ctx.lineTo(35, 80)
ctx.stroke()

ctx.fillStyle ="green"
ctx.beginPath()
ctx.moveTo(35, 82)
ctx.lineTo(60,90)
ctx.lineTo(35, 95)
ctx.closePath()
ctx.fill()