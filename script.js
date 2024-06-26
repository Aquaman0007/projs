const newtodoinput =  document.getElementById('newtodo');
const addbtn= document.getElementById('add');
const todolist= document.getElementById('todolist');


function addtodo(){
    const newtodotext= newtodoinput.value;
    
   newtodoinput.value='';



const listitem = document.createElement('li');
const completecheckbox = document.createElement('input');
const todotext=document.createElement('span');
const deletebtn=document.createElement('button');
completecheckbox.type='checkbox';

listitem.appendChild(completecheckbox);
listitem.appendChild(todotext);
listitem.appendChild(deletebtn);

todotext.textContent=newtodotext;
deletebtn.textContent='Delete';

todolist.appendChild(listitem);

deletebtn.addEventListener('click',function(){
    todolist.removeChild(listitem)
})

}
addbtn.addEventListener('click' ,addtodo)

