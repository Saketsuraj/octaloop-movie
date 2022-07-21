let fetch = require('node-fetch');
var request = require('request');
let movieModel = require('../models/movie')

//get movie
exports.getMovie = async function (query, movieName) {
    let movie = {}
    let res = ''
    try {
        return new Promise((resolve,reject)=>{
            request('http://www.omdbapi.com/?t='+movieName+'&apikey=65554dbe', function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res = JSON.parse(body)
            movie['title'] = res.Title
            movie['year'] = parseInt(res.Year)
            movie['imdbRating'] = parseFloat(res.imdbRating)
            movie['poster'] = res.Poster

            let movieData = movieModel.exists({ title: res.Title })

            if(movieData){
                resolve(movie)
            }

            let data = new movieModel(movie)
            data.save(function (err, data) {
            if (err) return console.error(err);
            console.log(data['title'] + " saved to bookstore collection.");
            });
            resolve(movie)
        }
        })
    })
        } catch (e) {
            // Log Errors
            throw Error('Unable to get movie data. Try again.')
        }
}

//Stock-Search with fuzzy search
exports.updateMovieInfo = async function (query, dataToModify) {
    try {
        await movieModel.updateOne({ title: dataToModify.title }, { $set: {year: dataToModify.year} }).exec()
        // await data.save()
    } catch (e) {
        console.log(e)
        // Log Errors
        throw Error('Unable to update movie info. Try again.')
    }
}

//Get top rated movies
exports.getTopRatedMovie = async function (query, year) {
    try {
        let movies = await movieModel.find({year:year}).sort({imdbRating: "descending"});
        return movies
    } catch (e) {
        // Log Errors
        throw Error('Unable to get top rated movies. Try again.')
    }
}