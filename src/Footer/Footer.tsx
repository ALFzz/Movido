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
      <Navbar className="foot-bot    border-top head-border-7" bg="black" data-bs-theme="dark">
        <Container >
        <Navbar.Brand className='foot-brand' href="/">Movido</Navbar.Brand>
          <Nav className='foot-wrap' > 
            <Nav.Link className="foot-mid-links " href="/aboutus">О нас</Nav.Link>
            <Nav.Link className="foot-mid-links" href="/contacts">Контакты</Nav.Link>
            <Nav.Link className="foot-mid-links" href="/faq">FAQ</Nav.Link>
          </Nav>

          <Nav className='foot-right-links' > 
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
