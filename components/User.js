import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext'; // Modify the import statement

export default function User() {
  const { user } = useAuth();
  console.warn(user);
  return (
    <Card style={{
      width: '10rem',
      margin: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
    >
      <div style={{
        overflow: 'hidden',
        borderRadius: '50%',
        height: '100px',
        width: '100px',
        margin: 'auto',
        marginTop: '10px',
      }}
      >
        <Card.Img variant="top" src={user.photoURL} alt={user.displayName} style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
      </div>
      <Card.Body style={{ textAlign: 'center' }}>
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
