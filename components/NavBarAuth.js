/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBarAuth() {
  return (
    <Navbar className="nav-topbar" collapseOnSelect expand="lg" bg="light" variant="light" style={{ margin: 0, padding: 0 }} sticky="top">
      <Container className="nav-topbar-container" style={{ display: 'flex', alignItems: 'center' }}>
        <Link className="nav-logo" passHref href="/">
          <Navbar.Brand>
            <Image
              src="/Background.png"
              alt="Stack Overflow"
              height={50}
              width={180}
              style={{ objectFit: 'cover', height: '100%' }}
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="button-link">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link className="nav-topbar-links" passHref href="/about">
              <Nav.Link>About</Nav.Link>
            </Link>
            <Button variant="danger" onClick={signOut}>Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
