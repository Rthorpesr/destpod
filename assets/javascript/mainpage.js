$( document ).ready(function()
     {

         $(".dropdown-trigger").dropdown();
    
    
         $("#submit-button").on("click", function(event) 
              {
                   event.preventDefault();
                      
                   var inlocation = $('#location').val();
                   //console.log("Starting Location:" +inlocation);  
                   var indestination = $('#destination').val();
                   //console.log("Your Destination:" +indestination);
                   
                   if ((inlocation == 0) && (indestination == 0)) 
                        {
                            // Starting Location and Destination are blank
                           // console.log("MISSING THE LOCATION");
                           // console.log("Both missing - Starting Location:" +inlocation);
                           // console.log("Both missing - Your Destination:" +indestination);
                            $('audio#pop1')[0].play()
                            //$('#location').val('Location cannot be blank').css('color', 'red');
                           // $('#destination').val('Destination cannot be blank').css('color', 'red');
                        }
                    else
                        if ((inlocation == 0) && (indestination !== 0))
                             {
                                  // Starting Location is blank and Destination is not
                                 // console.log("Just Location missing - Starting Location:" +inlocation);
                                  $('audio#pop2')[0].play()
                             //     $('#location').val('Location cannot be blank').css('color', 'red');
                             }
                        else
                           if ((indestination == 0) && (inlocation !== 0)) 
                                  {
                                       //  Destination is blank and Starting Location is not
                                      // console.log("MISSING THE DESTINATION");
                                       //console.log("Just Dest missing - Your Destination:" +indestination);    
                                       $('audio#pop3')[0].play()
                                      // $('#destination').val('Destination cannot be blank').css('color', 'red');
                                  }  
              })        
    })