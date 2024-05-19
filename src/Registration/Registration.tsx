import './Registration.scss'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Header } from '../Header/Header';
import { Button } from 'react-bootstrap';
import { Footer } from '../Footer/Footer';
import { useState } from 'react';
import { registration } from '../http/userAPI';
import { useLocation } from 'react-router-dom';

export function Registration() {



    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const signIn = async () => {
        const response = await registration(email, password)
        console.log(response)
    }
    return (
        <>

        <Header/>

        <div className='reg-full'>
            <h1 className='reg-title  mb-0'>Регистрация</h1>

            <div className='reg-form'>


                 
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