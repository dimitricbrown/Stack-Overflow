/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteSingleAnswers } from '../api/answerData';
import { useAuth } from '../utils/context/authContext';

function AnswerCard({ answerObj, onUpdate }) {
  const { user } = useAuth();
  // FOR DELETE, WE NEED TO REMOVE THE BOOK AND HAVE THE VIEW RERENDER,
  // SO WE PASS THE FUNCTION FROM THE PARENT THAT GETS THE BOOKS
  const deleteThisAnswer = () => {
    if (window.confirm(`Delete ${answerObj.title}?`)) {
      deleteSingleAnswers(answerObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '100%', color: 'black' }}>
      <Card.Body>
        <Card.Text>{answerObj.title}</Card.Text>
        <Card.Text>{answerObj.details}</Card.Text>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            {answerObj.uid === user.uid ? (
              <Link href={`/answers/edit/${answerObj.firebaseKey}`} passHref>
                <Button variant="outline-warning" style={{ height: '100%' }}>EDIT</Button>
              </Link>
            ) : ''}
            {answerObj.uid === user.uid ? (
              <Button variant="outline-secondary" onClick={deleteThisAnswer} className="m-2" style={{ height: '100%' }}>
                DELETE
              </Button>
            ) : ''}
          </div>
          {answerObj.uid === user.uid ? (
            <div style={{ display: 'flex' }}>
              <img
                src={user.photoURL}
                alt={user.displayName}
                style={{
                  height: '30px',
                  width: '30px',
                  borderRadius: '50%',
                  marginRight: '10px',
                }}
              />
              <p>{user.displayName}</p>
            </div>
          ) : ''}
        </div>

      </Card.Body>
    </Card>
  );
}

AnswerCard.propTypes = {
  answerObj: PropTypes.shape({
    title: PropTypes.string,
    details: PropTypes.string,
    image: PropTypes.string,
    questionID: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default AnswerCard;
