import { $host } from "./index";
import { IFilm, IGenre } from "../types/filmTypes";

export const createFilm = async (film: FormData): Promise<IFilm> => {
    const { data } = await $host.post<IFilm>("api/film", film);
    return data;
};

export const fetchFilms = async (): Promise<IFilm[]> => {
    const { data } = await $host.get<IFilm[]>("api/film");
    return data;
};

export const fetchOneFilm = async (id: number): Promise<IFilm> => {
    const { data } = await $host.get<IFilm>(`api/film/${id}`);
    return data;
};

export const fetchGenres = async (): Promise<IGenre[]> => {
    const { data } = await $host.get<IGenre[]>("api/genre");
    return data;
};
