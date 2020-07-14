var Today = (moment().format("MMMM D, YYYY"))
    $("#currentDay").text(Today);

//Task update with click
$("#task").on("click", "p", function(){
    console.log("<p> was clicked");
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
$("#task").on("blur", "textarea", function(){
  //get the textareas; current value/text
    var text = $(this)
      .val()
      .trim();
    console.log(text)
//     // get teh parent ul's id attribute
//     var status = $(this)
//       .closest(".list-group")
//       .attr("id")
//       .replace("list-", "");

//     //get the task's position in the list of other li elements
//     var index = $(this)
//       .closest(".list-group-item")
//       .index();

//     tasks[status][index].text = text;
//     saveTasks();

    //recreate p element
    var taskP = $("<p>")
      .addClass("m-1")
      .text(text);

    // replace textarea with p element
    $(this).replaceWith(taskP);
  });    