import React from 'react';
import {
  Navbar, Container, Nav,
} from 'react-bootstrap';

export default function Footer() {
  return (
    <Navbar className="test" collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="bottom">
      <Container>
        <div className="fd footer-logo" />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="fd footer-nav">
            <div className="fd footer-block">
              <h5 className="footer-topic">STACK UNDERFLOW</h5>
              <ul className="footer-ul">
                <li>
                  <p className="footer-subtopic">Questions</p>
                </li>
                <li>
                  <p className="footer-subtopic">Help</p>
                </li>
              </ul>
            </div>
            <div className="fd footer-block">
              <h5 className="footer-topic">PRODUCTS</h5>
              <ul className="footer-ul">
                <li>
                  <p className="footer-subtopic">Teams</p>
                </li>
                <li>
                  <p className="footer-subtopic">Advertising</p>
                </li>
                <li>
                  <p className="footer-subtopic">Collectives</p>
                </li>
                <li>
                  <p className="footer-subtopic">Talent</p>
                </li>
              </ul>
            </div>
            <div className="fd footer-block">
              <h5 className="footer-topic">COMPANY</h5>
              <ul className="footer-ul">
                <li>
                  <p className="footer-subtopic">About</p>
                </li>
                <li>
                  <p className="footer-subtopic">Press</p>
                </li>
                <li>
                  <p className="footer-subtopic">Legal</p>
                </li>
                <li>
                  <p className="footer-subtopic">Terms of Service</p>
                </li>
              </ul>
            </div>
            <div className="fd footer-block">
              <h5 className="footer-topic">STACK EXCHANGE NETWORK</h5>
              <ul className="footer-ul">
                <li>
                  <p className="footer-subtopic">Technology</p>
                </li>
                <li>
                  <p className="footer-subtopic">Culture & Recreaction</p>
                </li>
                <li>
                  <p className="footer-subtopic">API</p>
                </li>
                <li>
                  <p className="footer-subtopic">Data</p>
                </li>
              </ul>
            </div>
          </Nav>
          <Nav className="fd footer-social">
            <ul className="footer-ul">
              <li>
                <p className="footer-sub-social">Blog</p>
              </li>
              <li>
                <p className="footer-sub-social">Facebook</p>
              </li>
              <li>
                <p className="footer-sub-social">Twitter</p>
              </li>
              <li>
                <p className="footer-sub-social">LinkedIn</p>
              </li>
              <li>
                <p className="footer-sub-social">Instagram</p>
              </li>
            </ul>
            <p className="footer-sub-social">2023 Stack Underflow</p>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
