import { useContext, useEffect } from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../main';
import { fetchGenres } from '../http/FilmAPI';
export const CreateFilm = ({show, onHide}) => {
    const {film} = useContext(Context)

    useEffect(() => {
        fetchGenres().then(data => {
            console.log(data)
            film.setGenres(data)
        })
        
    })
    return(
        <>
        <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить Фильм
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Dropdown>
                <Dropdown.Toggle>Выберите жанр</Dropdown.Toggle>
                <Dropdown.Menu>
                    {film.genres.map(genre =>
                        <Dropdown.Item key={genre.id}>{genre.name}</Dropdown.Item>
                    )}
                    
                </Dropdown.Menu>
            </Dropdown>
        </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
        <Button variant={'outline-success'} onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
        </>
    )
}