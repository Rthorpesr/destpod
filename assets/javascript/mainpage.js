$( document ).ready(function() {

    $(".dropdown-trigger").dropdown();
    


    // Listen API 

    function displayPods() {

        var podcastDiv = $("<div>").attr("id", "podcast-holder");
       $("#podcast-container").append(podcastDiv);

        event.preventDefault();

        var key = "2ce331e1a7d34875879ce8fc37eded8f";

        // retrieve topic from input box
        var topic = $("#topic").val();;
        console.log("topic: " + topic)

        var minLength = 40;

        var maxLength = 60;

        var queryURL = "https://listen-api.listennotes.com/api/v2/search?q=" + topic + "&sort_by_date=0&type=episode&offset=0&len_min=" + minLength + "&len_max=" + maxLength + "&genre_ids=68%2C82&published_before=1390190241000&published_after=0&only_in=title%2Cdescription&language=English&safe_mode=1";

        $.ajax({
            url: queryURL,
            method: 'GET',
            headers: {
                "X-ListenAPI-Key": key
            }
            }).then(response => {
                
                console.log(response);

                $("#podcast-holder").empty();

                var podArr = response.results;

                for (i=0; i < 9; i++) {

                    //creating a div to hold the podcast info
                    var div = $("<div>");
                    div.addClass("")
                    div.attr("id", "podDiv");

                    // retrieving the thumbnail data
                    var podThumbnail = podArr[i].thumbnail;
                
                    // creating an element to hold the thumbnail
                    var thumb = $("<img>").attr("src", podThumbnail);

                    // Displaying the thumbnail
                    div.append(thumb);

                    // Retrieving the podcast title
                    var podTitle = podArr[i].title_original

                    // Creating an element to hold the title
                    var title = $("<p>").text(podTitle);

                    // Displaying the title
                    div.append(title);

                    // Creating an element to hold the audio
                    var audio = $("<audio controls>");
                    var audioSrc = $("<source>").attr("src", podArr[i].audio);
                    audio.append(audioSrc);
                    
                    // Displaying the audio
                    div.append(audio);

                    // putting the entire div below the previous
                    $("#podcast-holder").append(div);
                    console.log(i);
                }

                console.log("WE got 5");
            });
    }


    $(document).on("click", "#submit-button", displayPods);
    
    $("#submit-button").on("click", function(){
        $("#submission-box").hide();
        $("#podcast-card").show();
    });


    
})


