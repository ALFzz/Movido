import { makeAutoObservable } from "mobx";
import { IFilm, IGenre } from "../types/filmTypes";
import _ from "lodash";

export class FilmStore {
    _films: IFilm[] = [];
    _genres: IGenre[] = [];
    _selectedGenre: IGenre | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    setGenres(genres: IGenre[]) {
        this._genres = genres;
    }

    setFilms(films: IFilm[]) {
        this._films = films;
    }

    setFilmsByGenre(films: IFilm[], genreId: number) {
        this._films = films.filter((f) => f.genreId === genreId);
    }

    setFilmsByYear(films: IFilm[]) {
        this._films = _.sortBy(films, "release_year").slice(0, 1);
    }

    setFilmsByYearReverse(films: IFilm[]) {
        this._films = _.sortBy(films, "release_year").slice(0, 2).reverse();
    }

    setSelectedGenre(genre: IGenre) {
        this._selectedGenre = genre;
    }

    get selectedGenre() {
        return this._selectedGenre;
    }

    get genres() {
        return this._genres;
    }

    get films() {
        return this._films;
    }
}
