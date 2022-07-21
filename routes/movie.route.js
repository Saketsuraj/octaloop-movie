var express = require('express');
var router = express.Router();

var MovieController = require('../controllers/movie.controller');
const { authenticateJWT } = require('../middleware/authenticate');

router.get('/movie/:moviename', authenticateJWT, MovieController.getMovie);
router.put('/movie/update', authenticateJWT, MovieController.updateMovie);
router.get('/movie/top-rated/:year', authenticateJWT, MovieController.getTopRatedMovie)

module.exports = router;