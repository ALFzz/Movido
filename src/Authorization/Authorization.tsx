import './Authorization.scss'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Header } from '../Header/Header';
import { Button } from 'react-bootstrap';
import { Footer } from '../Footer/Footer';

export function Autorization() {
    return (
        <>

        <Header/>

        <div className='auth-full'>
            <h1 className='auth-reg-title  mb-0'>Вход</h1>

            <div className='form'>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email"
                    className="mb-5 position-absolute   auth-email"
                    // style={{ width: '1000px' }}
                    >
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>


                <FloatingLabel 
                    controlId="floatingPassword"
                    label="Пароль"
                    className=' position-absolute auth-password'>
                    <Form.Control type="password" placeholder="Password" />
                 </FloatingLabel>

                <Button className='auth-btn btn-primary' >Войти</Button>
            </div>

            <div className='auth-footer position-absolute  start-0 end-0 '>
                <Footer/>
            </div>
            
        </div>


            
    
        </>
    )
}