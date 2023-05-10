import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createAnswers, updateAnswers } from '../../api/answerData';

const initialState = {
  title: '',
  details: '',
  questionId: '',
};
// this is a comment
function AnswerForm({ obj, questionId }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateAnswers(formInput)
        .then(() => router.push(`/answers/${obj.firebaseKey}`));
    } else {
      const payload2 = {
        ...formInput,
        uid: user.uid,
        questionId: questionId,
        firebaseKey: null,
      };
      createAnswers(payload2).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateAnswers(patchPayload).then(() => {
          router.push(`/questions/${questionId}`);
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Answer</h2>
      {/* TITLE INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Enter Answer" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter an Answer"
          name="title"
          value={formInput.title}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* PRICE INPUT  */}
      <FloatingLabel controlId="floatingInput3" label="details" className="mb-3">
        <Form.Control
          type="text"
          placeholder="details"
          name="details"
          value={formInput.details}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Answers</Button>
    </Form>
  );
}

AnswerForm.propTypes = {
  obj: PropTypes.shape({
    title: PropTypes.string,
    firebaseKey: PropTypes.string,
    details: PropTypes.string,
    questionId: PropTypes.string,
  }),
  questionId: PropTypes.func.isRequired,
};

AnswerForm.defaultProps = {
  obj: initialState,
};

export default AnswerForm;
