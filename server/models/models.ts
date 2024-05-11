import { DECIMAL, INTEGER, STRING } from "sequelize";

const sequelized = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelized.define('user', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: STRING, unique: true, allowNull: false},
    password: {type: STRING, allowNull: false}

})

const Genre = sequelized.define('genre', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: STRING, unique: true, allowNull: false}
})

const Film = sequelized.define('film', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: STRING, allowNull: false},
    director: {type: STRING, allowNull: false},
    release_year: {type: INTEGER, allowNull: false},
    rating: {type: DECIMAL(1,1), allowNull: false},
    image: {type: STRING, allowNull: false},
    small_description: {type: STRING, allowNull: false},
    big_description: {type: STRING, allowNull: false},
    country: {type: STRING, allowNull: true},
    img_card: {type: STRING, allowNull: false},
    img_film_page: {type: STRING, allowNull: false}

})

const Favourites = sequelized.define('favourite', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true}
})

const FilmGenres = sequelized.define('film', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true}
})

Film.belongsToMany(User, {through: Favourites})
User.belongsToMany(Film, {through: Favourites})

Film.belongsToMany(Genre, {through: FilmGenres})
Genre.belongsToMany(Film, {through: FilmGenres})

module.exports = {
    User,
    Genre,
    Film,
    Favourites,
    FilmGenres,
}

