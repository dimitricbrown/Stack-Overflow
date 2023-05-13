/* eslint-disable */
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { CloseButton } from 'react-bootstrap';
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
    <div id="companyContainer">
      <Card className="e-card e-card-horizontal" style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
        <Link href={`/company/${companyObj.firebaseKey}`} passHref>
          <Card.Img variant="center" src={companyObj.company_img} style={{ height: '100px' }} />
        </Link>
        <Card.Body className="e-card-stacked">
          <Card.Title>{companyObj.company_title}</Card.Title>
          <Card.Text>{companyObj.company_location}</Card.Text>
          <Card.Text>{companyObj.company_business_title}</Card.Text>
          <Card.Text>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header>click to read about us</Accordion.Header>
                <Accordion.Body>{companyObj.company_descrpition}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Text>
          <Button style={{ position: 'absolute', bottom: '8px', left: '16px' }} variant="primary">
            {companyObj.company_tag}
          </Button>
          <CloseButton id="closeButton" variant="white" onClick={deleteThisCompany} className="m-2">
            X
          </CloseButton>
        </Card.Body>
      </Card>
    </div>
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
