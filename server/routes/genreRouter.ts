const GenreRouter = require('express');
const genrerouter = new GenreRouter();
const genreController = require('../controllers/genreController')

genrerouter.post('/', genreController.create)
genrerouter.get('/', genreController.getAll)

module.exports = genrerouter;