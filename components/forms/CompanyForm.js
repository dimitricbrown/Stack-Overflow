/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createCompany, getCompany, updateCompany } from '../../api/companyData';

const initialState = {
  company_business_title: '',
  company_descrpition: '',
  company_img: '',
  company_location: '',
  company_tag: '',
  company_title: '',
};

function CompanyForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [setCompany] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getCompany(user.uid).then(setCompany);

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
      updateCompany(formInput).then(() => router.push(`/company/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createCompany(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateCompany(patchPayload).then(() => {
          router.push('/');
        });
      });
    }
  };

  return (
    <div>
    <h2>Stack Underflow Company Creation</h2>
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Company</h2>

      <FloatingLabel controlId="floatingInput2" label="Please insert your company logo/image" className="mb-3">
        <Form.Control type="url" placeholder="Enter an image url" name="company_img" value={formInput.company_img} onChange={handleChange} required />
      </FloatingLabel>

      {/* TITLE INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Please enter company name" className="mb-3">
        <Form.Control type="text" placeholder="company_title" name="company_title" value={formInput.company_title} onChange={handleChange} required />
      </FloatingLabel>

      {/* BUSINESS_TITLE INPUT  */}
      <FloatingLabel controlId="floatingInput3" label="Please enter what type of company this is" className="mb-3">
        <Form.Control type="text" placeholder="company_business_title" name="company_business_title" value={formInput.company_business_title} onChange={handleChange} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput3" label="Please enter breif description about your company" className="mb-3">
        <Form.Control type="text" placeholder="company_descrpition" name="company_descrpition" value={formInput.company_descrpition} onChange={handleChange} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput3" label="Please tell us where your company's headquaters is" className="mb-3">
        <Form.Control type="text" placeholder="company_location" name="company_location" value={formInput.company_location} onChange={handleChange} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput3" label="Give us a #" className="mb-3">
        <Form.Control type="text" placeholder="company_tag" name="company_tag" value={formInput.company_tag} onChange={handleChange} required />
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Company</Button>
    </Form>
    </div>
  );
}

CompanyForm.propTypes = {
  companyObj: PropTypes.shape({
    company_img: PropTypes.string,
    uid: PropTypes.string,
    company_title: PropTypes.string,
    company_descrpition: PropTypes.string,
    company_tag: PropTypes.string,
    company_business_title: PropTypes.string,
    company_location: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

CompanyForm.defaultProps = {
  obj: initialState,
};

export default CompanyForm;
