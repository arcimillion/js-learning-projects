let list=[];
let x;
while(x!='exit'){
    let x=prompt('what would you like to do?\nadd\nremove\nexit\nreplace\nlist\nchange order');
    if(x=='add'){
        let k=prompt('add what?');
        list.push(k);
    }
    else if(x=='remove'){
        let k=prompt('which task to remove');
        list.splice(list.indexOf(k),1);
    }
    else if(x=='replace'){
        k=prompt("which element to replace?");
        if(list.indexOf(k)==-1){
            alert("Not in the List");
        }
        else
        {
            list[list.indexOf(k)]=prompt('enter new todo');
        }
    }
    else if(x=='exit'){
        alert("quitting");
        break;
    }
    else if(x=='list'){
        console.log(list);
    }
    else if(x== 'change order'){
        let k=prompt('swap');
        let m;
        m=prompt('with');
        let i = list.indexOf(k);
        let j = list.indexOf(m);
         let temp = list[i];
         list[i] = list[j];
         list[j] = temp;
    }
}
console.log("list exit");