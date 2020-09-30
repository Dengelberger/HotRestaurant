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
        name: "name",
        phone: "phone",
        mail: "email",
        id: "id"
    }
];

var waitList = [
    {
        name: "name",
        phone: "phone",
        email: "email",
        id: "id"
    }
];
//ROUTES

// =============================================================

// Basic route that sends the user first to the AJAX Page

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

// Create a new reservation based upon user input:

app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
 
    console.log(req.body.newReservation);
  
    tables.push(req.body.newReservation);
  
    res.json(req.body.newReservation);
  });
  app.get("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware

  

    console.log(tables);
  
    res.json(tables);
  });

  

    console.log(tables);
  
    res.json(tables);
  });

  

    console.log(tables);
  
    res.json(tables);
  });

  

    console.log(tables);
  
    res.json(tables);
  });

  

    console.log(tables);
  
    res.json(tables);
  });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
