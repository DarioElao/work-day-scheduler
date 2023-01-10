//start of the function 
$(function () {

    var date = dayjs();
    //date format
    $("#currentDay").text(date.format("MMM D, YYYY"));

    //function that compares time slots and assign color classes (.present, .past, .future)
    function matchTime() {
        var actualTime = dayjs().hour();
      
        $(".time-block").each(function (index, timeBox) {
          
          var id = timeBox.id;
          var timeSlot = parseInt(id.split("-")[1]);

          if (actualTime === timeSlot) {
            $(this).addClass("present");
          } else if (actualTime > timeSlot) {
            $(this).addClass("past");
          } else {
            $(this).addClass("future");
          }
        });
      }

      //functions that saves users input on time slots
      $(".saveBtn").on("click", function () {

        //gets time slot 
        var hourId = $(this).parent()[0].id
       
        //get user input
        const userData = $(this).prev()[0].value;
    
        //saves user input with time slot and saves it in the local storage
        localStorage.setItem(hourId, userData);
      });
      
      //function that retrieves data from the local storage
      $(".description").each(function(){
        
        var textArea = $(this).parent()[0].id
        var textValue = localStorage.getItem(textArea)
    
      $(this)[0].value = textValue
    
      })

      matchTime();

      });
    




  