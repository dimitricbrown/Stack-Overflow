import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getQuestions } from '../api/questionData';
import QuestionCard from '../components/QuestionCard';

function Home() {
  const [questions, setQuestions] = useState([]);

  const getAllTheQuestions = () => {
    getQuestions()
      .then((data) => {
        if (Array.isArray(data)) {
          setQuestions(data);
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
    <div className="text-center my-4">
      <Link href="/questions/new" passHref>
        <Button>Add A Question</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {/* check if questions is an array before mapping */}
        {Array.isArray(questions)
         && questions.map((question) => (
           <QuestionCard key={question.firebaseKey} questionObj={question} onUpdate={getAllTheQuestions} />
         ))}
      </div>
    </div>
  );
}

export default Home;
