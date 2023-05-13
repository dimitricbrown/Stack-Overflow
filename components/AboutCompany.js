/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { CloseButton, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { deleteSingleCompany } from '../api/companyData';

function AboutCompanyCard({ companyObj, onUpdate }) {
  console.warn(companyObj);
  const deleteThisCompany = () => {
    if (window.confirm(`Delete ${companyObj.company_title}?`)) {
      deleteSingleCompany(companyObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <div id="companyContainer">
      <Card className="e-card e-card-horizontal" style={{ display: 'flex', flexDirection: 'row', width: '100%', heigh: '10rem' }}>
        <Card.Body>
          <Row>
            <Col sm>
              <Card.Title>{companyObj.company_title}</Card.Title>
            </Col>
            <Col sm>
              <Card.Subtitle className="mb-2 text-muted">{companyObj.company_business_title}</Card.Subtitle>
            </Col>
            <Col sm>
              <Card.Text>Company Status: {companyObj.company_status}</Card.Text>
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Card.Text>Company Size: {companyObj.company_size}</Card.Text>
            </Col>
            <Col sm>
              <Card.Text>Founded: {companyObj.company_founded}</Card.Text>
            </Col>
            <Col sm>
              <Card.Link href={`/company/${companyObj.company_website}`}>Compnay Website</Card.Link>
            </Col>
          </Row>
        </Card.Body>
        <CloseButton id="closeButton" variant="white" onClick={deleteThisCompany} className="m-2">
          X
        </CloseButton>
      </Card>
    </div>
  );
}

AboutCompanyCard.propTypes = {
  companyObj: PropTypes.shape({
    company_founded: PropTypes.string,
    company_size: PropTypes.string,
    company_website: PropTypes.string,
    company_status: PropTypes.string,
    uid: PropTypes.string,
    company_business_title: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default AboutCompanyCard;
