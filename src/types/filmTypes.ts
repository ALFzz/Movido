export interface IGenre {
    id: number;
    name: string;
}

export interface IFilm {
    id: number;
    name: string;
    release_year: number;
    img_card: string;
    img_film_page?: string;
    rating: number;
    director: string;
    small_description: string;
    big_description: string;
    country: string;
    genreId: number;
}