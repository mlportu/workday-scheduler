var Today = (moment().format("MMMM D, YYYY"));
    console.log(Today)

var currentDate = function(){
    $("#currentDay").text(Today);
}

currentDate();