const pEL = document.querySelector(".p-red")

const prog = "Front End Developer"
let index = 1;
setInterval(writeText,100)

function writeText(){
    pEL.innerText = prog.slice(0,index)
    index++
}

const tablelinks = document.getElementsByClassName("table-links")
const tabcontents = document.getElementsByClassName("tab-contents")

function openTab(tabname){
    for(tablelink of tablelinks){
        tablelink.classList.remove("active-link");

    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
        
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}