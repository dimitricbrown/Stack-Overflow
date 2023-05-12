import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';

export default function User() {
  const { user } = useAuth();
  console.warn(user);
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <div  style={{ overflow: 'hidden', borderRadius: '50%', height: '100px', width: '100px', margin: '0 auto' }}>
        <Card.Img variant="top" src={user.photoURL}  alt={user.displayName} style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
      </div>
      <Card.Body>
        <Card.Title>{user.displayName}</Card.Title>
        <p>{user.email}</p>
        <p>{user.metadata.lastSignInTime}</p>
      </Card.Body>
    </Card>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    photoURL: PropTypes.string,
    displayName: PropTypes.string,
    email: PropTypes.string,
    metadata: PropTypes.shape({
      lastSignInTime: PropTypes.string,
    }),
  }).isRequired,
};
