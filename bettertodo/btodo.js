const b=document.querySelector('button');
const i=document.querySelector('input');
b.addEventListener('click', add);
function add(){
    let l=document.createElement('li');
    l.innerText=i.value;
    const d=document.createElement('button');
    d.innerText='X';
    d.style.backgroundColor='red';
    d.style.color='white';
    d.addEventListener('click',rem)
    l.append(d);
    document.querySelector('ul').appendChild(l);
    i.value='';

    function rem(event){
        this.parentElement.remove();
    }
}