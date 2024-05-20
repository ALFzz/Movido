import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const createFilm = async (film) => {
    const {data} = await $authHost.post('api/film', film); 
    return data
}

export const fetchB = async (genreId) => {
    const {data} = await $host.get('api/film/' + genreId);
    return data
}

export const fetchFilms = async () => {
    const {data} = await $host.get('api/film',);
    return data
}

export const fetchOneFilm = async (id) => {
    const {data} = await $host.get('api/film/' + id)
    return data
}

