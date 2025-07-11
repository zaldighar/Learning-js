

const taskInput = document.getElementById("taskInput")

const addTaskBtn = document.getElementById("addTaskBtn")
const taskList = document.getElementById('taskList')
const clearCompletedBtn = document.getElementById("clearCompletedBtn")

let tasks  = []

function addTask(){
    const taskText = taskInput.value.trim()
    if(taskText !== ''){
        tasks.push({ text: taskText})
        taskInput.value = ''
        displayTasks()
    }
}

