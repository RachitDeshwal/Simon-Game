let gameseq=[];
let userseq=[];
let colors=["green","yellow","orange","pink"];
let started=false;
let level =0;
document.addEventListener("keypress",function(){
  if(started==false){
    started=true;
    levelup();
  }});
  function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){btn.classList.remove("flash")
    },500);
  }
  function levelup(){
    userseq=[];
    level++;
    let h2=document.querySelector("h2");
    h2.innerText=`Level ${level}`;
    let randidx=Math.floor(Math.random()*3);
    gameseq.push(colors[randidx]);
    let colorst=`.div${randidx}`;
    
    let btn=document.querySelector(`${colorst}`);
    btnFlash(btn);

  }
  function checkAns(idx){
    if(userseq[idx]==gameseq[idx]){
      if(userseq.length==gameseq.length){
        setTimeout(levelup,1000);
      }
    }
    else{
      let h2=document.querySelector("h2");
    h2.innerText=`Game is Over! your Score is ${level-1} and press any key to restart`;
    reset();
    
    }


  }
  function reset(){
    gameseq=[];
    userseq=[];
    started=false;
    level=0;
  }
  function btnpress(){
    btnFlash(this);
   let usercolor= this.getAttribute("id");
   userseq.push(usercolor);
   checkAns(userseq.length-1);
  }
  let btns=document.querySelectorAll(".btn");
  for(btn of btns){
    btn.addEventListener("click",btnpress)
  }

