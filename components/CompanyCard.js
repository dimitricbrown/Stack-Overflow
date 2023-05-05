import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteSingleCompany } from '../api/companyData';

function CompanyCard({ companyObj, onUpdate }) {
  console.warn(companyObj);
  const deleteThisCompany = () => {
    if (window.confirm(`Delete ${companyObj.company_title}?`)) {
      deleteSingleCompany(companyObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="left" src={companyObj.company_img} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{companyObj.company_title}</Card.Title>
        <Card.Text>{companyObj.company_location}</Card.Text>
        <Card.Text>{companyObj.company_business_title}</Card.Text>
        <Card.Text>{companyObj.company_descrpition}</Card.Text>
        <Button variant="primary">{companyObj.company_tag}</Button>
        <Button variant="danger" onClick={deleteThisCompany} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

CompanyCard.propTypes = {
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

export default CompanyCard;
