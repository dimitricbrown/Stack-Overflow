/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Container, Nav } from 'react-bootstrap';

export default function SideNavBar() {
  return (
    <Container className="sidebar">
      <Nav className="flex-column">
        {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
        <Link passHref href="/">
          <Nav.Link>Questions</Nav.Link>
        </Link>
        <Link passHref href="/company">
          <Nav.Link>Companies</Nav.Link>
        </Link>
        <Link passHref href="/company/new">
          <Nav.Link>Create Company</Nav.Link>
        </Link>
        <Link passHref href="/profile">
          <Nav.Link>Profile</Nav.Link>
        </Link>
        <Link passHref href="/users">
          <Nav.Link>Users</Nav.Link>
        </Link>
      </Nav>
    </Container>
  );
}
