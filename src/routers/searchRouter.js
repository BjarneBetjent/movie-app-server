const express = require("express");

const searchWithString = require("./../utils/searchWithString");
const searchRouter = express.Router();

/**
 * Searching for movies with the given string
 * in req.query.searchString
 */
searchRouter.get("/movie", async (req, res) =>
{
    try
    {
        const searchResult = await searchWithString(req.query.searchString);
        res.status(200).send(searchResult);
    }
    catch(error)
    {       
        res.status(400).send(error);
    }
});

module.exports = searchRouter;