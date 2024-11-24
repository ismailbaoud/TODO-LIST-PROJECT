const tasks = document.getElementById('todo');
const Name = document.getElementById('name');
const Description = document.getElementById('description');
const Date_inp = document.getElementById('date');
const Status_select = document.getElementById('status_select');
const Important_select = document.getElementById('important_select');
const form = document.getElementById('form');
const todo = document.getElementById("todo");
const submit_btn = document.querySelector(".submit_btn")
const doing = document.getElementById('doing');
const done = document.getElementById('done');
const count_todo = document.querySelector('.count_todo');
const count_doing = document.querySelector('.count_doing');
const count_done = document.querySelector('.count_done');
const add_task = document.getElementById('add_task');
const add_modification = document.querySelector('.add_modification');
const div_of_form = document.getElementById("div_of_form");
const div_of_modification = document.getElementById("div_of_modification");
const status_btn = document.getElementById('status_btn');
const modification_btn = document.querySelector('.modification_btn');
const modification_form = document.getElementById('modification_form')
const new_Name = document.getElementById('new_name');
const new_Description = document.getElementById('new_description');
const new_Date_inp = document.getElementById('new_date');
const new_Status_select = document.getElementById('new_status_select');
const new_Important_select = document.getElementById('new_important_select');
const boxs = document.querySelectorAll(".dropZone");
let id_count = 1;
let drag = null;

function save_Local_storage(arr_tasks) {
    return localStorage.setItem('todo', JSON.stringify(arr_tasks));
}
function get_Local_storage() {
    return JSON.parse(localStorage.getItem('todo')) || [];
}

add_task.addEventListener('click',()=>{
    div_of_form.classList.toggle('hidden');
});
function dragItem() {
    let items = document.querySelectorAll('#div');
    items.forEach(item => {
        item.addEventListener('dragstart', function () {
            drag = item;
        });
        item.addEventListener('dragend', function () {
            drag = null;
        });
        boxs.forEach(box => {
            box.addEventListener('dragover', function (e) {
                e.preventDefault();
            });

            box.addEventListener('drop', function () {
                this.append(drag);
                const taskId = parseInt(drag.getAttribute("data-id"));
                const task = arr_local.find(t => t.id === taskId);
                if (box.getAttribute('id') === 'doing') {
                    task.status_select = 'doing';
                } else if (box.getAttribute('id') === 'done') {
                    task.status_select = 'done';
                } else {
                    task.status_select = 'todo';
                }

                affichage(arr_local);
                save_Local_storage(arr_local);
            });
        });
    });
}
let task_name;
let description;
let date ;
let status_select ;
let important_select ;

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
            text = `🔄️`;
            counteur_doing++;
            
        }   
        else if(element.status_select === 'todo'){
            derection = todo;
            text = `❌`
            counteur_todo++;
        }
        else{
            derection = done;
            text = `✅`
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
        `<div id="div" draggable="true" class="task ${color}" data-id="${element.id}">
                    
                    </button>
                    <button type="button" id="status_btn" class="status_btn btn">${text}</button>
                    <br>
                    <h1 class="task_title">${element.name}</h1>
                    <p class="Task_description">${element.description}</p>
                    <p>${element.date} ⌛</p>
                    <br>
                    <button class="modification_btn btn">✏️</button>
                    <button class="supression_btn btn">🚮</button>
                    </div>
            `;
            dragItem();
    });
    count_todo.innerHTML = `${counteur_todo}`;
    count_doing.innerHTML = `${counteur_doing}`;
    count_done.innerHTML = `${counteur_done}`;
    attachEventListeners()
    
}
function checkDate(deathline) {
    const date = new Date(deathline);
    const new_year = date.getFullYear();
    const new_month = date.getMonth() + 1;
    const new_day = date.getUTCDate();
  
    const date_now = new Date();
    const year = date_now.getFullYear();
    const month = date_now.getMonth() + 1;
    const day = date_now.getUTCDate();
  
    let test = true;
  
    if (year == new_year) {
      if (month == new_month) {
        if (day > new_day) {
          test = false;
        }
      } else if (month > new_month) {
        test = false;
      }
    } else if (year > new_year) {
      test = false;
    }
    return test;
  }
function clearform() {
    Name.value = "";
    Description.value = "";
    Date_inp.value = "";
  }
  
const arr_tasks = [
    {
        name: "ismail",
        description: "lorejhcjcbedcbdhhchehehg",
        date:"1/1/1111",
        status_select:"todo",
        important_select:"red",
        id:0
    }
];


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task_name = Name.value;
    const description = Description.value;
    const date = Date_inp.value;
    const status_select = Status_select.value;
    console.log(status_select);
    const important_select = Important_select.value;

    if (task_name === '' || description === '' || date === '') {
        alert('Please fill in all fields!');
    } else {
        const newTask = {
            name: task_name,
            description: description,
            date: date,
            status_select: status_select,
            important_select: important_select,
            id: id_count++
        };

        arr_local.unshift(newTask);
        save_Local_storage(arr_local);
        affichage(arr_local);
        clearform();
        div_of_form.classList.toggle('hidden');
        console.log('hi');
        
    }
});

function attachEventListeners() {
    document.querySelectorAll(".supression_btn").forEach((button) => {
        button.addEventListener("click", (event) => {
            const taskElem = event.target.closest("div");
            const idtach = parseInt(taskElem.getAttribute("data-id"));
            const index = arr_local.findIndex((tach) => tach.id === idtach);
            if (index !== -1) {
                arr_local.splice(index, 1);
            }
            affichage(arr_local);
            });
    });
    document.querySelectorAll(".modification_btn").forEach((button) => {
        button.addEventListener("click", (event) => {
            const taskElem = event.target.closest("div");
            const taskId = parseInt(taskElem.getAttribute("data-id"));
            const task = arr_local.find(t => t.id === taskId);
            
            if (task) {
                new_Name.value = task.name;
                new_Description.value = task.description;
                new_Date_inp.value = task.date;
                new_Status_select.value = task.status_select;
                new_Important_select.value = task.important_select;
                div_of_modification.classList.toggle('hidden');
                add_modification.addEventListener('click', (e) => {
                    e.preventDefault();
                    task.name = new_Name.value;
                    task.description = new_Description.value;
                    task.date = new_Date_inp.value;
                    task.status_select = new_Status_select.value;
                    task.important_select = new_Important_select.value;
                    save_Local_storage(arr_local);
                    affichage(arr_local);
                    div_of_modification.classList.toggle('hidden');
                });
            }
        });
    });
    document.querySelectorAll(".status_btn").forEach((button) => {
        button.addEventListener("click", (event) => {
            const taskElem = event.target.closest("div");
            const taskId = parseInt(taskElem.getAttribute("data-id"));
            const task = arr_local.find(t => t.id === taskId);
    
            if (task) {
                if (task.status_select === 'todo') {
                    task.status_select = 'doing';
                } else if (task.status_select === 'doing') {
                    task.status_select = 'done';
                } else {
                    task.status_select = 'todo';
                }
                save_Local_storage(arr_local);
                affichage(arr_local);
            }
        });
    });
}    
const arr_local = get_Local_storage();
affichage(arr_local);
                    