require('dotenv').config();
const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

/**
 * Server the react build
 */
app.get("/", (req, res) =>
{
    console.log(`Main route`);
    res.send("hey");    
});

app.get("/search", (req,res) =>
{

});


app.listen(port, () => 
{
    console.log(`Server up and running at port ${port}`);
});