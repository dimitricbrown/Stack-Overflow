import { getQuestionAnswers, getSingleQuestion, deleteSingleQuestion } from "./questionData";
import { deleteSingleAnswers } from "./answerData";

const viewQuestionDetails = (questionFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleQuestion(questionFirebaseKey), getQuestionAnswers(questionFirebaseKey)])
    .then(([authorObject, authorBooksArray]) => {
      resolve({ ...authorObject, answers: authorBooksArray });
    }).catch((error) => reject(error));
});

const deleteQuestionAnswers = (questionId) => new Promise((resolve, reject) => {
  getAuthorBooks(questionId).then((answersArray) => {
    console.warn(answersArray, 'Question Answers');
    const deleteAnswerPromises = answersArray.map((answer) => deleteSingleAnswers(answer.firebaseKey));

    Promise.all(deleteAnswerPromises).then(() => {
      deleteSingleQuestion(questionId).then(resolve);
    });
  }).catch((error) => reject(error));
});

export { viewQuestionDetails, deleteQuestionAnswers };
