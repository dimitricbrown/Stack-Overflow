import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteSingleQuestion } from '../api/questionData';
import { useAuth } from '../utils/context/authContext';

function QuestionCard({ questionObj, onUpdate }) {
  const { user } = useAuth();
  const deleteThisQuestion = () => {
    if (window.confirm(`Delete ${questionObj.title}?`)) {
      deleteSingleQuestion(questionObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '100%', color: 'black' }}>
      <Card.Body>
        <Link href={`/questions/${questionObj.firebaseKey}`} passHref>
          <Card.Title style={{ color: '#0074cc' }}>{questionObj.title}</Card.Title>
        </Link>
        <Card.Text>
          {questionObj.definition}
        </Card.Text>
        {/* DYNAMIC LINK TO EDIT THE BOOK DETAILS  */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {questionObj.uid === user.uid ? (
            <Link href={`/questions/edit/${questionObj.firebaseKey}`} passHref>
              <Button variant="outline-warning">EDIT</Button>
            </Link>
          ) : ''}
          {questionObj.uid === user.uid ? (
            <Button variant="outline-warning" onClick={deleteThisQuestion} className="m-2">
              DELETE
            </Button>
          ) : ''}
          <Link passHref href="/profile">
            {questionObj.uid === user.uid ? (
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
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
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

QuestionCard.propTypes = {
  questionObj: PropTypes.shape({
    title: PropTypes.string,
    definition: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default QuestionCard;
