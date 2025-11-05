let level=0;
const red=document.querySelector('#red');
const green=document.querySelector('#green');
const yellow=document.querySelector('#yellow');
const purple=document.querySelector('#purple');
let butt=document.querySelectorAll('.butt')
let start=false;
let sentence=document.querySelector('span');
let arr=[];
let guess=[];


butt.forEach(element => {
    element.addEventListener('click', ()=>{
        if(start==false){
        start=true;
        level++;
        sentence.innerText=`Level ${level}`;
        console.log('started')};
        generate();
        show();
        userin();
        check();
    });
})


function generate(){                        //works
    let x=Math.floor(Math.random()*4+1)
    arr.push(x);
}

function show() {
    for (let i = 0; i <= level - 1; i++) {
        setTimeout(() => {
            switch (arr[i]) {
                case 1:
                    flash(red);
                    break;
                case 2:
                    flash(green);
                    break;
                case 3:
                    flash(yellow);
                    break;
                case 4:
                    flash(purple);
                    break;
            }
        }, i * 500); 
    }
}

function flash(button){                     //works
    let color=button.style.backgroundColor;
    button.style.backgroundColor='white';
    setTimeout((()=>{button.style.backgroundColor=color}),200);
}

function userin(){
    guess=[];
    butt.forEach(element => {
    element.addEventListener('click', (event)=>{
        for(let j=0;j<=n-1;j++){
            if(event.target.id=='red'){
                guess.push(1);
            }
            if(event.target.id=='green'){
                guess.push(2);
            }
            if(event.target.id=='yellow'){
                guess.push(3);
            }
            if(event.target.id=='purple'){
                guess.push(4);
            }
        }
        })
    })
}

function check(){
    let bool=true;
    for (let i = 0; i <=arr.length-1; i++) {
        if(arr[i]==guess[i]){
            bool=false;
        }
    }
    if (bool==false){
        alert('wrong');
    }
    if (bool==true){
        alert('yay');
    }
}
