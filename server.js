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
  res.send(
    "<h1>Elisha's Quote Server!!  Ask me for quotes or random quotes</h1>"
  )
);

app.get("/quotes", (req, res) => res.json(quotes));

app.get("/quotes/random", (req, res) => {
  const randomQuote = pickFromArray(quotes);
  res.json(randomQuote);

  function pickFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
});

app.get("/quotes/search", (req, res) => {
  const searchTerm = req.query.searchTerm;
  const searchResult = quotes.filter((quotes1) => {
    if (
      quotes1.quote.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quotes1.author.toLowerCase().includes(searchTerm.toLowerCase())
    )
      return quotes1;
  });

  res.json(searchResult);
});

//Start our server so that it listens for HTTP requests!
const listener = app.listen(5555, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
