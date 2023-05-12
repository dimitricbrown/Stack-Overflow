import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewQuestionDetails } from '../../api/mergeData';
import AnswerCard from '../../components/AnswerCard';
import { getQuestionAnswers } from '../../api/questionData';
import AnswerForm from '../../components/forms/AnswerForm';

// Import the modified createAnswers function that uses fetch
import { createAnswers } from '../../api/answerData';

export default function ViewAnswer() {
  const [singleDetails, setAnswerDetails] = useState({});
  const [answers, setAnswers] = useState([]);
  const router = useRouter();
  const { firebaseKey } = router.query;

  // TODO: make call to API layer to get the data
  useEffect(() => {
    viewQuestionDetails(firebaseKey).then(setAnswerDetails);
  }, [firebaseKey]);

  useEffect(() => {
    getQuestionAnswers(firebaseKey).then(setAnswers);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAnswerSubmit = (answer) => {
    createAnswers(firebaseKey, answer)
      .then((data) => {
        setAnswers([...answers, data]);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="mt-5">
      <div className="single-question">
        <h2>Question： {singleDetails.title}</h2>
        <p style={{ marginButton: '100px' }}>{singleDetails.definition}</p>
      </div>
      <h5 style={{ marginTop: '80px' }}>{answers.length} Answers</h5>
      <div className="AnswerCardShow d-flex flex-wrap" style={{ marginTop: '20px' }}>
        {answers.map((answer) => (
          <AnswerCard key={answer.firebaseKey} answerObj={answer} onUpdate={getQuestionAnswers} />
        ))}
      </div>
      <div className="mt-5">
        <h5>Your Answer</h5>
        <AnswerForm obj={{}} questionId={firebaseKey} onSubmit={handleAnswerSubmit} />
      </div>
    </div>
  );
}
