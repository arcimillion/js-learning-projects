let r=Math.floor(Math.random()*6)+1;
let x=prompt('guess a number between 1 and 6');
let a=1;
while(x!=r){
    let x=prompt('guess a number between 1 and 6 or quit');
    a++;
    if(x==r){
        alert(`You got it in ${a} tries!`);
        break;
    }
    if(x=="quit"){
        alert('Game Ending')
        break;
    }
}
console.log("Game Ended");