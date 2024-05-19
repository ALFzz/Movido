import './Authorization.scss'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Header } from '../Header/Header';
import { Button } from 'react-bootstrap';
import { Footer } from '../Footer/Footer';
import { login, registration } from '../http/userAPI';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';

export function Autorization() {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const click = async () => {
        if (isLogin) {
            const response = await login(email, password)
            console.log(response)
        } else {
            const response = await registration(email, password)
            console.log(response)
        }
    }


    return (
        <>

        <Header/>

        <div className='auth-full'>
            <h1 className='auth-reg-title  mb-0'>{isLogin ? "Вход" : "Регистрация"}</h1>

            <div className='form'>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email"
                    className="mb-5 position-absolute   auth-email"
                    // style={{ width: '1000px' }}
                    >
                    <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="name@example.com" />
                </FloatingLabel>


                <FloatingLabel 
                    controlId="floatingPassword"
                    label="Пароль"
                    className=' position-absolute auth-password'>
                    <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                 </FloatingLabel>

                <Button className='auth-btn btn-primary' onClick={click} >{isLogin ?  "Войти" : "Регистрация"}</Button>
            </div>

            <div className='auth-footer position-absolute  start-0 end-0 '>
                <Footer/>
            </div>
            
        </div>


            
    
        </>
    )
}