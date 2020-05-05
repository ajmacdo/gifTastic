var topics = ["walnut", "acorn", "oak", "maple", "pine", "spruce", "palm"];

// This .on("click") function will trigger the AJAX Call
$("#find-tree").on("click", function (event) {
  // event.preventDefault() can be used to prevent an event's default behavior.
  // Here, it prevents the submit button from trying to submit a form when clicked
  event.preventDefault();

  // Here we grab the text from the input box
  var tree = $("#tree-input").val();

  // Here we construct our URL
  //var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
  //7xlv8Rb7mNjHo2IqanbpW1vEfnrEMOmW ----------giphy API key
  var queryURL = `https://api.giphy.com/v1/gifs/search?q=${tree}&api_key=7xlv8Rb7mNjHo2IqanbpW1vEfnrEMOmW&limit=10`;
  //xhr.done(function (data) {
  // console.log("success got data", data);
  // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
  // and display it in the div with an id of movie-view
  $.ajax({
    url: queryURL,
    method: "GET",
  })
  
  .then(function (response) {
    // $("#buttons-view").empty();
    console.log(response.data);
    var giphyResponse = response.data;

    // Looping through the array of trees
    for (var i = 0; i < giphyResponse.length; i++) {
      console.log(giphyResponse[i].url);

      if (giphyResponse[i].rating !== "r" && giphyResponse[i].rating !== "pg-13") {
        // Creating a div for the gif
        var gifDiv = $("<div>");

        // Storing the result item's rating
        var rating = giphyResponse[i].rating;

        // Creating a paragraph tag with the result item's rating
        var p = $("<p>").text("Rating: " + rating);

        // Creating an image tag
        var personImage = $("<img>");

        var giphyImage = $("<img>").attr("src", giphyResponse[i].url);
        //$("#picture-box").empty();
        $("#picture-box").append(giphyImage);


        // Giving the image tag an src attribute of a proprty pulled off the
        // result item
        personImage.attr("src", giphyResponse[i].images.fixed_height.url);

        // Appending the paragraph and personImage we created to the "gifDiv" div we created
        gifDiv.append(p);
        gifDiv.append(personImage);

        // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
        $("#gifs-appear-here").prepend(gifDiv);
      }






    




      //Then dynamicaly generating buttons for each movie in the array.
      // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
      //
      // Adding a class
      //a.addClass("movie");
      // Adding a data-attribute with a value of the movie at index i
      //a.attr("data-name", movies[i]);
      // Providing the button's text with a value of the movie at index i
      //a.text(movies[i]);
      // Adding the button to the HTML
    }
  });
});


// -----------------------------------------------------------------------

//Your app should take the topics in this array and create buttons in your HTML. Try using a loop that appends a button for each string in the array.

//When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

//When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

//Under every gif, display its rating (PG, G, so on).

//This data is provided by the GIPHY API.
//Only once you get images displaying with button presses should you move on to the next step.

//Add a form to your page that takes a value from a user input box and adds it to your topics array. Then make a function call that takes each topic in the array and remakes the buttons on the page.
