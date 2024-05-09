import './Registration.scss'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Header } from '../Header/Header';
import { Button } from 'react-bootstrap';
import { Footer } from '../Footer/Footer';

export function Registration() {
    return (
        <>

        <Header/>

        <div className='reg-full'>
            <h1 className='reg-title  mb-0'>Регистрация</h1>

            <div className='reg-form'>

                <FloatingLabel 
                    controlId="floatingPassword"
                    label=" Придумайте Логин"
                    className=' position-absolute reg-login'>
                    <Form.Control type="login" placeholder="Password" />
                 </FloatingLabel>

                 
                <FloatingLabel
                    controlId="floatingInput"
                    label=" Напишите Email"
                    className="mb-5 position-absolute   reg-email"
                    // style={{ width: '1000px' }}
                    >
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>


                <FloatingLabel 
                    controlId="floatingPassword"
                    label="Придумайте Пароль"
                    className=' position-absolute reg-password'>
                    <Form.Control type="password" placeholder="Password" />
                 </FloatingLabel>

                 

                <Button  className=' reg-btn btn-primary  '>Зарегистрироваться</Button>
            </div>

            <div className='reg-footer position-absolute  start-0 end-0 '>
                <Footer/>
            </div>
            
        </div>


            
    
        </>
    )
}