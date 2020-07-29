const START = document.getElementById("start")
const RESET = document.getElementById("reset")
RESET.style.display = "none"

START.addEventListener("click", () => {
    START.style.display = "none"
    getInit()
})

let getFinish = () =>{
    RESET.style.display = "inline-block"
    ctx.clearRect(0, 0, 800, 500)

    RESET.addEventListener("click", () =>{
        RESET.style.display = "none"
        point = 0
        getInit()
    })
}