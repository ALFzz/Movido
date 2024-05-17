const GenreRouter = require('express');
const genrerouter = new GenreRouter();
const genreController = require('../controllers/genreController')
const checkRole = require('../middleware/checkRoleMiddleware')

genrerouter.post('/', checkRole('ADMIN'), genreController.create)
genrerouter.get('/', genreController.getAll)

module.exports = genrerouter;