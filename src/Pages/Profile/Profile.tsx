import './Profile.scss'
import { Button } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { Context } from '../../main';
import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from '../../utils/consts';
import { CreateFilm } from '../../Components/CreateFilm/CreateFilm';
export function Profile() {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    const [filmVisible, setFilmVisible] = useState(false)

    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
      navigate(HOME_ROUTE)
    }



    return (

        <>
            <div className="container">
                <div className="profile-page">
                    <div className="profile-content">
                        <Button className='profile-btn btn-primary' onClick={() => setFilmVisible(true)}>Создать
                            фильм</Button>
                        <Button onClick={logOut} className='profile-btn btn-primary'>Выйти</Button>
                        <CreateFilm show={filmVisible} onHide={() => setFilmVisible(false)}/>
                    </div>

                </div>
            </div>


        </>
    )
}