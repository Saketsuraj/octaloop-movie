# octaloop-movie

# Steps to run the project
1. Clone the project from github using git clone.
2. Create a mongo database. DB name: movies, user:localhost, port:27017
3. npm install with node version 17.18.0
4. RUN node index.js

Nodejs: 17.18.0
Tech Stack: Nodejs, Expressjs, MongoDB and JWT.

# Note

We need to pass JWT as bearer token for accessing all the APIs.

# APIs

● Searching the API for a movie title/IMDB ID and saving the results to the local database.
Route: /movie/:moviename. We need to pass the movie name as argument to get the data from OMDB API. Also, we can add these data to mongo database.

● Update movie details in the local database.
Route: /movie/update. In this API, we can modify the existing data in database.

● Show top rated movies for a given release year and rating source from the local
database.
Route: /movie/top-rated/:year. In this API, we can find the top rated movies year wise.

● Implement token based authentication to access the aforementioned features.
Route: /signup. We can create user to get the JWT token.
