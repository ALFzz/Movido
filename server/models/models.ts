import { DECIMAL, FLOAT, INTEGER, STRING, TEXT } from "sequelize";

const sequelized = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelized.define('user', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: STRING, unique: true, allowNull: false},
    password: {type: STRING, allowNull: false},
    role: {type: STRING, defaultValue: 'USER'}

})

const Genre = sequelized.define('genre', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: STRING, unique: true}
})

const Film = sequelized.define('film', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: STRING, allowNull: false},
    director: {type: STRING, allowNull: false},
    release_year: {type: INTEGER, allowNull: false},
    rating: {type: FLOAT, allowNull: false},
    small_description: {type: STRING, allowNull: false},
    big_description: {type: TEXT, allowNull: false},
    country: {type: STRING, allowNull: true},
    img_card: {type: STRING, },
    img_film_page: {type: STRING,}

})

Genre.hasMany(Film)
Film.belongsTo(Genre)



module.exports = {
    User,
    Genre,
    Film,
}

