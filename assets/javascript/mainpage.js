$( document ).ready(function() {

    $(".dropdown-trigger").dropdown();
    
    var inLocation = "500 E. Libert Road, Rockville, MD";
var inDestination = "thorpesr"
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

// search for special characters
   // var str = $('#Search').val();
    var str = inDestination
    if(/^[a-zA-Z0-9- ]*$/.test(str) == false) 
         {
              console.log("Desination can not have special charcters: " +inDestination);
              $('#err-msg').text ('your made a mistake')
            
         }
})