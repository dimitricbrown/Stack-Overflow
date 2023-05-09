/* eslint-disable */
import React, { useEffect, useState } from 'react';
import CompanyCard from '../components/CompanyCard';
import { getCompany } from '../api/companyData';

const Company = () => {
  // TODO: Set a state for books
  const [companies, setCompany] = useState([]);
  const [filter, setFilter] = useState('');

  // TODO: Get user ID using useAuth Hookgit c

  // TODO: create a function that makes the API call to get all the books
  const getAllCompanies = () => {
    getCompany().then(setCompany);
  };

  function handleFilterChange(event) {
    setFilter(event.target.value.toUpperCase());
  }
  // TODO: make the call to the API to get all the books on component render
  useEffect(() => {
    getAllCompanies();
  }, []);

  return (
    <div>
      <input
        type="text"
        id="myInput"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search for company.."
        title="Type in a company"
        style={{
          backgroundPosition: '10px 12px',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          fontSize: '16px',
          padding: '12px 20px 12px 40px',
          border: '1px solid #ddd',
          marginBottom: '12px',
        }}
      />
      <div className="text-center my-4">
        <div className="d-flex flex-wrap">
          {/* TODO: map over books here using BookCard component */}
          {companies
            .filter((company) => company.company_title.toUpperCase().indexOf(filter) > -1)
            .map((company, filter) => (
              <CompanyCard key={filter} companyObj={company} onUpdate={getAllCompanies} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Company;
