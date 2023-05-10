/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleAnswers } from '../../../api/answerData';
import AnswerForm from '../../../components/forms/AnswerForm';

export default function EditAnswer() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  // TODO: grab the firebasekey
  const { firebaseKey } = router.query;

  // TODO: make a call to the API to get the book data
  useEffect(() => {
    getSingleAnswers(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  // TODO: pass object to formxs
  return (<AnswerForm obj={editItem} />);
}
