import { Button } from "react-bootstrap";
import "./FilmPage.scss";
import { Heart } from "../../Components/Heart/Heart";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchOneFilm } from "../../http/FilmAPI";
import { IFilm } from "../../types/filmTypes";


enum Genre {
    Детектив = 1,
    Боевик,
    Спорт,
    Приключения,
    Триллер,
    Комедия,
}

export function FilmPage() {
    const [film, setFilm] = useState<IFilm | null>(null);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (!id) return;
        fetchOneFilm(Number(id)).then((data) => setFilm(data));
    }, [id]);

    if (!film) return <div>Загрузка...</div>;

    const genreName = Genre[film.genreId] || "Неизвестно";
    const imageSrc =
        film.img_film_page != null
            ? `http://localhost:5000/${film.img_film_page}`
            : "/public/bkg.jpg";

    return (
        <>
            <div className="film-cont">
                <div className="film-blur"></div>
                <div className="film-main-info">
                    <h1 className="film-title">{film.name}</h1>
                    <div className="film-rate-date">
                        <p className="film-rate">{film.rating}</p>
                        <p className="film-year">{film.release_year}</p>
                    </div>

                    <h3 className="film-genres">{genreName}</h3>
                    <h3 className="film-description">{film.small_description}</h3>

                    <div className="film-btns">
                        <Button className="film-btn">Смотреть</Button>
                        <Heart />
                    </div>
                </div>
                <img className="film-big-image" src={imageSrc} alt={film.name} />
            </div>

            <div className="film-line"></div>

            <div className="container">
                <div className="filminfo">
                    <div className="filminfo-info">
                        <h1 className="filminfo-info-title">Информация</h1>
                        <div>
                            <h2 className="filminfo-info-desc">Страна</h2>
                            <h2 className="filminfo-info-ans">{film.country}</h2>
                        </div>
                        <div>
                            <h2 className="filminfo-info-desc">Жанр</h2>
                            <h2 className="filminfo-info-ans">{genreName}</h2>
                        </div>
                        <div>
                            <h2 className="filminfo-info-desc">Режиссёр</h2>
                            <h2 className="filminfo-info-ans">{film.director}</h2>
                        </div>
                    </div>

                    <div className="filminfo-plot">
                        <h1 className="filminfo-plot-title">Сюжет</h1>
                        <h2 className="filminfo-plot-desc">{film.big_description}</h2>
                    </div>
                </div>
            </div>
        </>
    );
}
