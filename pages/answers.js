/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getAnswers } from '../api/answerData';
import AnswerCard from '../components/AnswerCard';

const Answer = () => {
  // TODO: Set a state for books
  const [answers, setAnswers] = useState([]);

  // TODO: Get user ID using useAuth Hook
  const { user } = useAuth();

  // TODO: create a function that makes the API call to get all the books
  const getAllTheAnswers = () => {
    getAnswers(user.uid).then(setAnswers);
  };

  // TODO: make the call to the API to get all the books on component render
  useEffect(() => {
    getAllTheAnswers();
  }, []);

  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">
        {/* TODO: map over books here using BookCard component */}
        {answers.map((answer) => (
          <AnswerCard key={answer.firebaseKey} answerObj={answer} onUpdate={getAllTheAnswers} />
        ))}
      </div>

    </div>
  );
};

export default Answer;
