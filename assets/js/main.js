//Canvas
const c = document.getElementById("canvas")
const ctx = c.getContext("2d")
//bg

let move = false
//Canon
const canon = document.getElementById("canon")
let canonX = 400
let canonY = 390
//MIssile 
const missile = document.getElementById("missile")
const wMissile = parseInt(missile.getAttribute("width"))
const hMissile = parseInt(missile.getAttribute("height"))
let missileX;
let missileY;
//Target
const target = document.getElementById("target")
const wTarget = parseInt(target.getAttribute("width"))
const hTarget = parseInt(target.getAttribute("height"))
let targetX = 300
let targetY = 20

//counting point
let point = 0
ctx.font = "20px Arial"

//Is Collision ?
let collision = false

//Moving Canon
const KEY = document.addEventListener("keydown", () => {
    if(event.keyCode ===39 && move) {  //Si la touche correspond à arrow right
        ctx.clearRect(canonX, 390, 70, 66)
       canonX += 10
        ctx.drawImage(canon, canonX, canonY)
    } else if(event.keyCode === 37 && move){  // Si la touche correspond à arrow left
        ctx.clearRect(canonX, 390, 70, 66)
        canonX -= 10
        ctx.drawImage(canon, canonX, canonY)
    }
})

//Missile
const SPACEBAR = document.addEventListener("keydown", () => {
    collision = false
    if(event.keyCode === 32 && move) {
        missileX = canonX + 17
       missileY = canonY
       moveMissile()
        }
    })

//Target position
let moveTarget = () => {
    ctx.clearRect( targetX, targetY, 91, 68)
    rdn = Math.round(Math.random() * (700 -50))
    if(rdn <= 30){
        rdn += 68
        targetX = rdn
    } else if(rdn >=680){
        rdn -= 68
        targetX = rdn 
    }else {
        rdn += 68
        targetX = rdn
    }
   console.log(targetX)
   ctx.fillText(`Points : ${point}`, 10, 20)  
    ctx.drawImage(target, targetX, targetY)
    //Box collision du target
    // ctx.fillStyle = "rgba(0, 0, 0, 0.6)"
    // ctx.fillRect(targetX, targetY, 91, 68)
}

let moveMissile = () => {    
    if(missileY > -100 && !collision) {
        requestAnimationFrame(moveMissile)
        ctx.clearRect(missileX, missileY, 35, 86)
        missileY -= 20
        ctx.drawImage(missile, missileX, missileY)
        //box de collision du missile
        // ctx.fillRect(missileX, missileY, 35, 86)
        ctx.drawImage(canon, canonX, canonY)
        getCollision(wMissile, missileX, missileY,wTarget, hTarget, targetX, targetY)        
    } else {
        ctx.clearRect(missileX, missileY-30, 35, 110)
    }
}
//(mX < tX) && (mX < (tX + tWidth)) && ((mX + mWidth) > tX) && (mY <= tY)
//Collission Function & Destuct 
let getCollision = (mWidth, mX, mY, tWidth, tHeight, tX, tY) => {
    if((((mX < tX) && (mX + mWidth) > tX) ||
            ((mX > tX) && (mX + mWidth) < (tX + tWidth)) ||
            ((mX < (tX + tWidth)) && ((mX + mWidth) > (tX + tWidth)))) && (mY-35 <= tY)) {
                point += 1
                if(point >= 10){
                    getFinish()
                } else {
                    ctx.clearRect(0, 0, 100, 30)
                    moveTarget()
                    collision = true
                }
    }
}

//Initialisation du jeu 
let getInit = () => {
    //Canon
    ctx.drawImage(canon, canonX, canonY)
    ctx.drawImage(target, targetX, targetY) 
    ctx.fillText(`Points : ${point}`, 10, 20)   
    move = true;
}


