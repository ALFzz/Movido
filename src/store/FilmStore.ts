import { makeAutoObservable } from "mobx";

export class FilmStore {
    
    constructor() {
        this._genres = []
        this._films = []
        this._selectedGenre = {}
        makeAutoObservable(this)

    }

    setGenres(genres: any) {
        this._genres = genres;
    }

    setFilms(films: any) {
        this._films = films;
    }

    setFilmsByGenre(films: any, genre1: any) {
        for (let i = 0; i < films.length; i++){

            // console.log(i)
            if (films[i].genreId != genre1)
                 { 
                    films.splice(i, 1)
                    i--
                    // console.log("del")
                    
                 } 
             
          }
        console.log(films)
        this._films = films;
    }

    setSelectedGenre(genre: any) {
        // console.log(genre)
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

    
    _films: any
    _genres: any
    _user: any
    _genreId: any
    _selectedGenre: any
}