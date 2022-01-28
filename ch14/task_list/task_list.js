"use strict";

$(document).ready( () => {

    $("#add_task").click( () => {   
        const textbox = $("#task");
        const task = textbox.val();
        if (task === "") {
            alert("Please enter a task.");
            textbox.focus();
        } else {
            // add task  to web storage 
            let tasks = localStorage.E14tasks || "";  // "" is default
            let tasksArr = tasks.split("\n");
            localStorage.E14tasks = tasks.concat(task, "\n");
            
            // clear task text box and re-display tasks
            textbox.val("");
            $("#task_list").val(localStorage.E14tasks);
            
            //add expiration date to web storage
            let expiration = new Date();
            expiration.setDate(expiration.getDate() + 21);
            let expirations = localStorage.E14expirations || "";
            localStorage.E14expirations = expirations.concat(expiration.toString(), "\n");   //Don't forget your delimiter!~
            
            
                 
            textbox.focus();
        }
    });
    
    $("#clear_tasks").click( () => {
        localStorage.removeItem("E14expirations")
        localStorage.removeItem("E14tasks");
        $("#task_list").val("");
        $("#task").focus();
    }); 
    
    // display tasks on initial load
    //$("#task_list").val(localStorage.E14tasks);

    // check for expired tasks

    if(localStorage.E14tasks && localStorage.E14expirations) { //Double sure!

    //get tasks/expirations in strings.
    let tasks = localStorage.E14tasks;
    let expirations = localStorage.E14expirations;

    //split strings into arrays via "\n" delimiter.
    let tasksArr = tasks.split("\n");
    let expirationsArr = expirations.split("\n");

    //Get rid of last delimiter element.
    tasksArr.pop();
    expirationsArr.pop();
    
    

    //Compare datetimes of expirations to current date.
    let now = new Date();
    
    //From the oldest to youngest expirations
    for(let i = expirationsArr.length - 1; i >= 0; i--) {

        let expiration = new Date(expirationsArr[i].toString());
        
        //If expired, pop em out!
        if(now.getTime() > expiration.getTime()) {
            expirationsArr.pop();
            tasksArr.pop();
        }
        
        if(tasksArr) {
            tasks = tasksArr.join("\n") + "\n";
            localStorage.E14tasks = tasks;

            expirations = expirationsArr.join("\n") + "\n";
            localStorage.E14expirations = expirations;

        } else {
            localStorage.removeItem("E14tasks");
            localStorage.removeItem("E14expirations");
        }   
            

    }

    }
    $("#task_list").val(localStorage.E14tasks);

    $("#task").focus();
});