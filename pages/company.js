/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import CompanyCard from '../components/CompanyCard';
import { getCompany } from '../api/companyData';
import CompanySearch from '../components/CompanySearchBar';

const Company = () => {
  // TODO: Set a state for books
  const [companies, setCompany] = useState([]);

  // TODO: Get user ID using useAuth Hookgit c

  // TODO: create a function that makes the API call to get all the books
  const getAllCompanies = () => {
    getCompany().then(setCompany);
  };

  // TODO: make the call to the API to get all the books on component render
  useEffect(() => {
    getAllCompanies();
  }, []);

  return (
    <div>
      <CompanySearch />
      <div className="text-center my-4">
        <div className="d-flex flex-wrap">
          {/* TODO: map over books here using BookCard component */}
          {companies.map((company) => (
            <CompanyCard key={company.firebaseKey} companyObj={company} onUpdate={getAllCompanies} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Company;
