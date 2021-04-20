const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// app.set ("port",process.env.PORT || 3000);
app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));

//load the quotes JSON
 const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", (req, res) =>
  res.send("<h1>Elisha's Quote Server!!  Ask me for quotes or random quotes</h1>"));


  app.get("/quotes", (req, res)=> 
    res.json(quotes));
  
  
//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//

app.get("/quotes/random", (req, res) =>{

  const randomQuote = pickFromArray(quotes)
  res.json(randomQuote)

  function pickFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
});


//Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT, () => console.log(`Your app is listening on port " + ${listener}.address().port)`));