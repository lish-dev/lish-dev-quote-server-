const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));

//load the quotes JSON
 const Quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", (request, response) =>
  response.send("<h1>Elisha's Quote Server!  Ask me for /quotes/random, or /quotes</h1>"));

  app.get('/quotes.json', function(request, response) {
    response.send("You asked for route /quotes.json")
  });
  
  app.get('/quotes/random', function(request, response) {
    response.send("You asked for route /quotes/random")
  });


//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT, () => console.log(`Your app is listening on port " + ${listener}.address().port)`));