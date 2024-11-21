const tasks = document.getElementById('todo');
const Name = document.getElementById('name');
const Description = document.getElementById('description');
const Date_inp = document.getElementById('date');
const Status_select = document.getElementById('status_select');
const Important_select = document.getElementById('important_select');
const submit_btn = document.querySelector('submit_btn');
const form = document.getElementById('form');
const doing = document.getElementById('doing');
const done = document.getElementById('done');
const count_todo = document.querySelector('.count_todo');
const count_doing = document.querySelector('.count_doing');
const count_done = document.querySelector('.count_done');
const add_task = document.getElementById('add_task');
const div_of_form = document.getElementById("div_of_form")
const status_btn = document.querySelector('.status_btn')

//declares array
const arr_tasks = [
    {
        name: "ismail",
        description: "lorejhcjcbedcbdhhchehehg",
        date:"1/1/1111",
        status_select:"todo",
        important_select:"red"
    }
];
console.log(div_of_form.style.webkitLineClamp)
add_task.addEventListener('click',()=>{
    div_of_form.classList.toggle('hidden');

})

//event listner for do some thing
let task_name;
let description;
let date ;
let status_select ;
let important_select ;
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    task_name = Name.value;
    description = Description.value;
    date = Date_inp.value;
    status_select = Status_select.value;
    important_select = Important_select.value;


    
    const obg_tasks = {
        name: task_name,
        description: description,
        date:date,
        status_select:status_select,
        important_select:important_select
    }
    
    arr_tasks.unshift(obg_tasks)
    affichage(arr_tasks)
    div_of_form.classList.toggle('hidden')
});

function affichage(arr){
    todo.innerHTML = " ";
    doing.innerHTML = " ";
    done.innerHTML = " ";
    let derection = null;
    let text;
    let color;
    let counteur_todo = 0;
    let counteur_doing = 0;
    let counteur_done = 0;

    
    arr.forEach(element => {
        if(element.status_select === 'doing'){
            derection = doing;
            text = `<button class="status_btn btn">🔄️</button>`;
            counteur_doing++;
            
        }   
        else if(element.status_select === 'todo'){
            derection = todo;
            text = `<button class="status_btn btn">❌</button>`
            counteur_todo++;
        }
        else{
            derection = done;
            text = `<button class="status_btn btn">✅</button>`
            counteur_done++;
        }

        if(element.important_select === 'red'){
            color = `red`
        }
        else if(element.important_select === 'blue'){
            color = `blue`
        }
        else{
            color = `green`
        }
        derection.innerHTML += 
        `<div class="task ${color}">
                    <select  name="selected" id="select_task">
                        <option value="">status :</option>
                        <option value="todo">todo ❌</option>
                        <option value="doing">doing 🔄️</option>
                        <option value="done">done ✅</option>
                    </select>
                    ${text}
                    <br>
                    <h1 class="task_title">${element.name}</h1>
                    <p class="Task_description">${element.description}</p>
                    <p>${element.date} ⌛</p>
                    <br>
                    <button class="modification_btn btn">✏️</button>
                    <button class="supression_btn btn">🚮</button>
                    </div>
            `;
            
    });
    count_todo.innerHTML = `${counteur_todo}`;
    count_doing.innerHTML = `${counteur_doing}`;
    count_done.innerHTML = `${counteur_done}`;


}
//status_btn eventlistner
// status_btn.addEventListener('submit',()=>{
//     console.log('hi');
// });

affichage(arr_tasks)
