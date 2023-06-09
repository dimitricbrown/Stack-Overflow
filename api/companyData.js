import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// FIXME:  GET ALL AUTHORS
const getCompany = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/company/.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleCompany = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/company/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createCompany = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/company.json`, {
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

const deleteSingleCompany = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/company/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateCompany = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/company/${payload.firebaseKey}.json`, {
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

export {
  getCompany,
  updateCompany,
  createCompany,
  deleteSingleCompany,
  getSingleCompany,
};
