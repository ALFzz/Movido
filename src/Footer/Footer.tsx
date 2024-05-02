import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.scss'
import icontg from '/icons/Telegram.svg'
import iconInstagram from '/icons/Youtube.svg';
import iconVK from '/icons/Vkontakte.svg';


export const Footer = () => {
  return (
    <>
      <Navbar className=" position-absolute start-0 end-0 border-top border-primary border-7" bg="black" data-bs-theme="dark">
        <Container >
        <Navbar.Brand className='brand' href="#home">Movido</Navbar.Brand>
          <Nav > 
            <Nav.Link className="mid-links " href="#home">О нас</Nav.Link>
            <Nav.Link className="mid-links" href="#features">Контакты</Nav.Link>
            <Nav.Link className="mid-links" href="#detectives">FAQ</Nav.Link>
          </Nav>

          <Nav className='right-links' > 
            <Navbar.Brand>
              <img src={icontg} width={70} height={70}/>
            </Navbar.Brand>

            <Navbar.Brand>
              <img src={iconInstagram} width={70} height={70}/>
            </Navbar.Brand>

            <Navbar.Brand>
              <img src={iconVK} width={70} height={70}/>
            </Navbar.Brand>
            
            
          </Nav>
        </Container>
      </Navbar>
 
    </>

  )
}
