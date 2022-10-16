const taskList = [];
var list = document.createElement("ul");
var timerList = document.createElement('ul');
class Task {
  constructor(taskName, description, deadline, timeBlock, allowedApps) {
    this.taskName = taskName;
    this.description = description;
    this.deadline = deadline;
    this.timeBlock = timeBlock;
    this.allowedApps = allowedApps;
  }
}

function addTask() {
  var taskName = document.getElementById("tName").value;
  var description = document.getElementById("tDesc").value;
  var deadline = document.getElementById("tDL").value;
  var timeBlock = document.getElementById("tTimeBlock").value;
  var allowedApps = document.getElementById("tApps").value;

  let task = new Task(taskName, description, deadline, timeBlock, allowedApps);
  taskList.push(task);

  var item = document.createElement("li");

  // Set its contents:
  item.appendChild(document.createTextNode(task.taskName));

  // Add it to the list:
  list.appendChild(item);

  document.getElementById("tasks-list").appendChild(list);
  //   //for (var i = 0; i < taskList.length; i++)
  //   //    console.log(taskList[i].allowedApps);
  item.setAttribute("class", "task-name");
  //Add button
  var btn = document.createElement("button");
  btn.innerHTML = "Launch";
  document.getElementById("tasks-list").appendChild(btn);
    btn.addEventListener("click", () => {
      urls = task.allowedApps.split(",");
      for (var i = 0; i < urls.length; i++) {
        console.log(urls[i]);
        window.open(urls[i], '_blank');
      }
    });
//   btn.addEventListener("click", launch);
  btn.setAttribute("class", "launch-btn");

  var timerItem = document.createElement('li');
    timerItem.appendChild(document.createTextNode(""));
    timerList.appendChild(timerItem);
    document.getElementById("foo").appendChild(timerList); 

    var countDownDate = new Date(deadline).getTime();
    
    var countDownEvent = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    timerItem.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    

    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(countDownEvent);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
    }, 1000);
}

// function launch() {
//   urls = taskList[0].allowedApps.split(",");
//   for (var i = 0; i < urls.length; i++) {
//     console.log(urls[i]);
//     window.open(urls[i]);
//   }
// }



