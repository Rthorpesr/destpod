$( document ).ready(function() {

    $(".dropdown-trigger").dropdown();
    


    // Listen API 

    function displayPods() {

        var key = "2ce331e1a7d34875879ce8fc37eded8f";

        var query = "soccer";

        var minLength = 10;

        var maxLength = 300;

        var queryURL = "https://listen-api.listennotes.com/api/v2/search?q=" + query + "&sort_by_date=0&type=episode&offset=0&len_min=" + minLength + "&len_max=" + maxLength + "&genre_ids=68%2C82&published_before=1390190241000&published_after=0&only_in=title%2Cdescription&language=English&safe_mode=1";

        // query = $("#genre").val();

        $.ajax({
            url: queryURL,
            method: 'GET',
            headers: {
                "X-ListenAPI-Key": "2ce331e1a7d34875879ce8fc37eded8f"
            }
            }).then(response => {
                
                console.log(response);

                var podArr = response.results;

                for (i=0; i<5; i++) {
                
                    var thumb = $("<img>").attr("src", podArr[i].thumbnail);
                    $("#podcast-container").append(thumb);
                    $("#podcast-container").append("<br>");

                    var title = $("<p>").text(podArr[i].title_original);
                    $("#podcast-container").append(title);


                    var audio = $("<audio controls>");
                    var audioSrc = $("<source>").attr("src", podArr[i].audio);
                    audio.append(audioSrc);

                    $("#podcast-container").append(audio);
                    $("#podcast-container").append("<br>");
                    $("#podcast-container").append("<br>");
                }
            });


            var map;

            function initMap() {
                map = new google.maps.Map(document.getElementById('map'), {
                    center: {lat: -34.397, lng: 150.644},
                    zoom: 8
            });
            }

    }
    
})





