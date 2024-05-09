import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import './Profile.scss'
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
export function Profile() {
    return (

        <>
            <Header/>

            <div className='full'>
                <h1 className='cabinet-title'>Личный кабинет</h1>

                <div className='info-cabinet'>
                    <span>
                        <h2 className='info-title' >Логин</h2> 
                        <h4 className='info-ans'>ALFzz</h4>
                    </span>

                    <span>
                        <h2 className='info-title' >Почта</h2> 
                        <h4 className='info-ans'>qiranem@gmail.com</h4>
                    </span>

                    <Button  className=' btn btn-primary  '>Выйти</Button>
                </div>

                <h1 className='fav-title'>Любимые Фильмы</h1>
                <div className='wrap'>
                    <ListGroup  className='bas'>
                        <ListGroup.Item className='fas'>Люди в черном (1997)</ListGroup.Item>
                        <ListGroup.Item className='fas'>1+1 (2011)</ListGroup.Item>
                        <ListGroup.Item className='fas'>Такси (1998)</ListGroup.Item>
                        <ListGroup.Item className='fas'>Такси (1998)</ListGroup.Item>

                    

                    </ListGroup>
                </div>


                
                    

                

            </div>

            
            <Footer/>

           
        </>
    )
}