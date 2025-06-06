import './Authorization.scss'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { login, registration } from '../../http/userAPI';
import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HOME_ROUTE, LOGIN_ROUTE } from '../../utils/consts';
import { observer } from 'mobx-react-lite';
import { Context } from '../../main';

export const Autorization = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {

        try{
            let data
            if (isLogin) {
                data = await login(email, password)
    
            } else {
                data = await registration(email, password)
                
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(HOME_ROUTE)
        }
        catch (err: any) {
            alert(err.response.data.message)
        }
        
    }


    return (
        <>
            <div className="container">
                <div className='auth-full'>
                    <h1 className='auth-reg-title  mb-0'>{isLogin ? "Вход" : "Регистрация"}</h1>

                    <div className='form'>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email"
                            className="mb-5   auth-email"
                            // style={{ width: '1000px' }}
                        >
                            <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)}
                                          placeholder="name@example.com"/>
                        </FloatingLabel>


                        <FloatingLabel
                            controlId="floatingPassword"
                            label="Пароль"
                            className=' auth-password'>
                            <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)}
                                          placeholder="Password"/>
                        </FloatingLabel>

                        <Button className='auth-btn btn-primary'
                                onClick={click}>{isLogin ? "Войти" : "Регистрация"}</Button>
                    </div>
                </div>
            </div>


        </>
    )
})