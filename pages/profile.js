import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { useAuth } from '../utils/context/authContext';
import User from '../components/User';
import QuestionCard from '../components/QuestionCard';
import { getUserQuestions } from '../api/questionData';

export default function Profile() {
  const { user } = useAuth();
  const [userQuestions, setUserQuestions] = useState([]);

  const getUserQuestion = () => {
    getUserQuestions(user.uid)
      .then((data) => {
        if (Array.isArray(data)) {
          setUserQuestions(data);
        } else {
          console.error('Invalid response from API: expected an array');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getUserQuestion();
  }, [user.uid]);

  return (
    <div className="profile-page">
      <Row>
        <Col sm={4}>
          <User userObj={user} />
        </Col>
        <Col sm={8}>
          <h3>My questions</h3>
          <Card style={{ width: '80%', marginTop: '20px' }}>
            {userQuestions.map((question) => (
              <QuestionCard key={question.uid} questionObj={question} onUpdate={getUserQuestion} />
            ))}
          </Card>
        </Col>
      </Row>
    </div>
  );
}
