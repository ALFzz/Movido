import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.scss';

import icontg from '/icons/Telegram.svg';
import iconInstagram from '/icons/Youtube.svg';
import iconVK from '/icons/Vkontakte.svg';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
      <Navbar
          expand="lg"
          className="foot-bot border-top foot-border-7"
          bg="black"
          data-bs-theme="dark"
      >
        <Container className="d-flex justify-content-between align-items-center flex-wrap">

          {/* Левая часть — логотип */}
          <div className="footer-section footer-left">
            <NavLink className="foot-brand text-white" to="/">Movido</NavLink>
          </div>

          {/* Центральная часть — ссылки */}
          <div className="footer-section footer-center">
            <Nav className="foot-links-center">
              <NavLink className="foot-mid-links" to="/aboutus">О нас</NavLink>
              <NavLink className="foot-mid-links" to="/contacts">Контакты</NavLink>
              <NavLink className="foot-mid-links" to="/faq">FAQ</NavLink>
            </Nav>
          </div>

          {/* Правая часть — иконки */}
          <div className="footer-section footer-right">
            <Nav className="foot-right-links">
              <Navbar.Brand>
                <img src={icontg} width={70} height={70} alt="Telegram" />
              </Navbar.Brand>
              <Navbar.Brand>
                <img src={iconInstagram} width={70} height={70} alt="YouTube" />
              </Navbar.Brand>
              <Navbar.Brand>
                <img src={iconVK} width={70} height={70} alt="VK" />
              </Navbar.Brand>
            </Nav>
          </div>

        </Container>
      </Navbar>
  );
};
