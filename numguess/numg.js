const i=document.querySelector('input');
const butt=document.querySelector('button');
let counter=document.querySelector('.rem');
let purana=document.querySelector('span');
let x=Math.floor(Math.random()*100+1);
let num=10;
butt.addEventListener('click',work);
counter.innerHTML=`${num}`;

function work(){
    let guess=parseInt(i.value);
    check();

    function check(){
    if(isNaN(guess)||guess==0||guess==""){
        alert('Input Invalid');
        i.value='';
    }
    else{
        rangecheck();
    }
}
function rangecheck(){
    if(guess>100){
        alert("guess below 100");
        i.value='';
    }
    else if(guess<=0){
        alert("guess 1 or above");
        i.value='';
    }
    else{
        allof();
    }
}
function guide(){
    if (guess>x){
        alert("go lower")
    }
    if (guess<x){
        alert("go higher")
    }
}
function allof(){
        if(x==guess){
        alert(`You Win with ${num} remaining guesses`);
        x=Math.floor(Math.random()*100+1);
        purana.innerHTML='';
        num=10;
    }
    else{
        guide();
        num--;
        purana.innerHTML=`${purana.innerHTML+guess}   `
    }
    i.value='';
    if(num==0){
        alert('you lose');
        x=Math.floor(Math.random()*100+1);
        purana.innerHTML='';
        num=10;
    }
    counter.innerHTML=`${num}`;
}
}