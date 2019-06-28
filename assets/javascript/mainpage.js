$( document ).ready(function() {

    $(".dropdown-trigger").dropdown();
    
    var inLocation = "500 E. Libert Road, Rockville, MD";
var InDestination = "908 Henry Drive, Silver Spring, MD"
console.log("starting Location: " +inLocation);
console.log("Your Destination: " +InDestination);''



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
        

    }

// search for special characters
   // var str = $('#Search').val();
    var str = InDestination
    if(/^[a-zA-Z0-9- ]*$/.test(str) == false) 
         {
              console.log("Desination can not have special charcters: " +Destination);
         }
})