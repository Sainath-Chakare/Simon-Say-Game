let started = false;
let gameSeq = [];
let userSeq = [];
let level = 0;
let i = 0;
let res = false;
let temp = false;
let classes = ["one","two","three","four"];
let h2 = document.querySelector("h2");

function reset(){
   started = false;
   gameSeq = [];
   userSeq = [];
   level = 0;
   i = 0;
   res = true;
}

function matchSeq(){
   if((i < level) && userSeq[i]==gameSeq[i]){
      i++;
   }else if((i < level) && userSeq[i]!=gameSeq[i]){
      h2.textContent = `You Lose. Your Score is ${level-1}. Press any Key to start.`;
      flashlost();
      reset();
   }
   if(i==level && (res == false)){
      i=0;
      level++;
      userSeq = [];
      gamesteps();
   }
}

function userinput(){
   userflash(this);
   let itemclass = this.getAttribute("id");
   userSeq.push(itemclass);
   console.log("user seq is", userSeq);
   matchSeq();
}

let btns = document.querySelectorAll(".item");
for(btn of btns){
   btn.addEventListener("click",userinput);
}

function randomclasses(){
   let no = Math.floor(Math.random() * 4);
   let name = classes[no];
   let div = document.querySelector(`.${name}`);
   gameSeq.push(name);
   console.log("game seq is", gameSeq);
   return div;
}

function flashcolor(item){
   item.style.backgroundColor = "white";
   setTimeout(function(){
      item.style.backgroundColor = "";
   },300);
}

function userflash(item){
   item.style.backgroundColor = "green";
   setTimeout(function(){
      item.style.backgroundColor = "";
   },300);
}

let body = document.querySelector("body");
function flashlost(){
   body.style.backgroundColor = "red";
   setTimeout(function(){
      body.style.backgroundColor = "white";
   },350);
}

function gamesteps(){
   flashcolor(randomclasses());
   setTimeout(() => {
      h2.textContent = `Level ${level}`;
   },500);
}

document.addEventListener("keypress",function(){
   if(started == false){
      level++;
      res= false;
      gamesteps();
      started = true;  
   }
})



