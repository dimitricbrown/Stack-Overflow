/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Container, Nav } from 'react-bootstrap';

export default function SideNavBar() {
  return (
    <div className="sidebar">
      <Container className="sidebar-container">
        <Nav className="sidebar-flex-column-nav">
          {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
          <Link className="ps-relative" passHref href="/">
            <Nav.Link className="nav-topic">Questions</Nav.Link>
          </Link>
          <Link className="ps-relative" passHref href="/company">
            <Nav.Link className="nav-topic">Companies</Nav.Link>
          </Link>
          <Link className="ps-relative" passHref href="/company/new">
            <Nav.Link className="nav-topic">Create Company</Nav.Link>
          </Link>
          <Link className="ps-relative" passHref href="/profile">
            <Nav.Link className="nav-topic">Profile</Nav.Link>
          </Link>
          <Link className="ps-relative" passHref href="/users">
            <Nav.Link className="nav-topic">Users</Nav.Link>
          </Link>
        </Nav>
      </Container>
    </div>
  );
}
