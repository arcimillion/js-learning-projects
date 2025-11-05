const x=document.querySelector('.box');
const y=document.querySelector('.b');
y.addEventListener('click', jadu);
function jadu(){
    let r=Math.floor(Math.random()*255+1);
    let b=Math.floor(Math.random()*255+1);
    let g=Math.floor(Math.random()*255+1);
    x.style.backgroundColor=`rgb(${r},${g},${b})`;
    document.querySelector('h1').innerHTML=`rgb(${r},${g},${b})`;
    document.querySelector('h1').style.color=`rgb(${r},${g},${b})`;
};