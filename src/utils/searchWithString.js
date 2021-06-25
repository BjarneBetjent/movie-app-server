const axios = require("axios");

const searchWithString = async (searchString) =>
{
    const queryString = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&page=1&include_adult=false&query=${searchString}`;

    try
    {
        //if (searchString === "err") throw "error";
        const searchResult = await axios.get(queryString);
        return trimMovieDetails(searchResult);
    }
    catch (error)
    {
        throw "Unable to find movie";
    }
}

const trimMovieDetails = (movieArray) =>
{
    let movieArrayTrimmed = [];
    
    for (let i = 0; i < movieArray.data.results.length; i++)
    {       
        const trimmedMovie = {
            id: movieArray.data.results[i].id,
            title: movieArray.data.results[i].title,
            originalTitle: movieArray.data.results[i].original_title,
            posterPath: movieArray.data.results[i].poster_path,
            overview: movieArray.data.results[i].overview,
            releaseDate: movieArray.data.results[i].release_date
        }
        movieArrayTrimmed.push(trimmedMovie);
    }
    return movieArrayTrimmed;
}


module.exports = searchWithString;