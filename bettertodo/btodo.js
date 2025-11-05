const b = document.querySelector('button');
const i = document.querySelector('input');
const ul = document.querySelector('ul');

loadTodos();

b.addEventListener('click',add);

function add(){
    if (i.value==='') {
        return;
    }

    let l=document.createElement('li');
    l.innerText=i.value;

    const d=document.createElement('button');
    d.innerText='X';
    d.style.backgroundColor='red';
    d.style.color='white';
    d.addEventListener('click',rem);

    l.append(d);
    ul.appendChild(l);
    i.value = '';

    saveTodos();
}

function rem(event){
    this.parentElement.remove();
    saveTodos();}

function saveTodos() {
    const todos = [];
    const listItems = document.querySelectorAll('ul li');
    
    listItems.forEach(function(item){
        const itemText = item.firstChild.textContent;
        todos.push(itemText);
    });

    localStorage.setItem('myTodos', JSON.stringify(todos));
}

function loadTodos() {
    const savedTodos = JSON.parse(localStorage.getItem('myTodos') || '[]');

    savedTodos.forEach(function(todoText) {
        let l = document.createElement('li');
        l.innerText = todoText;

        const d = document.createElement('button');
        d.innerText = 'X';
        d.style.backgroundColor = 'red';
        d.style.color = 'white';
        d.addEventListener('click', rem);

        l.append(d);
        ul.appendChild(l);
    });
}