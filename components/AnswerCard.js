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
        {answerObj.uid === user.uid ? (
          <Link href={`/answers/edit/${answerObj.firebaseKey}`} passHref>
            <Button variant="info">EDIT</Button>
          </Link>
        ) : ''}
        {answerObj.uid === user.uid ? (
          <Button variant="outline-secondary" onClick={deleteThisAnswer} className="m-2">
            DELETE
          </Button>
        ) : ''}
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
