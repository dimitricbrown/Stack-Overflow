import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteSingleQuestion } from '../api/questionData';

function QuestionCard({ questionObj, onUpdate }) {
  const deleteThisQuestion = () => {
    if (window.confirm(`Delete ${questionObj.title}?`)) {
      deleteSingleQuestion(questionObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{questionObj.title}</Card.Title>
        <Card.Text>
          {questionObj.definition}
        </Card.Text>
        <Link href={`/questions/${questionObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE BOOK DETAILS  */}
        <Link href={`/questions/edit/${questionObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisQuestion} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

QuestionCard.propTypes = {
  questionObj: PropTypes.shape({
    title: PropTypes.string,
    definition: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default QuestionCard;
