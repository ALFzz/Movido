import './Authorization.scss';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { login, registration } from '../../http/userAPI';
import { useContext, useState, ChangeEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HOME_ROUTE, LOGIN_ROUTE } from '../../utils/consts';
import { observer } from 'mobx-react-lite';
import { Context } from '../../main';
import { IUserToken } from '../../types/userTypes';

export const Authorization = observer(() => {
    const context = useContext(Context);
    if (!context) throw new Error("Context is null");

    const { user } = context;
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE;

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const click = async () => {
        try {
            let data: IUserToken;

            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }

            user.setUser(data);
            user.setIsAuth(true);
            navigate(HOME_ROUTE);
        } catch (err: any) {
            alert(err.response?.data?.message || 'Ошибка при авторизации');
        }
    };

    return (
        <div className="container">
            <div className="auth-full">
                <h1 className="auth-reg-title mb-0">{isLogin ? 'Вход' : 'Регистрация'}</h1>

                <div className="form">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email"
                        className="mb-5 auth-email"
                    >
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                            placeholder="name@example.com"
                        />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPassword" label="Пароль" className="auth-password">
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                    </FloatingLabel>

                    <Button className="auth-btn btn-primary" onClick={click}>
                        {isLogin ? 'Войти' : 'Регистрация'}
                    </Button>
                </div>
            </div>
        </div>
    );
});
