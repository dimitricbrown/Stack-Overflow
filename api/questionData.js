import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// FIXME:  GET ALL AUTHORS
const getQuestions = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/questions.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleQuestion = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/questions/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createQuestion = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/questions.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateQuestion = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/questions/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// FIXME: DELETE AUTHOR
const deleteSingleQuestion = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/questions/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getQuestions,
  getSingleQuestion,
  createQuestion,
  updateQuestion,
  deleteSingleQuestion,
};
