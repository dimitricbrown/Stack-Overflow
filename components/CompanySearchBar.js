/* eslint-disable */
import React, { useState } from 'react';
// import { } from "react-bootstrap/esm/FormCheckInput";
function CompanySearch() {
  const [filter, setFilter] = useState('');
  const companies = ['Microsoft Corporation', 'Facebook', 'HCA', 'GitHub', 'Nashville Software School'];

  function handleFilterChange(event) {
    setFilter(event.target.value.toUpperCase());
  }

  return (
    <div>
      <h2>Stack Underflow</h2>
      
      <ul id="myUL" style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {companies
          .filter((company) => company.toUpperCase().indexOf(filter) > -1)
          .map((company, index) => (
            <li
              key={index}
              style={{
                border: '1px solid #ddd',
                marginTop: '-1px',
                backgroundColor: '#f6f6f6',
                padding: '12px',
              }}
            >
              <a href="/" style={{ textDecoration: 'none', color: 'black' }}>
                {company}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CompanySearch;
