import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewQuestionDetails } from '../../api/mergeData';
import AnswerCard from '../../components/AnswerCard';
import { getQuestionAnswers } from '../../api/questionData'; // added postAnswer function
import AnswerForm from '../../components/forms/AnswerForm';
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

  const handleAnswerSubmit = async (answer) => {
    await createAnswers(firebaseKey, answer); // send the answer to the server
    setAnswers([...answers, answer]); // update the answers state with the new array that includes the newly submitted answer
  };

  return (
    <div className="mt-5">
      <div className="single-question">
        <h2>Question： {singleDetails.title}</h2>
        <h style={{ marginButton: '100px' }}>{singleDetails.definition}</h>
      </div>
      <h5 style={{ marginTop: '80px' }}>{answers.length} Answers</h5>
      <div className="AnswerCardShow d-flex flex-wrap" style={{ marginTop: '20px' }}>
        {answers.map((answer) => (
          <AnswerCard key={answer.firebaseKey} answerObj={answer} onUpdate={getQuestionAnswers} />
        ))}
      </div>
      <div className="mt-5">
        <AnswerForm obj={{}} questionId={firebaseKey} onSubmit={handleAnswerSubmit} />
      </div>
    </div>
  );
}
