import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteSingleAnswers } from '../api/answerData';

function AnswerCard({ answerObj, onUpdate }) {
  // FOR DELETE, WE NEED TO REMOVE THE BOOK AND HAVE THE VIEW RERENDER,
  // SO WE PASS THE FUNCTION FROM THE PARENT THAT GETS THE BOOKS
  const deleteThisAnswer = () => {
    if (window.confirm(`Delete ${answerObj.title}?`)) {
      deleteSingleAnswers(answerObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '80%', color: 'black' }}>
      <Card.Title>My Answer: {answerObj.title}</Card.Title>
      <Card.Body>
        <Card.Text>{answerObj.details}</Card.Text>
        <p>Answer: {answerObj.answer}</p>
        <Button variant="danger" onClick={deleteThisAnswer} className="m-2">
          DELETE
        </Button>
        <Button variant="danger" onClick={deleteThisAnswer} className="m-2">
          Add a answer
        </Button>
      </Card.Body>
    </Card>
  );
}

AnswerCard.propTypes = {
  answerObj: PropTypes.shape({
    answer: PropTypes.string,
    title: PropTypes.string,
    details: PropTypes.string,
    questionID: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default AnswerCard;
