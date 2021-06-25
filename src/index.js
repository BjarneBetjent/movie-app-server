require('dotenv').config();
const express = require("express");
const cors = require("cors");

const searchRouter = require("./routers/searchRouter");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use("/search", searchRouter);

/**
 * Serve the react build
 * Cors might be redundant once implemented
 */
app.get("/", (req, res) =>
{
    console.log(`Main route`);
    res.send("hey");    
});




app.listen(port, () => 
{
    console.log(`Server up and running at port ${port}`);
});