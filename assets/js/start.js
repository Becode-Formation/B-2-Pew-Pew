const START = document.getElementById("start")

START.addEventListener("click", () => {
    //Canon
    ctx.drawImage(bg, 0, 0)
    ctx.drawImage(canon, canonX, canonY)
    ctx.drawImage(target, targetX, targetY) 
    ctx.fillText(`Points : ${point}`, 10, 20)  
})