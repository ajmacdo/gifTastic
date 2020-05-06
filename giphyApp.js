//var giphyResponse = ["walnut", "acorn", "oak", "maple", "pine", "spruce", "palm"];

$("button").on("click", function(){
//function displayTreeThings() {
  // Here we grab the text from the input box
  var tree = $(this).attr("data-name");
  // Here we construct our URL
  //7xlv8Rb7mNjHo2IqanbpW1vEfnrEMOmW ----------giphy API key
  var queryURL = `https://api.giphy.com/v1/gifs/search?q=${tree}&api_key=7xlv8Rb7mNjHo2IqanbpW1vEfnrEMOmW&limit=10`;
  
  $.ajax({
    url: queryURL,
    method: "GET"
  })

  .then(function(response) {
    //$("picture-box").text(JSON.stringify(response));
    console.log(response.data);

var giphyResponse = response.data;

    // function renderButtons() {
    //   $("#rendered-buttons").empty();

    // Looping through the array of trees
    for (var i = 0; i < giphyResponse.length; i++) {
      console.log(giphyResponse[i]);
 
      if (giphyResponse[i].rating !== "r" && giphyResponse[i].rating !== "pg-13") {
        
        var gifDiv = $("<div>");
        var rating = giphyResponse[i].rating;
        var p = $("<p>").text("Rating: " + rating);
        var giphyImage = $("<img>");
        giphyImage.attr("src", giphyResponse[i].images.fixed_height.url);

// Appending the paragraph and personImage we created to the "gifDiv" div we created
gifDiv.append(p);
gifDiv.append(giphyImage);

                // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                $("#picture-box").prepend(gifDiv);
              }
            }
          });
        });



//   var a = $("<button>");
//       // Adding a class of tree to our button
//       a.addClass("tree");
//       // Adding a data-attribute
//       a.attr("data-name", giphyResponse[i]);
//       // Providing the initial button text
//       a.text(giphyResponse[i]);
//       // Adding the button to the render-buttons div
//       $("#rendered-buttons").append(a);
//     });
// }   


//  // This function handles events where one button is clicked
//  $("#find-tree").on("click", function(event) {
//   event.preventDefault();

//   // This line grabs the input from the textbox
//   var tree = $("#tree-input").val().trim();

//   // Adding the movie from the textbox to our array
//   giphyResponse.push(tree);
//   console.log(giphyResponse);

//   // Calling renderButtons which handles the processing of our movie array
//   renderButtons();
// });


// Creating an image tag
// var giphyImage = $("<img>").attr("src", t[i].images.fixed_height.url);
// //$("#picture-box").empty();
// $("#picture-box").append(giphyImage);



// Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
//$("#picture-box").prepend(gifDiv);

// Function for displaying the tree info
      // $(document).on("click", ".tree", displayTreeThings);

      // // Calling the renderButtons function to display the initial buttons
      // renderButtons();





// -----------------------------------------------------------------------

//Your app should take the giphyResponse in this array and create buttons in your HTML. Try using a loop that appends a button for each string in the array.

//When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

//When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

//Under every gif, display its rating (PG, G, so on).

//This data is provided by the GIPHY API.
//Only once you get images displaying with button presses should you move on to the next step.

//Add a form to your page that takes a value from a user input box and adds it to your giphyResponse array. Then make a function call that takes each topic in the array and remakes the buttons on the page.
