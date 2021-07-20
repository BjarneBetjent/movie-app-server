# Backend for movie buffs

Server for the movie buffs application.
Created to hide the API key
Made with Nodejs and Expressjs

[Live demo hosted on heroku](https://movie-buffies.herokuapp.com/)

Run alongside the [Web-app](https://github.com/BjarneBetjent/Movie-Application) to feed it with movie information. 

## Installation

To get movie information, generate your own API key on [Themoviedb.org](https://www.themoviedb.org/).

Once this repo is cloned, create a .env file in the root of the project,
and add your API key like so: 
```
API_KEY="key here without quotes"
```

install the project:
```
npm install
```

To run the project:
```
npm start
```

Alternatively use:
```
npm run dev
```
to run the project during development for automatic restart of the server on file saves. 

