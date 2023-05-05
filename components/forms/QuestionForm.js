import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createQuestion, updateQuestion } from '../../api/questionData';

const initialState = {
  title: '',
  definition: '',
};
// this is a comment
function QuestionForm({ obj }) {
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
      updateQuestion(formInput)
        .then(() => router.push(`/questions/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createQuestion(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateQuestion(patchPayload).then(() => {
          router.push('/');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Team</h2>

      {/* TITLE INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Enter Question" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter a Question"
          name="title"
          value={formInput.title}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* PRICE INPUT  */}
      <FloatingLabel controlId="floatingInput3" label="Definition" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Definition"
          name="definition"
          value={formInput.definition}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Question</Button>
    </Form>
  );
}

QuestionForm.propTypes = {
  obj: PropTypes.shape({
    title: PropTypes.string,
    firebaseKey: PropTypes.string,
    definition: PropTypes.string,
  }),
};

QuestionForm.defaultProps = {
  obj: initialState,
};

export default QuestionForm;
