const taskList = [];
var list = document.createElement('list');

class Task{
    constructor(taskName, description, deadline, timeBlock, allowedApps){
        this.taskName = taskName;
        this.description = description;
        this.deadline = deadline;
        this,timeBlock = timeBlock;
        this.allowedApps = allowedApps;
    }
}

function addTask() {
    var taskName = document.getElementById('tName').value;
    var description = document.getElementById('tDesc').value;
    var deadline = document.getElementById('tDL').value;
    var timeBlock = document.getElementById('tTimeBlock').value;
    var allowedApps = document.getElementById('tApps').value;

    let task = new Task(taskName, description, deadline, timeBlock, allowedApps);
    taskList.push(task)

    var item = document.createElement('li');

    // Set its contents:
    item.appendChild(document.createTextNode(task.taskName));

    // Add it to the list:
    list.appendChild(item);

    document.getElementById('foo').appendChild(list);
    //for (var i = 0; i < taskList.length; i++)
    //    console.log(taskList[i].allowedApps);
}

function launch(){
    urls = taskList[0].allowedApps.split(",");
    for (var i = 0; i < urls.length; i++){
        console.log(urls[i]);
        window.open(urls[i]);
    }
}

