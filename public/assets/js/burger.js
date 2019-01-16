// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  
     $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#bu").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {type: "POST",data: newBurger}).then(
        function() {console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    //start here
    $(".change-status").on("click", function(event) {
        var id = $(this).data("id");
        var status = true

        console.log("status changed to " + status)
    
        var orderStatus = {
          devoured : status
        };
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: orderStatus
        }).then(
          function() {
            console.log("changed sleep to", orderStatus);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
  
    $(".delete-burger").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      var id = $(this).data("id");
      console.log("delete-button clicked "+ id);
     
      $.ajax("/api/burgers/"+id, {type: "DELETE"}).then(
        function() {console.log("deleted burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  