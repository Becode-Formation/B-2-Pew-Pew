//Canvas
const c = document.getElementById("canvas")
const ctx = c.getContext("2d")
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


//Moving Canon
const KEY = document.addEventListener("keydown", () => {
    if(event.keyCode ===39) {  //Si la touche correspond à arrow right
        ctx.clearRect(canonX, 390, 70, 66)
       canonX += 10
        ctx.drawImage(canon, canonX, canonY)
    } else if(event.keyCode === 37){  // Si la touche correspond à arrow left
        ctx.clearRect(canonX, 390, 70, 66)
        canonX -= 10
        ctx.drawImage(canon, canonX, canonY)
    }
})

//Missile
const SPACEBAR = document.addEventListener("keydown", () => {
    if(event.keyCode === 32) {
        missileX = canonX + 17
       missileY = canonY
       moveMissile()
        }
    })

//Target position
let moveTarget = () => {
    ctx.clearRect( targetX, targetY, 91, 68)
    let rdn = Math.round(Math.random() * (750 -50))
    targetX = rdn
    ctx.drawImage(target, targetX, targetY)
    //Box collision du target
    ctx.fillStyle = "rgba(0, 0, 0, 0.6)"
    ctx.fillRect(targetX, targetY, 91, 68)
}

let moveMissile = () => {    
    if(missileY > -100) {
        requestAnimationFrame(moveMissile)
        ctx.clearRect(missileX, missileY, 35, 86)
        missileY -= 10
        ctx.drawImage(missile, missileX, missileY)
        //box de collision du missile
        ctx.fillRect(missileX, missileY, 35, 86)
        ctx.drawImage(canon, canonX, canonY)
        getCollision(wMissile, missileX, missileY,wTarget, hTarget, targetX, targetY)        
    }
}

//Collission Function & Destuct 
let getCollision = (mWidth, mX, mY, tWidth, tHeight, tX, tY) => {
    if((mY <= tY) && (mX < (tX + tWidth)) && mX > tX) {
        console.log("collision")
        ctx.clearRect(tX, tY, 100, 100)
        
    }
}

moveTarget()
//Initialisation du jeu 
let getInit = () => {
    //Canon
    ctx.drawImage(canon, canonX, canonY);
    moveTarget()
}
getInit()

