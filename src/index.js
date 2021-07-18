require('dotenv').config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const searchRouter = require("./routers/searchRouter");

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());

app.use("/search", searchRouter);
app.use(express.static(path.join(__dirname, "..", "build")));

const options = {
    root: path.join(__dirname, "..", "build")
}


/**
 * Serve the react build
 * Cors might be redundant once implemented
 */
app.get("/", (req, res) =>
{
    try
    {
        console.log(`Sending file`);
        
        res.sendFile("index.html", options);
    }
    catch (error)
    {
        console.log("Error check it out", error);
        
    }
});

app.listen(port, () => 
{
    console.log(`Server up and running at port ${port}`);
});