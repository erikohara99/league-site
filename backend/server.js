const express = require("express");
const app = express();

// Route Pathing
const home = require("./routes/index.js");

// Using the Routes
app.use("/api", home);

// Starting Server
app.listen(3000, () => {console.log("Server started on port 3000...")});