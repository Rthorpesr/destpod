$( document ).ready(function() {

    $(".dropdown-trigger").dropdown();
    
    var inLocation = "500 E. Libert Road, Rockville, MD";
var inDestination = "thorpesr@"
console.log("starting Location: " +inLocation);
console.log("Your Destination: " +inDestination);''



  inLocation = "Smith";
  console.log("inLocation should be spaces");

  if (inLocation.length == 0)
  {
    console.log("THere");
      console.log("Please enter a starting Location:" +inLocation);
    }
    else {
        console.log("fore");
        console.log("Here is the starting Location:" +inLocation);
        console.log("Here is the starting Destination:" +inDestination);
        

    }

// Starting Location can't be blank
$('#contact_name').on('input', function() {
	var input=$(this);
	var is_name=input.val();
	if(is_name){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
});

// Destination can't be blank
$('#contact_name').on('input', function() {
	var input=$(this);
	var is_name=input.val();
	if(is_name){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
});
         }
})