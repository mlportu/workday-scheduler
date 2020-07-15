tasks = [];

//load tasks
var loadTasks = function(){
    tasks = JSON.parse(localStorage.getItem("tasks"))
    if(!tasks){
        tasks={};
    }
    for (i=0; i<tasks.length; i++){
        var index = i
        console.log(index);
        console.log(tasks[i])
        
        var firstHour = index + 8
        var taskP = $("<p>").addClass("text-item-" + firstHour).text(tasks[i])
        console.log(firstHour)
        console.log(taskP);
        $(".task-" + firstHour).append(taskP);
    }
    }
    
var Today = (moment().format("MMMM D, YYYY"))
    $("#currentDay").text(Today);

//Task update with click
$(".task").on("click", "p", function(){
    // console.log("<p> was clicked");
    var text =$(this)
      .text()
      .trim();
    var textInput =$("<textarea>")
      .addClass("form-control")
      .val(text);
  
    $(this).replaceWith(textInput);
     textInput.trigger("focus");
  });

  //Task needs to be updated
$(".task").on("blur", "textarea", function() {
  //get the textareas; current value/text
    var text = $(this)
      .val()
      .trim();
    console.log(text)

    //recreate p element
    var taskP = $("<p>")
      .addClass("m-1")
      .text(text);

    // replace textarea with p element
    $(this).replaceWith(taskP);
  });    

  //save tasks

  $(".saveBtn").on("click", function(){
    //   console.log("<save button> was clicked");
      var index = $(".saveBtn").index(this);
    //   console.log(index)
      tasks[index] = $(this).parent().find("p").text();
    //   console.log(tasks)
      localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  loadTasks();