// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { deleteSingleCompany } from '../api/companyData';

// function CompanyCard({ companyObj, onUpdate }) {
//     // FOR DELETE, WE NEED TO REMOVE THE BOOK AND HAVE THE VIEW RERENDER,
//     // SO WE PASS THE FUNCTION FROM THE PARENT THAT GETS THE BOOKS
//     const deleteThisCompoany = () => {
//       if (window.confirm(`Delete ${companyObj.first_name}?`)) {
//         deleteSingleCompany(companyObj.firebaseKey).then(() => onUpdate());
//       }
//     };
  
  
  
  
//     return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="danger" onClick={deleteThisCompoany} className="m-2">
//           DELETE
//         </Button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default CompanyCard;