const pEL = document.querySelector(".p-red")
const prog = "Front End Developer"
let index = 1;
setInterval(writeText,100)

function writeText(){
    pEL.innerText = prog.slice(0,index)
    index++
}
