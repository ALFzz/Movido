import { useContext, useEffect, useState, ChangeEvent } from "react";
import { Dropdown, Form, Modal, Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "../../main";
import { createFilm, fetchGenres } from "../../http/FilmAPI";
import { IGenre } from "../../types/filmTypes";

interface CreateFilmProps {
    show: boolean;
    onHide: () => void;
}

export const CreateFilm = observer(({ show, onHide }: CreateFilmProps) => {
    const context = useContext(Context);
    if (!context) throw new Error("Context is null");
    const { film } = context;

    const [name, setName] = useState<string>("");
    const [releaseYear, setReleaseYear] = useState<number | "">("");
    const [file, setFile] = useState<File | null>(null);
    const [rating, setRating] = useState<string>("");
    const [director, setDirector] = useState<string>("");
    const [smallDesc, setSmallDesc] = useState<string>("");
    const [bigDesc, setBigDesc] = useState<string>("");
    const [country, setCountry] = useState<string>("");

    const selectFile = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const addFilm = () => {
        if (!file || !film.selectedGenre?.id) return;

        const rate = Number.parseFloat(rating);
        const formData = new FormData();
        formData.append("name", name);
        formData.append("release_year", `${releaseYear}`);
        formData.append("img_card", file);
        formData.append("rating", `${rate}`);
        formData.append("director", director);
        formData.append("small_description", smallDesc);
        formData.append("big_description", bigDesc);
        formData.append("country", country);
        formData.append("genreId", film.selectedGenre.id.toString());

        createFilm(formData).then(() => onHide());
    };

    useEffect(() => {
        fetchGenres().then((data: IGenre[]) => {
            film.setGenres(data);
        });
    }, [film]);

    return (
        <Modal
            variant="dark"
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить фильм
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mb-3">
                        <Dropdown.Toggle>
                            {film.selectedGenre?.name || "Выберите жанр"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {film.genres.map((genre: IGenre) => (
                                <Dropdown.Item
                                    onClick={() => film.setSelectedGenre(genre)}
                                    key={genre.id}
                                >
                                    {genre.name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Form.Control
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название фильма"
                    />
                    <Form.Control
                        value={releaseYear}
                        onChange={(e) => setReleaseYear(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите год выпуска фильма"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        onChange={selectFile}
                        type="file"
                    />
                    <Form.Control
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        className="mt-3"
                        placeholder="Введите рейтинг фильма"
                    />
                    <Form.Control
                        value={director}
                        onChange={(e) => setDirector(e.target.value)}
                        className="mt-3"
                        placeholder="Введите имя режиссёра"
                    />
                    <Form.Control
                        value={smallDesc}
                        onChange={(e) => setSmallDesc(e.target.value)}
                        className="mt-3"
                        placeholder="Напишите краткое описание фильма"
                    />
                    <Form.Control
                        value={bigDesc}
                        onChange={(e) => setBigDesc(e.target.value)}
                        className="mt-3"
                        placeholder="Напишите полное описание фильма"
                    />
                    <Form.Control
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="mt-3"
                        placeholder="Введите страну создания фильма"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={addFilm}>
                    Добавить фильм
                </Button>
            </Modal.Footer>
        </Modal>
    );
});
