import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.scss'


export const Header = () => {
  return (
    <>
      <Navbar className="border-bottom border-primary border-7" bg="black" data-bs-theme="dark">
        <Container>
        <Navbar.Brand className='brand' href="#home">Movido</Navbar.Brand>
          <Nav > 
            <Nav.Link className="mid-links" href="#home">Главная</Nav.Link>
            <Nav.Link className="mid-links" href="#features">Фильмы</Nav.Link>
            <Nav.Link className="mid-links" href="#detectives">Детективы</Nav.Link>
            <Nav.Link className="mid-links" href="#">Боевики</Nav.Link>
          </Nav>

          <Nav className='right-links' > 
            <Nav.Link  className='text-white' href="#pricing">Вход</Nav.Link>
            <Nav.Link  className='text-white'  href="#pricing">Регистрация</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
 
    </>

  )
}
