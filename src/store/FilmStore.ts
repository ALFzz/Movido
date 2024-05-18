import { makeAutoObservable } from "mobx";

export class FilmStore {
    
    constructor() {
        this._genres = [
            {id: 1, name: "Драма"},
            {id: 2, name: "Комедия"}
        ]
        this._films = [
            {
                id: 1,
                image : "./se7en.jpg",
                title : "Семь",
                rating: 9.2,
                year: 1995
                
            },
            {
                id: 2,
                image : "./sherlock.jpg",
                title : "Шерлок Холмс",
                rating: 7.6,
                year: 2009
            },
            {
                id: 3,
                image : "./taxi.jpg",
                title : "Такси",
                rating: 8.5,
                year: 1998
            },
            {
                id: 4,
                image : "./zodiac.jpg",
                title : "Зодиак",
                rating: 8.7,
                year: 2007
            },
            {
                id: 5,
                image: "./1+1.jpg",
                title: "1+1",
                rating: 9.4,
                year: 2001
            },

        ]
        makeAutoObservable(this)

    }

    setGenres(genres: any) {
        this._genres = genres;
    }

    setFilms(films: any) {
        this._films = films;
    }

    get genres() {
        return this._genres;
    }

    get films() {
        return this._films;
    }

    
    _films: any
    _genres: any
    _user: any
}