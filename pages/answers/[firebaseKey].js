/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleAnswers } from '../../api/answerData';

export default function ShowChangedAnswer() {
  const router = useRouter();
  const [answerDetails, setAnswerDetails] = useState({});

  // TODO: grab firebaseKey from url
  const { firebaseKey } = router.query;

  // TODO: make call to API layer to get the data
  useEffect(() => {
    getSingleAnswers(firebaseKey).then(setAnswerDetails);
  }, [firebaseKey]);

  return (
    <div className="single-question">
      <h1>{answerDetails.title}</h1>
      <h3>{answerDetails.details}</h3>
    </div>
  );
}
