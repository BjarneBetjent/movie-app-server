const axios = require("axios");

/**
 * Make API request with the given search string
 * @param {*} searchString 
 * @returns 
 */
const searchWithString = async (searchString) =>
{
    const queryString = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&page=1&include_adult=false&query=${searchString}`;

    try
    {
        const searchResult = await axios.get(queryString);
        return trimMovieDetails(searchResult);
    }
    catch (error)
    {
        throw "Unable to find movie";
    }
}

/**
 * 
 * @param {*} apiResult 
 * @returns New array with just the movie information we're interested in
 */
const trimMovieDetails = (apiResult) =>
{
    let movieArrayTrimmed = [];    
    
    for (let i = 0; i < apiResult.data.results.length; i++)
    {    
        if(!apiResult.data.results[i].poster_path) continue;
        
        const trimmedMovie = {
            id: apiResult.data.results[i].id,
            title: apiResult.data.results[i].title,
            originalTitle: apiResult.data.results[i].original_title,
            posterPath: apiResult.data.results[i].poster_path,
            overview: apiResult.data.results[i].overview,
            releaseDate: apiResult.data.results[i].release_date
        }  
        console.log(trimmedMovie);
              
        movieArrayTrimmed.push(trimmedMovie);
    }
    
    if(movieArrayTrimmed.length < 1) throw "No movies";
    return movieArrayTrimmed;
}


module.exports = searchWithString;