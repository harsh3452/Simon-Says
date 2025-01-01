let gameSeq = [];
let userSeq = [];
let started = 0;
let level = 0;
let high = 0;

const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");
const allBtns = document.querySelectorAll(".btn");

let btn_color = ["red", "yellow", "purple", "green"];

document.body.addEventListener("keypress", ()=>{
    if(started == 0){
        console.log("game started")
        started = 1;
        levelUp();
    }
});
function buttonPress(){
    userFlash(this);
    let use_color = this.getAttribute("id");
    userSeq.push(use_color);
    checkAns(userSeq.length-1)
}
function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length)
            setTimeout(() => {
                levelUp();
            }, 1000);
    } else {
        if(high < level){
            high = level;
            h3.innerText = `High Score : ${high}`
        }
        document.body.style.backgroundColor = "red";
        setTimeout(() => {
            document.body.style.backgroundColor = "white";
        }, 200);
        h2.innerText = `Game over. Press any key to start again`
        reset();
    }
}
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let idx = Math.floor(Math.random() * 4);
    let ranColor = btn_color[idx];
    gameSeq.push(ranColor);
    console.log(gameSeq)
    gameFlash(ranColor);
}
function gameFlash(color){
    let btn = document.querySelector(`.${color}`);
    btn.classList.add("gameFlash")
    setTimeout(() => {
        btn.classList.remove("gameFlash");
    }, 200);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    console.log(btn)
    setTimeout(() => {
        btn.classList.remove("userFlash");
    }, 200);
}
for(let btn of allBtns){
    btn.addEventListener("click",buttonPress )
}

function reset(){
    gameSeq = [];
    userSeq = [];
    started = 0;
    level = 0;
}
    
