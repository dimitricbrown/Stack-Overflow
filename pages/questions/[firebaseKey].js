/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewQuestionDetails } from '../../api/mergeData';
import AnswerCard from '../../components/AnswerCard';
import { getQuestionAnswers } from '../../api/questionData';
import AnswerForm from '../../components/forms/AnswerForm';

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
  }, []);

  return (
    <div className="mt-5">
      <div className="single-question">
        <h1>Question： {singleDetails.title}</h1>
        <h3>{singleDetails.definition}</h3>
      </div>
      <AnswerForm obj={{}} questionId={firebaseKey} />
      <div className="d-flex flex-wrap">
        {answers.map((answer) => (
          <AnswerCard key={answer.firebaseKey} answerObj={answer} onUpdate={getQuestionAnswers} />
        ))}

      </div>
    </div>
  );
}
