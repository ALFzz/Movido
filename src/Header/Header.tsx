import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Header.scss'
import { useContext } from 'react';
import { Context } from '../main';
import { observer } from 'mobx-react-lite';
import { Button } from 'react-bootstrap';


 export const Header = observer(() => {
  const {user} = useContext(Context)
  
  return (
    <>
      {!user.isAuth ?
              <Navbar className=" fixed-top pb-0 mb-2 border-bottom  head-border-7" bg="black" data-bs-theme="dark">
              <Container >
              <Navbar.Brand className='head-brand' href="/">Movido</Navbar.Brand>
                <Nav > 
                  <Nav.Link className="head-mid-links " href="/">Главная</Nav.Link>
                  <Nav.Link className="head-mid-links" href="/catalog"> Все Фильмы</Nav.Link>
                  <Nav.Link className="head-mid-links" href="/catalog">Детективы</Nav.Link>
                  <Nav.Link className="head-mid-links" href="/catalog">Боевики</Nav.Link>
                </Nav>
    
                <Nav  > 
                  <Nav.Link className='head-enter'  onClick={() => user.setIsAuth(true)}  >Вход</Nav.Link>
                  <Nav.Link  className='head-reg' href="/registration">Регистрация</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
                
        
        :
        <Navbar className=" fixed-top pb-0 mb-2 border-bottom  head-border-7" bg="black" data-bs-theme="dark">
                <Container >
                <Navbar.Brand className='head-brand' href="/">Movido</Navbar.Brand>
                  <Nav > 
                    <Nav.Link className="head-mid-links " href="/catalog">Главная</Nav.Link>
                    <Nav.Link className="head-mid-links" href="/catalog"> Все Фильмы</Nav.Link>
                    <Nav.Link className="head-mid-links" href="/catalog">Детективы</Nav.Link>
                    <Nav.Link className="head-mid-links" href="/catalog">Боевики</Nav.Link>
                  </Nav>
      
                  <Nav  > 
                    
                    <Nav.Link  className='head-reg text-white' href="/profile">Личный кабинет</Nav.Link>
                  </Nav>
                </Container>
              </Navbar>

      }  

        
     
 
    </>

  )
});

// export default Header;
