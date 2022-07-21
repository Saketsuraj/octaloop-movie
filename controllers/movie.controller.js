var MovieService = require('../services/movie.service')    
//get Movie info
exports.getMovie = async function (req, res, next) {
    
    let movieName = req.params.moviename;
    try {
        var movie = await MovieService.getMovie({}, movieName)
        return res.status(200).json({ status: true, payload: movie });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

//Update movie info
exports.updateMovie = async function (req, res, next) {
    
    var dataToModify = req.body;
    console.log(dataToModify)
    try {
        var StocksSymbols = await MovieService.updateMovieInfo({}, dataToModify)
        return res.status(200).json({ status: true, message: 'Data updated successfully' });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

//Get top rated movies year wise
exports.getTopRatedMovie = async function (req, res, next) {
    
    var year = req.params.year;
    try {
        var movies = await MovieService.getTopRatedMovie({}, year)
        return res.status(200).json({ status: true, payload: movies });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}