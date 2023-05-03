import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// FIXME:  GET ALL AUTHORS
const getAnswers = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/answers/.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSingleAnswers = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/answers/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createAnswers = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/answers.json`, {
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

const updateAnswers = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/answers/${payload.firebaseKey}.json`, {
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
const deleteSingleAnswers = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/answers/${firebaseKey}.json`, {
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
  getAnswers,
  updateAnswers,
  createAnswers,
  deleteSingleAnswers,
  getSingleAnswers,
};
