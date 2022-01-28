"use strict";

const displayTaskList = tasks => {
    let taskString = "";
    if (tasks.length > 0) {
        // convert stored date string to Date object
        tasks = tasks.map( task => [task[0], new Date(task[1])] );

        tasks.sort( (task1, task2) => {   // sort by date
            const date1 = task1[1]; // get Date object from task1
            const date2 = task2[1]; // get Date object from task2
            if (date1 < date2) { return -1; }
            else if (date1 > date2) { return 1; }
            else { return 0; }
        });

        taskString = tasks.reduce( (prev, curr) => {
            return prev + curr[1].toDateString() + " - " + curr[0] + "\n";
        }, ""); // pass initial value for prev parameter
    }

    $("#task_list").val(taskString);
    $("#task").focus();
};

$(document).ready( () => {
    const taskString = localStorage.E15tasks;
    const tasks = (taskString) ? JSON.parse(taskString) : [];
    $("#add_task").click( () => {
        const task = $("#task").val();
        const dateString = $("#due_date").val();
        const dueDate = new Date(dateString);
        
        if (task && dateString && dueDate != "Invalid Date") {
            const newTask = [task, dateString];  // store dateString
            tasks.push(newTask);
            localStorage.E15tasks = JSON.stringify(tasks);

            $("#task").val("");
            $("#due_date").val("");
            displayTaskList(tasks);
        } else {
            alert("Please enter a task and valid due date.");
            $("#task").select();
        }
    });
    
    $("#clear_tasks").click( () => {
        tasks.length = 0;
        localStorage.removeItem("E15tasks");
        $("#task_list").val("");
        $("#task").focus();
    });   
    
    $("#filter").click( () => {
        let searchTerm = prompt("What do you want to filter by (try task names/due date)?");
        if(!searchTerm) 
            displayTaskList(tasks);
        else {
            console.log(searchTerm);
            console.log(tasks.filter(index => index === ["1","1/2/22"]));
            let filteredTasks = tasks.filter(index => index.includes(searchTerm));
            console.log(filteredTasks);
            displayTaskList(filteredTasks);
        }

    });
    
    displayTaskList(tasks);
});