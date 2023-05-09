import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleQuestion } from '../../../api/questionData';
import QuestionForm from '../../../components/forms/QuestionForm';

export default function EditMember() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  // TODO: grab the firebasekey
  const { firebaseKey } = router.query;

  // TODO: make a call to the API to get the book data
  useEffect(() => {
    getSingleQuestion(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  // TODO: pass object to form
  return (<QuestionForm obj={editItem} />);
}
