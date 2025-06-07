import { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Spinner } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Context } from './main';
import { check } from './http/userAPI';
import { Header } from './Components/Header/Header';
import { AppRouter } from './Components/AppRouter/AppRouter';
import { Footer } from './Components/Footer/Footer'; // ⬅️ Импортируем Footer

const App = observer(() => {
    const { user } = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        check()
            .then(() => {
                user.setUser(true);
                user.setIsAuth(true);
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <Spinner animation={"grow"} />;
    }

    return (
        <div className="d-flex flex-column min-vh-100">
            <BrowserRouter>
                <Header />
                <div className="flex-grow-1">
                    <AppRouter />
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
});

export default App;
