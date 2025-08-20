import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../db";

/* ==============================
   USER
================================ */
interface UserAttributes {
    id: number;
    email: string;
    password: string;
    role: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id" | "role"> {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: number;
    public email!: string;
    public password!: string;
    public role!: string;
}

User.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        email: { type: DataTypes.STRING, unique: true, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false },
        role: { type: DataTypes.STRING, defaultValue: "USER" },
    },
    { sequelize, modelName: "user" }
);

/* ==============================
   GENRE
================================ */
interface GenreAttributes {
    id: number;
    name: string;
}

interface GenreCreationAttributes extends Optional<GenreAttributes, "id"> {}

class Genre extends Model<GenreAttributes, GenreCreationAttributes> implements GenreAttributes {
    public id!: number;
    public name!: string;
}

Genre.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING, unique: true },
    },
    { sequelize, modelName: "genre" }
);

/* ==============================
   FILM
================================ */
interface FilmAttributes {
    id: number;
    name: string;
    director: string;
    release_year: number;
    rating: number;
    small_description: string;
    big_description: string;
    country?: string;
    img_card?: string;
    img_film_page?: string;
    genreId?: number;
}

interface FilmCreationAttributes extends Optional<FilmAttributes, "id" | "img_card" | "img_film_page" | "country" | "genreId"> {}

class Film extends Model<FilmAttributes, FilmCreationAttributes> implements FilmAttributes {
    public id!: number;
    public name!: string;
    public director!: string;
    public release_year!: number;
    public rating!: number;
    public small_description!: string;
    public big_description!: string;
    public country?: string;
    public img_card?: string;
    public img_film_page?: string;
    public genreId?: number;
}

Film.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING, allowNull: false },
        director: { type: DataTypes.STRING, allowNull: false },
        release_year: { type: DataTypes.INTEGER, allowNull: false },
        rating: { type: DataTypes.FLOAT, allowNull: false },
        small_description: { type: DataTypes.STRING, allowNull: false },
        big_description: { type: DataTypes.TEXT, allowNull: false },
        country: { type: DataTypes.STRING },
        img_card: { type: DataTypes.STRING },
        img_film_page: { type: DataTypes.STRING },
    },
    { sequelize, modelName: "film" }
);

/* ==============================
   ASSOCIATIONS
================================ */
Genre.hasMany(Film, { foreignKey: "genreId" });
Film.belongsTo(Genre, { foreignKey: "genreId" });

/* ==============================
   EXPORT
================================ */
export { User, Genre, Film };
