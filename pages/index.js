import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap';
import { getQuestions } from '../api/questionData';
import QuestionCard from '../components/QuestionCard';
import RightCard from '../components/RightCard';

function Home() {
  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(0);

  const getAllTheQuestions = () => {
    getQuestions()
      .then((data) => {
        if (Array.isArray(data)) {
          setQuestions(data);
          setCount(data.length); // here is updating the count
        } else {
          console.error('Invalid response from API: expected an array');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getAllTheQuestions();
  }, []);

  return (
    <div>
      <Row>
        <Col sm={8}>
          <div className="containerQuestion">
            <div
              style={{
                marginTop: '50px',
                marginBottom: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <h3>All Questions</h3>
              <div>
                <Link href="/questions/new" passHref>
                  <Button variant="info">Ask Question</Button>
                </Link>
              </div>
            </div>
            <h5 style={{ marginTop: '60px' }}>{count} Questions</h5>
            <div className="d-flex flex-wrap" style={{ width: '100%', color: 'black' }}>
              {/* check if questions is an array before mapping */}
              {Array.isArray(questions) && questions.map((question) => <QuestionCard key={question.firebaseKey} questionObj={question} onUpdate={getAllTheQuestions} />)}
            </div>
          </div>
        </Col>
        <Col sm={4}>
          <RightCard />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
