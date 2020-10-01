// Required modules:
var express = require("express");
var path = require("path");

// Port access information:
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());




// Arrays for user input to tables and to wait list. DATA

var tables = [
    {
        customerName: "name",
        phoneNumber: "phone",
        customerEmail: "email",
        customerID: "id"
    }
];

var waitList = [
    {
      customerName: "name",
      phoneNumber: "phone",
      customerEmail: "email",
      customerID: "id"
    }
];
//ROUTES

// =============================================================

// Basic route that sends the user first to the AJAX Page

//the form to fill out for a table reservation
app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});
//shows the tables array
app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});
//shows the main page where you can click tables or reservation.
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});
//shows the waitlist on the tables page after showing the current tables reserved.
app.get("/api/waitlist", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});
// Create a new reservation based upon user input:

app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    console.log(req.body);

    if(tables.length<5) {
  
    tables.push(req.body);
  } else {
    waitlist.push(req.body);
  }

    res.json(req.body);

  });

  app.get("/api/tables", function(req, res) {
    
    
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware

    console.log(tables);
  
    res.json(tables);
  });

  app.get("/api/waitlist", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware

    console.log(waitlist);
  
    res.json(waitlist);
  });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
